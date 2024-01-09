import React from 'react'
import styles from './Faq.module.scss'

const headings = [
    'Are there any limits or restrictions on calls?',
    'Do I have to pay for higher limits?',
    'Do we have to include attribution?',
    'Can I include the InstaPics logo in my app or on my site?',
    'I have a similar marketplace or photo library to InstaPics, can I use the API to add your images?'
];

const answers = [
    'Requesting an API Key has a default limit. If you have a larger application and plan to exceed the default API limits, please contact us at question@instapic.com',
    "Nope! If you’re able to provide and show acceptable attribution to Instapic and our contributors, limits can be lifted free of charge",
    "Please! Always credit our photographers when possible. If you’re unable to include a full link back, please use a text link",
    "Yes, we’d be delighted for you to make use of the Instapic logo but please don’t use it as an app icon. You can find our logo here in white or black.",
    'We kindly ask that you do not copy the core functionality of Instapics. Please note that wallpaper apps are not supported within our eligibility requirements.'
];

const Faq = () => {
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <div className={styles.questions}>
            {
                headings.map( (el,idx) => {
                    return(

                        <div className={styles.question}>
                            <h4 className={styles.heading}>{el}</h4>
                            <p className={styles.answer}>{answers[idx]}</p>
                        </div>
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default Faq