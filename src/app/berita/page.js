import BeritaListCard from "@/components/BeritaListCard";
import Pagination from "@/components/Pagination";
import { berita } from "@/data/berita";

export const metadata = {
  title: "Berita | SMA Negeri 1 Bawang",
};

const PER_HALAMAN = 6;

export default async function BeritaPage({ searchParams }) {
  const { page } = await searchParams;

  const urut = [...berita].sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
  const totalHalaman = Math.ceil(urut.length / PER_HALAMAN);
  const halamanAktif = Math.min(Math.max(parseInt(page) || 1, 1), totalHalaman);

  const tampil = urut.slice(
    (halamanAktif - 1) * PER_HALAMAN,
    halamanAktif * PER_HALAMAN
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-3xl font-black text-ocean-900 md:text-5xl">
        Berita Seputar
        <br />
        SMA Negeri 1 Bawang
      </h1>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tampil.map((item) => (
          <BeritaListCard key={item.id} item={item} />
        ))}
      </div>

      <Pagination current={halamanAktif} total={totalHalaman} basePath="/berita" />
    </div>
  );
}