import { dispatch } from "../../store";
import { Saverecetas } from "../../store/actions";
import { recetas } from "../../types/recetas";
import styles from  "../card/card.css"

const Userinputs: recetas = {
    nombre : "",
    instrucciones: "",
    ingredintes: "",
    imagen: "",

}
export default class card extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML='';

        const container = this.ownerDocument.createElement("section")
        container.className="cont"

        const lname = this.ownerDocument.createElement("label")
        lname.textContent ="Escribe el nombre de tu receta"
        lname.className="lab"

        const name = this.ownerDocument.createElement("input")
        name.className = "name"
        name.addEventListener("change", (e: any)=> {
            Userinputs.nombre = e.target.value
        } )

        const linst = this.ownerDocument.createElement("label")
        linst.textContent ="Escribe las instrucciones de tu receta"
        linst.className="lab"

        const inst = this.ownerDocument.createElement("input")
        inst.className = "name"
        inst.addEventListener("change", (e: any)=> {
            Userinputs.instrucciones = e.target.value
        } )

        const lingrendientes = this.ownerDocument.createElement("label")
        lingrendientes.textContent ="Escribe las instrucciones de tu receta"
        lingrendientes.className="lab"

        const ingrendientes = this.ownerDocument.createElement("input")
        ingrendientes.className = "name"
        ingrendientes.addEventListener("change", (e: any)=> {
            Userinputs.ingredintes = e.target.value
        } )

        const limage = this.ownerDocument.createElement("label")
        limage.textContent ="sube el link de una imagen de tu receta aqui"
        limage.className="lab"

        const imagen = this.ownerDocument.createElement("input")
        imagen.className = "name"
        imagen.addEventListener("change", (e: any)=> {
            Userinputs.imagen = e.target.value
        } )
        const btn = this.ownerDocument.createElement("button")
        btn.className = "button"
        btn.textContent ="Envia tu receta" 
        btn.addEventListener("click", async ()=>{
            console.log(Userinputs)
            dispatch(await Saverecetas(Userinputs))
        });


        container.appendChild(lname)
        container.appendChild(name)
        container.appendChild(linst)
        container.appendChild(inst)
        container.appendChild(lingrendientes)
        container.appendChild(ingrendientes)
        container.appendChild(limage)
        container.appendChild(imagen)
        container.appendChild(btn)

        
        this.shadowRoot?.appendChild(container)

        console.log(Userinputs)
        const css = this.ownerDocument.createElement("style");     
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('app-card', card)