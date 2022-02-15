export default async function getCharacter(){
    const characters = await fetch(`https://rickandmortyapi.com/api/character/`)
    const response = await characters.json();
    console.log(response);


    async function next(url){
        
    }


}