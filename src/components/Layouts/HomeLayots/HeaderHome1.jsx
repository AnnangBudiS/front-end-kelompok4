import Hero from "../../Elements/Hero/Hero";
import ButtonHome from "../../Elements/Buttons/ButtonHome";
import PressLayout from "./PresLayout";
import ListHero from "./ListHero";
import About from "./About";
import Home from "../../Fragments/Homes/Home";

const HeaderHome1 = () => {
  return (
    <>
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
      <Home />
    </>
  );
};

export default HeaderHome1;
