import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import MyAssignmentsRow from "./MyAssignmentsRow";

const MyAssignments = () => {
    const [myAssignments, setMyAssignments] =useState([]);
    const {user}= useContext(AuthContext);
    const url=`https://online-group-study-server-sand.vercel.app/submittedAssignment?email=${user?.email}`
    useEffect(()=>{
        axios.get(url, {withCredentials:true})
        .then(res=>{
            console.log(res.data);
            setMyAssignments(res.data)
        })
    },[url])

    return (
        <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead className="font-bold text-black text-lg">
        <tr>
            <th>Assignment title</th>
            <th>Status</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Feedback</th>
            {/* <th><button>Give mark</button></th> */}
        </tr>
        </thead>
        <tbody>
        {
            myAssignments.map(assignment =><MyAssignmentsRow assignment={assignment} key={assignment._id}></MyAssignmentsRow>)
        }
        
        </tbody>
    </table>
    </div>
    );
};

export default MyAssignments;