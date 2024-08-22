import React, { useContext } from 'react'
import ThemeFoot from './ThemeFoot'
import { ThemeContext } from '../Context/ThemeContext'
import './Theme.css'
import Navigation from './Navigation'

const ThemeBody = () => {
  const {ccolor,color}=useContext(ThemeContext)

  return (
    <div>
     <div id="content" style={{backgroundColor:ccolor}}>
        <img src="https://maplindia.com/wp-content/uploads/2021/10/SRS-IT-Building-1.png" alt="connect"/>
        <p style={{color:color}}>
        Today’s world is the world of information and telecommunication. Everyday new technology and inventions are being made in the area of information, processing, and travelling. There is hardly any area which had not been affected by this. Due to all this, the word distance sounds ironic in the present-day context.
        The whole world has become a small place today. Any information can be exchanged by people in few seconds and that, too, in a proper and effective way without any loss of data while it is being processed. On the one hand, all these different ways of telecommunication and information exchange have highlighted the necessity for multipurpose development and growth of information technology and on the other, the easy access and use of it has boosted the network of information exchange. All this has been possible through information technology like telephone, fax, telex, computers, internet, e-mail, photocopier, printer, scanner, cellular phones, pagers, videophone, digital camera, multimedia, etc.
        These technologies are becoming a part and parcel of our lives and are transforming the lifestyles and habits of people all over the world.
        The use of computers has increased by leaps and bounds worldwide. Internet and multimedia have now become playthings for children. The internet has revolutionized every field of the world. The government has allowed private companies to provide internet services to people in order to boost up information technology.
        </p>
      </div>
       <ThemeFoot/>
    </div>

  )
}

export default ThemeBody