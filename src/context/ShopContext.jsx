import React, { createContext, useContext, useState, useEffect } from "react";
import API from "../api/axios";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import Registration from "../components/auth/Registration";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const { user,
    showAuth,
    setShowAuth,
    isLoginView,
    setIsLoginView } = useAuth();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [likelist, setLikelist] = useState([]);


  const isLiked = (id) => likelist.includes(id);
  const isCart = (id) => cart.includes(id);


  // Jab User Login ho, tabhi Cart aur Wishlist load karo
  const toggleLike = async (id) => {
    if (user === null) return setShowAuth(true)
    
    try {
      if (isLiked(id)) {
        // --- UNLIKE ---
        // array se hatao
        const updated = likelist.filter(pid => pid !== id);
        setLikelist(updated);

        console.log("Unliked:", id);

        // backend call (optional)
        // await axios.post("/api/unlike", { id });

      } else {
        // --- LIKE ---
        // array me add karo
        const updated = [...likelist, id];
        setLikelist(updated);

        console.log("Liked:", id);

        // backend call (optional)
        // await axios.post("/api/like", { id });
      }

    } catch (error) {
      console.log("toggleLike", error);
    }
  };

  const addToCart = async (id) => {
    console.log(user)
    if (user === null) return  setShowAuth(true)
    
    try {
      if (isCart(id)) {
        // --- UNLIKE ---
        // array se hatao
        const updated = cart.filter(pid => pid !== id);
        setCart(updated);

        console.log("UnCart:", id);

        // backend call (optional)
        // await axios.post("/api/unlike", { id });

      } else {
        // --- LIKE ---
        // array me add karo
        const updated = [...cart, id];
        setCart(updated);

        console.log("Add to cart:", id);

        // backend call (optional)
        // await axios.post("/api/like", { id });
      }

    } catch (error) {
      console.log('addToCart', error);
    }
  };


  return (
    <ShopContext.Provider value={{ toggleLike, addToCart, isLiked, isCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);