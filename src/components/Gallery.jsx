import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useAppContext } from '../context/AppContext'
const url = 'https://api.unsplash.com/search/photos?client_id=CvJPMqp1MOGBbiW7MT7ifRgX7OO40_MXD3g9m9cdX2M&query=romance'
const Gallery = () => {
    const {searchTerm} = useAppContext()
    const {data, isLoading, isError} = useQuery({
        queryKey:['images', searchTerm],
        queryFn: async () => {
            const {data} = await axios.get(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`)
            return data
        }
    })
    
    if(isLoading){
        return <section className='image-container'>
            <h1>Loading....</h1>
        </section>
    }
    if(isError){
        return <section className='image-container'>
            <h1>There was an error</h1>
        </section>
    }

    const results = data.results
    console.log(results);

    if(results.length < 1) {
        return <section className='image-container'>
        <h1>No results found</h1>
    </section>
    }
  return (
    <section className='image-container'>
        {results.map((item) => {
            const url = item?.urls?.regular
        
            return <img src={url} key={item?.id} className='img' alt={item.alt_description} />
        })}
    </section>
  )
}

export default Gallery