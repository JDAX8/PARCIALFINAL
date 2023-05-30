import "../components/export"

class dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const card = this.ownerDocument.createElement('app-card');
        this.shadowRoot?.appendChild(card);

        const form = this.ownerDocument.createElement('recetas-list');
        this.shadowRoot?.appendChild(form);
        
    }
}

customElements.define('app-dashboard', dashboard)