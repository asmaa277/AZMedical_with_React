import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditeBook() {
 
  let urlParametersObj = useParams();
  let customerId = urlParametersObj.id;
  let navigate = useNavigate();

  let [customer, setCustomers] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    
  });
 

  async function getCustomer() {
    let cats = await axios.get(`http://localhost:3000/customers/${customerId}`);
    setCustomers(cats.data);
  }
  useEffect(() => {
    getCustomer();
  }, []);

  function handleChange(event) {
    setCustomers({ ...customer, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    axios.put(`http://localhost:3000/customers/${customerId}`, customer);
    navigate("/customers");
  }
  return (
    <div>
      <h1 className="alert alert-primary text-center m-3">
        Edit {customer.name}
      </h1>

      <div className="row">
        <form className="col-4" onSubmit={handleSubmit}>
          <div className="m-4">
            <label className="form-label" style={{ float: "left" }}>
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={customer.name}
              onChange={handleChange}
            ></input>
          </div>

          <div className="m-4">
            <label className="form-label" style={{ float: "left" }}>
              Email
            </label>
            <input
              type="text"
              name="email"
              value={customer.email}
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>

          <div className="m-4">
            <label className="form-label" style={{ float: "left" }}>
              phone
            </label>
            <input
              type="text"
              name="phone"
              value={customer.phone}
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>

          <div className="m-4">
            <label className="form-label" style={{ float: "left" }}>
              address
            </label>
            <input
              type="text"
              value={customer.address}
              name="address"
              className="form-control"
              onChange={handleChange}
            ></input>
          </div>

          <button type="submit" className="btn btn-success mt-2 col-3">
            Edit
          </button>
          <Link to="/customers" className="btn btn-primary mt-2">
            Go to list
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EditeBook;
