import CardBlog from "../../Elements/Cards/CardBlog";

const Blog = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="py-20">
        <h1 className="font-bold text-orange-600 pl-[60px] text-3xl">
          Rekomendasi Artikel Untukmu
        </h1>
      </div>

      <div className="flex flex-wrap gap-5 mb-20">
        <CardBlog
          image="blog/Image-1.png"
          title="5 Tips Membuat CV yang Menarik"
          description="CV adalah dokumen penting yang dapat menentukan apakah anda
              dipanggil untuk wawancara kerja atau tidak. Oleh karena itu,
              penting untuk membuat CV yang menarik dan berkualitas."
          date="23 November 2023"
        />
        <CardBlog
          image="blog/Image-2.png"
          title=" Cara Menjawab Pertanyaan Wawancara Kerja yang Sering Ditanyakan"
          description="awancara kerja adalah tahap penting dalam proses pencarian kerja.
          Oleh karena itu, penting untuk mempersiapkan diri dengan baik
          sebelum wawancara."
          date="30 November 2023"
        />
        <CardBlog
          image="blog/Image-3.png"
          title="Lowongan Terbaru di Perusahaan Teknologi"
          description="Perusahaan teknologi selalu mencari talenta-talenta terbaik. Jika
          anda tertarik untuk bekerja di bidang teknologi, Anda dapat
          mencari lowongan kerja terbaru di perusahaan teknologi."
          date="5 Desember 2023"
        />
        <CardBlog
          image="blog/Image-1.png"
          title="5 Tips Membuat CV yang Menarik"
          description="CV adalah dokumen penting yang dapat menentukan apakah anda
              dipanggil untuk wawancara kerja atau tidak. Oleh karena itu,
              penting untuk membuat CV yang menarik dan berkualitas."
          date="23 November 2023"
        />
        <CardBlog
          image="blog/Image-2.png"
          title=" Cara Menjawab Pertanyaan Wawancara Kerja yang Sering Ditanyakan"
          description="awancara kerja adalah tahap penting dalam proses pencarian kerja.
          Oleh karena itu, penting untuk mempersiapkan diri dengan baik
          sebelum wawancara."
          date="30 November 2023"
        />
        <CardBlog
          image="blog/Image-3.png"
          title="Lowongan Terbaru di Perusahaan Teknologi"
          description="Perusahaan teknologi selalu mencari talenta-talenta terbaik. Jika
          anda tertarik untuk bekerja di bidang teknologi, Anda dapat
          mencari lowongan kerja terbaru di perusahaan teknologi."
          date="5 Desember 2023"
        />
      </div>
    </section>
  );
};

export default Blog;
