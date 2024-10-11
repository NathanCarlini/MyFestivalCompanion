
import { getfestivals } from "@/app/api/getfestivals/route";

export default async function Home() {
const data = await getfestivals();
return (
<main>
<p className="text-red-500">bonjour</p>
</main>
  );
} 