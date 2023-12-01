import { useEffect, useState } from "react";
import JobLayout from "../JobLayout";
import Cards from "../../../Elements/Cards/Card";
import axios from "axios";

export default function CariLoker() {
  const [jobData, setJobData] = useState([]);
  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/deskripsiLowongan");
      const getData = await res.data.data;

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
              key={item.id_deskripsi_lowongan}
              image={item.foto_perusahaan}
              title={item.judul}
              company={item.id_perusahaan}
              location={item.alamat_penempatan}
              position={item.minimal_pendidikan}
              salary={item.gaji}
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
