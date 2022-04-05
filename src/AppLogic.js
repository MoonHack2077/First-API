import { useEffect, useState } from 'react';

function AppLogic() {
    //Declaring states
    const [ characters , setCharacters ] = useState([]);
    const [ info  , setInfo ] = useState({});
    const [ loading , setLoading ] = useState(false);
    
    //Function to do fecth and set the states
    const fetchData = url => {
        setLoading(true);

        fetch( url )
        .then( response => response.json() )
        .then( data => {
            setCharacters ( data.results )
            setInfo( data.info )  
        })
        .catch( error => console.log(error) )

        setLoading(false);
    }
    
    //useEffect to at the start of the application calls the api url
    useEffect( ()=> {
        fetchData('https://rickandmortyapi.com/api/character');
    }, [] )
    
    //Functions to magane the characters that will be appear
    const onPrev = () => fetchData( info.prev );
    const onNext = () => fetchData( info.next );

    return { characters , info , onPrev , onNext , loading }
}

export { AppLogic }