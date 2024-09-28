"use client";
import "./_home.scss";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useRef } from "react";
import { ProductCard } from "./components/ProductCard/ProductCard";
import StyleProductCard from "./components/StyleProduct/StyleProductCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null); // Chỉ định kiểu HTMLDivElement

  const [srcollIndex, setSrocllIndex] = useState(0);

  const handleScroll = (typeScroll = false) => {
    if (contentRef.current) {
      const scrollAmount = contentRef.current.clientWidth * 0.25; // 25% chiều rộng của thẻ div
      contentRef.current.scrollBy({
        left: scrollAmount * (typeScroll ? 1 : -1), // Trượt ngang 25% của chiều rộng
        behavior: "smooth", // Hiệu ứng trượt mượt
      });
    }
  };

  const handleNext = () => {
    if (srcollIndex !== 10 - 5) {
      handleScroll(true);
      setSrocllIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (srcollIndex !== 0) {
      handleScroll();
      setSrocllIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="home-container">
      <div className="img-banner-container">
        <Image
          src="https://levents.asia/cdn/shop/files/DESKTOP-2--2.jpg?v=1719765473&width=2000"
          alt="External Image"
          unoptimized
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="btn-text">Xem sản phẩm</div>
      </div>
      <Container>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="NEW ARRIVAL">
            <Row>
              {[...new Array(4)].map((index) => {
                return (
                  <Col key={index}>
                    <ProductCard />
                  </Col>
                );
              })}
            </Row>
          </Tab>
          <Tab eventKey="profile" title="BEST SELLER">
            <Row>
              {[...new Array(4)].map((index) => {
                return (
                  <Col key={index}>
                    <ProductCard />
                  </Col>
                );
              })}
            </Row>
          </Tab>
        </Tabs>
      </Container>

      <div className="styling-container">
        <div className="title">
          <div className="title-name">STYLING</div>
          <button className="title-button">Xem tất cả</button>
        </div>
        {/* <button className="title-button" onClick={handleScroll}>
            Next
          </button> */}
        <div className="content" ref={contentRef}>
          {[...new Array(10)].map((_, index) => {
            return (
              <div className="content-container" key={index}>
                <StyleProductCard />
              </div>
            );
          })}
        </div>
        <div className="icon">
          <IoIosArrowBack
            onClick={handlePrev}
            className="back-icon"
            style={
              srcollIndex !== 0
                ? { color: "black", cursor: "pointer" }
                : { color: "gray", cursor: "not-allowed" }
            }
          />

          <IoIosArrowForward
            onClick={handleNext}
            className="next-icon"
            style={
              srcollIndex !== 10 - 5
                ? { color: "black", cursor: "pointer" }
                : { color: "gray", cursor: "not-allowed" }
            }
          />
        </div>
      </div>

      <div className="color-gradient-container">
        <div className="video">
          <video width="600" controls autoPlay muted loop>
            <source
              src="https://levents.asia/cdn/shop/videos/c/vp/f79cc84849cb42b488b9840d8732a7e8/f79cc84849cb42b488b9840d8732a7e8.HD-1080p-7.2Mbps-32553133.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="content">
          <h2>LEVENTS® S/S24 VACATION DREAM COLLECTION</h2>
          <p>
            Hè 2024 này, nhà Levents mang tới BST mới lấy cảm hứng từ không khí
            hè tươi vui, sôi động. Các thiết kế được ưu tiên tối đa sự thoáng
            mát, năng động và sáng tạo, phù hợp với tinh thần tuổi trẻ.
          </p>
          <p>
            Từng chi tiết trên các sản phẩm đều được Levents chăm chút kỹ lưỡng,
            nhằm mang đến chất lượng vượt trội cùng độ bền cao. Chất liệu được
            lựa chọn kỹ càng, tạo cảm giác thoải mái và dễ chịu cho người mặc,
            dù ở bất cứ hoạt động ngoài trời nào.
          </p>

          <p>
            Hãy tự tin thể hiện cá tính riêng của bạn, lan tỏa năng lượng tích
            cực với những sản phẩm mới nhất từ Levents nhé.
          </p>
          <button>XEM THÊM</button>
        </div>
      </div>

      <div className="image-with-text-container">
        <div className="content">
          <h2>SPECIAL DEALS FOR SUMMER</h2>
          <p>Khám phá ngay những ưu đãi khi mua sắm tại Levents.</p>
          <button>MUA NGAY</button>
        </div>
        <div className="image">
          <Image
            src="https://levents.asia/cdn/shop/files/Gi_m-ngay_074d52fe-0b52-45db-82c0-7a9a060cfc14.jpg?v=1724241286&width=1070"
            alt="External Image"
            unoptimized
            width={900}
            height={500}
            sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div className="our-collection-container">
        <div className="title">
          <div className="title-name">OUR COLLECTION</div>
          <button className="title-button">Xem tất cả</button>
        </div>

        <div className="content" ref={contentRef}>
          {[...new Array(10)].map((_, index) => {
            return (
              <div className="content-container" key={index}>
                <div className="img-container">
                  <Image
                    src="https://levents.asia/cdn/shop/collections/2.jpg?v=1710927837&width=750"
                    alt="External Image"
                    unoptimized
                    width={900}
                    height={500}
                    sizes="100vw"
                    // style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <div className="image-name">
                  LEVENTS® COLLECTION NEW BRANDING - SHARE YOUR COLOR
                </div>
              </div>
            );
          })}
        </div>
        <div className="icon">
          <IoIosArrowBack
            onClick={handlePrev}
            className="back-icon"
            style={
              srcollIndex !== 0
                ? { color: "black", cursor: "pointer" }
                : { color: "gray", cursor: "not-allowed" }
            }
          />

          <IoIosArrowForward
            onClick={handleNext}
            className="next-icon"
            style={
              srcollIndex !== 10 - 5
                ? { color: "black", cursor: "pointer" }
                : { color: "gray", cursor: "not-allowed" }
            }
          />
        </div>
      </div>

      <div className="feedback-container">
        <div className="title">
          <div className="title-name">FEEDBACK</div>
          <button className="title-button">Xem tất cả</button>
        </div>

        <div className="content" ref={contentRef}>
          {[...new Array(10)].map((_, index) => {
            return (
              <div className="content-container" key={index}>
                <div className="img-container">
                  <Image
                    src="https://levents.asia/cdn/shop/files/hinh_nh_59.jpg?v=1724403708&width=500"
                    alt="External Image"
                    unoptimized
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            );
          })}
          <div className="icon">
          <IoIosArrowBack
            onClick={handlePrev}
            className="back-icon"
            style={
              srcollIndex !== 0
                ? { color: "black", cursor: "pointer" }
                : { color: "gray", cursor: "not-allowed" }
            }
          />

          <IoIosArrowForward
            onClick={handleNext}
            className="next-icon"
            style={
              srcollIndex !== 10 - 5
                ? { color: "black", cursor: "pointer" }
                : { color: "gray", cursor: "not-allowed" }
            }
          />
        </div>
        </div>
        
      </div>
    </div>
  );
}
