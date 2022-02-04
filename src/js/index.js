import getCharacter from "./fetch.js";
import Character from "./character.js"

const all = [];
for(let i = 1; i <=26; i++) {
    all.push(new Character(await getCharacter(i)));
}

all.forEach( x => x.bulid() )