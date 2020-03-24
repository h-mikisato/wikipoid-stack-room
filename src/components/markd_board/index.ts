import "./index.scss"
import * as m from 'mithril'
import * as marked from 'marked'
import * as DOMPurify from 'DOMPurify'

interface MarkdBoardAttrs {
    markdown: string;
}

export class MarkdBoard implements m.ClassComponent<MarkdBoardAttrs> {

    renderer: marked.Renderer;

    constructor() {
        this.renderer = new marked.Renderer();
    }

    view(vnode: m.CVnode<MarkdBoardAttrs>) {
        let markdown = vnode.attrs.markdown;
        let viewHTML = marked(markdown, { renderer: this.renderer, breaks: true, sanitizer: DOMPurify.sanitize });
        return m("div.markdown-board", [m.trust(viewHTML)])
    }
}
