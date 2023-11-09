import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const MyAssignments = () => {
    const {user}= useContext(AuthContext);
    const url=`http://localhost:5000/submittedAssignments?email=${user?.email}`
    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            console.log(res.data);
        })
    },[url])

    return (
        <div>
            
        </div>
    );
};

export default MyAssignments;