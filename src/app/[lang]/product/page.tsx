import { getProduct } from "@/lib/api";

export const dynamic = "force-dynamic"; // for SSR
// or use export const revalidate = 3600; // for ISR

export default async function ProductPage() {
  const data = await getProduct("bn");

  return (
    <div>
      <main>{data.title}</main>
    </div>
  );
}
