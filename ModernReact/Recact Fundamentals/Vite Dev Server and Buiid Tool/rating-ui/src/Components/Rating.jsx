const Rating = () => {
    const stars = Array.from({length: 5}, (_,i) => i + 1)
    const clicked = (index) => console.log('Clicked', index);
    const hoverd = (direction, index) => console.log('Hovered', direction, index);
    
  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
            <span onClick={ () => clicked(index)}   
            onMouseEnter={ () => hoverd('enter', index)}
            onMouseLeave={ () => hoverd('leave', index)}
            key={star} 
            className="star">{'\u2605'}</span> 
        ))}
      </div>
    </div>
  );
};

// const styles = {
//   container: {
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//     padding: "20px",
//   },
//   heading: { color: 'red'}
// }

export default Rating;