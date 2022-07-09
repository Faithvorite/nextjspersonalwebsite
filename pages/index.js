import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import Gallery from "../components/Gallery";
import NewFeatured from "../components/NewFeatured";
import styles from "../styles/Home.module.css";

export default function Home({ gallery, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Faith Nguyen</title>
        <meta name="description" content="Art of Faith Nguyen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <Gallery gallery={gallery} />
      {!close && <Add setClose={setClose} />}
      <NewFeatured />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/paintings");
  return {
    props: {
      gallery: res.data,
      admin,
    },
  };
};