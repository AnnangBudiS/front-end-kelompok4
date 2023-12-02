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

  const getDetailsJob = async () => {
    try {
      const ress = await axios.get(
        `https://650ffe1a3ce5d181df5cd37b.mockapi.io/job/${id}`,
      );
      const getData = await ress.data;
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
            <h2 className="text-2xl font-bold">{detailsJob?.title}</h2>
            <p className="text-sm">{detailsJob?.company}</p>
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
        <li>{detailsJob?.location}</li>
        <li>{detailsJob?.position}</li>
        <li>Rp.{detailsJob?.salary}</li>
      </ul>
      <ContentDetails title="Deskripsi Pekerjaan">
        <p>
          Kami sedang mencari seorang Full Stack Developer yang berpengalaman
          untuk bergabung dengan tim kami. Tugas dan tanggung jawab utama Anda
          akan meliputi:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Merancang, mengembangkan, dan memelihara aplikasi web dan mobile
          </li>
          <li>
            Bekerja sama dengan tim desain dan bisnis untuk memahami kebutuhan
            pengguna
          </li>
          <li>
            Menggunakan berbagai bahasa pemrograman dan framework untuk
            membangun aplikasi yang berkualitas
          </li>
          <li>Menjaga kode yang bersih dan terorganisir</li>
        </ul>
      </ContentDetails>
      <ContentDetails title="Kualifikasi">
        <ul className="list-disc pl-6">
          <li>
            Memiliki pengalaman minimal 3 tahun sebagai Full Stack Developer{" "}
          </li>
          <li>Menguasai keterampilan pemrograman front end dan back end</li>
          <li>
            Menggunakan berbagai bahasa pemrograman dan framework untuk
            membangun aplikasi yang berkualitas
          </li>
          <li>Menjaga kode yang bersih dan terorganisir</li>
        </ul>
      </ContentDetails>
      <ContentDetails title="Benefit">
        <ul className="list-disc pl-6">
          <li>
            Memiliki pengalaman minimal 3 tahun sebagai Full Stack Developer{" "}
          </li>
          <li>Menguasai keterampilan pemrograman front end dan back end</li>
          <li>
            Menggunakan berbagai bahasa pemrograman dan framework untuk
            membangun aplikasi yang berkualitas
          </li>
          <li>Menjaga kode yang bersih dan terorganisir</li>
        </ul>
      </ContentDetails>
      <ContentDetails title="Catatan">
        <ul className="list-disc pl-6">
          <li>
            Memiliki pengalaman minimal 3 tahun sebagai Full Stack Developer{" "}
          </li>
        </ul>
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
