import React from 'react'
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBookmark, faCalendarCheck, faComment, faContactBook } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className={styles.container}>
         <div  className={styles.newsletterwrapper}>
            <div className={styles.title}>
                GET IN TOUCH
            </div>
                <input type="email" className ={styles.formcontrol} placeholder="youremail@email.com"/>
                <button type="submit" className={styles.btn}>Subscribe</button>
            
        </div>
        <div className={styles.contactme}>
                  <div className={styles.title}>

           See more here
                  </div>
                  <div className={styles.icons}>
           <FontAwesomeIcon className={styles.icon} icon={faContactBook} />
           <FontAwesomeIcon className={styles.icon} icon={faCalendarCheck} />
           <FontAwesomeIcon className={styles.icon} icon={faComment} />
                  </div>
                </div>
      {/* <div className={styles.seeMore}>
                 <div className={styles.aboutme}>
                    <div className={styles.imgcontainer}>
                    <Image className={styles.img} src="/img/Art/me.JPG" alt="" layout="fill" />
                    </div>
                    <div className={styles.describeme}>
                    Hello, my name is Faith Nguyen. I am a self taught artist and creative since birth. 
                    </div>
                </div>
                
      </div>
    */}
  

    </div>

  )
}

export default Footer