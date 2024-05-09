import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function AllSpecialties() {
  let [specialty, setspecialty] = useState([]);

  

  // //////
  let [searchText, setSearchText] = useState("");
  
 function handleSearchChange(event) {
   setSearchText(event.target.value);
 }

  let [filterCustCatId, setFilterCustCatId] = useState(0);


  function handleCategoryChange(event) {
    setFilterCustCatId(Number(event.target.value));
  }

  let [custCategories, setCustCategories] = useState([]);

  async function getAllCustomerCategories() {
    let custCats = await axios.get("http://localhost:3000/customerCategories");
    setCustCategories(custCats.data);
  }

  async function getCustomers() {
    let result;
    if (
      filterCustCatId !== undefined &&
      filterCustCatId > 0 &&
      (searchText === undefined || searchText.trim() === "")
    ) {
      console.log("Hi from Filter only");

      result = await axios.get(
        `http://localhost:3000/customers?customerCategoryId=${filterCustCatId}`
      );
    } else if (
      searchText !== undefined &&
      searchText.trim().length > 0 &&
      (filterCustCatId === undefined || filterCustCatId === 0)
    ) {
      console.log("Hi from Search only");
      result = await axios.get(
        `http://localhost:3000/specialties?q=${searchText.trim()}`
      );
    } else if (
      filterCustCatId !== undefined &&
      filterCustCatId > 0 &&
      searchText !== undefined &&
      searchText.trim().length > 0
    ) {
      console.log("Hi from Filter and Search");
      result = await axios.get(
        `http://localhost:3000/customers?customerCategoryId=${filterCustCatId}&q=${searchText}`
      );
    } else {
      console.log("Hi from No Filter and No Search");
      result = await axios.get("http://localhost:3000/specialties");
    }

    setspecialty(result.data);
  }

  useEffect(() => {
    getCustomers();
  }, [filterCustCatId, searchText]);
  useEffect(() => {
    getAllCustomerCategories();
  }, [] );
  


  async function getSpecialties() {
    let allSpecialties = await axios.get("http://localhost:3000/specialties");
    setspecialty(allSpecialties.data);
  }
  useEffect(() => {
    getSpecialties();
  }, []);

  function showSpecialties() {
    if (specialty.length > 0) {
      return (
        <div>
          <div className="input-group w-75 m-auto mt-4">
            <input
              placeholder="Search"
              type="text"
              className="form-control"
              onChange={handleSearchChange}
            />
          </div>

          <h1 className="alert alert-success text-center fs-1 m-4">
            Specialties
          </h1>
          <table className="table table-borderd table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {specialty.map((cust) => (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.description}</td>
                  <td>
                    <Link
                      to={`/Details/${cust.id}`}
                      className="btn btn-success"
                    >
                      <i className="bi bi-list-ul"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <div className="input-group w-75 m-auto mt-4">
            <input
              placeholder="Search"
              type="text"
              className="form-control"
              onChange={handleSearchChange}
            />
          </div>
          <h1 className="alert alert-danger text-center m-3">
            There are no specialty to Display
          </h1>
        </div>
      );
    }
  }

  return (
    <div>
      {showSpecialties()}
      <Link to="/about" className="btn btn-success">
        Back to About
      </Link>
    

     
    </div>
  );
}

export default AllSpecialties;
