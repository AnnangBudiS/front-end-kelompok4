const HeaderHome1 = () => {

  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/2 mx-20 my-20">
          <div className="m text-6xl text-orange-500 font-bold pb-4">
            Temukan pekerjaan impianmu di sini!
          </div>
          <div>
            <p className="text-slate-400 pb-4">
              Forlokers adalah platform online yang menghubungkan pencari kerja
              dengan perusahaan. Forlokers menawarkan berbagai fitur yang dapat
              membantu pencari kerja untuk menemukan pekerjaan yang sesuai
              dengan minat dan kualifikasi anda.
            </p>
          </div>
          <button className="btn bg-orange-500 font-bold rounded-full text-white">
    Daftar Sekarang</button>
        </div>
        <div className="basis-1/2">
          <div className="my-10">
            <img
              src="./Homepage/headerhome.png"
              height="367px"
              width="550px"
              alt="header"
            />
          </div>
        </div>
      </div>

      <div className="text-3xl text-orange-500 flex justify-center font-bold pt-20 pb-8">
        Telah dipercaya oleh
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center gap-2 pb-4">
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/google.png"
            width="100px"
            height="33px"
            alt="Google"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/microsoft.png"
            width="100px"
            height="33px"
            alt="Microsoft"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/telkom.png"
            width="100px"
            height="33px"
            alt="Telkom"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/pertamina.png"
            width="100px"
            height="33px"
            alt="Pertamina"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/pln.png"
            width="100px"
            height="33px"
            alt="PLN"
          />
        </div>
        </div>
        <div className="flex justify-center gap-2 pb-20">
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/bca.png"
            width="100px"
            height="33px"
            alt="BCA"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/garuda.png"
            width="100px"
            height="33px"
            alt="Garuda Indonesia"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/toyota.png"
            width="100px"
            height="33px"
            alt="Toyota"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/gojek.png"
            width="100px"
            height="33px"
            alt="Gojek"
          />
        </div>
        <div className="btn btn-outline btn-warning w-32 h-14">
          <img
            src="./Homepage/traveloka.png"
            width="100px"
            height="33px"
            alt="Traveloka"
          />
        </div>
        </div>
      </div>

      <div className="text-3xl font-bold text-orange-500 flex justify-center">Kenapa Memilih Kami</div>

      <div className="flex flex-row mt-10">
        <div className="basis-1/2 pl-40 pr-10">
          <img src="./Homepage/headerhome2.png" height="366px" width="548px" alt="header2" />
        </div>
        <div className="basis-1/2 text-xl text-orange-500 font-semibold mt-8">
          <div className="flex flex-row gap-2 pb-4">
            <img src="./Homepage/checkmark.png" height="30px" width="30px" alt="checkmark" />
            Daftar lowongan yang lengkap dan up-to-date</div>
          <div className="flex flex-row gap-2 pb-4">
          <img src="./Homepage/checkmark.png" height="30px" width="30px" alt="checkmark" />
            Fitur pencarian yang mudah digunakan</div>
          <div className="flex flex-row gap-2 pb-4">
          <img src="./Homepage/checkmark.png" height="30px" width="30px" alt="checkmark" />
            Fitur untuk membuat profile yang lengkap</div>
          <div className="flex flex-row gap-2 pb-4">
          <img src="./Homepage/checkmark.png" height="30px" width="30px" alt="checkmark" />
            Fitur untuk mengunggah resume dan portfolio</div>
          <div className="flex flex-row gap-2 pb-4">
          <img src="./Homepage/checkmark.png" height="30px" width="30px" alt="checkmark" />
            Fitur untuk mengikuti perusahaan dan lowongan</div>
          <div className="flex flex-row gap-2">
          <img src="./Homepage/checkmark.png" height="30px" width="30px" alt="checkmark" />
            Artikel dan tips untuk mencari pekerjaan</div>
        </div>
      </div>

      <div className="bg-orange-500 pt-10 pb-20 mt-20">
        <div className="flex justify-center text-3xl text-white font-bold">Telah Menangani</div>
        <div className="flex flex-row gap-4 justify-center mt-10">
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

    </div>
  );
};

export default HeaderHome1;
