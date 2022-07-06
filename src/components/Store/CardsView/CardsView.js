import ShopCard from "./ShopCard/ShopCard";
import propTypes from 'prop-types'

function CardsView(props) {
    return (
      <div className="cards-list">
        {props.cards.map((c, idx) => (
            <ShopCard card={c} key={'shopCard' + idx}/>
        ))}
      </div>
    );
  }

CardsView.propTypes = {
  cards: propTypes.array
}
  
export default CardsView;
  