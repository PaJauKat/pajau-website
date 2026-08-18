export async function GET({ url }: { url: URL }) {
  const rsn = url.searchParams.get("username")?.trim();
  console.log(`url=${url}`)
  console.log("Meowname:", JSON.stringify(rsn));

  if (!rsn) {
    return new Response(
      JSON.stringify({ error: "Missing username parameter." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const endpoint = `https://sync.runescape.wiki/runelite/player/${encodeURIComponent(rsn)}/STANDARD`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; pajau-website/1.0)",
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: `RuneLite API returned status ${response.status}.`,
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
