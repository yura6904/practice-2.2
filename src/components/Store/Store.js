import { useEffect, useState } from "react";
import CardsView from "./CardsView/CardsView";
import IconSwitch from "./IconSwitch/IconSwitch";
import ListView from "./ListView/ListView";

function Store() {
    const [products, setProducts] = useState(
      [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }])
    const [icon, setIcon] = useState('view_list')

    const switchView = (icon) => {
        if (icon === 'view_list') {
            setIcon('view_card')
        }
        else {
            setIcon('view_list')
        }
    }

    return (
        <div className="store">
            <IconSwitch icon={icon} onSwitch={switchView} />
            {icon  === 'view_list' ? <ListView items={products}/>
            : <CardsView cards={products}/>}
        </div>
    );
}

export default Store;
