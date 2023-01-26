import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero-img.png";
import counterImg from "../assets/images/counter-timer-img.png";

import products from "../assets/data/products";
import "../styles/home.css";
import Services from "../services/Services";
import ProductList from "../components/UI/ProductList";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trandingProducts, setTrandingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProduct = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProduct = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProduct = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProduct = products.filter(
      (item) => item.category === "watch"
    );

    setTrandingProducts(filteredTrendingProduct);
    setBestSalesProducts(filteredBestSalesProduct);
    setMobileProducts(filteredMobileProduct);
    setWirelessProducts(filteredWirelessProduct);
    setPopularProducts(filteredPopularProduct);
  }, []);

  return (
    <>
      <Helmet title={"home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <p className="hero_subtitle">Trending Product in {year}</p>
                  <h2>Make Your Interior More Minimalistic & Modren</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem atque earum soluta voluptate reprehenderit quibusdam
                    itaque quas ea modi placeat incidunt vero hic cumque,
                    laborum, fuga possimus minus similique dicta libero, numquam
                    optio molestiae.
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                    <Link to="/shop">SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero_img">
                  <img src={heroImg} alt="hero-img" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services />

        <section className="trending_products">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Trending Products</h2>
              </Col>
              <ProductList data={trandingProducts} />
            </Row>
          </Container>
        </section>

        <section className="best_sales">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section_title">Best Sales</h2>
              </Col>
              <ProductList data={bestSalesProducts} />
            </Row>
          </Container>
        </section>

        <section className="timer_count">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="clock_top-content">
                  <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
                  <h3 className="text-white fs-5 mb-3">Quality ArmChair</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn store_btn"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg="6" md="6" className="text-end">
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="new_arrival">
          <Container>
            <Row>
              <Col lg="12" md="12" className="text-center mb-5">
                <h2 className="section_title">New Arrivals</h2>
              </Col>
              <ProductList data={mobileProducts} />
              <ProductList data={wirelessProducts} />
            </Row>
          </Container>
        </section>

        <section className="popular_category">
          <Container>
            <Row>
              <Col lg="12" md="12" className="text-center">
                <h2 className="section_title">Popular in Category</h2>
              </Col>
              <ProductList data={popularProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
