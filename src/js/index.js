import getCharacter from "./fetch.js";
import Character from "./character.js"

const all = [];
// for(let i = 1; i <=20; i++) {
//     all.push(new Character(await getCharacter()));
// }
await getCharacter()
// all.forEach( x => x.bulid() )