import React from 'react'
import styles from './Instapic.module.scss'

/*Components*/
import TextHero from '../components/display/TextHero'
import TextCenter from '../components/display/TextCenter'
import Box from '../components/display/Box'
import Faq from '../components/display/Faq'
import ImgFull from '../components/display/ImgFull'

/*Images*/
import img1 from '../images/img5.avif'
import img2 from '../images/img6.avif'
import img3 from '../images/img2.avif'

const text = [
    'Upgrade to InstaPic+ and start creating with exclusive, royalty-free images.',
    'Members-only content added monthly, Unlimited royalty-free downloads, Enhanced legal protections',
    'Get InstaPic+',
    'Additional images',
    'Create with images only InstaPics+ subscribers have access to. New images added every month.'
]

const boxText1 =[
    'The most relevant, engaging content each day directly in your app or website. Our feed of curated content is continuously updated, so you’re always in the loop.',
    'Search for a specific term to show the most relevant photos and videos to your user in a fraction of a second. Limit the results to only show what’s relevant like vertical video or horizontal photos.',
    'Use the collections endpoint to have the API connect straight to your own custom selection of Pexels images and videos.'
]
const boxTitle1 = [
    'Curated content',
    'Image and Video Search',
    'Collections'
];
const color1 = [
    '#eee', '#eee', '#eee', '#111', '#111', '#111'
]

const Instapic = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <TextHero title={text[0]} caption={text[1]} btn={text[2]} img={img1} />
            <TextCenter heading={'Why Go InstaPic+?'} />
            <TextHero title={text[3]} caption={text[4]} img={img2} bg={'#111'} color={'white'} />
            <TextCenter heading={'Most Popular Endpoints'} />
            <Box text={boxText1} title={boxTitle1} color={color1}/>
            <ImgFull src={img3} alt={'Businesses'}/>
            <Faq />
        </div>
    </div>
  )
}

export default Instapic