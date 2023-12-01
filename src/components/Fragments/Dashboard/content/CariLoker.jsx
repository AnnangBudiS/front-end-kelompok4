import { useEffect, useState } from "react";
import JobLayout from "../JobLayout";
import Cards from "../../../Elements/Cards/Card";
import axios from "axios";

export default function CariLoker() {
  const [jobData, setJobData] = useState([]);
  const getAllData = async () => {
    try {
      const res = await axios.get("https://650ffe1a3ce5d181df5cd37b.mockapi.io/job");
      const getData = await res.data;

      setJobData(getData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <JobLayout>
      <div className="my-20 grid grid-cols-4 gap-5 mx-32">
        {jobData ? (
          jobData.map((item) => (
            <Cards
              key={item.id}
              image={item.image}
              title={item.title}
              company={item.company}
              location={item.location}
              position={item.location}
              salary={item.salary}
              to={`/details/${item.id_deskripsi_lowongan}`}
            />
          ))
        ) : (
          <div>Loading..</div>
        )}
      </div>
    </JobLayout>
  );
}
