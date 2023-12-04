// import { createContext, useContext, useEffect, useState } from "react";

import { createContext, useContext, useState } from "react";

// const JobContext = createContext();
// export const useJob = () => {
//   return useContext(JobContext);
// };

// export default function JobApplyProvider({ children }) {
//   const [selectedJob, setSelectedJob] = useState(() => {
//     const storedSelectedJob = localStorage.getItem("selectedJob");
//     return storedSelectedJob ? JSON.parse(storedSelectedJob) : [];
//   });

//   const addToDashboard = (item) => {
//     const isItemInDashboard = selectedJob.find(
//       (selectJob) => selectJob.id === item.id,
//     );

//     if (isItemInDashboard) {
//       setSelectedJob(
//         selectedJob.map((selectJob) =>
//           selectJob.id === item.id
//             ? { ...selectJob, quantity: selectJob.quantity + 1 }
//             : selectJob,
//         ),
//       );
//     } else {
//       setSelectedJob([...selectedJob, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeFromDashboard = (item) => {
//     const isItemInDashboard = selectedJob.find(
//       (selectJob) => selectJob.id === item.id,
//     );

//     if (isItemInDashboard && isItemInDashboard.quantity === 1) {
//       setSelectedJob(
//         selectedJob.filter((selectJob) => selectJob.id !== item.id),
//       );
//     } else {
//       setSelectedJob(
//         selectedJob.map((selectJob) =>
//           selectJob.id === item.id
//             ? { ...selectJob, quantity: selectJob.quantity - 1 }
//             : selectJob,
//         ),
//       );
//     }
//   };

//   const clearJobInDashboard = () => {
//     setSelectedJob([]);
//   };

//   useEffect(() => {
//     localStorage.setItem("selectedJob", JSON.stringify(selectedJob));
//   }, [selectedJob]);

//   return (
//     <JobContext.Provider
//       value={{
//         selectedJob,
//         addToDashboard,
//         removeFromDashboard,
//         clearJobInDashboard,
//       }}
//     >
//       {children}
//     </JobContext.Provider>
//   );
// }

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
