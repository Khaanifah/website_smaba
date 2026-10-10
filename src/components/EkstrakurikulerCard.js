import Image from "next/image";

export default function EkstrakurikulerCard({ item }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-ocean-200 bg-white p-6 shadow-md">
      <div className="relative h-52 w-full overflow-hidden rounded-xl">
        <Image
          src={item.gambar}
          alt={item.nama}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-5 text-center text-lg font-bold text-ocean-900">
        {item.nama}
      </h3>
      <p className="mt-3 text-center text-sm font-medium text-ocean-900">
        {item.deskripsi}
      </p>
    </div>
  );
}