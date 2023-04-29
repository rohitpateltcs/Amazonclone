"use client";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addtoBasket } from "../slices/basketSlice";

const Product = ({ image, title, price, description, category, rating }) => {
  const product = {
    image,
    title,
    price,
    description,
    category,
    rating,
  };

  const dispatch = useDispatch();
  const addItemtoBasket = () => {
    dispatch(addtoBasket(product));
  };

  return (
    <div className="bg-gray-200 ">
      <div className=" p-2  flex flex-col items-center bg-white border-[2px]">
        <h1>{title}</h1>
        <img src={image} alt="" className="h-96 w-72" />
        <p>Price R: {price}</p>
        <button
          className="bg-yellow-300 p-2 rounded-md w-full"
          onClick={addItemtoBasket}
        >
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Product;
