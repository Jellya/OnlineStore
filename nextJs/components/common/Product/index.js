import React from 'react'
import styles from './product.module.scss'
import Link from 'next/link'
function Product(props) {

    const { id, name, descripton, price, count, image, addToCart, addToFavorite, removeFromFavorite, cart = [], favorites = [] } = props;
    const isAddingToCart = cart.includes(id);
    const isAddingToFav = favorites.includes(id);
    return (
        <div className={styles.productItem}>
            <Link key={id} href={`/items/${id}`}>
                <a>
                    {image.length !== 0 && image.map(({ url }) => {
                        const imageUrl = `${
                            url.startsWith('/') ? process.env.NEXT_PUBLIC_STRAPI_API_URL : ''
                            }${url}`
                        return <img className={styles.productImg} src={imageUrl} alt={name} />
                    })}

                    <h3 className={styles.productTitle}>{name}</h3>
                    <p className={styles.productDesc}>
                        Описание
                {descripton}
                    </p>
                    <p className={styles.productPrice}>{price}$</p>
                    <p className={styles.productCount}>Count {count}</p>
                </a>
            </Link>
            {isAddingToCart
                ? <div>Added to cart</div>
                : <button onClick={() => addToCart(id)} className={styles.productCart}>Buy</button>
            }
            {isAddingToFav
                ? <div onClick={() => removeFromFavorite(id)} className={styles.likeFill}></div>
                : <div onClick={() => addToFavorite(id)} className={styles.like}></div>
            }
        </div>
    )
}

export default Product