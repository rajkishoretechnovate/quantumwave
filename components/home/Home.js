import React from 'react'
import Banner from './Banner'
import Aboutin from './Aboutin'
import Feature from './Feature'
import Servicein from './Servicein'
import Blogs from './Blogs'
import Newsletter from './Newsletter'
import Techtrend from './Techtrend'
import Solutiondeliver from './Solutiondeliver'

function Home() {
  return (
    <div>
       <Banner/>
       <Feature/>
       <Aboutin/> 
       <Servicein/>
       <Solutiondeliver/>
       <Techtrend/>
       <Blogs/>
       <Newsletter/>
    </div>
  )
}

export default Home