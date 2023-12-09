import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";

const FooterHome = () => {
  return (
    <>
      <footer className="footer p-10 bg-orange-500 text-base-content">
        <nav>
          <header className="footer-title text-2xl">Forlokers</header>
          <p className="text-gray-600">
            Forlokers adalah platform online yang menghubungkan pencari kerja
            dengan perusahaan
          </p>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Info Loker</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact-us</a>
        </nav>
        <nav>
          <header className="footer-title">Ikuti Kami</header>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <FaTwitter />
            <FaYoutube />
            <FaFacebookF />
          </div>
        </nav>
      </footer>
      {/* <div className="bg-orange-500 py-15 flex flex-row gap-10 justify-center items-center mt-20">
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
      </div> */}
    </>
  );
};

export default FooterHome;
