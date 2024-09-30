// import React from 'react'
// import styles from "../styles/Navbar.module.css"
// import Image from 'next/image'
// import { useSelector } from 'react-redux'
// import Link from 'next/link'

// const Navbar = () => {
//   const quantity=useSelector(state=>state.cart.quantity)


//   return (
//     <div className={styles.container}>
//       <div className={styles.item}>
//       <div className={styles.callButton}>
//         <Image src="/image/call-icon.jpg" alt="" width="32" height="32" />
//         </div>
//         <div className={styles.texts}>
//         <div className={styles.text}>ORDER NOW</div>
//         <div className={styles.text}>041 654 1905</div>
//         </div>
//       </div>
//       <div className={styles.item}>
//         <ul className={styles.list}>
//           <li className={styles.listItem}>Home</li>
//           <li className={styles.listItem}>Products</li>
//           <Image src="/image/logo.png" alt="" width="180" height="180"/>
//           <li className={styles.listItem}>Menu</li>
//           <li className={styles.listItem}>Contact</li>
//         </ul>
//       </div>
//       <Link href="/cart" passHref>
//       <div className={styles.item}>
//         <div className={styles.cart}>
//         <Image src="/image/cart.svg" alt="" width="30" height="30"/>
//         <div className={styles.counter}>{quantity}</div>
//         </div>
//       </div>
//       </Link>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const [isOpen, setIsOpen] = useState(false); // State to handle dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle dropdown
  }

  const closeMenu = () => {
    setIsOpen(false); // Close dropdown
  }

  return (
    <div className={styles.container}>
      {/* Left Section with Call Button */}
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/call-icon.jpg" alt="Call Icon" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW</div>
          <div className={styles.text}>041 654 1905</div>
        </div>
      </div>

      {/* Center Section with Links or Hamburger Menu */}
      <div className={styles.item}>
        {/* Hamburger Icon for small screens */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerIcon}>☰</span>
        </div>

        {/* Full-screen dropdown menu when hamburger is clicked */}
        {isOpen && (
          <div className={styles.menuOverlay}>
            <div className={styles.closeButton} onClick={closeMenu}>×</div>
            <ul className={styles.dropdownList}>
              <li className={styles.dropdownItem} onClick={closeMenu}>Home</li>
              <li className={styles.dropdownItem} onClick={closeMenu}>Products</li>
              <li className={styles.dropdownItem} onClick={closeMenu}>Menu</li>
              <li className={styles.dropdownItem} onClick={closeMenu}>Contact</li>
            </ul>
          </div>
        )}

        {/* Normal Menu for large screens */}
        <ul className={styles.list}>
          <Link href="/" passHref>
          <li className={styles.listItem}>Home</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <Image src="/image/logo.png" alt="Logo" width="150" height="150" />
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      {/* Right Section with Cart */}
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/image/cart.svg" alt="Cart" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
