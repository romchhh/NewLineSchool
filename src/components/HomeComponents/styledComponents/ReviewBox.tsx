import "./css/ReviewBox.css";

export default function ReviewBox({ name, rating, text }: { name: string; rating: number; text: string }) {
  return (
    <div className="home-reviews-box">
      <div className="home-reviews-box-header">
        <div className="home-reviews-box-header-name">{name}</div>
        <div className="home-reviews-box-header-rating">
          {Array.from({ length: rating }, (_, i) => (
            <span key={i} className="home-reviews-box-header-rating-star">
              <img src="src/assets/elements/star.png" alt="star" />
            </span>
          ))}
        </div>
      </div>
      <div className="home-reviews-box-body">{text}</div>
    </div>
  );
}
