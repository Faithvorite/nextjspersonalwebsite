import React, { useRef } from 'react'
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBookmark, faCalendarCheck, faComment, faContactBook } from '@fortawesome/free-regular-svg-icons';
import emailjs from '@emailjs/browser'

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_9b951xl', 
      'template_v8qrumr', 
      form.current, 
      'dVv23QUTshCDR1zwp')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className={styles.container}>
         <div  className={styles.newsletterwrapper}>
            <div className={styles.title}>
                GET IN TOUCH
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="email" className ={styles.formcontrol} placeholder="youremail@email.com"/>
                <button value="Send" type="submit" className={styles.btn}>Subscribe</button>
            </form>
            
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

  

    </div>

  )
}

export default Footer