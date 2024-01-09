import React from 'react'
import styles from './Advertise.module.scss'

/*Components*/
import TextHero from '../components/display/TextHero'
import TextCenter from '../components/display/TextCenter'
import ImgFull from '../components/display/ImgFull'
import Box from '../components/display/Box'

/*Images*/
import img1 from '../images/img1.avif'
import img2 from '../images/img2.avif'
import img3 from '../images/img3.avif'
import img4 from '../images/img4.avif'

const text = [
    "Direct ads are performance-driven placements Built to generate traffic for brands and convert on customer acquisition KPIs. We create maximum impact with the following four paid placement opportunities",
    'Generate brand lift unseen on any other platform. It works simply by sharing your brand’s beautiful content on Unsplash in targeted search results. And in exchange, creators of the internet share your content with their audiences — in relevant trusted places.'
];

const boxText1 = [
    'Instapics attracts all creative professionals, ranging from Fortune 500 industry leaders to the growing demographic of professionals empowered by the democratization of creativity.',
    'Geo-targeting ads, by safelisting or blocklisting desired countries',
    '10x higher than Pinterest; 3x higher than Dribbble'
];

const boxTitle1 = [
    'All Creative Professionals',
    'Targeting Capability',
    'Up to 2.00% clickthrough rate'
];

const boxColor1 = ['black', 'lightgray', 'red', 'white', '#111', 'white']

const Advertise = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <TextHero title={'Advertise With Us'} 
            caption={"The world's most popular creative platform"} 
            btn={'Get in touch now'} img={img1} />
            <TextCenter heading={'Direct Advertising'} text={text[0]}/>
            <ImgFull src={img2} alt={'Companies'} />
            <Box text={boxText1} title={boxTitle1} color={boxColor1}/>
            <TextCenter heading={'Native Advertising'} text={text[1]}/>
            <ImgFull src={img3} alt={'Businesses'} />
            <TextHero title={"Don’t have images readily available?"} 
            caption={"Take advantage of Unsplash Studio: work with Unsplash photographers to create custom content specifically intended for your campaign."} 
            btn={'Get in touch now'} img={img4} bg={'lightgray'}/>
        </div>
    </div>
  )
}

export default Advertise