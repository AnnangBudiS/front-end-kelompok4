import { useEffect, useState } from "react";
import JobLayout from "../JobLayout";
import Cards from "../../../Elements/Cards/Card";
import axios from "axios";
import { useJob } from "../../../../context/ApplyJobContext";

export default function CariLoker() {
  const { addToDashboard } = useJob();
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const getAllData = async () => {
    try {
      const res = await axios.get(`${API_KEY}/deskripsiLowongan`);
      const getData = await res.data.data;

      setJobData(getData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <JobLayout>
      <div className="my-20 grid grid-cols-4 gap-5 mx-32">
        {!loading ? (
          jobData.map((item) => (
            <Cards
              key={item.id_deskripsi_lowongan}
              title={item.judul}
              image={item.foto_perusahaan}
              location={item.alamat_penempatan}
              salary={item.gaji}
              required={item.minimal_pendidikan}
              to={`/details/${item.id_deskripsi_lowongan}`}
              addDashboard={() => addToDashboard(item)}
            />
          ))
        ) : (
          <div>Loading..</div>
        )}
      </div>
    </JobLayout>
  );
}
