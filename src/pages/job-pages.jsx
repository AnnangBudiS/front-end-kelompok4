import { useEffect, useState } from "react";
import NavMenu from "../components/Elements/Navbar/NavMenu";
import Sidebar from "../components/Elements/Sidebar/Sidebar";
import axios from "axios";
import Links from "../components/Links/Links";
import Cards from "../components/Elements/Cards/Card";
import JobLayout from "../components/Jobmainlayout/JobLayout";


const JobPages = () => {
  const [jobData, setJobData] = useState([]);
  const [isActive, setIsActive] = useState();

  const menulist = [
    {
      id: 1,
      title: "Dashboard",
    },
    {
      id: 2,
      title: "Cari Loker",
    },
    {
      id: 3,
      title: "Pertanyaan",
    },
    {
      id: 4,
      title: "Ikut Komunitas",
    },
    {
      id: 5,
      title: "Hubungi CS",
    },
    // {
    //   id: 6,
    //   title: "Settings"
    // }
  ];

  const getAllData = async () => {
    try {
      const res = await axios.get(
        "https://650ffe1a3ce5d181df5cd37b.mockapi.io/job",
      );
      const getData = await res.data;

      console.log(getData);
      setJobData(getData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);



  return (
    <>
      <header className="fixed w-full shadow-lg bg-base-100 z-[2]">
        <NavMenu />
      </header>
      <div className="flex gap-20 w-full">
        <aside className="bg-orange-500 h-screen pt-20 p-5 sticky top-0">
          <Sidebar>
            {menulist.map((item) => (
              <Links
                key={item.id}
                title={item.title}
                classname={`${
                  isActive === item.id
                    ? "bg-slate-50 text-orange-500 rounded-md"
                    : ""
                }`}
                handleClick={() => setIsActive(item.id)}
              />
            ))}
          </Sidebar>
        </aside>
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
                />
              ))
            ) : (
              <div>Loading..</div>
            )}
          </div>
        </JobLayout>
      </div>
      <footer></footer>
    </>
  );
};

export default JobPages;
