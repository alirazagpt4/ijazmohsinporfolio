import { skills } from "../constants";
const TechnicalCoursesandTraining = () => {
    
    return (
      <div className="border-b border-neutral-800 pb-12">
        <h2 className="my-20 text-center text-4xl font-bold">Technical Courses & Training</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-lg font-medium text-white text-center">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TechnicalCoursesandTraining;
  