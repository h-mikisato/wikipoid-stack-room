import './index.scss';
import * as m from 'mithril';
import {MDCTextField} from '@material/textfield';
import {MDCNotchedOutline} from '@material/notched-outline';
import {MDCFloatingLabel} from '@material/floating-label';

import {HTMLElementEvent} from "../../types/htmlelementevent"

interface TextAreaAttrs {
    label: string;
    labelID: string;
    text: string;
    height?: string;
    updateState: (text: string) => void;
}

export class TextArea implements m.ClassComponent<TextAreaAttrs> {
    textField: MDCTextField;
    notchedOutline: MDCNotchedOutline;
    floatingLabel: MDCFloatingLabel;

    oncreate(vnode: m.CVnodeDOM<TextAreaAttrs>) {
        this.textField = new MDCTextField(document.querySelector('.mdc-text-field'));
        this.notchedOutline = new MDCNotchedOutline(vnode.dom.querySelector('.mdc-notched-outline'));
        this.floatingLabel = new MDCFloatingLabel(vnode.dom.querySelector('.mdc-floating-label'));
    }
    onbeforeremove() {
        this.textField.destroy();
        this.notchedOutline.destroy();
        this.floatingLabel.destroy();
    }

    view(vnode: m.CVnode<TextAreaAttrs>) {
        return m("label.mdc-text-field.mdc-text-field--textarea.mdc-text-field--fullwidth", [
            m("textarea.mdc-text-field__input", {
                "aria-labelledby": vnode.attrs.labelID,
                style:`height: ${vnode.attrs.height}`,
                value: vnode.attrs.text,
                oninput: (e: HTMLElementEvent<HTMLInputElement>) => {vnode.attrs.updateState(e.target.value)},
            }),
            m("div.mdc-notched-outline", [
                m("div.mdc-notched-outline__leading"),
                m("div.mdc-notched-outline__notch", [
                    m("label.mdc-floating-label", {id: vnode.attrs.labelID}, vnode.attrs.label),
                ]),
                m("div.mdc-notched-outline__trailing"),
            ])
        ]);
    }
}
