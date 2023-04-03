import React from 'react'
import DondeIr from '../Components/DondeIr/DondeIr'

const DondeirPage = ({isVisible}) => {
  return (
    isVisible && (
      <div>
        <DondeIr />
      </div>
    )
  )
}

export default DondeirPage