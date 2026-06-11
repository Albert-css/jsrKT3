function RatingStars({ rating }) {
  const rounded = Math.round(rating);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rounded ? "⭐" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default RatingStars;