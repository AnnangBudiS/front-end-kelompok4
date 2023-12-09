import ButtonHome from "../../Elements/Buttons/ButtonHome";
import Hero from "../../Elements/Hero/Hero";
import About from "./About";
import ListHero from "./ListHero";
import PasangLoker from "./PasangLoker";
import PressLayout from "./PresLayout";

const HeaderHome2 = () => {
  return (
    <div>
      <Hero
        className="hero-content flex-col md:gap-5 md:flex-row-reverse"
        image="Homepage/headerhome.png"
        title="Temukan pekerjaan impianmu di sini!"
        description="Forlokers adalah platform online yang menghubungkan pencari kerja
          dengan perusahaan. Forlokers menawarkan berbagai fitur yang dapat
          membantu pencari kerja untuk menemukan pekerjaan yang sesuai
          dengan minat dan kualifikasi anda."
      >
        <ButtonHome>Daftar Sekarang</ButtonHome>
      </Hero>
      <PressLayout />
      <Hero
        className="hero-content flex-col md:gap-5 md:flex-row"
        image="/Homepage/headerhome2.png"
        title="Kenapa Memilih Kami"
      >
        <ListHero />
      </Hero>
      <About />
      <PasangLoker />
    </div>
  );
};

export default HeaderHome2;
