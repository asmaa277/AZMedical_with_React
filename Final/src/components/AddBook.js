import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook ()
{
      let [specialty, setspecialty] = useState({
        id: 0,
        name: "",
        description: "",
      } );
    
    let navigate = useNavigate();
    function handleNameChange ( event )
    {
        setspecialty( { ...specialty, name: event.target.value } );
    }

       function handleEmailChange(event) {
         setspecialty({ ...specialty, email: event.target.value });
    }
    
       function handlePhoneChange(event) {
         setspecialty({ ...specialty, phone: event.target.value });
    }
       function handleAdressChange(event) {
         setspecialty({ ...specialty, adress: event.target.value });
    }
    
    function handleSubmite ()
    {
        axios.post( `http://localhost:3000/customers`, specialty );
        navigate("/customers");
    }
}