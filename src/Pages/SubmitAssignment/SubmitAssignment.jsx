
const SubmitAssignment = () => {
    const handleSubmitAssignment=e=>{
        e.preventDefault();
    }
    
    return (
        <div>
            <div className="bg-[#F4F3F0] px-4 md:px-0 md:w-3/4 mx-auto py-16">
                <h2 className="text-3xl md:text-5xl text-[#374151] text-center font-bold mb-8">Submit Assignment</h2>
                <form onSubmit={handleSubmitAssignment} className='space-y-6'>
                    {/* 1st row */}
                    <div className=" justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                        <div className="form-control w-full lg:w-full">
                            <label className="label">
                                <span className="label-text text-black text-xl font-semibold mb-2">PDF Link</span>
                            </label>
                            <input type="text" name="title" placeholder="Enter pdf link" className="input input-bordered rounded-md w-full bg-white" required />
                        </div>
                        <div className="form-control w-full lg:w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-black mb-2">Quick Note</span>
                            </label>
                            <textarea type="textarea" name="title" placeholder="Add note" className="h-36 input input-bordered rounded-md w-full bg-white" required />
                           
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