const Tour = ({ tour, removeTour }) => {
  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name}></img>
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <span className="tour-price">{tour.price}</span>
        </div>
        <p>{tour.info}</p>
        <button className="delete-btn" onClick={() => removeTour(tour.id)}>
          Not interested
        </button>
      </footer>
    </div>
  );
};
export default Tour;
