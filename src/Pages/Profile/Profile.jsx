import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../Services/API.js';
import { Loading } from '../../Components/Loading/Loading.jsx';
import './Profile.css';

function Profile(  ){
    const [ character , setCharacter ] = useState({});
    const [ loading , setLoading ] = useState(false);
    const { characterId } = useParams(); 
    const { name, image, status, gender, species, created, episode } = character;

    const fetchData = () =>{
        setLoading(true)

        //SetTimeout to do the loading effect more durable
        setTimeout(()=>{
            getCharacter(characterId)
            .then(response =>{
                setCharacter(response)
                setLoading(false);
            })
            .catch(console.log)

        },1000)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return(
        <>
            <Loading loading={loading}/>
            { !loading && <div className='info-container'>
                <div className='character-info' > 
                    <aside style={{ backgroundImage: `url(${image})`}}></aside>

                    <section className='character-details'>
                        <div>
                            <h1>{ name }</h1>
                        </div>
                        <div>
                            <ul>
                                <li>Status: { status }</li>
                                <li>Gender: { gender }</li>
                                <li>Species: { species }</li>
                                <li>Created: { created }</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>}
        </>
    )
}

export { Profile }