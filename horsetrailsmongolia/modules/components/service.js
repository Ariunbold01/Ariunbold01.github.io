import html from "./utils.js";

class MyService extends HTMLElement {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = html`
            
            <img src="/horsetrailsmongolia/images/service${this.getAttribute("id")}.png" alt="${this.getAttribute("id")}">
        `
    }
}

        
customElements.define("my-service", MyService);
