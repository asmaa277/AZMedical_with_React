import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DeleteBook() {
  let [customer, setCustomers] = useState({
    id: 0,
    name: "",
    email: "",
    phone: 0,
    address: "",
    
  });
  let { id } = useParams();
  let navigate = useNavigate();

  async function getCustomer() {
    let cust = await axios.get(`http://localhost:3000/customers/${id}`);
    setCustomers(cust.data);
   
  }
  useEffect(() => {
    getCustomer();
  }, []);

 
  function deleteCust() {
    axios.delete(`http://localhost:3000/customers/${customer.id}`);
    navigate("/customers");
  }

  return (
    <div>
      <h1 className="alert alert-danger text-center m-3">
        Are you sure you want to delete {customer.name}?
      </h1>
      <table className="table table-borderd table-striped table-hover caption-top">
        <tbody>
          <tr>
            <th>Id</th>
            <td>{customer.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{customer.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{customer.email}</td>
          </tr>
          <tr>
            <th>phone</th>
            <td>{customer.phone}</td>
          </tr>
          <tr>
            <th>adress</th>
            <td>{customer.address}</td>
          </tr>
         
        </tbody>
      </table>
      <Link to="/customers" className="btn btn-success">
        Back to list
      </Link>
      <button className="btn btn-danger" onClick={deleteCust}>
        Confirm Delete
      </button>
    </div>
  );
}
export default DeleteBook;
