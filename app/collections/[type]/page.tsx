"use client";
import React, { useState, useRef, useEffect } from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./_viewCollections.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

const ViewCollections = () => {
  const [isShow, setIsShow] = useState({
    isCollection: false,
    isColor: false,
    isSize: false,
    isPrice: true,
  });
  type ShowType = "isCollection" | "isColor" | "isSize" | "isPrice";

  const handleToggleShow = (type: ShowType) => {
    console.log(type);
    setIsShow({ ...isShow, [type]: !isShow[type] });
  };

  const [showFilter, setFilter] = useState(false);

  const handleShowFilter = () => {
    setFilter(!showFilter);
    setIsShow({
      isCollection: true,
      isColor: true,
      isSize: true,
      isPrice: true,
    });
  };

  const colorList = [
    { name: "Baby Blue", value: "blue" },
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Red", value: "red" },
  ];

  const sizeList = [
    { name: "Onesize", value: "Onesize" },
    { name: "Size 0", value: "Size 0" },
    { name: "Size 1", value: "Size 1" },
    { name: "Size 2", value: "Size 2" },
  ];

  const priceList = [
    { name: "Dưới 100.000đ", value: "Dưới 100.000đ" },
    { name: "100.000đ - 300.000đ", value: "100.000đ - 300.000đ" },
    { name: "300.000đ - 600.000đ", value: "300.000đ - 600.000đ" },
    { name: "600.000đ - 1.000.000đ", value: "600.000đ - 1.000.000đ" },
  ];

  const [indexPage, setIndexPage] = useState(1);

  const productsListRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (productsListRef.current) {
  //     productsListRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [indexPage]);

  const handlePre = () => {
    if (indexPage > 1) {
      setIndexPage(indexPage - 1);
    }
  };

  const handleNext = () => {
    if (indexPage < Math.ceil(176 / (3 * 8))) {
      setIndexPage(indexPage + 1);
    }
  };

  const handleChooseIndex = (number: any) => {
    if (typeof number === "number") {
      setIndexPage(number);
    }
  };

  const Pagination = () => {
    const arraySize = 176;
    const pageList = [];

    const start = 1;

    const end = Math.floor(arraySize / (3 * 8));

    if (end <= 4) {
      for (let i = start + 1; i < end; i++) {
        pageList.push(i);
      }
    } else {
      if (indexPage < 4) {
        for (let i = start + 1; i < 5; i++) {
          pageList.push(i);
        }
        pageList.push(<IoIosMore />);
      } else if (indexPage >= end - 2) {
        pageList.push(<IoIosMore />);
        for (let i = end - 2; i < end; i++) {
          pageList.push(i);
        }
      } else {
        pageList.push(<IoIosMore />);
        pageList.push(indexPage - 1);
        pageList.push(indexPage);
        pageList.push(indexPage + 1);
        pageList.push(<IoIosMore />);
      }
    }

    return (
      <div className="pagination-container">
        {indexPage !== 1 && (
          <IoIosArrowBack style={{ cursor: "pointer" }} onClick={handlePre} />
        )}
        <div
          style={{
            textDecorationLine: indexPage === 1 ? "underline" : "none",
            cursor: "pointer",
            fontWeight: indexPage === 1 ? 500 : 300,
          }}
          onClick={() => handleChooseIndex(1)}
        >
          {start}
        </div>
        {pageList.map((data, index) => (
          <div
            style={{
              textDecorationLine: indexPage === data ? "underline" : "none",
              cursor: typeof data === "number" ? "pointer" : "ndefault",
              fontWeight: indexPage === data ? 500 : 300,
            }}
            key={index}
            onClick={() => handleChooseIndex(data)}
          >
            {data}
          </div>
        ))}
        {end > 0 && (
          <div
            style={{
              textDecorationLine: indexPage === end ? "underline" : "none",
              cursor: "pointer",
              fontWeight: indexPage === end ? 500 : 300,
            }}
            onClick={() => handleChooseIndex(end)}
          >
            {end}
          </div>
        )}
        {indexPage !== end && end > 0 && (
          <IoIosArrowForward
            style={{ cursor: "pointer" }}
            onClick={handleNext}
          />
        )}
      </div>
    );
  };

  const Filter = () => (
    <div className="filter">
      <div className="col">
        <div className="name" onClick={() => handleToggleShow("isCollection")}>
          {isShow.isCollection ? <IoIosArrowDown /> : <IoIosArrowUp />}{" "}
          Collection
        </div>
        {isShow.isCollection && (
          <div className="info">
            <div>All</div>
            {[...new Array(2)].map((data, index) => (
              <div key={index}>LEVENTS® COLLECTION SPRING/ SUMMER 2022</div>
            ))}
          </div>
        )}
      </div>

      <div className="col">
        <div className="name" onClick={() => handleToggleShow("isColor")}>
          {isShow.isColor ? <IoIosArrowDown /> : <IoIosArrowUp />} Color
        </div>
        {isShow.isColor && (
          <div className="info">
            {colorList.map((data, index) => (
              <div className="color-container" key={index}>
                <div className="color-hover">
                  <div
                    className="color"
                    style={{ backgroundColor: data.value }}
                  ></div>
                </div>

                <div className="name">{data.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="col">
        <div className="name" onClick={() => handleToggleShow("isSize")}>
          {isShow.isSize ? <IoIosArrowDown /> : <IoIosArrowUp />} Size
        </div>
        {isShow.isSize && (
          <div className="info">
            {sizeList.map((data, index) => (
              <div className="box" key={index}>
                <input type="checkbox"></input>
                <div>{data.name}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="col">
        <div className="name" onClick={() => handleToggleShow("isPrice")}>
          {isShow.isPrice ? <IoIosArrowDown /> : <IoIosArrowUp />} Price
        </div>
        {isShow.isPrice && (
          <div className="info">
            {priceList.map((data, index) => (
              <div
                className="box"
                key={index}
                style={{ justifyContent: "space-between" }}
              >
                <div style={{ width: "10%" }}>
                  <input type="checkbox"></input>
                </div>
                <div style={{ textAlign: "center" }}>{data.name}</div>
                <div style={{ width: "10%" }}></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div ref={productsListRef} className="collection-container">
      <div className="nav">
        <Navigation />
      </div>
      <div className="content">
        {/* <div className="filter">
          <div className="col">
            <div
              className="name"
              onClick={() => handleToggleShow("isCollection")}
            >
              {isShow.isCollection ? <IoIosArrowDown /> : <IoIosArrowUp />}{" "}
              Collection
            </div>
            {isShow.isCollection && (
              <div className="info">
                <div>All</div>
                {[...new Array(2)].map((data, index) => (
                  <div key={index}>LEVENTS® COLLECTION SPRING/ SUMMER 2022</div>
                ))}
              </div>
            )}
          </div>

          <div className="col">
            <div className="name" onClick={() => handleToggleShow("isColor")}>
              {isShow.isColor ? <IoIosArrowDown /> : <IoIosArrowUp />} Color
            </div>
            {isShow.isColor && (
              <div className="info">
                {colorList.map((data, index) => (
                  <div className="color-container" key={index}>
                    <div className="color-hover">
                      <div
                        className="color"
                        style={{ backgroundColor: data.value }}
                      ></div>
                    </div>

                    <div className="name">{data.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col">
            <div className="name" onClick={() => handleToggleShow("isSize")}>
              {isShow.isSize ? <IoIosArrowDown /> : <IoIosArrowUp />} Size
            </div>
            {isShow.isSize && (
              <div className="info">
                {sizeList.map((data, index) => (
                  <div className="box" key={index}>
                    <input type="checkbox"></input>
                    <div>{data.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col">
            <div className="name" onClick={() => handleToggleShow("isPrice")}>
              {isShow.isPrice ? <IoIosArrowDown /> : <IoIosArrowUp />} Price
            </div>
            {isShow.isPrice && (
              <div className="info">
                {priceList.map((data, index) => (
                  <div
                    className="box"
                    key={index}
                    style={{ justifyContent: "space-between" }}
                  >
                    <div style={{ width: "10%" }}>
                      <input type="checkbox"></input>
                    </div>
                    <div style={{ textAlign: "center" }}>{data.name}</div>
                    <div style={{ width: "10%" }}></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div> */}
        <Filter />
        <div className="products">
          <div className="products-header">
            <div className="name">
              <p>176 products</p>

              <div className="sort">
                <label>Sắp xếp theo:</label>
                <select id="cars" name="cars">
                  <option value="volvo">Sự liên quan</option>
                  <option value="saab">Bán chạy nhất</option>
                  <option value="fiat">Giá tăng dần</option>
                  <option value="audi">Giá giảm dần</option>
                </select>
              </div>
            </div>

            <button onClick={handleShowFilter} className="filter-btn">
              BỘ LỌC NÂNG CAO
            </button>
          </div>
          <div className="products-list">
            {[...new Array(3 * 8)].map((data, index) => (
              <div key={index} className="products-box">
                <ProductCard />
              </div>
            ))}
          </div>

          <Pagination />
        </div>
      </div>
      {showFilter && (
        <div className="filter-mobile">
          <div className="header">
            <IoIosArrowBack
              onClick={handleShowFilter}
              size={20}
              style={{ cursor: "pointer" }}
            />
            <h4>BỘ LỌC NÂNG CAO</h4>
            <div style={{ width: "20px" }}></div>
          </div>
          <div className="content">
            <Filter />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewCollections;
