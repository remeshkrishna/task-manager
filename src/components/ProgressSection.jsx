import { useState, useEffect } from "react";

const ProgressBar = ({ label, percentage, gradient }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(percentage), 500); // Smooth animation
  }, [percentage]);

  return (
    <div className="w-full my-3">
      {/* Label */}
      <p className="text-lg font-semibold mb-1">{label}</p>
      
      {/* Progress Bar Container */}
      <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden">
        <div
          className="h-full text-white text-center text-sm font-bold flex items-center justify-center transition-all duration-1000"
          style={{
            width: `${progress}%`,
            background: gradient,
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

const ProgressSection = () => {
  return (
    <div className="w-[80%] mx-auto p-5 bg-gray-600 rounded-lg shadow-lg text-white hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-bold mb-4">Task Progress Overview</h2>

      {/* Progress Bars */}
      <ProgressBar 
        label="Pending Tasks" 
        percentage={40} 
        gradient="linear-gradient(to right, #ff5733, #ff8c00)" 
      />
      <ProgressBar 
        label="In Progress Tasks" 
        percentage={65} 
        gradient="linear-gradient(to right, #4b6cb7, #182848)" 
      />
      <ProgressBar 
        label="Completed Tasks" 
        percentage={90} 
        gradient="linear-gradient(to right, #1e9600, #33cc33)" 
      />
    </div>
  );
};

export default ProgressSection;
