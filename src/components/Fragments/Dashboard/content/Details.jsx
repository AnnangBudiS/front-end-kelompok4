import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

import { useParams } from "react-router-dom";
import ContentDetails from "./ContentDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalApply from "../../../Elements/Modal/Modal";

export default function Details() {
  const { id } = useParams();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [detailsJob, setDetailsJob] = useState();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getDetailsJob = async () => {
    try {
      const ress = await axios.get(`${API_KEY}/deskripsiLowongan/${id}`);
      const getData = await ress.data.data;
      console.log(getData);
      setDetailsJob(getData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetailsJob();
  }, [id]);

  return (
    <section className="my-24 px-32">
      <h1 className="text-5xl font-bold text-orange-500">
        Deskripsi Pekerjaan
      </h1>
      <div className="flex items-center justify-between mt-32">
        <div className="flex gap-10">
          <div className="avatar">
            <div className="w-32 rounded-full shadow-md">
              <img src={detailsJob?.image} alt="pict perusahaan" />
            </div>
          </div>
          <p>
            <h2 className="text-2xl font-bold">{detailsJob?.judul}</h2>
            <p className="text-sm">{detailsJob?.nama_perusahaan}</p>
          </p>
        </div>
        <button
          onClick={openModal}
          className="btn bg-orange-500 px-6 py-2 text-slate-50 hover:text-slate-950 mr-52"
        >
          Apply Now
        </button>
        <ModalApply open={modalIsOpen} close={closeModal} />
      </div>
      <ul className="mt-20 list-image-[url(/list-icon.png)] text-orange-500 text-sm space-y-1">
        <li>{detailsJob?.alamat_penempatan}</li>
        <li>{detailsJob?.minimal_pendidikan}</li>
        <li>Rp.{detailsJob?.gaji}</li>
      </ul>
      <ContentDetails title="Deskripsi Pekerjaan">
        <p>{detailsJob?.detail_deskripsi}</p>
      </ContentDetails>
      <ContentDetails title="Kualifikasi">
        <p>{detailsJob?.detail_catatan}</p>
      </ContentDetails>
      <ContentDetails title="Benefit">
        <p>{detailsJob?.detail_benefit}</p>
      </ContentDetails>
      <ContentDetails title="Catatan">
        <p>{detailsJob?.detail_catatan}</p>
      </ContentDetails>
      <hr className="border-2 my-4" />
      <ContentDetails title="Tentang Perusahaan">
        <p>
          Gojek adalah perusahaan teknologi terdepan di Indonesia yang
          menghubungkan jutaan orang dengan berbagai layanan untuk memenuhi
          kebutuhan sehari-hari. Misi kami adalah meningkatkan kehidupan
          sehari-hari masyarakat Indonesia dengan menyediakan akses ke layanan
          yang berkualitas dan terjangkau.
        </p>
      </ContentDetails>
      <ContentDetails title="Alamat">
        <p>
          Pasaraya Blok M Gedung B Lt. 6, Jl. Iskandarsyah II No.7, RT.3/RW.1,
          Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota
          Jakarta 12160
        </p>
      </ContentDetails>
      <ContentDetails title="Website">
        <p>https://www.gojek.com/</p>
      </ContentDetails>
      <ContentDetails title="Social Media">
        <p className="flex gap-2 text-2xl mt-2">
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
        </p>
      </ContentDetails>
    </section>
  );
}
