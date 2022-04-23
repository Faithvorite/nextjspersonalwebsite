import React from 'react'
import styles from "../styles/Artpiece.module.css";
import Image from "next/image";
import Link from "next/link"

const Artpiece = ({ painting } ) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
      <Link href={`/painting/${painting._id}`} passHref>

        <Image className={styles.img} src={painting.img} alt="" layout="fill"/>
      </Link>
      </div>
        <div className={styles.textcontainer}>

        <div className={styles.title}>{painting.title}</div>
        <div className={styles.price}>${painting.prices[0]}</div>
        <div className={styles.desc}>
            {painting.desc}
        </div>
        </div>
        </div>
  )
}

export default Artpiece