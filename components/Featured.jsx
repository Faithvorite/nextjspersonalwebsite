import React from 'react'
import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
    const [index,setIndex]= useState(0);
    const images = [
        "/img/Art/baseballbatgirl.JPG",
        "/img/Art/moonface.JPG",
        "/img/Art/celty.JPG",
    ];

    const handleArrow = (direction) => {
        if(direction==="l") {
            setIndex(index !== 0 ? index-1 : 2)
        } if (direction === "r") {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    
  return (
   
    <div className={styles.container}>
        <div className={styles.arrow} style={{left:10}} onClick={()=>handleArrow("l")}>&#171;</div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
          {images.map((img, i) => (
              <div className={styles.imgContainer} key={i}>
              <Image src={img} key={i} alt="" layout="fill" objectFit="cover"/>
              </div>
          ))}
          </div>
        <div className={styles.arrow} style={{right:10}} onClick={()=>handleArrow("r")}>&#187;</div>
        </div>
       
  )
}

export default Featured