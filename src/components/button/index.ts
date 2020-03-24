import './index.scss';
import * as m from 'mithril'
import {MDCRipple} from '@material/ripple/index';

interface ButtonAttrs {
    text: string;
    onclick: () => void;
    raised?: boolean;
}

export class Button implements m.ClassComponent<ButtonAttrs> {
    ripple: MDCRipple;

    oncreate(vnode: m.CVnodeDOM<ButtonAttrs>) {
        this.ripple = new MDCRipple(vnode.dom);
    }
    onbeforeremove() {
        this.ripple.destroy();
    }

    view(vnode: m.CVnode<ButtonAttrs>) {
        let buttonClass = vnode.attrs.raised ? ".mdc-button.mdc-button--raised" : ".mdc-button.mdc-button--outlined";
        return m(`button${buttonClass}`, {onclick: vnode.attrs.onclick}, [
            m("div.mdc-button__ripple"),
            m("span.mdc-button__label", vnode.attrs.text),
        ]);
    }
}
