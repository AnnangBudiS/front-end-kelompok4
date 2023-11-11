import Card from "./Card";

const InfoLoker = () => {
  // const response = await fetch(`${}`)
  // const loker = await response.json()

  return (
    <>
      <div>
        <div className="pl-20 pt-8 pb-1 sticky top-0 z-[1] w-3/5 bg-transparent">
          <div>
            <p className="pl-5 font-semibold mb-2">
              cari posisi dan Perusahaan impianmu
            </p>
          </div>
          <div className="flex items-center space-x-5 mr-24">
            <input
              type="text"
              placeholder="Jabatan, Kata Kunci, Perusahaan"
              className="border border-orange-500 w-full input rounded-full"
            />
            <button className="btn bg-orange-500 text-white rounded-full px-10">
              Cari
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
        {/* {loker.map(data => {
              return (
                <div key={} className='shadow-xl'>
                  <Card title={} images={} id={}/>
                </div>
              )
            })
            } */}
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
          <div><Card /></div>
        </div>
      </div>
    </>
  );
};

export default InfoLoker;
