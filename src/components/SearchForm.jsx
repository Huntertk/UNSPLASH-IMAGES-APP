import React from 'react'
import { useAppContext } from '../context/AppContext'

const SearchForm = () => {
    const {setSearchTerm} = useAppContext()
    const handleSubmit = (e) => {
        e.preventDefault()
        const searchValue = e.target.elements.search.value
        if(!searchValue){
            return
        }
        setSearchTerm(searchValue);
    }

  return (
    <section>
        <h1 className='title'>unsplash images</h1>
        <form className='search-form' onSubmit={handleSubmit}>
            <input 
            type="text" 
            className='form-input search-input' 
            name='search'
            placeholder='cats'
            />
            <button type="submit" className='btn'>search</button>
        </form>

    </section>
  )
}

export default SearchForm