import { useEffect, useState } from 'react';
import { API_URL } from '../API';

function AppLogic() {
    //Declaring states
    const [ characters , setCharacters ] = useState([]);
    const [ info  , setInfo ] = useState({});
    const [ loading , setLoading ] = useState(false);
    
    /**
     * Function to do fecth and set the states
     * @param url to know what url will do fetch
     * @return promise to set all characters of it respective page  
     */
    const fetchData = url => {
        setLoading(true);

        //setTimeout to do a loading effect more durable
        setTimeout( () => {
            fetch( url )
            .then( response => response.json() )
            .then( data => {
                setCharacters ( data.results )
                setInfo( data.info )  
                setLoading(false);
            })
            .catch( error => console.log(error) )
        },1000)

    }
    
    //useEffect to at the start of the application calls the api url
    useEffect( () => {
        fetchData(API_URL);
    }, [] )
    
    
    //Functions to do fetch with the new link that info state has
    const onPrev = () => fetchData( info.prev );
    const onNext = () => fetchData( info.next );


    
    const ricks = [];

    async function getCharacter(id){
        const characters = await fetch(`${API_URL}/${id}`)
        const response = await characters.json();
        if( response.name.includes('Rick') ) ricks.push(response);
        // return  {
        //     id:response.id,
        //     name:response.name,
        //     status:response.status,
        //     specie:response.species,
        //     gender:response.gender,
        //     img:response.image
        // }
    }

    const xd = () => {
        for( let i=1 ; i<=info.count ; i++ ){
            getCharacter(i);
        }

        setCharacters(ricks);
        return true;
    }

    return { characters , info , onPrev , onNext , loading , xd }
}

export { AppLogic }