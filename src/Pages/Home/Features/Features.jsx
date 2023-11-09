import { useEffect } from "react";
import { useState } from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
    const [features, setFeatures]= useState([]);
    useEffect(()=>{
        fetch('features.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-violet-500 text-center mt-12 mb-8">Our Features</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-0 gap-6">
                {
                    features.map(feature=><FeatureCard key={feature.id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Features;