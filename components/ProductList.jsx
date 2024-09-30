import React from 'react'
import styles from "../styles/ProductList.module.css";
import PizzaCard from './PizzaCard';
const ProductList = ({productList}) => {
 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza in the World</h1>
      <p className={styles.desc}>
        Explore our variety of pizzas made with fresh ingredients and love.
      </p>
      <div className={styles.wrapper}>
        {productList.map((pizza) => (
          <PizzaCard 
            key={pizza._id}
            pizza={pizza}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList