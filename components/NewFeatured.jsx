import React from 'react'
import styles from "../styles/NewFeatured.module.css";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';

const NewFeatured = () => {
    const [index,setIndex]= useState(0);
    const images = [
        {
        img:"/img/Art/horsetailfalls2.JPG",
        desc: '30" x 40" oil on canvas',
        review: "Excellent! This painting has brought life into an empty room. So very happy with the result",
        author: "-Minh Hong"
        },
        {
        img: "/img/Art/mistyroadframed.JPG",
        desc: "Oil painting",
        review:' Outstanding!',
        author: "-Minh Hong"
        },
        {
        img: "/img/Art/unnamed.JPG",
        desc: "Oil painting",
        review: "Top notch",
        author: "-Minh Hong"
        },
        {
        img:"/img/Art/hannahtote.JPG",
        desc: "Oil painting",
        review: "Incredible",
        author: "-Minh Hong"
        },
        {img: "/img/Art/transparency.JPG",
        review: "Incredible",
        author: "-Minh Hong"
        },
        {
        img: "/img/Art/francelavendarfields.JPG",
        review: "Incredible",
        author: "-Minh Hong"
        },
    ];

    const handleArrow = (direction) => {
        if(direction==="l") {
            setIndex(index !== 0 ? index-.5 : 2)
        } if (direction === "r") {
            setIndex(index !== 2 ? index + .5 : 0)
        }
    }
    
  return (
   
    <div className={styles.container}>
        {/* <div className={styles.title}>Commissioned Work</div> */}
        <div className={styles.arrow} style={{left:10}} onClick={()=>handleArrow("l")}>&#171;</div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          {images.map((images, i) => (
            <div className={styles.featuredContainer} key={i}>
              <div className={styles.imgContainer} key={i}>
              <Image src={images.img} key={i} alt="" layout="fill" objectFit="cover"/>
              </div>
              <div className={styles.textContainer}>
                <div className={styles.desc}>{images.desc}</div>
                <div className={styles.review}>  
                <FontAwesomeIcon className={styles.quote} icon={faQuoteLeft}/>
                 {images.review}<FontAwesomeIcon className={styles.quoter} icon={faQuoteRight}/>
                 </div>
                 
                 <div className={styles.author}>{images.author}</div>
              </div>
              </div>
          ))}
          </div>
        <div className={styles.arrow} style={{right:10}} onClick={()=>handleArrow("r")}>&#187;</div>
        </div>
       
  )
}

export default NewFeatured;