import { addObserver, appState } from "../../store";
import styles from  "../form/forms.css"

export default class recetaslist extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
       if(this.shadowRoot)this.shadowRoot.innerHTML= ""

        appState.recetas.forEach((p) => {
            
            const pContainer = this.ownerDocument.createElement("article");
            pContainer.className = "cont"
            const nombre = this.ownerDocument.createElement("h3");
            nombre.textContent = p.nombre
            nombre.className = "receta"
            const instrucciones = this.ownerDocument.createElement("h3");
            instrucciones.textContent = p.instrucciones
            instrucciones.className = "receta"

            const ingrendientes = this.ownerDocument.createElement("h3");
            ingrendientes.textContent = p.ingredintes
            ingrendientes.className = "receta"

            const imagen = this.ownerDocument.createElement("h3");
            imagen.textContent = p.imagen
            imagen.className = "receta"


            pContainer.appendChild(nombre)
            pContainer.appendChild(instrucciones)
            pContainer.appendChild(ingrendientes)
            pContainer.appendChild(imagen)

            this.shadowRoot?.appendChild(pContainer);
            const css = this.ownerDocument.createElement("style");     
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
            });
      
    }
}

customElements.define('recetas-list', recetaslist)

