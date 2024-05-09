
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SpecialtiesDetails() {
  let [specialty, setspecialty] = useState({
    id: 0,
    name: "",
    description: "",
  });

  let { id } = useParams();

  async function getSpecialties() {
    let allSpecialties = await axios.get(
      `http://localhost:3000/specialties/${id}`
    );
    setspecialty(allSpecialties.data);
  }
  useEffect(() => {
    getSpecialties();
  }, []);

  return (
    <div>
 
      <h1 className="alert alert-success text-center m-3">
        {specialty.name}
        Details
      </h1>
      <table className="table table-borderd table-striped table-hover caption-top">
        <tbody>
          <tr>
            <th>Id</th>
            <td>{specialty.id}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{specialty.name}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{specialty.description}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/allSpecialties" className="btn btn-success">
        Back to list
      </Link>
    </div>
  );
}

export default SpecialtiesDetails;



 