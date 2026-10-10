import EkstrakurikulerCard from "@/components/EkstrakurikulerCard";
import Pagination from "@/components/Pagination";
import { ekstrakurikuler } from "@/data/ekstrakurikuler";

export const metadata = {
  title: "Ekstrakurikuler | SMA Negeri 1 Bawang",
};

const PER_HALAMAN = 9;

export default async function EkstrakurikulerPage({ searchParams }) {
  const { page } = await searchParams;

  const totalHalaman = Math.ceil(ekstrakurikuler.length / PER_HALAMAN);
  const halamanAktif = Math.min(Math.max(parseInt(page) || 1, 1), totalHalaman);

  const tampil = ekstrakurikuler.slice(
    (halamanAktif - 1) * PER_HALAMAN,
    halamanAktif * PER_HALAMAN
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-3xl font-black text-ocean-900 md:text-5xl">
        Ekstrakurikuler
      </h1>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tampil.map((item) => (
          <EkstrakurikulerCard key={item.id} item={item} />
        ))}
      </div>

      <Pagination
        current={halamanAktif}
        total={totalHalaman}
        basePath="/ekstrakurikuler"
      />
    </div>
  );
}