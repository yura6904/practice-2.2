import propTypes from 'prop-types'

function ShopItem(props) {
    return (
      <div className="shop-item">
        <img src={props.item.img} alt="#"></img>
        <h3>{props.item.name}</h3>
        <p>{props.item.color}</p>
        <p>${props.item.price}</p>
        <span>Add to cart</span>
      </div>
    );
  }

  ShopItem.propTypes = {
    item: propTypes.object
  }
  
  export default ShopItem;
  