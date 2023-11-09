import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
    const res=useLoaderData();
    const assignment = res.data;
    console.log(assignment);
    const{pdfLink, note, _id}= assignment;

    const handleGiveMark=e=>{
        e.preventDefault();
        const checkedAssignment={
            status:'completed',
            obtainedMark: e.target.givenMark.value,
            feedback: e.target.feedback.value
        }
        

        axios.patch(`https://online-group-study-server-sand.vercel.app/submittedAssignment/${_id}`,checkedAssignment)
        .then(res=>{
            if(res.data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment checked successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                    })
            }
        })
    }

    return (
        <div className="mt-8">
            <h2><span className="text-lg font-bold text-violet-500">PDF Link:</span> {pdfLink}</h2>
            <p><span className="text-lg font-bold text-violet-500">Quick Note:</span> {note}</p>
            <div className="bg-[#F4F3F0] px-4 md:px-0  mx-auto py-16">
                <h2 className="text-3xl md:text-5xl text-[#374151] text-center font-bold mb-8">Assignment Checking</h2>
                <form onSubmit={handleGiveMark} className='space-y-6 md:w-3/4 mx-auto'>
                    {/* 1st row */}
                    <div className=" justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                        <div className="form-control w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold mb-2">Mark:</span>
                            </label>
                            <input type="text" name="givenMark" placeholder="Give marks here" className="input input-bordered rounded-md w-full bg-white" required />
                        </div>
                        <div className="form-control w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black mb-2">Feedback</span>
                            </label>
                            <textarea type="textarea" name="feedback" placeholder="Give your feedback here" className="h-36 input input-bordered rounded-md w-full bg-white" required />
                           
                        </div>
                    </div>
                    <div className='w-full px-8 md:px-16 lg:px-28 '>
                        <input className='bg-cyan-950 font-bold cursor-pointer text-white rounded-md w-full py-3' type="submit" value="Give Mark" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GiveMark;