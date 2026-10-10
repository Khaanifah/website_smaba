import Image from "next/image";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import BeritaCard from "@/components/BeritaCard";
import PrestasiCard from "@/components/PrestasiCard";
import { berita } from "@/data/berita";
import { prestasi } from "@/data/prestasi";

const judulSection = "text-3xl font-bold text-ocean-900 md:text-4xl";

export default function Home() {
  // urutkan dari yang terbaru, ambil maksimal 6
  const beritaTerbaru = [...berita]
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
    .slice(0, 6);

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-6xl px-4">
        {/* Sambutan Kepala Sekolah */}
        <section className="py-12">
          <h2 className={judulSection}>Sambutan Kepala Sekolah</h2>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:px-8">
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl bg-gray-300">
              <Image
                src="/images/kepala-sekolah.png"
                alt="Kepala SMA Negeri 1 Bawang"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>

            <div className="text-ocean-900">
              <h3 className="text-3xl font-bold">Sudarto, S.Pd., M.M.</h3>
              <p className="font-medium">Kepala SMA Negeri 1 Bawang</p>
              <hr className="my-4 w-full max-w-sm border-ocean-900/40" />
              <p className="mt-4 text-justify text-sm leading-relaxed">
                Assalamu’alaikum warahmatullahi wabarakatuh.
              </p>
              <p className="mt-4 text-justify text-sm leading-relaxed">
                Selamat datang di website resmi SMA Negeri 1 Bawang.
                Kami menyambut baik kehadiran website ini sebagai sarana informasi dan komunikasi antara sekolah dengan masyarakat. Melalui website ini, kami berharap pengunjung dapat mengenal lebih dekat profil sekolah, berbagai kegiatan, program pendidikan, serta prestasi yang telah diraih oleh peserta didik.
              </p>
              <p className="mt-4 text-justify text-sm leading-relaxed">
                SMA Negeri 1 Bawang senantiasa berupaya menciptakan lingkungan pendidikan yang mendukung pengembangan potensi, peningkatan prestasi, serta pembentukan karakter peserta didik. Kami percaya bahwa kolaborasi antara sekolah, orang tua, dan masyarakat merupakan bagian penting dalam mewujudkan pendidikan yang berkualitas.
                Semoga website ini dapat memberikan manfaat dan menjadi jendela informasi yang mempererat hubungan antara SMA Negeri 1 Bawang dengan seluruh masyarakat.
              </p>
              <p className="mt-4 text-justify text-sm leading-relaxed">
                Wassalamu’alaikum warahmatullahi wabarakatuh.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-ocean-900/30" />

        {/* Berita Terbaru */}
        <section className="py-12">
          <h2 className={judulSection}>Berita Terbaru</h2>
          <div className="mt-6 md:px-8">
            <Slider>
              {beritaTerbaru.map((item) => (
                <div key={item.id} className="w-72 shrink-0 snap-start">
                  <BeritaCard item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <hr className="border-ocean-900/30" />

        {/* Prestasi Siswa */}
        <section className="py-12">
          <h2 className={judulSection}>Prestasi Siswa</h2>
          <div className="mt-6 md:px-8">
            <Slider>
              {prestasi.map((item) => (
                <div key={item.id} className="w-72 shrink-0 snap-start">
                  <PrestasiCard item={item} />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
}