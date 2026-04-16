import { getSearchCorpus } from "@/lib/search-corpus";

export async function GET() {
  const corpus = await getSearchCorpus();
  return new Response(JSON.stringify(corpus), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
