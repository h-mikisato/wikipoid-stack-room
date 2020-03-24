import "./index.scss"
import * as m from 'mithril'
import {TextArea} from "../textarea"
import {MarkdBoard} from "../markd_board"

export class EditScreen {

    text: string = "";

    update = (text: string) => {
        this.text = text;
    };

    view(vnode: m.CVnode) {
        return m("div.mdc-layout-grid", [
            m("div.mdc-layout-grid__inner", [
                m("div.mdc-layout-grid__cell.mdc-layout-grid__cell--span-6-desktop.mdc-layout-grid__cell--span-4-tabet", [
                    m(TextArea, {
                        label: "入力",
                        labelID: "edit_screen_input",
                        text: this.text,
                        height: "80vh",
                        additionalClass: ".markdown-inputarea",
                        updateState: this.update,
                    })
                ]),
                m("div.mdc-layout-grid__cell.mdc-layout-grid__cell--span-6-desktop.mdc-layout-grid__cell--span-4-tabet", [
                    m("div.markboard-preview", [
                        m(MarkdBoard, {markdown: this.text})
                    ])
                ])
            ])
        ]);
    }
}
