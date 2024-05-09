import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function AboutUs() {


  return (
    <div className="heder">
      <div
        id="carouselExampleRide"
        className="carousel slide position-relative"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../img/banner3.jpg")}
              className="d-block w-100 img-slider"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/istockphoto-1072286960-612x612.jpg")}
              className="d-block w-100 img-slider"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/hero-bg.jpg")}
              className="d-block w-100 img-slider"
              alt="..."
            />
          </div>
        </div>
        <div className="info-slider col-3">
          <h1>Medical About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Iusto Odit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Iusto Odit
            rerum consequatur.
          </p>
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleRide"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="container index-cards">
        <div className="under-line">
          <h2 className="main-tittle">Specialties</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 card-box">
              <img
                src={require("../img/istockphoto-1194794294-612x612.jpg")}
                className="card-img-top img hover"
                alt="img"
              />
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fa-solid fa-baby"></i> Name specialty
                </h4>
                <p className="card-text lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt ducimus animi debitis, earum, tenetur reiciendis
                  autem eligendi ipsa ut nemo recusandae.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-box">
              <img
                src={require("../img/istockphoto-613751066-612x612.jpg")}
                className="card-img-top img"
                alt="img"
              />
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fa-solid fa-stethoscope icon"></i> Name
                  specialty
                </h4>
                <p className="card-text lead">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt ducimus animi debitis, earum, tenetur reiciendis
                  autem eligendi ipsa ut nemo recusandae.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-box">
              <img
                src={require("../img/istockphoto-871584922-612x612.jpg")}
                className="card-img-top img"
                alt="img"
              />
              <div className="card-body">
                <h4 className="card-title">
                  <i className="fa-solid fa-lungs"></i> Name specialty
                </h4>
                <p className="card-text lead">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt ducimus animi debitis, earum, tenetur reiciendis
                  autem eligendi ipsa ut nemo recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavLink to="/allSpecialties" className="btn btn-primary m-4">
        Show More Specialties
      </NavLink>
    </div>
  );
}

export default AboutUs;
