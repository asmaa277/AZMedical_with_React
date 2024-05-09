import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Customers ()
{
     let [specialty, setspecialty] = useState([]);

     async function getSpecialties() {
       let allSpecialties = await axios.get("http://localhost:3000/customers");
       setspecialty(allSpecialties.data);
     }
     useEffect(() => {
       getSpecialties();
     }, []);

     function showSpecialties() {
       if (specialty.length > 0) {
         return (
           <div>
             <h1 className="alert alert-success text-center fs-1 m-4">
               The patients
             </h1>
             <table className="table table-borderd table-striped table-hover">
               <thead>
                 <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Email</th>
                   <th>Phone</th>
                   <th>Address</th>
                 </tr>
               </thead>
               <tbody>
                 {specialty.map((cust) => (
                   <tr key={cust.id}>
                     <td>{cust.id}</td>
                     <td>{cust.name}</td>
                     <td>{cust.email}</td>
                     <td>{cust.phone}</td>
                     <td>{cust.address}</td>
                     <td>
                       <Link
                         to={`/edite/${[cust.id]}`}
                         className="btn btn-primary"
                       >
                         <i className="bi bi-pencil-square"></i>
                       </Link>

                       <Link
                         to={`/delete/${cust.id}`}
                         className="btn btn-danger"
                       >
                         <i className="bi bi-trash"></i>
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
           <h1 className="alert alert-danger text-center m-3">
             There are no specialty to Display
           </h1>
         );
       }
     }

     return (
       <div>
         {showSpecialties()}
         <Link to="/contact" className="btn btn-success">
           Back to Contact
         </Link>
       </div>
     );
}

export default Customers;