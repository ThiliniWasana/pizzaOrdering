// // pages/menu.js
// import { useState, useEffect } from "react";
// import styles from "../../styles/Menu.module.css";
// import Image from 'next/image';

// export default function Menu() {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     async function fetchMenu() {
//       const res = await fetch("/api/menu");
//       const data = await res.json();
//       setMenuItems(data);
//     }
//     fetchMenu();
//   }, []);

//   return (
//     <div className={styles.menuPage}>
//       <div className={styles.heroSection}>
//         <h1 className={styles.heroText}>Food Menus</h1>
//       </div>
//       <div className={styles.menuContainer}>
//         <div className={styles.menuGrid}>
//           {menuItems.map((item) => (
//             <div key={item._id} className={styles.menuItem}>
//               <img src={item.imageURL} alt={item.name} className={styles.menuImage} />
//               <h2>{item.name}</h2>
//               <p>{item.description}</p>
//               <p>${item.price.toFixed(2)}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// pages/menu.js
import { useState, useEffect } from "react";
import styles from "../../styles/Menu.module.css";
import Image from "next/image";

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchMenu() {
      const res = await fetch(
        `http://localhost:3000/api/menu/menuitem${
          selectedCategory !== "All" ? `?category=${selectedCategory}` : ""
        }`
      );
      const data = await res.json();
      setMenuItems(data);
    }
    fetchMenu();
  }, [selectedCategory]);

  return (
    <div className={styles.menuPage}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroText}>Food Menus</h1>
      </div>

      {/* Category Bar */}
      <div className={styles.categoryBar}>
        <button
          className={styles.categoryButton}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button
          className={styles.categoryButton}
          onClick={() => setSelectedCategory("Drinks")}
        >
          Drinks
        </button>
        <button
          className={styles.categoryButton}
          onClick={() => setSelectedCategory("Salad")}
        >
          Salad
        </button>
        <button
          className={styles.categoryButton}
          onClick={() => setSelectedCategory("Pasta")}
        >
          Pasta
        </button>
        <button
          className={styles.categoryButton}
          onClick={() => setSelectedCategory("Burgers")}
        >
          Burgers
        </button>
        <button
          className={styles.categoryButton}
          onClick={() => setSelectedCategory("Desserts")}
        >
          Desserts
        </button>
      </div>

      <div className={styles.menuContainer}>
        <div className={styles.menuGrid}>
          {menuItems.map((item) => (
            <div key={item._id} className={styles.menuItem}>
              <img
                src={item.img}
                alt={item.name}
                className={styles.menuImage}
              />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <p>
                Small: ${item.prices[0] ? item.prices[0].toFixed(2) : "0.00"}
              </p>
              <p>
                Medium: ${item.prices[1] ? item.prices[1].toFixed(2) : "0.00"}
              </p>
              <p>
                Large: ${item.prices[2] ? item.prices[2].toFixed(2) : "0.00"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
