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
      </div>
    </div>
  );
};

export default Cart;
