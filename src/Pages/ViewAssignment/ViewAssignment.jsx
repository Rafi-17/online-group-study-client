import { Link, useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
    const res=useLoaderData();
    const {title, photo, marks, difficulty, description, _id}= res.data;
    return (
        <div className="mt-10">
            <div className="card lg:card-side py-8 px-4 gap-8 relative bg-gray-800 rounded">
                <figure><img className="h-64 w-[450px]" src={photo} alt="Album"/></figure>
                <div className=" text-white">
                    <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
                    <p className="font-bold text-lg"><span className="  ">Total Marks:</span> {marks}</p>
                    <p className="absolute right-0 top-0 bg-violet-500 py-1 px-2 rounded text-white">{difficulty}</p>
                    <p className="opacity-60 mb-8">{description}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/submitAssignment/${_id}`}><button className="btn bg-violet-500 border-none text-white">Take Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;