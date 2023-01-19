export type slide = {
    t: "slide",
    title: string,
    mainTitle: string,
    /** [name, href] */
    btn?: [string, string]
}
export type question = {
    t: "question",
    q: string,
    /** returns 0 -> wrong, 1 -> next, otherwise {section}-{question} */ 
    cb: (inp: string) => qResp
}

export type qResp = "0" | "1" | `${number}-${number}`

export type OnSubmitCB = (inp: qResp) => void

export type mapItem = slide | question

function qColorFactory(who: string): mapItem {
    return {
        t: "question",
        q: `What is ${who} favorite color?`,
        cb: (inp: string): qResp => {
            return ["red", "purple", "indigo", "#3F3D92"].includes(inp) ? "1" : "0"
        }
    }
}

function qLangFactory(who: string): mapItem {
    return {
        t: "question",
        q: `What is ${who} favorite language?`,
        cb: (inp: string): qResp => {
            return ["go", "golang", "js", "javascript", "ts", "typescript", "sql"].includes(inp) ? "1" : "0"
        }
    }
}

export const sitemap = [
    [
        {
            t: "slide",
            mainTitle: "Section I",
            title: "Authentication"
        },
        qColorFactory("my"),
        {
            t: "question",
            q: `What was the my dating app idea called (the acronym)?`,
            cb: (inp: string): string => {
                return ["emle"].includes(inp) ? "1" : "0"
            }
        },
        qLangFactory("my"),
    ],
    [
        {
            t: "slide",
            mainTitle: "Section II",
            title: "Connecting a few dots"
        },
        qColorFactory("Shady's"),
        qLangFactory("Shady's"),
        {
            t: "question",
            q: `What is another name for Shady?`,
            cb: (inp: string): string => {
                if (["danila", "dan", "dan dryaev", "danila dryaev"].includes(inp)) {
                    return '1'
                }
                if (["lucy", "lucy dryaeva"].includes(inp)) {
                    return "4-0"
                }
                return "0"
            }
        },
    ],
    [
        {
            t: "slide",
            mainTitle: "Section III",
            title: "Who the fuck is she??"
        },
        qColorFactory("Lucy's"),
        qLangFactory("Lucy's"),
        {
            t: "question",
            q: `What is another name for Lucy?`,
            cb: (inp: string): string => {
                if (["danila", "dan", "dan dryaev", "danila dryaev", "shady", "shady goat"].includes(inp)) {
                    return '1'
                }
                return "0"
            }
        },
    ],
    [
        {
            t: "slide",
            mainTitle: "Bingo!",
            title: "You are right, its me ^^",
            btn: ["FAQ", "/faq"]
        },
    ],
    [
        {
            t: "slide",
            mainTitle: "Huh... It seems you already know",
            title: "Congrats, you are correct!",
            btn: ["FAQ", "/faq"]
        },
    ],
] as mapItem[][]
