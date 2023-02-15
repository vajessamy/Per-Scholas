import {useState} from "react";

function Product({item}) {
    const[ inCart, setInCart] = useState(false)
    return ( 
        <li>
            Item Name: {item.name}
            <br />
            Item Price: {item.price}
            <br />
            Item Description: {item.description}
            <br />
            {inCart ? "Item is in your cart!" : "Item is not in your cart!"}
            <button onclick ={() => {
                setInCart(true)
                }}>
                Add to Cart
            </button>
        </li>
    );
}

export default Product;

