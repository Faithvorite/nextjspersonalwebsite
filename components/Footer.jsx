import React from 'react'
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
            <div className={styles.aboutme}>
                    <div className={styles.imgcontainer}>
                    <Image className={styles.img} src="/img/Art/me.JPG" alt="" layout="fill" />
                    </div>
                    <div className={styles.describeme}>
                    Hello, my name is Faith Nguyen. I am a self taught artist and creative since birth. 
                    </div>
            </div>
      
        <div className={styles.contactme}>
            Follow me here!
            ASDFKs
            ASfdlkf
        </div>
        <div  className={styles.newsletterwrapper}>
            <h2 className={styles.newslettertitle}>
                Get in touch!
            </h2>
                <input type="email" className ={styles.formcontrol} placeholder="youremail@email.com"/>
                <button type="submit" className="btntrans">Subscribe</button>
            
        </div>
  
    </div>

  )
}

export default Footer