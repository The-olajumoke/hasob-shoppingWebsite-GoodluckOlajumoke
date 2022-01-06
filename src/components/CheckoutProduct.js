import React from "react";
import "./Cart.css";
import Love from "@material-ui/icons/FavoriteBorder";
import Bin from "@material-ui/icons/Delete";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, name, description, image, price, quantity }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const handleChange = (e) => {
    dispatch({
      type: "SET_QUANTITY",
      payload: { id: id, quantity: +e.target.value },
    });
  };

  return (
    <div className="cart-main-cont">
      <div className="cart-details">
        <img className="cart-item-image" src={image} alt="" />
        <div className="cart-item-title">
          <h4 className="cart-title">{name}</h4>
          <p className="cart-desc">{description}</p>
          <div className="cart__btnCont ">
            <button className="cart-button ">
              <Love className="cart__icon mr-2" />
              Save Item
            </button>

            <button
              className="cart-button cart_removeBtn"
              onClick={removeFromBasket}
            >
              <Bin />
              Remove Item
            </button>
          </div>
        </div>
        <input
          type="number"
          className=" cart-input"
          value={quantity}
          onChange={handleChange}
          min="1"
          max="5"
        />
        <span className="cart-price">{price}</span>

        <span className="cart-price">{+price * +quantity}</span>
      </div>
    </div>
  );
}

export default CheckoutProduct;
