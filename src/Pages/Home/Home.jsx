import React , {useState,  useEffect, createContext } from 'react';
import { Loading } from '../../Components/Loading/Loading.jsx';
import { Pagination } from '../../Components/Pagination/Pagination.jsx';
import { Characters } from '../../Components/Characters/Characters.jsx';
import { API_URL , getResultCharacters } from '../../Services/API.js';

const HomeContext = createContext(null);

function Home(){
    //Declaring states
    const [ characters , setCharacters ] = useState([]);
    const [ info  , setInfo ] = useState({});
    const [ loading , setLoading ] = useState(false);
    
    const fetchData = url =>{
        setLoading(true)

        //SetTimeout to do the loading effect more durable
        setTimeout(()=>{
            getResultCharacters(url)
            .then(response =>{
                setCharacters(response.results)
                setInfo(response.info)
                setLoading(false);
            })
            .catch(console.log)

        },1000)
    }

    //useEffect to at the start of the application calls the api url
    useEffect( () => {
        fetchData(API_URL);
    }, [] )
    
    
    //Functions to do fetch with the new link that info state has
    const onPrev = () => fetchData( info.prev );
    const onNext = () => fetchData( info.next );


    return(
        <HomeContext.Provider value={{ info, onPrev, onNext, characters , setCharacters, loading }}>        
          <Loading />
            <Pagination />
                <Characters />
            <Pagination />
        </HomeContext.Provider>
    )
}

export { Home , HomeContext }