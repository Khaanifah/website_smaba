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
    <footer className="bg-ocean-900 text-white">
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
          <h3 className="font-semibold text-white">Menu</h3>
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
            <li>
              Alamat:{" "}
              <a href="https://www.google.com/maps/search/?api=1&query=SMA+Negeri+1+Bawang+Banjarnegara" target="_blank" rel="noopener noreferrer" className="hover:text-ocean-400 hover:underline">
                Jl. Campur Salam No.134, Kaliwulung, Bawang, Kec. Bawang, Kab.
                    Banjarnegara, Jawa Tengah 53471
                    </a>
                </li>
                <li>
                    Telepon:{" "}
                    <a>(0286) 5985368</a>
                </li>
                <li>
                    Email:{" "}
                    <a>info@sman1bawang.sch.id</a>
                </li>
            </ul>
            </div>
        </div>
    </footer>
    );
}