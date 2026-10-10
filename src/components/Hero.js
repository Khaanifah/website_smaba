import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[420px] items-center justify-center overflow-hidden text-center text-white md:h-[520px]">
      <Image
        src="/images/hero.jpg"
        alt="Gedung SMA Negeri 1 Bawang"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ocean-700/40" />

      <div className="relative z-10 px-4">
        <p className="text-lg md:text-2xl">Selamat Datang di Website Resmi</p>
        <h1 className="mt-2 text-4xl font-black uppercase md:text-6xl">
          SMA Negeri 1 Bawang
        </h1>
        <Link
          href="/about"
          className="mt-8 inline-block rounded-md bg-ocean-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ocean-800"
        >
          Tentang Kami
        </Link>
      </div>
    </section>
  );
}