import "../components/export"

class foro extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const form = this.ownerDocument.createElement('recetas-list');
        this.shadowRoot?.appendChild(form);
        
    }
}

customElements.define('app-foro', foro)