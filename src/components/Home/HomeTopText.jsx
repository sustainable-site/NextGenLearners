import React from 'react'
import SkillsVid from './SkillsVid'
import KnowVid from './KnowVid'

const HomeTopText = () => {
  return (
    <div className='font-[homefont] underline pt-30'>
      <div className='text-[5vw] uppercase leading-[6vw] flex items-center justify-center'>Upgrade your skills <div className='h-[5vw] rounded-full overflow-hidden'><SkillsVid /></div></div>
      <div className='text-[5vw] uppercase leading-[6vw] flex items-center justify-center'>knowledge <div className='h-[5vw] rounded-full overflow-hidden'><KnowVid /></div> with</div>
      <div className='text-[5vw] uppercase leadind-[6vw] flex items-center justify-center'>our online cource</div>
    </div>
  )
}

export default HomeTopText
