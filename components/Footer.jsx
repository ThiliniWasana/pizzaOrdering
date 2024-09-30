import React from 'react'
import Image from 'next/image'
import styles from "../styles/Footer.module.css"
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
             <Image src="/image/bgF.png"  width={400} height={400} alt=""/>
      </div>
      <div className={styles.item}>
      <div className={styles.card}>
        <h3 className={styles.motto}>
          About US
          </h3>
          <p className={styles.atext}>
          In 2017, we established the first wood-fired pizza establishment in Kandy, employing five people to provide the best food possible to patrons. Throughout the epidemic and crisis, our crew persevered in providing our customers with the tastiest wood-fired pizzas, which we delivered straight to their doorstep.     
</p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Find Our Restaurants</h1>
        <p className={styles.text}>
            1800 Kalidasa Road
            <br/>Matara,0890
            <br/>041 332 2345
        </p>
        <p className={styles.text}>
            1800 Rawatawatta 
            <br/>Moratuwa
            <br/>011 332 2645
        </p>
        <p className={styles.text}>
            1800 Wakwella road
            <br/>Galle,0190
            <br/>091 332 2345
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Working Hours</h1>
        <p className={styles.text}>
          Moday Until Friday
          <br/>8.00 -21.00
        </p>
        <p className={styles.text}>
          Saturday - Sunday
          <br/>13.00-17.00
        </p>
        
        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaTiktok />
          </a>
        </div>
       </div>
      </div>
      </div>
    
  )
}

