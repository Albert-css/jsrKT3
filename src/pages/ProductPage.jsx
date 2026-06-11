import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RatingStars from "../components/RatingStars";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Загрузка...</h2>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <p>Цена: {product.price}$</p>

      <p>Категория: {product.category}</p>

      <RatingStars rating={product.rating.rate} />

      <button onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default ProductPage;