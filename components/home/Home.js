import React from 'react'
import Banner from './Banner'
import Aboutin from './Aboutin'
import Feature from './Feature'
import Servicein from './Servicein'
import Blogs from './Blogs'
import Newsletter from './Newsletter'

function Home() {
  return (
    <div>
       <Banner/>
       <Feature/>
       <Aboutin/> 
       <Servicein/>
       <Blogs/>
       <Newsletter/>
    </div>
  )
}

export default Home