export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          For AI Product Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual diffs for{" "}
          <span className="text-[#58a6ff]">AI prompt iterations</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Track every prompt version, compare changes side-by-side, and measure performance impact — so your team ships better prompts faster.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start for $29/mo
        </a>

        {/* Mock diff preview */}
        <div className="mt-14 rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden text-left text-sm font-mono">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-[#30363d] bg-[#0d1117]">
            <span className="w-3 h-3 rounded-full bg-[#f85149]"></span>
            <span className="w-3 h-3 rounded-full bg-[#e3b341]"></span>
            <span className="w-3 h-3 rounded-full bg-[#3fb950]"></span>
            <span className="ml-3 text-[#8b949e] text-xs">prompt_v3.txt — diff view</span>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#30363d]">
            <div className="p-4 space-y-1">
              <p className="text-[#8b949e] text-xs mb-2">v2 — Accuracy: 71%</p>
              <p className="bg-[#3d1f1f] text-[#f85149] px-2 py-0.5 rounded">- You are a helpful assistant.</p>
              <p className="text-[#c9d1d9] px-2 py-0.5">  Answer the user question.</p>
              <p className="bg-[#3d1f1f] text-[#f85149] px-2 py-0.5 rounded">- Be concise.</p>
            </div>
            <div className="p-4 space-y-1">
              <p className="text-[#8b949e] text-xs mb-2">v3 — Accuracy: 89%</p>
              <p className="bg-[#1a3a2a] text-[#3fb950] px-2 py-0.5 rounded">+ You are an expert analyst.</p>
              <p className="text-[#c9d1d9] px-2 py-0.5">  Answer the user question.</p>
              <p className="bg-[#1a3a2a] text-[#3fb950] px-2 py-0.5 rounded">+ Use bullet points and examples.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="rounded-xl border border-[#58a6ff] bg-[#161b22] p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited prompt versions",
              "Side-by-side visual diffs",
              "Performance metrics tracking",
              "Team collaboration (up to 5 seats)",
              "Export version history"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">How does prompt versioning work?</p>
            <p className="text-[#8b949e] text-sm">Every time you save a prompt, PromptDiff creates a new version with a timestamp. You can compare any two versions side-by-side and attach performance scores to each run.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">Which AI providers are supported?</p>
            <p className="text-[#8b949e] text-sm">PromptDiff is provider-agnostic. Paste prompts from OpenAI, Anthropic, Gemini, or any other model — we track the text and metrics, not the API calls.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-2">Can I cancel my subscription?</p>
            <p className="text-[#8b949e] text-sm">Yes, cancel anytime from your billing portal. You keep access until the end of your billing period and can export all your data before leaving.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-[#8b949e] text-xs">
        © {new Date().getFullYear()} PromptDiff. All rights reserved.
      </footer>
    </main>
  );
}
