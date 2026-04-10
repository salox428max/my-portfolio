import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // 1. API Kalit borligini tekshirish
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("XATOLIK: .env.local faylida API kalit topilmadi!");
      return NextResponse.json({ error: 'API kalit sozlanmagan' }, { status: 500 });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();

    // 2. Anthropic'dan kelgan xatolikni tutish
    if (!response.ok) {
      console.error("Anthropic API Xatosi:", data);
      return NextResponse.json({ error: data.error?.message || 'API xatosi' }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Server Xatosi:", error);
    return NextResponse.json({ error: 'Ichki server xatosi' }, { status: 500 });
  }
}