import { Link, NavLink } from "react-router-dom";
// import FeatureedProducts from "./FeatureedProducts";
import "./style.css";
//  import img from "./banner3.jpg"

function Home() {
  return (
    <div>
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
          <h1>Medical</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Iusto Odit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit, Iusto Odit
            rerum consequatur.
          </p>
          <Link to={"/about"}>
            {" "}
            <button type="button" className="btn btn-slider">
              Read More
            </button>
          </Link>
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

      {/*  */}

      <div className="features" id="features">
        <h2 className="main-tittle" id="team">
          Our Team
        </h2>
        <div className="container">
          <div className="box">
            <div className="image quality">
              <img src={require("../img/doctor-1.jpg")} alt="" />
            </div>
            <div className="content quality">
              <h2>Mohamed Ali</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                debitis Tenetur debitis cumque rerum minus
              </p>
              <NavLink to="/doctorDetails" className="button">
                More
              </NavLink>
            </div>
          </div>

          <div className="box">
            <div className="image Time">
              <img src={require("../img/doctor-3.jpg")} alt="" />
            </div>
            <div className="content Time">
              <h2>Ahmed Elsayed</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                debitis Tenetur debitis cumque rerum minus
              </p>
              <NavLink to="/doctorDetails" className="button">
                More
              </NavLink>
            </div>
          </div>

          <div className="box">
            <div className="image Passion">
              <img src={require("../img/doctor-1.jpg")} />
            </div>
            <div className="content Passion">
              <h2>Osama Ahmed</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit .
                Tenetur debitis Tenetur debitis cumque rerum minus
              </p>
              <NavLink to="/doctorDetails" className="button">
                More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="spicks"></div>
    </div>
  );
}

export default Home;
