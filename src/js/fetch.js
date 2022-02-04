export default async function getCharacter(id){
    const characters = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const response = await characters.json();
    const dimension = await response.origin.url;
    const xd = dimension.dimension;
    console.log(xd);
    return  {
        id:response.id,
        name:response.name,
        status:response.status,
        specie:response.species,
        gender:response.gender,
        dimension:dimension.dimension,
        img:response.image
    }
}