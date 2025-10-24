import React from 'react'
import Video from '../components/Home/video'
import HomeTopText from '../components/Home/HomeTopText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <div >
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative flex flex-col'>
        <HomeTopText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
