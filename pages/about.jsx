import Image from 'next/image'
import React from 'react'
import styles from "../styles/About.module.css"
import Me from "/img/art/me.jpg"
const about = () => {
  return (
    <div className={styles.bigcontainer}>

    <div className={styles.container}>
      <div className={styles.imgcont}>

    <Image className={styles.img} src={Me} alt="" width="300px" height="300px" />
    <div className={styles.text}> <b>FAITH NGUYEN:</b><i> painter, designer, writer, creative</i>
    </div>
      </div>

    <div className={styles.aboutme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus est assumenda sit in dolor atque dolore error rerum! Saepe, similique consequuntur debitis nihil deleniti iste atque ad deserunt voluptas amet.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem adipisci enim nostrum eius corrupti, alias iste, quod, consequatur itaque obcaecati deleniti error ducimus! Quasi explicabo amet possimus officiis est accusamus!
    
    </div>

    <Image className={styles.doodle} src="/img/art/paintingdoodle.png" alt="" width="500px" height="500px" />
    </div>

    </div>
  )
}

export default about