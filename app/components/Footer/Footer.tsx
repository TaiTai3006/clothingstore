"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./_footer.scss";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { IconContext } from "react-icons";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <Row>
        <Col className="col-logo">
          <div className="logo">LEVENTS</div>
          <div className="text-footer">Levents® - Share your Color</div>
          <button className="button-footer">Xem ngay</button>
        </Col>
        <Col className="col-info">
          <Row className="contact-container">
            <Col className="col-contact">
              <Col>Liên hệ</Col>
              <Col className="contact-title">
                <div>
                  Hotline <br></br>
                  1900 633 028
                </div>
              </Col>
              <Col className="contact-title">
                <div>
                  Email for customer <br></br>
                  customercare@levents.asia
                </div>
              </Col>
              <Col className="contact-title">
                <div>
                  Email for business <br></br>
                  business@levents.asia
                </div>
              </Col>
              <Col className="contact-title">
                <div>
                  Email for recruitment <br></br>
                  hr-admin@levents.asia
                </div>
              </Col>
              <Col className="contact-title">
                <div className="logo-media">
                  <IconContext.Provider value={{ size: "18px" }}>
                    <FaFacebookSquare />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTiktok />
                  </IconContext.Provider>
                </div>
              </Col>
            </Col>
            <Col className="col-store">
              <Col >Cửa hàng</Col>
              <Col className="contact-title">
                139E Nguyễn Trãi, Phường Bến Thành, Quận 1, HCM
              </Col>
              <Col className="contact-title">
                842 Sư Vạn Hạnh, phường 12, quận 10, HCM
              </Col>
              <Col className="contact-title">
                54 Mậu Thân, An Phú, quận Ninh Kiều, Cần Thơ
              </Col>
            </Col>
            <Col className="col-support">
              <Col>Hỗ trợ</Col>
              <Col className="contact-title">Easy shopping</Col>
              <Col className="contact-title">Tài khoản</Col>
              <Col className="contact-title">Hướng dẫn đo size</Col>
              <Col className="contact-title">Chính sách đổi trả</Col>
              <Col className="contact-title">Chính sách vận chuyển</Col>
              <Col className="contact-title">Chính sách membership</Col>
              <Col className="contact-title">Chính sách bảo hành</Col>
              <Col className="contact-title">
                Hướng dẫn mua hàng và bảo quản
              </Col>
            </Col>
            <Col className="col-extend">
              <Col>Mở rộng</Col>
              <Col className="contact-title">CSR</Col>
              <Col className="contact-title">Tuyển dụng</Col>
              <Col className="contact-title">Outfit</Col>
              <Col className="contact-title">Blog</Col>
              <Col className="contact-title">Crew</Col>
              <Col className="contact-title">Unbox - Clip</Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>
  );
};
