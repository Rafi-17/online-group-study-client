import { useContext } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
const AssignmentCard = ({assignment, assignments, setAssignments}) => {
    const {user} = useContext(AuthContext);
    const {photo, title, marks, _id, difficulty, email, dueDate}= assignment;
    const navigate= useNavigate();
    const hanldeUpdate=()=>{
        if(user?.email === email){
            navigate(`/updateAssignment/${_id}`)
        }
        else{
            Swal.fire({
                title: 'Sorry!',
                text: "You are not allowed to update other's assignments",
                icon: 'error',
                confirmButtonText: 'Ok'
              })

        }
    }
    const hanldeDelete=(id)=>{
        if(user?.email === email){
            axios.delete(`http://localhost:5000/assignment/${id}`)
            .then(res=>{
                if(res.data.deletedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment deleted successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                        })
                    const remaining= assignments.filter(assignment => assignment._id !== id);
                    setAssignments(remaining);
                }
            })
        }
        else{
            Swal.fire({
                title: 'Sorry!',
                text: "You are not allowed to delete other's assignments",
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
    }
    return (
        <div className="">
            <div className="card card-compact gap-5  bg-base-300 shadow-xl p-4">
                <div className="flex gap-6">
                    <div>
                        <figure><img className="h-28 w-32 rounded" src={photo} alt="thumbnail" /></figure>
                    </div>
                    <div className="flex flex-col justify-end flex-1 gap-2">
                        <Link to={`/viewAssignment/${_id}`}><button className="bg-slate-700 text-white py-1 w-[150px] rounded text-sm flex items-center gap-7 px-2"><HiOutlineViewGridAdd className=""></HiOutlineViewGridAdd> View Full</button></Link>
                        <button onClick={hanldeUpdate} className="bg-slate-700 text-white py-1 w-[150px] rounded text-sm flex items-center gap-7 px-2"><AiOutlineEdit className="text-white"></AiOutlineEdit> Update</button>
                        <button onClick={()=>hanldeDelete(_id)} className="bg-red-600 text-white py-1 w-[150px] rounded text-sm flex items-center gap-7 px-2"><AiOutlineEdit className="text-white"></AiOutlineEdit> Delete</button>
                    </div>
                    <div>
                        <h4 className="bg-violet-500 rounded px-2 text-xs font-semibold text-white">{difficulty}</h4>
                    </div>
                </div>
                <div className="space-y-1">
                    <h2 className="font-semibold"><span className="font-bold text-violet-500 text-lg">Assignment Name:</span> {title}</h2>
                    <p className="font-semibold"><span className="font-bold text-violet-500 text-lg">Total Marks:</span> {marks}</p>
                    <p className="font-semibold"><span className="font-bold text-violet-500 text-lg">Due Date:</span> {dueDate.slice(0,10)}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;