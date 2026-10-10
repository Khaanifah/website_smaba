import Image from "next/image";

export default function AgendaCard({ item }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-ocean-200 bg-white p-4 shadow-md">
      <div className="relative h-36 w-full overflow-hidden rounded-xl">
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 text-sm font-bold text-ocean-900">{item.judul}</h3>
      <p className="mt-3 text-justify text-sm text-ocean-900">{item.deskripsi}</p>
    </div>
  );
}