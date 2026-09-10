import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const endpoint = process.env.MOVENDO_FORM_ENDPOINT;

    if (endpoint) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
        next: { revalidate: 0 },
      });

      if (!response.ok) {
        return NextResponse.json(
          { ok: false, message: "Não conseguimos enviar sua mensagem. Tente novamente." },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Não conseguimos enviar sua mensagem. Tente novamente." },
      { status: 500 },
    );
  }
}
