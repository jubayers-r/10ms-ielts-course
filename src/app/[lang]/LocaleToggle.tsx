"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LocaleToggle() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleLang = () => {
    const isBn = pathname.startsWith("/bn");
    const newPath = isBn
      ? pathname.replace("/bn", "/en")
      : pathname.replace("/en", "/bn");
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLang}
      className="px-3 py-1 rounded bg-primary text-white text-sm cursor-pointer "
    >
      Toggle Language
    </button>
  );
}
