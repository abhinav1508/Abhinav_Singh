import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="px-margin-page-mobile md:px-margin-page mb-32">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <div className="h-[4px] w-16 bg-red-600 mb-8"></div>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">ABOUT</span>
            <h1 className="font-headline-md text-[48px] md:text-[64px] leading-[1.1] text-on-surface">
              Designing Products.<br/>
              Solving Business Problems.<br/>
              Driving Digital Transformation.
            </h1>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end">
            <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-relaxed opacity-90 mb-6">
              I bridge the gap between business vision and technology execution by translating complex operational challenges into scalable digital products.
            </p>
            <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-relaxed opacity-90">
              From government transformation initiatives and enterprise platforms to AI-powered solutions, I collaborate with stakeholders, designers, and engineering teams to build products that simplify operations, improve decision-making, and deliver measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Background/Bio Section */}
      <section className="px-margin-page-mobile md:px-margin-page py-32 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 relative group">
            <div className="aspect-[4/5] grayscale relative overflow-hidden bg-secondary-container">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwCiU0IFwNr7SBUBz8InifkmJ34h22zZd5E64H-Z8s4mkwU-38i61KHhFn05zoDAC4jDjSthnhF-Gja6_uc5Nx5m882tjAbQBAJDF_WV2d-89itHxZu7LliwoxK6PecEYAVnSwCvEi6H-to4alCbrhgWPJ4snJHR-tBejOn_2-Zw0GQDxHakHhDB5nC6LrBw7vvbY04Dt0vz8JiZrQGtfS-xHd5eeIsBS16sQbIUZkhiaUD0uTntT5H1D5-gl2gAB_1LPRtTcUDsCE')" }}
              ></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-on-background flex flex-col items-center justify-center text-white p-4 z-10 shadow-xl">
                <span className="font-label-caps text-[12px] leading-tight text-center uppercase tracking-[0.2em]">Product</span>
                <span className="font-label-caps text-[12px] leading-tight text-center uppercase tracking-[0.2em] text-red-500 mt-1">First</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 mt-16 md:mt-0">
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-6 block tracking-[0.2em]">MY JOURNEY</span>
            <h2 className="text-[40px] md:text-[56px] font-headline-md mb-10 leading-tight">Building products with business at the center.</h2>
            <div className="space-y-6 text-on-surface-variant text-[18px] md:text-[20px] leading-relaxed opacity-90">
              <p>
                My career has been shaped by one simple belief—technology creates value only when it solves real business problems.
              </p>
              <p>
                I began my journey exploring AI products, product research, and technical documentation before transitioning into business analysis and enterprise consulting. Over time, I have worked across government organizations, healthcare, railways, energy, enterprise SaaS, and AI platforms, helping transform complex workflows into scalable digital solutions.
              </p>
              <p>
                Today, as a Business Consultant at Chhattisgarh IT Solutions, I work closely with the South East Central Railway (SECR) Telecom Department, leading digital transformation initiatives that modernize field operations, asset management, procurement workflows, and enterprise systems.
              </p>
              <p>
                Whether defining product strategy, creating business documentation, designing workflows, or collaborating with cross-functional teams, my focus remains the same—build products that make organizations work smarter.
              </p>
            </div>
            <div className="mt-12 border-l-4 border-red-600 pl-8 italic text-[24px] py-4 text-on-surface font-headline-md opacity-80 leading-snug">
              "Great products aren't built by adding more features—they're built by solving the right problems."
            </div>
          </div>
        </div>
      </section>

      {/* Career Epochs (Bento Grid Style) */}
      <section className="px-margin-page-mobile md:px-margin-page py-32 overflow-hidden bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-[40px] md:text-[56px] font-headline-md leading-tight shrink-0">Career Epochs</h2>
            <div className="hidden md:block flex-grow h-[1px] bg-outline-variant/50 mx-12"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="p-6 md:p-12 border border-outline-variant/30 hover:border-outline-variant hover:shadow-lg transition-all duration-500 bg-surface flex flex-col justify-between group">
              <div>
                <span className="font-label-caps text-label-caps text-red-600 mb-6 block tracking-[0.2em]">2023 – 2024</span>
                <h3 className="text-[28px] font-headline-md mb-6 leading-tight group-hover:text-red-600 transition-colors">AI &amp; Product Foundations</h3>
                <p className="text-on-surface-variant mb-12 text-[18px] leading-relaxed opacity-80">Started my career working on enterprise AI products, product research, technical documentation, and quality assurance while contributing to Beagle GPT and AI-powered business solutions.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="bg-surface-container-highest px-4 py-2 text-[11px] font-label-caps uppercase tracking-[0.1em]">AI Products</span>
                <span className="bg-surface-container-highest px-4 py-2 text-[11px] font-label-caps uppercase tracking-[0.1em]">Technical Writing</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="p-6 md:p-12 border border-outline-variant/30 hover:border-outline-variant hover:shadow-lg transition-all duration-500 bg-surface flex flex-col justify-between group">
              <div>
                <span className="font-label-caps text-label-caps text-red-600 mb-6 block tracking-[0.2em]">2024 – 2026</span>
                <h3 className="text-[28px] font-headline-md mb-6 leading-tight group-hover:text-red-600 transition-colors">Business Analysis</h3>
                <p className="text-on-surface-variant mb-12 text-[18px] leading-relaxed opacity-80">Worked across government, healthcare, energy, and enterprise platforms, translating stakeholder requirements into scalable digital products through structured analysis and product thinking.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="bg-surface-container-highest px-4 py-2 text-[11px] font-label-caps uppercase tracking-[0.1em]">Business Analysis</span>
                <span className="bg-surface-container-highest px-4 py-2 text-[11px] font-label-caps uppercase tracking-[0.1em]">Digital Products</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="p-6 md:p-12 bg-on-background text-surface flex flex-col justify-between group">
              <div>
                <span className="font-label-caps text-label-caps text-red-500 mb-6 block tracking-[0.2em]">2026 – PRESENT</span>
                <h3 className="text-[32px] font-headline-md mb-6 leading-tight text-white">Business Consulting</h3>
                <p className="text-surface-variant mb-12 text-[18px] leading-relaxed opacity-80">Leading digital transformation initiatives for Indian Railways while designing enterprise platforms that improve operational efficiency, workforce management, procurement, and telecom operations.</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="bg-white/10 px-4 py-2 text-[11px] font-label-caps uppercase tracking-[0.1em] text-white">Product Strategy</span>
                <span className="bg-white/10 px-4 py-2 text-[11px] font-label-caps uppercase tracking-[0.1em] text-white">Digital Transformation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy (Quote) */}
      <section className="relative py-40 overflow-hidden bg-on-background border-y border-outline-variant/20">
        <div className="relative z-10 px-margin-page-mobile md:px-margin-page text-center">
          <div className="max-w-5xl mx-auto">
            <span className="material-symbols-outlined text-red-500 text-[64px] mb-12 block">format_quote</span>
            <h2 className="font-headline-md text-[40px] md:text-[56px] text-white mb-16 leading-[1.3]">
              "Every successful product begins with understanding people, not technology. My role is to transform business complexity into intuitive digital experiences that create measurable impact."
            </h2>
            <div className="inline-block border-t border-white/20 pt-8 mt-4">
              <p className="font-label-caps text-label-caps text-surface-variant tracking-[0.3em] opacity-80 uppercase">A PRODUCT-FIRST MINDSET</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Leadership */}
      <section className="px-margin-page-mobile md:px-margin-page py-32 bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <span className="font-label-caps text-label-caps text-on-surface-variant mb-6 block tracking-[0.2em]">EXPERIENCE / LEADERSHIP</span>
              <h2 className="font-headline-md text-[48px] leading-tight mb-8">Professional<br/>Experience</h2>
              <p className="text-[18px] text-on-surface-variant opacity-80">Working across government organizations, enterprise platforms, AI products, and digital transformation initiatives has allowed me to develop a multidisciplinary approach to product strategy and business consulting.</p>
            </div>
          </div>
          <div className="md:col-span-7 space-y-0">
            {/* Experience 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-b border-outline-variant/30 group">
              <div className="md:col-span-1">
                <span className="font-label-caps text-[12px] font-bold text-red-600 tracking-[0.2em] uppercase mt-2 block">CURRENT</span>
              </div>
              <div className="md:col-span-3">
                <h4 className="font-headline-sm text-[32px] mb-3 group-hover:text-red-600 transition-colors leading-tight">Business Consultant</h4>
                <p className="font-label-caps text-[12px] text-on-surface-variant mb-6 tracking-[0.2em] uppercase opacity-70">CHHATTISGARH IT SOLUTIONS</p>
                <p className="text-on-surface-variant text-[18px] leading-relaxed opacity-90">Leading business consulting and digital transformation initiatives for South East Central Railway (SECR), defining workflows, product requirements, and enterprise solutions that improve operational efficiency.</p>
              </div>
            </div>
            
            {/* Experience 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-b border-outline-variant/30 group">
              <div className="md:col-span-1">
                <span className="font-label-caps text-[12px] font-bold text-on-surface-variant tracking-[0.2em] uppercase mt-2 block">2025 — 2026</span>
              </div>
              <div className="md:col-span-3">
                <h4 className="font-headline-sm text-[32px] mb-3 group-hover:text-red-600 transition-colors leading-tight">Business Analyst</h4>
                <p className="font-label-caps text-[12px] text-on-surface-variant mb-6 tracking-[0.2em] uppercase opacity-70">WEBORITY TECHNOLOGIES</p>
                <p className="text-on-surface-variant text-[18px] leading-relaxed opacity-90">Delivered business analysis for government portals, healthcare systems, enterprise SaaS platforms, and certification ecosystems including QCI SAMAR, BEE, and VMMC Safdarjung.</p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-b border-outline-variant/30 group">
              <div className="md:col-span-1">
                <span className="font-label-caps text-[12px] font-bold text-on-surface-variant tracking-[0.2em] uppercase mt-2 block">2024 — 2025</span>
              </div>
              <div className="md:col-span-3">
                <h4 className="font-headline-sm text-[32px] mb-3 group-hover:text-red-600 transition-colors leading-tight">Associate Moderator</h4>
                <p className="font-label-caps text-[12px] text-on-surface-variant mb-6 tracking-[0.2em] uppercase opacity-70">TECH MAHINDRA (GOOGLE PROJECT)</p>
                <p className="text-on-surface-variant text-[18px] leading-relaxed opacity-90">Supported Google's AI ecosystem through content quality validation and policy moderation while developing analytical thinking and operational excellence at scale.</p>
              </div>
            </div>
            
            {/* Experience 4 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-b border-outline-variant/30 group">
              <div className="md:col-span-1">
                <span className="font-label-caps text-[12px] font-bold text-on-surface-variant tracking-[0.2em] uppercase mt-2 block">2023 — 2024</span>
              </div>
              <div className="md:col-span-3">
                <h4 className="font-headline-sm text-[32px] mb-3 group-hover:text-red-600 transition-colors leading-tight">Product Research Intern</h4>
                <p className="font-label-caps text-[12px] text-on-surface-variant mb-6 tracking-[0.2em] uppercase opacity-70">DECISION POINT ANALYTICS</p>
                <p className="text-on-surface-variant text-[18px] leading-relaxed opacity-90">Contributed to Beagle GPT through product research, technical writing, documentation, and quality assurance while supporting enterprise AI product development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-margin-page-mobile md:px-margin-page py-32 bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-headline-md text-[40px] md:text-[56px] leading-tight mb-8 text-on-surface">Let's build products that solve real business problems.</h3>
          <p className="text-[18px] md:text-[20px] text-on-surface-variant max-w-3xl mx-auto mb-12">Whether you're modernizing enterprise operations, building digital platforms, or transforming complex workflows, I'm always interested in collaborating on products that create measurable impact.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-on-background text-surface px-10 py-5 font-label-caps text-[14px] tracking-[0.2em] hover:bg-red-600 transition-colors duration-300">LET'S CONNECT</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
