import Image from "next/image";
import FasilitasCard from "@/components/FasilitasCard";
import AgendaCard from "@/components/AgendaCard";
import { sejarah, visi, misi } from "@/data/profil";
import { fasilitas } from "@/data/fasilitas";
import { agenda } from "@/data/agenda";

export const metadata = {
  title: "Profil Sekolah | SMA Negeri 1 Bawang",
};

const judulSection = "text-center text-2xl font-bold text-ocean-900 md:text-3xl";

function KartuList({ judul, items, bernomor = true }) {
  return (
    <div className="rounded-xl border border-ocean-200 bg-white p-6 shadow-md">
      <h3 className="text-center text-xl font-bold text-ocean-900">{judul}</h3>

      {bernomor ? (
        <ol className="mt-4 list-decimal space-y-1 pl-8 text-sm text-ocean-900">
          {items.map((teks, i) => (
            <li key={i}>{teks}</li>
          ))}
        </ol>
      ) : (
        <div className="mt-4 space-y-2 text-center text-sm text-ocean-900">
          {items.map((teks, i) => (
            <p key={i}>{teks}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-center text-3xl font-black text-ocean-900 md:text-4xl">
        Profil SMA Negeri 1 Bawang
      </h1>

      {/* Banner */}
      <div className="relative mt-8 h-56 w-full overflow-hidden rounded-xl bg-gray-300 md:h-80">
        <Image
          src="/images/about/banner.jpg"
          alt="SMA Negeri 1 Bawang"
          fill
          priority
          sizes="(min-width: 1152px) 1120px, 100vw"
          className="object-cover"
        />
      </div>

      {/* Sejarah */}
      <section className="mt-12">
        <h2 className={judulSection}>Sejarah Sekolah</h2>
        <p className="mx-auto mt-4 max-w-5xl text-justify leading-relaxed text-ocean-900 md:text-lg">
          {sejarah}
        </p>
      </section>

      {/* Visi dan Misi */}
      <section className="mt-14">
        <h2 className={judulSection}>Visi dan Misi</h2>
        <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
          <KartuList judul="Visi" items={visi} bernomor={false} />
          <KartuList judul="Misi" items={misi} />
        </div>
      </section>

      {/* Fasilitas */}
      <section className="mt-14">
        <h2 className={judulSection}>Fasilitas Sekolah</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fasilitas.map((item) => (
            <FasilitasCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Agenda Rutin */}
      <section className="mt-14">
        <h2 className={judulSection}>Agenda Rutin</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agenda.map((item) => (
            <AgendaCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}