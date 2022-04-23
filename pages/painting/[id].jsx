import React, { useState } from 'react'
import styles from "../../styles/Painting.module.css";
import Image from "next/image";
import axios from "axios"
import { useDispatch } from 'react-redux';
import { addPainting } from "../../redux/cartSlice";

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

  return (
  
  <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src={painting.img} layout="fill" alt=""/>

      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.title}>{painting.title}</div>
      <span className={styles.price}>${price}</span>
      <div className={styles.desc}>{painting.desc}</div>
      <div className={styles.choose}>Size</div>
      <div className={styles.sizes}>
        <div className={styles.size} onClick={()=> handleSize(0)}>
          <div className={styles.small}>&#10064;</div>
          <span className={styles.number}>small</span>
        </div>
        <div className={styles.size} onClick={()=> handleSize(1)}>
          <div className={styles.medium}>&#10064;</div>
          <span className={styles.number}>medium</span>
        </div>
        <div className={styles.size} onClick={()=> handleSize(1)}>
          <div className={styles.large}>&#10064;</div>
          <span className={styles.number}>large</span>
        </div>
    </div>
    <div className={styles.options}>
        <div className={styles.title}> Additional options:</div>
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
    `http://localhost:3000/api/paintings/${params.id}`
  );
  return {
    props: {
      painting: res.data,
    },
  };
};


export default Painting;