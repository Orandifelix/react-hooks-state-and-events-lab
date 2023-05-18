import React, {useState} from "react";

function Item({ name, category }) {

  const [addCart, setAddCart] = useState(false)


  function addToCartHandler(){
    setAddCart(!addCart)
  }


  return (
    <li className={addCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartHandler}>
       {addCart ? "Remove from Cart" : " Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
