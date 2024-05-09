import axios from "axios";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function ContactUs() {
  let [specialty, setspecialty] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    address:""
  });

  let navigate = useNavigate();
  function handleNameChange(event) {
    setspecialty({ ...specialty, name: event.target.value });
  }

  function handleEmailChange(event) {
    setspecialty({ ...specialty, email: event.target.value });
  }

  function handlePhoneChange(event) {
    setspecialty({ ...specialty, phone: event.target.value });
  }
  function handleAdressChange(event) {
    setspecialty({ ...specialty, address: event.target.value });
  }

  function handleSubmite ( event )
  {
     event.preventDefault();
    axios.post(`http://localhost:3000/customers`, specialty);
    navigate( "/customers" );
     
  }

 

  return (
    <div>
      <form className="" onSubmit={handleSubmite}>
        <div className="col-md-6 m-4">
          <label className="form-label fs-4  " style={{ float: "left" }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control "
            id="inputEmail4"
            onChange={handleNameChange}
          />
        </div>

        <div className="col-md-6 m-4">
          <label className="form-label fs-4  " style={{ float: "left" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control "
            id="inputEmail4"
            onChange={handleEmailChange}
          />
        </div>
        <div className="col-md-6 m-4">
          <label className="form-label fs-4" style={{ float: "left" }}>
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            id="inputPassword4"
            onChange={handlePhoneChange}
          />
        </div>
        <div className="col-md-6 m-4">
          <label className="form-label fs-4" style={{ float: "left" }}>
            address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="inputPassword4"
            onChange={handleAdressChange}
          />
        </div>
        <div className="col-6 m-4">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ float: "left" }}
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
