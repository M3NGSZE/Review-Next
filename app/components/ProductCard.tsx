import React from 'react'
import AddToCart from './AddToCart'
// import styles from './ProductCart.module.css'

const ProductCard = () => {
    return (
        <div /*className={styles.card}*/ className='p-5 my-5 bg-sky-400 text-xl hover:bg-sky-500'>
            <AddToCart/>
        </div>
    )
}

export default ProductCard
