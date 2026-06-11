import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>

      <Link to="/products">
        <button>К товарам</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;