import { createContext, useContext, useState } from "react";

export const JobContext = createContext();
export const useJob = () => {
  return useContext(JobContext);
};
export default function JobProvider({ children }) {
  const [selectedJobs, setSelectedJobs] = useState(
    localStorage.getItem("selectedJobs")
      ? JSON.parse(localStorage.getItem("selectedJobs"))
      : [],
  );

  function addToDashboard(item) {
    const isItemInDashboard = selectedJobs.find(
      (selectedJob) => selectedJob.id === item.id,
    );
    if (isItemInDashboard) {
      setSelectedJobs(
        selectedJobs.map((dasboardItem) =>
          dasboardItem.id === item.id
            ? { ...dasboardItem, quantity: dasboardItem.quantity + 1 }
            : dasboardItem,
        ),
      );
    } else {
      setSelectedJobs([...selectedJobs, { ...item, quantity: 1 }]);
    }
  }

  return (
    <JobContext.Provider value={{ selectedJobs, addToDashboard }}>
      {children}
    </JobContext.Provider>
  );
}
