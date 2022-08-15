import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Gallery from "../components/Gallery";
import { motion } from "framer-motion";


const GalleryPage = ({ gallery }) => {
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

    return (
     <div>
      <Gallery gallery={gallery} />
     </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("https://nextjspersonalartwebsite.vercel.app/paintings");
  return {
    props: {
      gallery: res.data,
      admin,
    },
  };
};

export default GalleryPage;