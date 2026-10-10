import Image from "next/image";

export default function PrestasiCard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col rounded-xl border border-ocean-200 bg-white p-4 text-center shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={item.gambar}
          alt={item.nama}
          fill
          sizes="288px"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg font-bold text-ocean-900">{item.nama}</h3>
      <p className="text-sm font-medium text-ocean-900">{item.kelas}</p>
      <p className="mt-4 text-sm text-ocean-900">{item.deskripsi}</p>
    </a>
  );
}