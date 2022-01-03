import Component from "../components/component.js";
export default class Gallery extends Component{
    constructor(objData){
        super();
        this.data = objData;
    }
    GRender(galleryd){
        return this.html`
        <div class="picture col-md-3">
            <a href="#"><img src="${galleryd.image_url}" alt="${galleryd.title}"></a>
            <div class="title">
                <h5>${galleryd.id}</h5>
                <h3>${galleryd.title}</h3>
            </div>
        </div>
        `
    }
    Render(){
        let A = "";
            let B = this.data.Articles;
            for(let c of B){
                A+=this.GRender(c);
            }
        return this.html`
        <div class="gallery" id="gallery">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                        <div class="container">
                            <img src="${this.data.image_url}" alt="${this.data.title}">
                            <h2 class="h2_title">${this.data.title}</h2>
                            <div class="categories">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link " aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#h_treks">Hot Treks</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#p_treks">Popular</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#gallery">Gallery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#blog">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#about_us">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row">
                    ${A}
                    </div>
                </div>
            </div>   
        </div>
        `
    }
}