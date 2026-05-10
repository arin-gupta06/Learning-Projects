import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#121212] text-white font-['Space_Grotesk'] selection:bg-[#00FFC2]/30 selection:text-white min-h-screen pb-16">
      {/* Top Navigation */}
      <header className="bg-[#121212] border-b border-neutral-800 flex justify-between items-center w-full px-6 h-[48px] fixed top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00FFC2]" data-icon="menu_book">menu_book</span>
          <span className="font-['Space_Grotesk'] text-lg font-bold text-[#00FFC2] tracking-tighter">CodeBook</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center h-full">
          <a className="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-[#00FFC2] font-bold border-b-2 border-[#00FFC2] h-full flex items-center" href="#">Product</a>
          <a className="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-neutral-500 hover:text-white transition-all" href="#">Features</a>
          <a className="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-neutral-500 hover:text-white transition-all" href="#">Manifesto</a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="font-['Space_Grotesk'] uppercase tracking-widest text-xs text-[#00FFC2] border border-[#00FFC2]/30 px-3 py-1 rounded-sm">Python</span>
          <button className="bg-[#00FFC2] text-[#121212] font-bold uppercase tracking-widest px-4 py-2 hover:brightness-110 active:scale-95 transition-all text-xs">
            LAUNCH WORKSPACE
          </button>
        </div>
      </header>

      <main className="pt-[48px]">
        {/* Hero Section */}
        <section className="min-h-[870px] flex flex-col md:flex-row items-center px-6 md:px-24 gap-12 border-b border-neutral-800">
          <div className="flex-1 space-y-6">
            <div className="inline-block border border-[#00FFC2]/20 px-3 py-1 bg-[#00FFC2]/5">
              <p className="font-bold text-xs tracking-widest uppercase text-[#00FFC2]">VERSION 1.0 NOW LIVE</p>
            </div>
            <h1 className="font-sans text-6xl md:text-8xl tracking-tight leading-tight">
              Think first.<br />
              <span className="text-[#00FFC2] italic font-light">Code better.</span>
            </h1>
            <p className="text-neutral-400 max-w-lg leading-relaxed text-lg">
              CodeBook is a structure-first workspace designed to improve how you visualize logic before the first line is ever compiled. Master the art of clean architectural thinking.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-[#00FFC2] text-[#121212] font-bold tracking-widest uppercase px-8 py-4 text-sm hover:brightness-110 transition-all">
                GET STARTED
              </button>
              <button className="border border-neutral-700 text-white font-bold tracking-widest uppercase px-8 py-4 text-sm hover:bg-neutral-800 transition-all">
                READ MANIFESTO
              </button>
            </div>
          </div>
          <div className="flex-1 w-full bg-[#181818] rounded-xl border border-neutral-800 p-6 notebook-pattern relative min-h-[500px]">
            <div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <p className="font-mono text-xs text-neutral-500 ml-4">workspace/logic_flow.cb</p>
            </div>
            <div className="font-mono space-y-0 text-neutral-300 leading-[24px]">
              <p><span className="text-[#00FFC2]">function</span> calculate_complexity(input) {`{`}</p>
              <div className="indent-guide border-l border-neutral-700 ml-4 pl-4">
                <p><span className="text-[#c678dd]">if</span> (input.type == <span className="text-[#e5c07b]">"asymmetric"</span>) {`{`}</p>
                <div className="indent-guide border-l border-neutral-700 ml-4 pl-4">
                  <p>apply_grid_constraint();</p>
                  <p><span className="text-neutral-500 italic">// Note: Ensure lines are exactly 24px</span></p>
                  <p>return <span className="text-[#00FFC2]">SUCCESS</span>;</p>
                </div>
                <p>{`}`}</p>
                <p>process_standard_buffer();</p>
                <p><span className="block-cursor inline-block w-2 h-4 bg-[#00FFC2] align-middle mt-1"></span></p>
              </div>
              <p>{`}`}</p>
            </div>
            {/* Visual Floating Elements */}
            <div className="absolute -bottom-8 -left-8 bg-[#181818] border border-neutral-800 p-4 w-48 shadow-2xl">
              <p className="font-bold text-[10px] tracking-widest uppercase text-neutral-500 mb-2">METRICS</p>
              <div className="flex justify-between items-end gap-1 h-12">
                <div className="bg-[#00FFC2] w-full h-[30%]"></div>
                <div className="bg-[#00FFC2] w-full h-[60%]"></div>
                <div className="bg-[#00FFC2] w-full h-[90%]"></div>
                <div className="bg-[#00FFC2] w-full h-[40%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* The Friction Section */}
        <section className="py-24 px-6 md:px-24 bg-[#151515]">
          <div className="text-center mb-16">
            <p className="font-bold tracking-widest text-xs uppercase text-[#00FFC2] mb-2">THE FRICTION</p>
            <h2 className="text-4xl text-white">Why standard IDEs fail the architect.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 border border-neutral-800 hover:border-[#00FFC2]/50 transition-all bg-[#181818]">
              <span className="material-symbols-outlined text-4xl text-[#ff6b6b] mb-6" data-icon="blur_on">blur on</span>
              <h3 className="text-2xl mb-4">Syntax Overload</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Compilers demand perfection in punctuation before you've even perfected the logic. We remove the noise so you can focus on the signal.
              </p>
            </div>
            <div className="group p-8 border border-neutral-800 hover:border-[#00FFC2]/50 transition-all bg-[#181818]">
              <span className="material-symbols-outlined text-4xl text-[#ffaa6b] mb-6" data-icon="dynamic_feed">dynamic feed</span>
              <h3 className="text-2xl mb-4">Messy Logic</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Deeply nested conditions become unreadable in traditional editors. Our structure-first approach makes hierarchy visible by default.
              </p>
            </div>
          </div>
        </section>

        {/* Solution / Features Bento */}
        <section className="py-24 px-6 md:px-24 bg-[#121212]">
          <div className="mb-16">
            <p className="font-bold tracking-widest text-xs uppercase text-[#00FFC2] mb-2">THE SOLUTION</p>
            <h2 className="text-4xl text-white">Designed for scholarly precision.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
            <div className="md:col-span-12 bg-[#181818] border border-neutral-800 p-8 flex flex-col justify-between overflow-hidden relative">
              <div>
                <h3 className="text-2xl mb-2 text-white">Logic Mode</h3>
                <p className="text-neutral-400 max-w-sm text-sm">Write logic as it flows. Pseudocode that understands your structure without enforcing strict syntax rules.</p>
              </div>
              <div className="mt-8 bg-[#111111] border border-neutral-800 h-full rounded-t-lg p-6 font-mono text-[#00FFC2]/60 text-sm">
                <div className="flex gap-4 mb-2"><span className="w-12 text-neutral-600">01</span><span>START session</span></div>
                <div className="flex gap-4 mb-2"><span className="w-12 text-neutral-600">02</span><span>  FOR EACH element IN cluster</span></div>
                <div className="flex gap-4 mb-2"><span className="w-12 text-neutral-600">03</span><span>    IF element.valid THEN map()</span></div>
              </div>
            </div>
            <div className="md:col-span-8 bg-[#00FFC2] p-8 flex flex-col justify-center text-[#121212]">
              <span className="material-symbols-outlined text-6xl mb-4" data-icon="center_focus_strong">center focus strong</span>
              <h3 className="text-2xl mb-2 font-bold">Focus Mode</h3>
              <p className="text-sm font-medium opacity-80">Dims everything except your current active block. Perfect for deep concentration on complex algorithms.</p>
            </div>
            <div className="md:col-span-4 bg-[#181818] border border-neutral-800 p-8">
              <h3 className="text-2xl mb-2 text-white">Margin Notes</h3>
              <p className="text-neutral-400 text-sm">Annotate your logic just like a physical notebook. Keep your intent and implementation side-by-side.</p>
            </div>
            <div className="md:col-span-12 bg-[#181818] border border-neutral-800 p-8 flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl mb-2 text-white">Smart Indentation</h3>
                <p className="text-neutral-400 text-sm">Visual guides that highlight the exact nesting level you're working in. Never lose track of your scopes again.</p>
              </div>
              <div className="flex-1 hidden md:block">
                <div className="w-full h-32 bg-neutral-900 border border-neutral-800 overflow-hidden relative opacity-50 grayscale">
                    <div className="absolute inset-0 notebook-pattern"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-32 px-6 md:px-24 bg-[#0a0a0a] border-y border-neutral-800 text-center">
          <p className="font-bold tracking-widest text-xs uppercase text-[#00FFC2] mb-8">MANIFESTO</p>
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl uppercase tracking-tighter text-white">Structure over Syntax</h2>
            <h2 className="text-4xl md:text-7xl uppercase tracking-tighter text-neutral-700">Thinking over Execution</h2>
            <h2 className="text-4xl md:text-7xl uppercase tracking-tighter text-white">Clarity over Complexity</h2>
          </div>
          <p className="mt-16 text-neutral-400 text-lg max-w-2xl mx-auto">
            We believe the best code is written in the mind first. CodeBook is the bridge between pure thought and executable reality.
          </p>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-b border-neutral-800 overflow-hidden whitespace-nowrap bg-[#121212]">
          <div className="flex animate-marquee items-center gap-24">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs tracking-widest uppercase text-neutral-500">TRUSTED BY</span>
              <span className="text-lg font-bold text-[#00FFC2]">10,000+</span>
              <span className="font-bold text-xs tracking-widest uppercase text-neutral-500">ARCHITECTS</span>
            </div>
            <div className="font-bold tracking-widest text-neutral-600 text-xl uppercase">PYTHON FOUNDATION</div>
            <div className="font-bold tracking-widest text-neutral-600 text-xl uppercase">NEO TECH IND.</div>
            <div className="font-bold tracking-widest text-neutral-600 text-xl uppercase">OPEN LOGIC GROUP</div>
            <div className="font-bold tracking-widest text-neutral-600 text-xl uppercase">CYBER CORE</div>
            <div className="font-bold tracking-widest text-neutral-600 text-xl uppercase">SCHEMA LABS</div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 md:px-24 text-center bg-[#151515]">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-7xl tracking-tighter text-white">Ready to structure your logic?</h2>
            <p className="text-neutral-400 text-xl">Join the elite developers who think before they type.</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 pt-8">
              <button className="bg-[#00FFC2] text-[#121212] font-bold tracking-widest uppercase px-12 py-6 text-lg hover:brightness-110 transition-all flex items-center justify-center gap-3">
                LAUNCH WORKSPACE <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#121212] px-6 md:px-24 py-16 border-t border-neutral-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[#00FFC2]" data-icon="menu_book">menu_book</span>
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#00FFC2] tracking-tighter">CodeBook</span>
            </div>
            <p className="text-neutral-400 text-sm mb-6">
              A premium environment for logic-first development. Crafted for those who view code as a scholarly pursuit.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-neutral-600 cursor-pointer hover:text-[#00FFC2]" data-icon="share">share</span>
              <span className="material-symbols-outlined text-neutral-600 cursor-pointer hover:text-[#00FFC2]" data-icon="terminal">terminal</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-xs tracking-widest uppercase text-white mb-6">PLATFORM</p>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Workspace</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Logic Flow</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Integrations</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Pricing</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs tracking-widest uppercase text-white mb-6">RESOURCES</p>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">API Reference</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Community</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Manifesto</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-xs tracking-widest uppercase text-white mb-6">COMPANY</p>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Privacy</li>
              <li className="hover:text-[#00FFC2] cursor-pointer transition-colors">Terms</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-600">© 2026 CODEBOOK IDE. ALL RIGHTS RESERVED.</p>
          <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-600">DESIGNED FOR INTELLECTUAL CLARITY.</p>
        </div>
      </footer>

      <style jsx>{`
        .notebook-pattern {
          background-image: linear-gradient(to bottom, #1f1f1f 1px, transparent 1px);
          background-size: 100% 24px;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .block-cursor {
          display: inline-block;
          width: 8px;
          height: 18px;
          background-color: #00FFC2;
          vertical-align: middle;
        }
        .indent-guide {
          border-left: 1px solid #3a4a43;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;