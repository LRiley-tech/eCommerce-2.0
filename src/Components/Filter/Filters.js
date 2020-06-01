import React from "react";
import storeitem from "../Data/storeitem.json";
import ProductsBody from '../ProductsBody/ProductsBody';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "default",
      price: "default"
    }
  }

handlePriceDropdownSelect = (event) => {
  this.setState({
    price: event.target.value,
    type: event.target.value
  })
}


  render() {
    const { type, price } = this.state;
    return(
      <div>
        <div className="grid__filter">
          <label class="filters">
            Filter Type:
          </label>
          <select value={type} onChange={this.handlePriceDropdownSelect}>
            <option value="default">All</option>
            <option value="Sports">Sports</option>
            <option value="Pets">Pet-friendly</option>
            <option value="Travel">Travel</option>
            <option value="School">School</option>
          </select>
        </div>

        <div className="grid__filter">
          <label class="filters">
            Filter Type:
          </label>
          <select value={price} onChange={this.handlePriceDropdownSelect}>
            <option value="default">Price</option>
            <option value="low">$0-$20</option>
            <option value="medium">$20-$40</option>
            <option value="high">$40-$60</option>
            <option value="very-high">$60-$80</option>
          </select>
        </div>
        <div id="flex-container">
          {storeitem.map((item) => {
          if (type === 'default' &&  price === 'default') {
            return <ProductsBody item={item}/>
          } else if (type === item.type && price === item.price) {
            return <ProductsBody item={item} />
          } else if (type === item.type || price === item.price) {
            return <ProductsBody item={item} />
          } else if (type === 'default' ||  price === 'default') {
            return <ProductsBody item={item} />
          }
          // if (show) {
          //   return <ProductsBody />
          // }
          // if (price === "low") {
          //     show = false;
          // }
        })}
        </div>
      </div>
    );
  }
}


export default Filters;
