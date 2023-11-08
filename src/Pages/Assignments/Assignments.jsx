import { useLoaderData } from "react-router-dom";
import AssignmentCard from "./AssignmentCard";
import { useState } from "react";

const Assignments = () => {
    const [selected, setSelected]= useState('All');
    const res= useLoaderData();
    const allAssignments=res.data;
    const [assignments,setAssignments]= useState(allAssignments);
    let filteredAssignments=[];
    const handleSelected=()=>{
        setSelected(document.getElementById('filter').value);
    }
    if(selected=='All'){
        filteredAssignments=assignments;
    }
    else if(selected=='Easy'){
        filteredAssignments=assignments.filter(assignment=>assignment.difficulty==='Easy');
    }
    else if(selected=='Medium'){
        filteredAssignments=assignments.filter(assignment=>assignment.difficulty==='Medium');
    }
    else{
        filteredAssignments=assignments.filter(assignment=>assignment.difficulty==='Hard');
    }
    console.log(filteredAssignments);
    return (
        <div>
            <h2 className="text-center font-bold text-4xl mt-10">Total Assginments: {filteredAssignments.length}</h2>
            <div className="flex items-center justify-center gap-4 mt-4 mb-8">
                <p className="text-xl font-semibold">Filter: </p>
                <select name="difficulty" id="filter" defaultValue={'All'} onChange={handleSelected} className="border-2 border-black rounded select-bordered">
                                    <option>All</option>
                                    <option>Easy</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    filteredAssignments.map(assignment=><AssignmentCard key={assignment._id} assignments={assignments} setAssignments={setAssignments} assignment={assignment}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;