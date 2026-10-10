import Link from "next/link";

// hasil contoh: [1, "...", 4, 5, 6, "...", 10]
function buatDaftarHalaman(total, current) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);

  const halaman = new Set([1, total, current - 1, current, current + 1]);
  const urut = [...halaman].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const hasil = [];
  urut.forEach((p, i) => {
    if (i > 0 && p - urut[i - 1] > 1) hasil.push("...");
    hasil.push(p);
  });
  return hasil;
}

const kotak =
  "flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-sm font-bold";

export default function Pagination({ current, total, basePath }) {
  if (total <= 1) return null;

  const href = (p) => `${basePath}?page=${p}`;

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      {current > 1 ? (
        <Link href={href(current - 1)} className={`${kotak} border-ocean-300 text-ocean-900 hover:bg-ocean-100`}>
          &lt;
        </Link>
      ) : (
        <span className={`${kotak} border-ocean-200 text-ocean-900/30`}>&lt;</span>
      )}

      {buatDaftarHalaman(total, current).map((p, i) =>
        p === "..." ? (
          <span key={`titik-${i}`} className="px-1 text-ocean-900">
            ...
          </span>
        ) : (
          <Link
            key={p}
            href={href(p)}
            className={`${kotak} ${
              p === current
                ? "border-ocean-900 bg-ocean-900 text-white"
                : "border-ocean-300 text-ocean-900 hover:bg-ocean-100"
            }`}
          >
            {p}
          </Link>
        )
      )}

      {current < total ? (
        <Link href={href(current + 1)} className={`${kotak} border-ocean-300 text-ocean-900 hover:bg-ocean-100`}>
          &gt;
        </Link>
      ) : (
        <span className={`${kotak} border-ocean-200 text-ocean-900/30`}>&gt;</span>
      )}
    </nav>
  );
}