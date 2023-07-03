import { clearCart } from "../../utils/cartSlice";
import FoodItems from "./FoodItems";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const menuItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold m-2 text-2xl">Cart - {menuItem.length}</h1>
      <button
        className="p-2 m-2 bg-orange-300"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <ul>
        {menuItem.map((item) => (
          <FoodItems key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
