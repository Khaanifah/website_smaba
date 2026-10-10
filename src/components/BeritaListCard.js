import Link from "next/link";
import Image from "next/image";
import { formatTanggal } from "@/lib/formatTanggal";

export default function BeritaListCard({ item }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-ocean-200 bg-white p-6 shadow-md">
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-5 text-lg font-bold text-ocean-900">{item.judul}</h3>
      <p className="mt-3 line-clamp-4 text-justify text-sm text-ocean-900">
        {item.ringkasan}
      </p>

      <div className="mt-auto flex items-center justify-between pt-6 text-sm">
        <Link
          href={`/berita/${item.id}`}
          className="font-medium text-ocean-900 hover:text-ocean-600 hover:underline"
        >
          Baca Selengkapnya &rarr;
        </Link>
        <span className="text-ocean-900/60">{formatTanggal(item.tanggal)}</span>
      </div>
    </div>
  );
}