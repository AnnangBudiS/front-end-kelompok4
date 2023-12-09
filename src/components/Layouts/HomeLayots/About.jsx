export default function About() {
  return (
    <div className="bg-orange-500 py-10 mt-5">
      <div className="flex justify-center text-3xl text-white font-bold">
        Telah Menangani
      </div>
      <div className="flex flex-col md:flex-row gap-2 justify-center items-center mt-5 ">
        <div className="box-content bg-white h-32 w-32 p-4 border-4 rounded-lg flex flex-col justify-center">
          <div className="text-3xl font-bold">15juta+</div>
          <div className="text-orange-500">Pengguna</div>
        </div>
        <div className="box-content bg-white h-32 w-32 p-4 border-4 rounded-lg flex flex-col justify-center">
          <div className="text-3xl font-bold">10rb+</div>
          <div className="text-orange-500">Perusahaan</div>
        </div>
        <div className="box-content bg-white h-32 w-32 p-4 border-4 rounded-lg flex flex-col justify-center">
          <div className="text-3xl font-bold">500rb+</div>
          <div className="text-orange-500">Pelamar diterima</div>
        </div>
      </div>
    </div>
  );
}
