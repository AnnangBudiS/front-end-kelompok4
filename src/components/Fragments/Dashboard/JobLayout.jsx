const JobLayout = ({ children }) => {
  return (
    <main className="pt-20 w-full">
      <JobLayoutHeader>
        <JobAction />
      </JobLayoutHeader>
      {children}
    </main>
  );
};

const JobLayoutHeader = ({ children }) => {
  return (
    <div className="p-5 bg-base-100 w-full">
      <h2 className="text-4xl mb-10 text-orange-500 font-bold">
        Temukan Lowongan Kerja Seusai Impianmu
      </h2>
      <p className="pl-5 font-semibold mb-2">
        cari posisi dan Perusahaan impianmu
      </p>
      {children}
    </div>
  );
};

const JobAction = () => {
  return (
    <div className="flex items-center space-x-5 mr-24">
      <input
        type="text"
        placeholder="Jabatan, Kata Kunci, Perusahaan"
        className="border border-orange-500 w-full input rounded-full"
      />
      <button className="btn  bg-orange-500 text-white rounded-full px-10">
        Cari
      </button>
    </div>
  );
};

export default JobLayout;
