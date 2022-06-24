/* se crea una clase que extiende de htmlelement y se cre un constructor */

class componente extends HTMLElement{
    constructor(){
        super();
        this.avatar;
        this.name;
        this.lastname;
        this.email;
        this.idee;
    }
    static get observedAttributes(){
        return["idee","avatar",'name',"lastname","email"];
    }
    attributeChangedCallback(nameAtr, oldValue, newValue){
        
        switch(nameAtr){
            
            case "idee":
                this.idee = newValue;
                break;
            case "avatar":
                this.avatar= newValue;
                break;
            case "name":
                this.name = newValue;
                break;
            case "lastname":
                this.lastname= newValue;
                break;
            case "email":
                this.email= newValue;
                break;
        }
    }
    connectedCallback(){
       
   
    }
}
/* definir la clase */
window.customElements.define("compo-nente", componente );



