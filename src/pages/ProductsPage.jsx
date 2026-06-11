import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../components/RatingStars";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.title} />

          <Link to={`/product/${product.id}`}>
            {product.title}
          </Link>

          <RatingStars rating={product.rating.rate} />
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;