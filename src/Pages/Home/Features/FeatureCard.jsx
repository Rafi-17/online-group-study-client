
const FeatureCard = ({feature}) => {
    const {image, heading, description}= feature;
    return (
        <div className="card hero bg-base-100 shadow-xl rounded-md" style={{backgroundImage: `url(${image})`}}>
            <div className="hero-overlay bg-opacity-70 rounded-md"></div>
            <div className="card-body flex flex-col  text-white">
                <h2 className="text-3xl font-bold">{heading}</h2>
                <p className="flex-1">{description}</p>
                <div className="justify-end">
                <   button className="border-none btn btn-primary bg-violet-500">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;