import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Add from "../components/Add";

import styles from "@/styles/Home.module.css";
import Featured from "@/components/Featured";
import ProductList from "@/components/ProductList";
import AddButton from "@/components/AddButton";


export default function Home({productList,admin}) {
   const[close,setClose]=useState(true)
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Sri Lanka</title>
        <meta name="description" content="Best Pizza shop in World" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
<ProductList  productList={productList}/>
{!close && <Add setClose={setClose}/>}
    </div>

  );
}
export const getServerSideProps=async(ctx)=>{
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
      admin,
    }, 
  }
}
