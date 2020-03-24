import "./index.scss"
import * as m from 'mithril'
import {MarkdBoard} from "../markd_board"
import {HTMLElementEvent} from "../../types/htmlelementevent"

let contents = {
    text: "",

    update: (text: string) => {
        contents.text = text;
    },
};


export class EditScreen {
    view(vnode: m.CVnode) {
        return m("div.edit_screen", [
            m("textarea.edit_component", {
                value: contents.text,
                oninput: (e: HTMLElementEvent<HTMLInputElement>) => {contents.update(e.target.value)}
            }),
            m("div.markboard-preview", [
                m(MarkdBoard, {markdown: contents.text})
            ])
        ]);
    }
}
