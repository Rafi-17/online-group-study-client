import { Link, useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
    const res=useLoaderData();
    const {title, photo, marks, difficulty, description, _id}= res.data;

    return (
        <div className="mt-10">
            <div className="md:flex py-8 px-4 gap-8 relative bg-gray-800 rounded">
                <div className="md:w-1/3">
                    <figure><img className="h-40 md:h-64 mx-auto mb-6 md:mb-0" src={photo} alt="Album"/></figure>
                </div>
                <div className="md:w-2/3 text-white">
                    <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
                    <p className="font-bold text-lg"><span className="  ">Total Marks:</span> {marks}</p>
                    <p className="absolute right-0 top-0 bg-violet-500 py-1 px-2 rounded text-white font-semibold">{difficulty}</p>
                    <p className="opacity-60 mb-8">{description}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/submitAssignment/${_id}`}><button className="rounded-md py-3 text-lg font-semibold px-4 bg-violet-500 border-none text-white">Take Assignment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;