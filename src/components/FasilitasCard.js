import Image from "next/image";

export default function FasilitasCard({ item }) {
  return (
    <div className="rounded-xl border border-ocean-200 bg-white p-3 text-center shadow-md">
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={item.gambar}
          alt={item.nama}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 text-sm font-bold text-ocean-900">{item.nama}</h3>
      <p className="text-xs text-ocean-900">{item.jumlah}</p>
    </div>
  );
}