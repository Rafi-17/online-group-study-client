import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const SubmitAssignment = () => {
    const {user}= useContext(AuthContext);
    console.log(user);
    const res=useLoaderData();
    const assignment=res.data;
    const {title, marks}= assignment;
    const handleSubmitAssignment=e=>{
        e.preventDefault();
        const form= e.target;

        const pdfLink=form.pdfLink.value;
        const note=form.note.value;
        const email= user?.email;
        const name=user?.displayName;
        const newSubmittedAssignment= {pdfLink, note, email, title, marks, name, status:'pending'};
        console.log(newSubmittedAssignment);

        axios.post('http://localhost:5000/submittedAssignments', newSubmittedAssignment)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment submitted successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    
    return (
        <div>
            <div className="bg-[#F4F3F0] px-4 md:px-0  mx-auto py-16">
                <h2 className="text-3xl md:text-5xl text-[#374151] text-center font-bold mb-8">Submit Assignment</h2>
                <form onSubmit={handleSubmitAssignment} className='space-y-6 md:w-3/4 mx-auto'>
                    {/* 1st row */}
                    <div className=" justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                        <div className="form-control w-full lg:w-full">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold mb-2">PDF Link</span>
                            </label>
                            <input type="text" name="pdfLink" placeholder="Enter pdf link" className="input input-bordered rounded-md w-full bg-white" required />
                        </div>
                        <div className="form-control w-full lg:w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black mb-2">Quick Note</span>
                            </label>
                            <textarea type="textarea" name="note" placeholder="Add note" className="h-36 input input-bordered rounded-md w-full bg-white" required />
                           
                        </div>
                    </div>
                    <div className='w-full px-8 md:px-16 lg:px-28 '>
                        <input className='bg-cyan-950 font-bold cursor-pointer text-white rounded-md w-full py-3' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitAssignment;