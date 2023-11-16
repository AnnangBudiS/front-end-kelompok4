const Card = () => {
  return (
    <div className="flex justify-center mt-20">
        <div className="card w-96 bg-base-100 border-4 pt-4 border-orange-500">
      <figure>
        <img
          src="./Homepage/bca.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title font-bold text-2xl">Teler</h1>
        <h2 className="font-bold text-xl pb-4">PT Bank Central Asia (BCA)</h2>

        <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-2">
                <img src="./Homepage/checkmark.png" height="25px" width="25px" alt="" />
                <div className="text-lg text-orange-500 font-medium">Jakarta Utara, DKI Jakarta</div>
            </li>
            <li className="flex flex-row gap-2">
                <img src="./Homepage/checkmark.png" height="25px" width="25px" alt="" />
                <div className="text-lg text-orange-500 font-medium">Minimal SMA/SMK/Sederajat</div>
            </li>
            <li className="flex flex-row gap-2">
                <img src="./Homepage/checkmark.png" height="25px" width="25px" alt="" />
                <div className="text-lg text-orange-500 font-medium">Rp. 8.000.000</div>
            </li>
            
        </ul>

        <div className="card-actions justify-center pt-20">
          <button className="btn btn-outline bg-white w-36 h-10 rounded-full text-orange-500 ">Detail</button>
          <button className="btn bg-orange-500 w-36 h-10 rounded-full text-white">Apply</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card