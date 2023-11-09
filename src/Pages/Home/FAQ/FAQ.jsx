
const Faq = () => {
    return (
        <div className="mt-16 ">
            <h1 className="text-3xl md:text-5xl font-bold text-violet-500 text-center mb-8">Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                What makes StudyElegance unique?
                </div>
                <div className="collapse-content"> 
                    <p>StudyElegance stands out by offering personalized learning paths, interactive study guides, and collaborative study spaces. Our elegant design themes create a visually pleasing environment, making learning a sophisticated experience.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                How do I create a personalized learning path?
                </div>
                <div className="collapse-content"> 
                    <p>Creating a personalized learning path is easy! Simply navigate to your profile settings, input your learning preferences, goals, and preferred study methods. Our system will then generate a tailored study plan just for you.</p>
                </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Are the study guides suitable for all subjects?
                </div>
                <div className="collapse-content"> 
                    <p>Yes, our interactive study guides cover a wide range of subjects. Whether you&apos;re studying science, humanities, or mathematics, you&apos;ll find engaging multimedia guides to enhance your understanding and retention of key concepts.</p>
                </div>
            </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Can I collaborate with other students on StudyElegance?
                </div>
                <div className="collapse-content"> 
                    <p>Absolutely! StudyElegance provides collaborative study spaces where you can join virtual study rooms, participate in forums, and share insights with fellow students. Learning becomes a collective and enriching experience.</p>
                </div>
            </div>
                <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" /> 
                <div className="collapse-title text-xl font-medium">
                Is StudyElegance mobile-friendly?
                </div>
                <div className="collapse-content"> 
                    <p>Yes, StudyElegance is designed to be responsive across various devices. Whether you&apos;re using a computer, tablet, or smartphone, you can enjoy the elegance of our platform and continue your learning journey seamlessly on the go.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;