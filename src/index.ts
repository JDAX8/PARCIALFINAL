import "./components/export"
import "./screens/dashboard"
import { addObserver, appState } from "./store/index"
// import { screens } from "./types/screens"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)

    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML='';
        // switch (appState.screen) {
        //     case Screens.DASHBOARD:
        //         const dashboard = this.ownerDocument.createElement('app-dashboard');
        //         this.shadowRoot?.appendChild(dashboard);
        //         break;

        //         case Screens.foro:
        //         const foro = this.ownerDocument.createElement('app-foro');
        //         this.shadowRoot?.appendChild(foro);

        //         break;
        const something = this.ownerDocument.createElement('app-dashboard');
        this.shadowRoot?.appendChild(something);

        // const something2 = this.ownerDocument.createElement('app-foro');
        // this.shadowRoot?.appendChild(something2);
    }
}

customElements.define('app-container', AppContainer)