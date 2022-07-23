import React, { useState } from 'react'
import styles from "../../styles/Painting.module.css";
import Image from "next/image";
import axios from "axios"
import { useDispatch } from 'react-redux';
import { addPainting } from "../../redux/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { AiOutlinePicture } from "react-icons/ai";


const Painting = ({ painting }) => {
  const [price, setPrice] = useState(painting.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = painting.prices[sizeIndex] - painting.prices[size];
    setSize(sizeIndex);
    changePrice(difference);


  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = () => {
    dispatch(addPainting({...painting, extras, price, quantity}));
  };

  // useEffect(() => {
  //   window.localStorage.setItem('MY_APP_STATE', JSON.stringify({...painting, extras, price, quantity}));
  // });
  

  return (
  
  <div className={styles.container}>
    <div className={styles.left}>
      <motion.div layoutId={`${painting._id}`} className={styles.imgContainer}>
        <Image className={styles.img} src={painting.img} layout="fill" alt=""/>

      </motion.div>
    </div>
    <div className={styles.right}>
      <motion.h1 layoutId={"title" + `${painting._id}`} className={styles.title}>{painting.title}</motion.h1>
      <span className={styles.desc}>{painting.year}</span>
      <span className={styles.price}>${price}</span>
      <div className={styles.desc}>{painting.desc}</div>
      <div className={styles.choose}>Size</div>
      <div className={styles.sizes}>
        <div className={styles.size} onClick={()=> handleSize(0)}>
          <div className={price === 100? styles.smallactive : styles.small}><AiOutlinePicture /></div>
          <span className={styles.number}>16&quot;x24&quot;</span>
        </div>
        <div className={styles.size} onClick={()=> handleSize(1)}>
          <div className={price === 200 ? styles.mediumactive: styles.medium}><AiOutlinePicture /></div>
          <span className={styles.number}>20&quot;x30&quot;</span>
        </div>
        <div className={styles.size} onClick={()=> handleSize(2)}>
          <div className={price === 300 ? styles.largeactive : styles.large}><AiOutlinePicture /></div>
          <span className={styles.number}>24&quot;x36&quot;</span>
        </div>
    </div>
    <div className={styles.options}>
        <div className={styles.choose}> Additional options:</div>
        {painting.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
    </div>
    <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            min="0"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
    </div>
    </div>
    </div>

  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://nextjspersonalartwebsite.vercel.app/api/paintings/${params.id}`
  );
  return {
    props: {
      painting: res.data,
    },
  };
};


export default Painting;