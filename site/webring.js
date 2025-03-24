/**
 * @typedef WebringMember
 * @property {string} domain
 * @property {string} author
 * @property {string} blogName
 */

/**
 * @returns {WebringMember[]}
 */
async function fetchWebringList() {
    let res
    try {
        res = await fetch("https://kawcco.com/webring.json")
        if (!res.ok) throw "On the dev server…"
    } catch (error) {
        // HACK: so the script can run on Kyle's dev server
        res = await fetch("/webring.json")
    }

    return await res.json()
}

/**
 * @argument {WebringMember[]} webringMembers
 * @returns {number}
 */
function webringIndex(webringMembers) {
    let hostname = window.location.hostname

    // HACK: so the script can run on Kyle's dev server
    if (hostname === "localhost") {
        hostname = "kawcco.com"
    }

    return webringMembers.findIndex((member) => member.domain === hostname)
}

/**
 * @argument {WebringMember[]} webringMembers
 * @argument {number} index
 * @returns {WebringMember}
 */
function webringPrevious(webringMembers, index) {
    let prevIndex = index - 1
    prevIndex = prevIndex < 0 ? webringMembers.length + prevIndex : prevIndex
    return webringMembers[prevIndex]
}

/**
 * @argument {WebringMember[]} webringMembers
 * @argument {number} index
 * @returns {WebringMember}
 */
function webringNext(webringMembers, index) {
    let nextIndex = (index + 1) % webringMembers.length
    return webringMembers[nextIndex]
}

const webringListPromise = fetchWebringList()

class WebringPrevious extends HTMLElement {
    constructor() {
        super()
    }

    async connectedCallback() {
        const members = await webringListPromise
        const index = webringIndex(members)
        const prev = webringPrevious(members, index)

        const b = document.createElement("strong")
        b.textContent = "Previous: "

        const a = document.createElement("a")
        a.href = `http://${prev.domain}`
        a.textContent = `${prev.blogName} by ${prev.author}`

        this.append(b, a)
    }
}

class WebringNext extends HTMLElement {
    constructor() {
        super()
    }

    async connectedCallback() {
        const members = await webringListPromise
        const index = webringIndex(members)
        const next = webringNext(members, index)

        const b = document.createElement("strong")
        b.textContent = "Next: "

        const a = document.createElement("a")
        a.href = `http://${next.domain}`
        a.textContent = `${next.blogName} by ${next.author}`

        this.append(b, a)
    }
}

class WebringList extends HTMLElement {
    constructor() {
        super()
    }

    async connectedCallback() {
        const members = await webringListPromise
        const siteIndex = webringIndex(members)

        const d = document.createElement("details")
        d.open = false
        this.append(d)

        const summary = document.createElement("summary")
        summary.textContent = "Webring Members"
        d.append(summary)

        members.forEach((member, index) => {
            if (index != 0) {
                const s = document.createElement("span")
                s.ariaRoleDescription = "none"
                s.textContent = " • "
                d.append(s)
            }
            let a = document.createElement("a")
            a.href = `http://${member.domain}`
            if (index === siteIndex) {
                let b = document.createElement("strong")
                b.textContent = member.author
                a.append(b)
            } else {
                a.textContent = member.author
            }
            d.append(a)
        })
    }
}

window.customElements.define("webring-previous", WebringPrevious)
window.customElements.define("webring-next", WebringNext)
window.customElements.define("webring-list", WebringList)
