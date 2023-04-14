import React from 'react'
import QueHacer from '../Components/QueHacer/QueHacer'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'
import card7 from '../assets/card7.jpg'
import card8 from '../assets/card8.jpg'
import {useTranslation} from 'react-i18next'

const QueHacerPage = ({isVisible}) => {
  const [t, i18n] = useTranslation("global")
  return (
    isVisible && (
    <>
      <h2 style={{color: '#9A031E'}}>{t("QueHacer2.plans")}</h2>
      <div className='ContainerQueHacer'> 
        <div className='CardQueHacer'>
          <img src={card1} width={200} height={150}/>
          <p style={{fontWeight:'bold', fontSize: '20px', color: '#F2F5DE'}}>{t("QueHacer2.ac")}</p>
        </div>
        <div className='CardQueHacer'>
          <img src={card2} width={200} height={150}/>
          <p style={{fontWeight:'bold', fontSize: '20px', color: '#F2F5DE'}}>{t("QueHacer2.cp")}</p>
        </div>
        <div className='CardQueHacer'>
          <img src={card3} width={200} height={150}/>
          <p style={{ fontWeight:'bold', fontSize: '20px', color: '#F2F5DE'}}>{t("QueHacer2.tu")}</p>
        </div> 
        <div className='CardQueHacer'>
          <img src={card4} width={200} height={150}/>
          <p style={{fontWeight:'bold', fontSize: '20px', color: '#F2F5DE'}}>{t("QueHacer2.nt")}</p>
        </div>
        <div className='CardQueHacer'>
          <img src={card5} width={200} height={150}/>
          <p style={{fontWeight:'bold', fontSize: '20px', color: '#F2F5DE'}}>{t("QueHacer2.gst")}</p>
        </div>
        <div className='CardQueHacer'>
          <img src={card6} width={200} height={150}/>
          <p style={{fontWeight:'bold', fontSize: '18px', color: '#F2F5DE'}}>{t("QueHacer2.da")}</p>
        </div>
        <div className='CardQueHacer'>
          <img src={card7} width={200} height={150}/>
          <p style={{fontWeight:'bold', fontSize: '20px', color: '#F2F5DE'}}>{t("QueHacer2.cm")}</p>
        </div>
        <div className='CardQueHacer'>
          <img src={card8} width={200} height={150}/>
          <p style={{fontWeight:'bold', fontSize: '20px', color: '#F2F5DE'}}>{t("QueHacer2.rt")}</p>
        </div>
      </div>
    </>
    )
  )
}

export default QueHacerPage