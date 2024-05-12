import React from 'react'
import Herosection from '../Componant/Herosection/Herosection'
import Matrial from '../Componant/Matrial/Matrial'
import Choose from '../Componant/Choose/Choose'
import Help from '../Componant/Help/Help'
import Test from '../Componant/Test/Test'
import RBlog from '../Componant/RecentBlog/R_Blog'

const Home = () => {
  return (
    <div>
        <Herosection/>
        <Matrial/>
        <Choose/>
        <Help/>
        <Test/>
        <RBlog/>
    </div>
    
  )
}

export default Home