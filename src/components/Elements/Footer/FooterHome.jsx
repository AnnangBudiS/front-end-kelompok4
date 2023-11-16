const FooterHome = () => {
  return (
    <div className="bg-orange-500 py-15 flex flex-row gap-10 justify-center items-center mt-20">
      <div className="text-white basis-2/5 py-20 px-32">
        <div className="text-3xl mb-4 font-bold">Forlokers</div>
        <div>
          Forlokers adalah platform online yang menghubungkan pencari kerja
          dengan perusahaan
        </div>
      </div>
      <div className="flex flex-row gap-5 text-white text-lg basis-2/5">
        <div>Home</div>
        <div>Info Loker</div>
        <div>Pasang Loker</div>
        <div>Blog</div>
      </div>
      <div className="flex flex-col basis-1/5">
        <div className="text-ml text-white">Ikuti Kami</div>
        <div className="flex flex-row gap-1 pt-2">
          <div>
            <img
              src="./Homepage/instagramfotor.png"
              alt="ins"
              height="25px"
              width="25px"
            />
          </div>
          <div>
            <img
              src="./Homepage/testfb.png"
              alt="ins"
              height="25px"
              width="25px"
            />
          </div>
          <div>
            <img
              src="./Homepage/linkedin.png"
              alt="ins"
              height="25px"
              width="25px"
            />
          </div>
          <div>
            <img
              src="./Homepage/twiter.png"
              alt="ins"
              height="25px"
              width="25px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
