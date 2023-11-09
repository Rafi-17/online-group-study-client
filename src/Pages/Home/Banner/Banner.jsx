import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero pt-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={banner} className="md:max-w-lg rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-3xl md:text-5xl font-bold">Unlock Your Academic Potential with <span className='text-violet-600'>StudyElegance</span></h1>
                <p className="py-6 opacity-80">Welcome to StudyElegance, where learning meets sophistication. We believe in transforming your educational journey into a seamless and stylish experience. Our curated resources, tailored study guides, and innovative tools are designed to elevate your learning experience. Embrace a new era of academic excellence with StudyElegance, where knowledge meets elegance.</p>
                <button className="btn btn-primary bg-violet-600 btn-sm md:btn-lg">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;