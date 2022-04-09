import { useEffect, useState } from 'react';

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
        fetchData('https://rickandmortyapi.com/api/character');
    }, [] )
    
    
    //Functions to do fetch with the new link that info state has
    const onPrev = () => fetchData( info.prev );
    const onNext = () => fetchData( info.next );

    return { characters , info , onPrev , onNext , loading }
}

export { AppLogic }