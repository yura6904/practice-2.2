import propTypes from 'prop-types'

function ShopCard(props) {
    return (
      <div className="card">
        <h3>{props.card.name}</h3>
        <p>{props.card.color}</p>
        <img className="img-thumbnail" src={props.card.img} alt="#"></img>
        <div className="card-footer">
          <p>${props.card.price}</p>
          <span>Add to cart</span>
        </div>
      </div>
    );
}

ShopCard.propTypes = {
  card: propTypes.object
}
  
export default ShopCard;
