const characters = document.getElementById('characters');
export default class Character{
    constructor( { id, name, status, specie,img } ){
        this.id = id;
        this.name = name;
        this.status = status;
        this.specie = specie;
        this.img = img;
    }

    bulid(){
        characters.innerHTML +=
        `
        <div id="character_${this.id}">
            <img src="${this.img}">
            ${this.name}
            ${this.specie}
            ${this.status}
        </div>    
        `
    }
}