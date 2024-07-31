"use client";
import Image from "next/image";
import "./_productCard.scss";
import ReactStars from "react-stars";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";
import Carousel from "react-bootstrap/Carousel";

const imgList = [
  [
    "https://levents.asia/cdn/shop/files/LightBlue_LTSOVCOA473UB0200SS24_1.jpg?v=1719404315&width=533",
    "https://levents.asia/cdn/shop/files/LightBlue_LTSOVCOA473UB0200SS24_2.jpg?v=1719404315&width=533",
    "https://levents.asia/cdn/shop/files/LightBlue_LTSOVCOA473UB0200SS24_3.jpg?v=1719404315&width=533",
  ],
  [
    "https://levents.asia/cdn/shop/files/Pink_LTSOVCOA473UP0100SS24_1.jpg?v=1719404357&width=533",
    "https://levents.asia/cdn/shop/files/Pink_LTSOVCOA473UP0100SS24_2.jpg?v=1719404357&width=533",
    "https://levents.asia/cdn/shop/files/Pink_LTSOVCOA473UP0100SS24_3.jpg?v=1719404357&width=533",
  ],
];

export const ProductCard = () => {
  const [img, setImg] = useState(imgList[0]);

  const [index, setIndex] = useState(0);

  const handleImgPreview = (value: number) => {
    setImg(imgList[value]);
  };

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="product-card-container">
      <Carousel
        interval={null}
        prevIcon={<IoIosArrowBack style={{ color: 'black', fontSize: "1.5em" }} />}
        nextIcon={<IoIosArrowForward style={{ color: 'black',  fontSize: "1.5em" }} />}
      >
        {img.map((imgpreview, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                src={imgpreview}
                alt="External Image"
                unoptimized
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <div className="product-type">
        {imgList.map((value, index) => {
          return (
            <div
              key={index}
              style={{ marginRight: "10px" }}
              onClick={() => handleImgPreview(index)}
            >
              <Image
                src={value[0]}
                alt="External Image"
                unoptimized
                width={38}
                height={48}
                // sizes="100vw"
                // style={{ width: "100%", height: "auto" }}
              />
            </div>
          );
        })}
      </div>
      <div className="product-name">I Love Levents® Oversize Tee</div>
      <div className="product-rank">
        <ReactStars
          count={5}
          size={15}
          value={3.5}
          edit={false}
          color1={"#f3f3f3"}
          color2={"#ffb729"}
        />
      </div>
      <div className="product-price">390.000 VND</div>
    </div>
  );
};
