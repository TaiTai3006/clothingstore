"use client";
import "@/app/components/Header/_header.scss";
import { useEffect, useState } from "react";
import {
  CiMenuBurger,
  CiSearch,
  CiShoppingBasket,
  CiUser,
} from "react-icons/ci";
import { IconContext } from "react-icons";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdNavigateNext } from "react-icons/md";

export const Header = () => {
  const [time, setTime] = useState(10);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime((prevTime) => {
  //       if (prevTime == 0) {
  //         clearInterval(intervalId);
  //       }
  //       return prevTime - 1;
  //     });
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <header>
      <div className="sale-container">
        <div style={{ marginRight: "10px" }}>
          Sale 25.06 up to 50% <u>đang diễn ra</u> trong{" "}
        </div>
        <div className="sale-time-box">
          <div>00</div>
          <div className="text-time">Giờ</div>
        </div>
        <div className="sale-time-box">
          <div>00</div>
          <div className="text-time">Phút</div>
        </div>
        <div className="sale-time-box">
          <div>{time}</div>
          <div className="text-time">Giây</div>
        </div>
      </div>

      <div className="header-container">
        <IconContext.Provider value={{ size: "25px" }}>
          <div className="menu">
            <CiMenuBurger style={{ cursor: "pointer" }} onClick={handleShow} />
            <CiSearch className="search-mobile"/>
          </div>
          <div className="logo">Levents</div>
          <div className="combo-logo">
            <CiSearch  className="search-web"/>
            <CiShoppingBasket />
            <CiUser />
          </div>
        </IconContext.Provider>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontSize: "18px" }}>
            Danh mục
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: "0" }}>
          <ul className="menu-nav">
            <IconContext.Provider value={{ size: "25px", color: "#939393" }}>
              <li>NEW ARRIVAL</li>
              <li>ALL PRODUCTS</li>
              <li>
                TOPS <MdNavigateNext />
              </li>
              <li>
                BOTTOMS <MdNavigateNext />
              </li>
              <li>
                OUTERWEAR <MdNavigateNext />
              </li>
              <li>
                ACCESSORIES <MdNavigateNext />
              </li>
              <li>LEVENTS CLASSIC</li>
              <li>SPECIAL PRICES</li>
            </IconContext.Provider>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};
