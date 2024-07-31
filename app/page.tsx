"use client";
import "./_home.scss";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ProductCard } from "./components/ProductCard/ProductCard";

export default function Home() {
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
    </div>
  );
}
