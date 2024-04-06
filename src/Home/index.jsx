import React from 'react'
import { Header } from '../Components/Header'
import BecomeACCAIn18months from '../Components/BecomeACCAIn18months/'
import { WhyChooseUS } from '../Components/Whychooseus/'
import { WhatwillyoulearnInACCA } from '../Components/WhatwillyoulearnInACCA'
import KickoffyourACCA from '../Components/ KickoffyourACCA'
import { PlacementAssistance } from '../Components/PlacementAssistance'

export const Home = () => {
  return (
    <div className=''>
        <Header/>
        <BecomeACCAIn18months/>
        <WhyChooseUS/>
        <WhatwillyoulearnInACCA/>
        <PlacementAssistance/>
        <KickoffyourACCA/>

    </div>
  )
}
