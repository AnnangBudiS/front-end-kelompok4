export default function DashboardContent() {
  return (
    <>
      <div className="w-full pl-10">
        <div className="pt-28 text-xl font-bold text-orange-500 mb-5">
          Status Lamaran Pekerjaan
        </div>
        <div className="flex flex-row gap-10">
          <div className="border border-orange-500 w-1/3 h-20 rounded-xl flex flex-row gap-3 justify-center items-center">
            {/* <div className="text-5xl text-orange-500 font-bold">{data.favorite}</div> */}
            <div className="text-5xl text-orange-500 font-bold">15</div>
            <div className="text-xl text-orange-500 font-bold">
              Lowongan Favorite
            </div>
          </div>
          <div className="border border-orange-500 w-1/3 h-20 rounded-xl flex flex-row gap-3 justify-center items-center">
            {/* <div className="text-5xl text-orange-500 font-bold">{data.lamar}</div> */}
            <div className="text-5xl text-orange-500 font-bold">8</div>
            <div className="text-xl text-orange-500 font-bold">
              Lowongan Di Lamar
            </div>
          </div>
        </div>
        <div className="pt-16 text-xl font-bold text-orange-500 mb-5">
          Riwayat Lamaran Pekerjaan
        </div>
        <div className="border border-orange-500 w-3/4 h-24 rounded-xl flex flex-row justify-between items-center">
          <div className="ml-5 flex flex-row gap-5">
            <img
              src="./public/Homepage/bca.png"
              width="71px"
              height="22px"
              alt=""
            />
            <div>
              <div className="font-bold text-xl">
                {/* {data.namaPekerjaan} */}
                Front-end Developer
              </div>
              <div className="font-bold text-sm">
                {/* {data.pt} */}
                PT. GO-JEK Indonesia
              </div>
            </div>
          </div>
          <div className="mr-5">
            <button className="btn bg-orange-500 text-white rounded-full px-8">
              Lihat Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
