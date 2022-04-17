

export const API_URL = 'https://rickandmortyapi.com/api/character';
 
/**
  * Function to get all characters
  * @return promise to set all characters of it respective page  
*/
export async function getResultCharacters(url){
    try{
        const response = await fetch( url );
        const data = await response.json();       
        return data;
    }catch( error ){
        console.log(error)
    }
}

/**
  * Function to get one character
  * @param id to know what character i need
  * @return promise with the character  
*/
export async function getCharacter(id){
    try{
        const response = await fetch( `${API_URL}/${id}` );
        const data = await response.json();       
        return data;
    }catch( error ){
        console.log(error)
    }
}
