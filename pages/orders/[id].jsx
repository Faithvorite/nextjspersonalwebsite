import React from 'react'
import axios from 'axios';
import Image from "next/image";
import styles from "../../styles/Order.module.css"
const Order = ({order}) => {
    const status = order.status;

    const statusClass = (index) => {
      if (index - status < 1) return styles.done;
      if (index - status === 1) return styles.inProgress;
      if (index - status > 1) return styles.undone;
    };
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.row}>
            <table className={styles.table}>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.address}>{order.address}</span>
                </td>
                <td>
                  <span className={styles.total}>${order.total}</span>
                </td>
              </tr>
            </table>
          </div>
          <div className={styles.row}>
            <div className={statusClass(0)}>
              <div className={styles.icon}>&#9878;</div>
              <span>Payment</span>
              <div className={styles.checkedIcon}>
              &#10004;
              </div>
            </div>
            <div className={statusClass(1)}>
              <div className={styles.icon}>&#9881;</div>
              <span>Processing</span>
              <div className={styles.checkedIcon}>
              &#10004;
              </div>
            </div>
            <div className={statusClass(2)}>
              <div className={styles.icon}>&#9992;</div>
              <span>On the way</span>
              <div className={styles.checkedIcon}>
              &#10004;
              </div>
            </div>
            <div className={statusClass(3)}>
              <div className={styles.icon}>&#9872;</div> 
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
              &#10004;
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
                <div className={styles.title}>CART TOTAL</div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>${order.total}
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>

        </div>

    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order