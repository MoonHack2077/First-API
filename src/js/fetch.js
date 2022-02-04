export default async function getCharacter(){
    const characters = await fetch(`https://rickandmortyapi.com/api/character/`)
    const response = await characters.json();
    // console.log(response.results);
    const datas = {}
    const arr = [];
    const data = response.results.map( x =>{ 
        datas.id=x.id,
        datas.name=x.name
        datas.status=x.status,
        datas.specie=x.species,
        datas.gender=x.gender,
        datas.img=x.image 
        arr.push(datas)
        return datas
    })
    // for(const a of response.results){
    //     arr.push(data)
    // }
    console.log(arr);
    return arr;
    // return  {
    //     id:response.id,
    //     name:response.name,
    //     status:response.status,
    //     specie:response.species,
    //     gender:response.gender,
    //     img:response.image
    // }
}