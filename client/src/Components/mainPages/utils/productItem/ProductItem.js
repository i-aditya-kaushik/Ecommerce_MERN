import React from "react";
import { Link } from "react-router-dom";
import BtnRender from "../productItem/BtnRen";

function ProductItem({ product, isAdmin }) {
  return (
    <div className="product_card">
      <img src={product.images ? product.images.url : "https://www.reliablesoft.net/wp-content/uploads/2019/08/digital-marketing-courses.png"} alt="" />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <BtnRender product={product} />
    </div>
  );
}

export default ProductItem;
