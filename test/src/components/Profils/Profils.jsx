import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Profil from './Profil'

const Profils = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [profils, setProfils] = useState([])

    useEffect(() => {
        
        setIsLoading(true)
        const fetchData = async () => {
            try {
              const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea7ac90e55beb953ffcdb03733ccf92&language=en-US&page=2`) 
              console.log(data.results);
               setProfils(data.results)
               setIsLoading(false)
               
            } catch (error) {
                throw error
            }
        } 
        fetchData()
        if (isLoading) {
            return(
                <div>Loading</div>
            )
        }
    }, [])

    return (
        <div>
            <h1>Profils</h1>
            {profils.map(profil => (
                <Profil key={profil.id} profile={profil}/>
            ))}
            
        </div>
    )
}

export default Profils
