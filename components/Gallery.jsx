import React from 'react'
import styles from "../styles/Gallery.module.css";
import Artpiece from "./Artpiece.jsx";

const Gallery = ({ gallery }) => {
  return (
    <div className={styles.container}>
      <div className={styles.secondcontainer}></div>
      <div className={styles.textcontainer}>
        

        <h3 className={styles.title}>Faith Nguyen</h3>
        <p className={styles.desc}>
            Traditional and Digital Artist
        </p>
        
      </div>
        <hr className={styles.hr}></hr>
        <div className={styles.wrapper}>
            {gallery.map((painting) => (
              <Artpiece key={painting._id} painting={painting}/>
            
            ))}
        
        </div>
        </div>
  )
}

export default Gallery