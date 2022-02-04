const characters = document.getElementById('characters');
export default class Character{
    constructor( { id, name, status, specie, gender, dimension,  img } ){
        this.id = id;
        this.name = name;
        this.status = status;
        this.specie = specie;
        this.gender = gender;
        this.dimension = dimension;
        this.img = img;
    }

    bulid(){
        characters.innerHTML +=
        `
        <div id="character_${this.id}" class="style_character">
            <div class="style_character_img">
                <img src="${this.img}" alt="${this.name}">
            </div>
            <div class="style_character_attributes">
                <span class="attribute"><span>Name:</span> ${this.name}</span>
                <span class="attribute"><span>Specie:</span> ${this.specie}</span>
                <span class="attribute"><span>Status:</span> ${this.status}</span>  
                <span class="attribute"><span>Gender:</span> ${this.gender}</span>   
                <span class="attribute"><span>Dimension:</span> ${this.dimension}</span> 
            </div>
        </div>    
        `
    }
}