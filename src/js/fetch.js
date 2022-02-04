export default async function getCharacter(id){
    const characters = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const response = await characters.json();
    return  {
        id:response.id,
        name:response.name,
        status:response.status,
        specie:response.species,
        gender:response.gender,
        img:response.image
    }
}