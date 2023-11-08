import axios from "axios";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateAssignment = () => {
    const navigate= useNavigate();
    const res= useLoaderData();
    const {title,difficulty, marks, photo, description, _id}= res.data;
    const [date,setDate]= useState(null);
    const handleDateChange=date=>{
        setDate(date);
    }
    const handleUpdateAssignment=e=>{
        e.preventDefault();
        const form= e.target;

        const title=form.title.value;
        const difficulty=form.difficulty.value;
        const marks=form.marks.value;
        const photo=form.photo.value;
        const description=form.description.value;
        const dueDate=date;

        const updatedAssignment={title, difficulty, marks, photo, description, dueDate};
        console.log(updatedAssignment);

        axios.put(`http://localhost:5000/assignment/${_id}`, updatedAssignment)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                    })
                navigate('/assignments')
            }
        })
    }

    return (
        <div>
        <div className="bg-[#F4F3F0] px-4 md:px-0 md:w-3/4 mx-auto py-16">
                <h2 className="text-3xl md:text-5xl text-[#374151] text-center font-bold mb-8">Update Assignment</h2>
                <form onSubmit={handleUpdateAssignment} className='space-y-6'>
                    {/* 1st row */}
                    <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold mb-2">Assignment Title</span>
                            </label>
                            <input defaultValue={title} type="text" name="title" placeholder="Enter title" className="input input-bordered rounded-md w-full bg-white" required />
                        </div>
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black mb-2">Difficulty</span>
                            </label>
                            <select defaultValue={difficulty} name="difficulty" className="select select-bordered w-full">
                                <option disabled selected>Select Difficulty</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold mb-2">Marks</span>
                            </label>
                            <input defaultValue={marks} type="text" name="marks" placeholder="Enter marks" className="input input-bordered rounded-md w-full bg-white" required />
                        </div>
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black mb-2">Thumbnail PhotoURL</span>
                            </label>
                            <input defaultValue={photo} type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered rounded-md w-full bg-white" required />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black mb-2">Description</span>
                            </label>
                            <input defaultValue={description} type="text" name="description" placeholder="Enter description" className="input input-bordered rounded-md w-full bg-white" required />
                        </div>
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold mb-2">Due date</span>
                            </label>
                            <ReactDatePicker  className="input input-bordered rounded-md w-full bg-white" required
                                placeholderText="Choose a date"
                                selected={date}
                                // onSelect={handleDateSelect}
                                onChange={handleDateChange} 
                            />
                        </div>
                    </div>
                    <div className='w-full px-8 md:px-16 lg:px-28 '>
                        <input className='bg-cyan-950 font-bold cursor-pointer text-white rounded-md w-full py-3' type="submit" value="Update" />
                    </div>
                </form>
            </div>

    </div>
    );
};

export default UpdateAssignment;