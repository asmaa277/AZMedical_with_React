import { Link } from "react-router-dom";
import "./style.css";
function DoctorDetails() {
  return (
    <div>
      <div className="team" id="team">
        <h2 className="main-tittle">Doctor Details</h2>
        <div className="container">
          <div className="box">
            <div className="info">
              <img src={require("../img/doctors-2.jpg")} alt="" />
              <ul>
                <li>
                  <a href="https://www.facebook.com">
                    {" "}
                    <i className=" bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    {" "}
                    <i className=" bi bi-twitter "></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    {" "}
                    <i className=" bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    {" "}
                    <i className="bi bi-youtube "></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="data">
              <h3>Asmaa Ahmed</h3>
              <p>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
              </p>
            </div>
          </div>
          <div className="doctorDetailsInfo">
            <h1 className="doctorDetailsInfoH1">Asmaa Ahmed</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              ducimus animi debitis, earum, tenetur reiciendis autem eligendi
              ipsa ut nemo recusandae. Assumenda, suscipit aspernatur
              consectetur quisquam facere est. Quam, exercitationem!
            </p>
           
            <Link to={`/contact`} className="btn btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
