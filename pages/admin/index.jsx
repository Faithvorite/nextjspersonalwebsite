import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import EditButton from "../../components/EditButton";
import styles from "../../styles/Admin.module.css";
import Edit from "../../components/Edit";
import AddButton from "../../components/AddButton";
import Add from "../../components/Add";

const Index = ({ orders, paintings }) => {
  const [gallery, setGallery] = useState(paintings);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];
  const [closeEdit, setCloseEdit] = useState(true);
  const [close, setClose] = useState(true);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        "https://nextjspersonalartwebsite.vercel.app/api/paintings/" + id
      );
      setGallery(gallery.filter((painting) => painting._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put("https://nextjspersonalartwebsite.vercel.app/api/orders/" + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <AddButton setClose={setClose} />
                  {!close && <Add setClose={setClose} />}
      <div className={styles.item}>
        <h1 className={styles.title}>paintings</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {gallery.map((painting) => (
            <tbody key={painting._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={painting.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{painting._id.slice(0, 5)}...</td>
                <td>{painting.title}</td>
                <td>${painting.prices[0]}</td>
                <td>
                {/* {<EditButton setCloseEdit={setCloseEdit} />}
                {!closeEdit && <Edit setCloseEdit={setCloseEdit} />} */}
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(painting._id)}
                  >
                    Delete
                  </button>
                  
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const paintingRes = await axios.get("https://nextjspersonalartwebsite.vercel.app/api/paintings");
  const orderRes = await axios.get("https://nextjspersonalartwebsite.vercel.app/api/orders");

  return {
    props: {
      orders: orderRes.data,
      paintings: paintingRes.data,
    },
  };
};

export default Index;