import React from 'react'
import styles from "../styles/Artpiece.module.css";
import Image from "next/image";
import Link from "next/link"
import { motion } from "framer-motion";

const Artpiece = ({ painting } ) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
      <motion.div layoutId={`${painting._id}`} className={styles.imgContainer}>

      <Link href={`/painting/${painting._id}`} passHref>

        <Image className={styles.img} src={painting.img} alt="" layout="fill"/>
      </Link>
      </motion.div>
      </div>
        <div className={styles.textcontainer}>

        <motion.div layoutId={"title" + `${painting._id}`} className={styles.title}>{painting.title}</motion.div>
        <div className={styles.price}>${painting.prices[0]}</div>
        <div className={styles.desc}>
            {painting.desc}
        </div>
        </div>
        </div>
  )
}

export default Artpiece