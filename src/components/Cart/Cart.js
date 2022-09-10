import { useAuthState } from "react-firebase-hooks/auth";
import useCart from "../../Hooks/useCart";
import auth from "../firebase.init";
import ShowCart from "./ShowCart";
import Loading from "../Shared/Loading/Loading";

const Cart = () => {
  const [cart, isLoading, refetch] = useCart();

  if (isLoading) {
    return <Loading></Loading>;
  }

  const totalPriceCalculate = (cart) => {
    let totalPrice = 0;
    const cartPrice = cart.map((c) => parseInt(c.price * c.numberOfPerson));

    for (let i = 0; i < cartPrice.length; i++) {
      totalPrice = cartPrice[i] + totalPrice;
    }
    return totalPrice;
  };

  const totalTourPrice = totalPriceCalculate(cart);

  return (
    <div className="container card mt-5 p-4">
      <div class="card">
        <div class="card-body bg-primary text-white">
          <div className="d-flex align-items-center justify-content-between">
            <h6>Tour Name</h6>
            <h6>Price(indiviual)</h6>
            <h6>person</h6>
            <h6>total price</h6>
          </div>
        </div>
        {cart.map((c) => (
          <ShowCart c={c}></ShowCart>
        ))}
        <hr />
        <h6 className="text-primary text-end">total - {totalTourPrice}</h6>
      </div>
    </div>
  );
};

export default Cart;
