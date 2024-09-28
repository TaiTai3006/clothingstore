"use client";
import React, { useState } from "react";
import "./_styleProductCard.scss";
import Image from "next/image";


const StyleProductCard = () => {
  return (
    <div className="styleProduct-card">
      <Image
        src="https://levents.asia/cdn/shop/articles/1_2ff07f09-1a44-4874-9b21-ebc9955965cd.png?v=1700221809"
        width={400}
        height={500}
        alt="Picture of the author"
        className="image"
      />
      <div className="name">Levents® Classic Sweater/ Blue</div>
      <button className="button">Xem bộ phối</button>
      
    </div>
  );
};

export default StyleProductCard;
