import React from 'react'
import {Routes, Route} from 'react-router-dom'

/*Pages*/
import Home from './pages/Home'
import Advertise from './pages/Advertise'
import Instapic from './pages/Instapic'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Favorite from './pages/Favorite'
import PostPhoto from './pages/PostPhoto'

const RoutesComponent = () => {
  return (
        <Routes>
            <Route path='/instapic' element={<Home />}></Route>
            <Route path='/explore' element={<Explore />} />
            <Route path='/advertise' element={<Advertise />} />
            <Route path='/upgrade' element={<Instapic />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/:query' element={<Search />} />
            <Route path='/photo/:id' element={<PostPhoto />} />
        </Routes>
  )
}

export default RoutesComponent