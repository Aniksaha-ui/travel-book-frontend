import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../components/firebase.init";
import { useQuery } from "react-query";
const useCart = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const {
    data: cart,
    isLoading,
    refetch,
  } = useQuery("cart", () =>
    fetch(`https://stormy-gorge-53796.herokuapp.com/booking/${email}`, {}).then(
      (res) => res.json()
    )
  );

  return [cart, isLoading, refetch];
};

export default useCart;
