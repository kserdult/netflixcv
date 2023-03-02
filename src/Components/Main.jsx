import React from 'react'
import Slide from './Slide'
import { skills, certificates } from './Data'

const Main = () => {
  return (
    <div>
      <Slide rowID={0} title={"Skills"} items={skills}/>
      <Slide rowID={1} title={"Courses done"} items={certificates}/>
    </div>
  )
}

export default Main