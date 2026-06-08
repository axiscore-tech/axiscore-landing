export async function onRequest(context) {
  // Prova prima dall'asset store di Cloudflare Pages (il file PDF nel repo)
  try {
    const assetUrl = new URL('/guida-cervicale.pdf', context.request.url);
    const assetResp = await context.env.ASSETS.fetch(new Request(assetUrl.toString()));
    if (assetResp.ok) {
      const buf = await assetResp.arrayBuffer();
      return new Response(buf, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="AXISCORE_Guida_Dolore_Cervicale.pdf"',
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }
  } catch (_) {}

  // Fallback: fetch diretto da GitHub raw (funziona sempre)
  const raw = 'https://raw.githubusercontent.com/axiscore-tech/axiscore-landing/main/guida-cervicale.pdf';
  const resp = await fetch(raw);
  const buf  = await resp.arrayBuffer();
  return new Response(buf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="AXISCORE_Guida_Dolore_Cervicale.pdf"',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
