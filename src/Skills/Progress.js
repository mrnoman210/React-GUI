import React from 'react'
import SubHeading from '../components/SubHeading'
import Card from './Card'
// import Progress from 'react-progressbar';
import './progress.css'
// import { Progressbar } from 'progressbar'
function Progress({titleBody , percentage}) {
//  const now = 50;
  return (
<>

<div className='CardFlex'>
<Card titleBody={"Css"} percentage={90} subper={45}/>
<Card titleBody={"Css"} percentage={80}subper={30}/>
<Card titleBody={"Css"} percentage={75} subper={23}/>
</div> 
<SubHeading/>   


      


</>
  )
}

export default Progress