import ShopItem from "./ShopItem/ShopItem";
import propTypes from 'prop-types'

function ListView(props) {
    return (
      <div className="list-view">
        {props.items.map((i, idx) => (
            <ShopItem item={i} key={'shopItem' + idx}/>
        ))}
      </div>
    );
  }
  
ListView.propTypes = {
  cards: propTypes.array
}

export default ListView;
  