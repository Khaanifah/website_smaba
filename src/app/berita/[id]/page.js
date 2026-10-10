import Image from "next/image";
import { notFound } from "next/navigation";
import BeritaTerbaruCard from "@/components/BeritaTerbaruCard";
import { berita } from "@/data/berita";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = berita.find((b) => String(b.id) === id);
  return {
    title: item ? `${item.judul} | SMA Negeri 1 Bawang` : "Berita tidak ditemukan",
  };
}

export default async function DetailBeritaPage({ params }) {
  const { id } = await params;
  const item = berita.find((b) => String(b.id) === id);

  if (!item) notFound();

  // 3 berita terbaru selain yang sedang dibuka
  const beritaTerbaru = [...berita]
    .filter((b) => b.id !== item.id)
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal))
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-center text-3xl font-black text-ocean-900 md:text-5xl">
        {item.judul}
      </h1>

      <div className="relative mt-10 h-64 w-full overflow-hidden rounded-xl bg-gray-300 md:h-[420px]">
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-10 space-y-8 px-0 md:px-4">
        {item.isi.map((paragraf, i) => (
          <p key={i} className="text-justify leading-relaxed text-ocean-900 md:text-lg">
            {paragraf}
          </p>
        ))}
      </div>

      <hr className="mx-0 my-12 border-ocean-900/30 md:mx-4" />

      <section className="md:px-4">
        <h2 className="text-2xl font-bold text-ocean-900 md:text-3xl">Berita Terkait</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {beritaTerbaru.map((b) => (
            <BeritaTerbaruCard key={b.id} item={b} />
          ))}
        </div>
      </section>
    </div>
  );
}