import React from 'react'
import ToggleTheme from './components/ToggleTheme'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery'

const App = () => {
  return (
      <main>
      <ToggleTheme />
      <SearchForm />
      <Gallery />
    </main>
  )
}

export default App
