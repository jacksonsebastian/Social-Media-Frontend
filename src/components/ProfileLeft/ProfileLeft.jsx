import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import FOlllowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
const ProfileLeft = () => {
  return (
    <div className='profileSide'>
        <LogoSearch/>
        <InfoCard/>
        <FOlllowersCard/>
    </div>
  )
}

export default ProfileLeft