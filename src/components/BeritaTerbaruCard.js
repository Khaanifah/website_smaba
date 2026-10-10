import Link from "next/link";
import Image from "next/image";
import { formatTanggal } from "@/lib/formatTanggal";

export default function BeritaTerbaruCard({ item }) {
  return (
    <Link
      href={`/berita/${item.id}`}
      className="flex h-full flex-col rounded-xl border border-ocean-200 bg-white p-4 shadow-md transition-shadow hover:shadow-xl"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        <Image
          src={item.gambar}
          alt={item.judul}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 line-clamp-2 text-sm font-bold text-ocean-900">
        {item.judul}
      </h3>
      <p className="mt-auto pt-2 text-right text-xs text-ocean-900/60">
        {formatTanggal(item.tanggal)}
      </p>
    </Link>
  );
}