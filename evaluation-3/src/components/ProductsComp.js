import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

const ProductsComp = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="singleProduct" key={id}>
        <Link to={`/product/${id}`}>
          <div>
            <div>
              <div>
                <img src={image} alt={title} />
              </div>
              <div>
                <div>{title}</div>
                <div>$ {price}</div>
                <div>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="grid">{renderList}</div>;
};

export default ProductsComp;