import { Data } from "@/app/[lang]/product/types";

export async function getProduct(lang: "en" | "bn"): Promise<Data> {
  const res = await fetch(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      // For SSR
      cache: "no-store",
      // OR for ISR: next: { revalidate: 3600 }
    }
  );

  if (!res.ok) throw new Error("Failed to fetch product");

   const json = await res.json();
  return json.data;
}
