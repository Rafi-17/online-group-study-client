import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SubmittedAssignmentsRow = ({assignment}) => {
  const {user}= useContext(AuthContext);
  const navigate=useNavigate();
  
    const {title, marks, name, status, _id, email }= assignment;
    const handleGiveMark=()=>{
      if(email !== user?.email){
        navigate(`/giveMark/${_id}`)
      }
      else{
        Swal.fire({
          title: 'Sorry!',
          text: "You are not allowed to give marks to your own assignments",
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    }

    return (
        <tr>
      <td>
          {title}
      </td>
      <td>
        {marks}
      </td>
      <td>{name}</td>
      <td>{status}</td>
      <th>
        <button onClick={handleGiveMark} className="btn btn-ghost border-2 border-black bg-violet-500 rounded-md text-white btn-sm">Give Mark</button>
      </th>
    </tr>
    );
};

export default SubmittedAssignmentsRow;