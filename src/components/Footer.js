import Link from "next/link";
import Image from "next/image";

const menu = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Berita", href: "/berita" },
  { label: "Ekstrakurikuler", href: "/ekstrakurikuler" },
];

export default function Footer() {
  return (
    <footer className="bg-ocean-900 text-ocean-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        {/* Identitas */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo SMA Negeri 1 Bawang" width={40} height={44} />
            <p className="text-lg font-bold text-white">SMA Negeri 1 Bawang</p>
          </div>
          <p className="mt-3 text-sm text-white">
            Optimis, Kreatif, Elegan.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold text-ocean-200">Menu</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ocean-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold text-white">Kontak</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Alamat: (isi alamat sekolah), Bawang, Banjarnegara</li>
            <li>Telepon: (isi nomor telepon)</li>
            <li>Email: (isi email sekolah)</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ocean-800 py-4 text-center text-xs text-ocean-300">
        &copy; {new Date().getFullYear()} SMA Negeri 1 Bawang. All rights reserved.
      </div>
    </footer>
  );
}