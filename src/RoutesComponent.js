import React from 'react'
import {Routes, Route} from 'react-router-dom'

/*Pages*/
import Home from './pages/Home'
import Advertise from './pages/Advertise'
import Instapic from './pages/Instapic'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Favorite from './pages/Favorite'

const RoutesComponent = () => {
  return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/explore' element={<Explore />} />
            <Route path='/advertise' element={<Advertise />} />
            <Route path='/instapic' element={<Instapic />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/:query' element={<Search />} />
        </Routes>
  )
}

export default RoutesComponent