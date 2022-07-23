import Image from 'next/image'
import React from 'react'
import styles from "../styles/About.module.css"
import Me from "../public/img/Art/me.jpg"
import doodle from "../public/img/Art/paintingdoodle.png"
const about = () => {
  return (
    <div className={styles.bigcontainer}>

    <div className={styles.container}>
      <div className={styles.imgcont}>

    <Image placeholder="blur" className={styles.img} src={Me} alt="" width="300px" height="300px" />
    <div className={styles.text}> <b>FAITH NGUYEN:</b><i> painter, designer, writer, creative</i>
    </div>
      </div>

    <div className={styles.aboutme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus est assumenda sit in dolor atque dolore error rerum! Saepe, similique consequuntur debitis nihil deleniti iste atque ad deserunt voluptas amet.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem adipisci enim nostrum eius corrupti, alias iste, quod, consequatur itaque obcaecati deleniti error ducimus! Quasi explicabo amet possimus officiis est accusamus!
    
    </div>
    <div className="aboutheader">Career Endeavors</div>
          <p>
     I graduated Cum Laude from UT Austin in 2019, with a B.S. in English and minor in Creative Writing. While English and art have long been my outlets for expression, in 2021 I began studying web development as well. Despite changes in my career path, my goal in life has remained the same - to better my ability to create and communicate.
          </p>
          <hr></hr>
          <div className="aboutheader">Personal Pursuits</div>
          <p>
            I am a writer, artist, and programmer. 
          </p>
    <div className="doodlebox">

    <Image placeholder="blur" className={styles.doodle} src={doodle} alt="" width="500px" height="500px" />
    </div>
    </div>

    </div>
  )
}

export default about