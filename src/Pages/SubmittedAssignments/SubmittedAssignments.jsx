import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentsRow from "./SubmittedAssignmentsRow";

const SubmittedAssignments = () => {
    const res=useLoaderData();
    const allSubmittedAssigments=res.data;

    console.log(allSubmittedAssigments); 
    return (
        <div>
      <h2 className="text-3xl md:text-5xl font-bold text-center my-10">
        Total pending assignments: {allSubmittedAssigments.length}
      </h2>
    <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead className="font-bold text-black text-lg">
        <tr>
            <th>Assignment title</th>
            <th>Total Marks</th>
            <th>Examinee Name</th>
            <th>Status</th>
            {/* <th><button>Give mark</button></th> */}
        </tr>
        </thead>
        <tbody>
        {
            allSubmittedAssigments.map(assignment =><SubmittedAssignmentsRow assignment={assignment} key={assignment._id}></SubmittedAssignmentsRow>)
        }
        
        </tbody>
    </table>
    </div>
    </div>
    );
};

export default SubmittedAssignments;