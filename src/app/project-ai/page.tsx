import Link from "next/link";
import Image from "next/image";

export default function AIProjectDetail() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-margin-page bg-on-background text-on-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAa8o859wIbnnABD4bj-rKN4GU4leIzzTI0hQnjK22FyKhihKxZsUVvMsfGboyL0hFstU32jfc90nLpcS4wF-imFl7nzj72ZnrsrwXlHaddNx8Sl33o9NCPRfVfgjjOyfGwWXFMSJuMKDQs89BUBADaacntN4mQMLAbr2GIQJR-5jAYQNGy18KHN532AsdZuFE8GaYDekRkS_iCLdzLc6Le8CghXGdaBoAB2noV_BLErPmfICsa3CIjC3a3TsA048o1rljgdWVuBLuz')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>

        <div className="max-w-container-max mx-auto relative z-10 w-full">
          <div className="max-w-4xl mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container mb-6 block tracking-[0.2em]">
              FEATURED CASE STUDY / ENTERPRISE AI
            </span>
            <h1 className="text-[48px] md:text-[72px] font-headline-md leading-[1.05] mb-8">
              Building an Enterprise AI Assistant for Smarter Knowledge Discovery
            </h1>
            <p className="text-body-lg text-surface-variant max-w-3xl leading-relaxed opacity-90">
              Contributed to the development of Beagle GPT, an enterprise AI assistant designed to simplify organizational knowledge discovery through conversational AI. As a Product Research Intern, I supported product research, technical documentation, and quality assurance to help create a reliable, user-centric AI solution for enterprise teams.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-surface/20 pt-8 mt-12">
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">YEAR</p>
              <p className="text-body-lg font-bold">2024</p>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">INDUSTRY</p>
              <p className="text-body-lg font-bold">Artificial Intelligence • Enterprise Software • Knowledge Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-surface relative -mt-24 z-20 mx-margin-page max-w-container-max md:mx-auto border-t-[8px] border-primary shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">ROLE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Product Research Intern</h3>
            <p className="text-body-md text-on-surface-variant">Contributed across product research, technical writing, and quality assurance while collaborating with cross-functional teams to improve AI workflows, documentation, usability, and product quality.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">TIMELINE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Enterprise AI Product Development</h3>
            <p className="text-body-md text-on-surface-variant">Supported research, documentation, feature validation, and testing throughout the product development lifecycle.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Web-Based AI Assistant</h3>
            <p className="text-body-md text-on-surface-variant">LLM • Knowledge Base • Enterprise AI • Conversational Search</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Context) */}
      <section className="bg-surface py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-headline-md leading-tight text-on-surface">
                Enterprise knowledge was scattered across multiple documents, making information difficult to discover and slowing decision-making.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                Organizations often rely on large volumes of documentation, policies, technical resources, and internal knowledge spread across multiple systems. Finding accurate information required significant manual effort, slowing employee productivity and increasing dependency on subject matter experts.
              </p>
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                Beagle GPT was envisioned as an enterprise AI assistant capable of understanding natural language queries and instantly retrieving relevant organizational knowledge through an intuitive conversational interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE & ARCHITECTURE SECTION */}
      <section className="bg-surface-container-lowest py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="relative mb-24">
            <div className="aspect-[16/7] bg-secondary-container overflow-hidden">
              {/* Architecture Diagram Placeholder */}
              <div 
                className="w-full h-full bg-cover bg-center grayscale opacity-80"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAa8o859wIbnnABD4bj-rKN4GU4leIzzTI0hQnjK22FyKhihKxZsUVvMsfGboyL0hFstU32jfc90nLpcS4wF-imFl7nzj72ZnrsrwXlHaddNx8Sl33o9NCPRfVfgjjOyfGwWXFMSJuMKDQs89BUBADaacntN4mQMLAbr2GIQJR-5jAYQNGy18KHN532AsdZuFE8GaYDekRkS_iCLdzLc6Le8CghXGdaBoAB2noV_BLErPmfICsa3CIjC3a3TsA048o1rljgdWVuBLuz')" }}
              ></div>
            </div>
            {/* Overlay Box */}
            <div className="md:absolute md:bottom-0 md:right-0 md:translate-y-12 md:-translate-x-12 bg-on-background text-on-primary p-12 max-w-2xl shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM ARCHITECTURE</span>
              <h3 className="text-[32px] font-headline-md mb-6 leading-tight">Designing an Enterprise Knowledge Discovery Platform</h3>
              <p className="text-body-md text-surface-variant leading-relaxed">
                Rather than functioning as a traditional chatbot, Beagle GPT was designed as an intelligent enterprise assistant capable of understanding user intent, retrieving contextual information, and helping employees access organizational knowledge quickly and efficiently.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16">
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">01</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Product Research</h4>
                <p className="text-on-surface-variant leading-relaxed">Researched enterprise AI use cases, user expectations, and knowledge management challenges to support product discovery and feature planning.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">02</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Technical Documentation</h4>
                <p className="text-on-surface-variant leading-relaxed">Prepared feature documentation, user guides, internal documentation, release notes, and product content to improve product understanding and knowledge sharing.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">03</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Conversational Experience</h4>
                <p className="text-on-surface-variant leading-relaxed">Contributed to defining AI interaction flows and documentation that improved the clarity, usability, and consistency of conversational experiences.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">04</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Quality Assurance</h4>
                <p className="text-on-surface-variant leading-relaxed">Performed functional testing, regression testing, bug validation, and feature verification to ensure product quality before releases.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">05</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Cross-Functional Collaboration</h4>
                <p className="text-on-surface-variant leading-relaxed">Worked closely with product managers, developers, and designers to clarify requirements, document features, validate functionality, and improve overall product quality.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">06</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Continuous Product Improvement</h4>
                <p className="text-on-surface-variant leading-relaxed">Supported iterative product improvements through documentation updates, usability feedback, testing insights, and collaborative review sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY RESPONSIBILITIES INFOGRAPHIC (BONUS) */}
      <section className="bg-surface py-32 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="text-center mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">WORKFLOW</span>
            <h2 className="text-[40px] md:text-[56px] font-headline-md leading-tight">My Responsibilities</h2>
            <p className="text-[20px] text-on-surface-variant max-w-3xl mx-auto mt-6">
              A structured approach to iterating and refining an enterprise AI product through continuous collaboration and quality control.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto overflow-hidden">
            {/* The vertical dashed line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/30 -translate-x-1/2"></div>
            
            <div className="space-y-6 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Product Research</h4>
                  <p className="text-on-surface-variant">Understanding user expectations and enterprise use cases.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">biotech</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">description</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">Technical Documentation</h4>
                  <p className="text-on-surface-variant">Preparing guides, specs, and knowledge-sharing content.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Requirement Understanding</h4>
                  <p className="text-on-surface-variant">Collaborating cross-functionally to define workflows.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">psychology</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">fact_check</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">QA Testing</h4>
                  <p className="text-on-surface-variant">Running functional and regression validations.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Bug Reporting</h4>
                  <p className="text-on-surface-variant">Isolating issues and collaborating for fixes.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">bug_report</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">checklist</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">Feature Validation</h4>
                  <p className="text-on-surface-variant">Ensuring requirements align with the final build.</p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Product Improvements</h4>
                  <p className="text-on-surface-variant">Iterating on workflows through continuous testing.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* MY CONTRIBUTION & BUSINESS IMPACT */}
      <section className="bg-surface py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* My Contribution */}
            <div>
              <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">MY CONTRIBUTION</span>
              <h3 className="text-[32px] font-headline-md mb-8 leading-tight">My Contribution</h3>
              <ul className="space-y-4 text-[18px] text-on-surface-variant leading-relaxed">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Conducted product research to understand enterprise AI use cases and business requirements.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Created technical documentation including feature specifications, user guides, release notes, and internal knowledge documentation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Assisted in defining conversational workflows and AI interaction scenarios.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Executed functional testing, regression testing, and feature validation before product releases.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Reported bugs, validated fixes, and collaborated with developers to improve product quality.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Worked with product, design, and engineering teams throughout the development lifecycle to ensure business requirements were accurately implemented.</span>
                </li>
              </ul>
            </div>

            {/* Business Impact */}
            <div>
              <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">BUSINESS IMPACT</span>
              <h3 className="text-[32px] font-headline-md mb-8 leading-tight">Business Impact</h3>
              <ul className="space-y-4 text-[18px] text-on-surface-variant leading-relaxed">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Improved accessibility of enterprise knowledge through conversational AI.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Strengthened product quality through structured testing and validation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Created comprehensive technical documentation supporting internal teams.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Improved collaboration between product, design, and engineering teams.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Contributed to delivering a scalable AI-powered enterprise knowledge assistant.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* BLACK SECTION (Transformation Outcomes) */}
      <section className="bg-on-background text-on-primary py-32 border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-page text-center">
          <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-12 block">MEASURABLE OUTCOMES</span>
          <h2 className="text-[40px] md:text-[56px] font-headline-md mb-20 leading-tight">Transformation Outcomes</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">search_insights</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Enterprise Knowledge Discovery</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">description</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Technical Documentation</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">fact_check</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Product Quality Assurance</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">robot_2</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">AI-Powered Knowledge Assistant</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-container-max mx-auto px-margin-page text-center max-w-4xl">
          <span className="material-symbols-outlined text-[48px] text-on-tertiary-container mb-8">format_quote</span>
          <blockquote className="text-[32px] md:text-[40px] font-headline-md leading-[1.3] mb-12 italic text-on-surface">
            "Building successful AI products isn't only about developing intelligent models—it's equally about understanding users, documenting solutions clearly, and continuously improving the product through research, testing, and collaboration."
          </blockquote>
          <div>
            <p className="text-[20px] font-bold text-on-surface tracking-tight mb-1">Abhinav Singh</p>
            <p className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">PRODUCT RESEARCH INTERN</p>
          </div>
        </div>
      </section>

      {/* UP NEXT */}
      <section className="bg-surface py-24 border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-page flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">UP NEXT</span>
            <h2 className="text-[32px] md:text-[48px] font-headline-md leading-tight max-w-2xl">
              Supporting India's Energy Efficiency Mission through Digital Transformation
            </h2>
          </div>
          <Link href="/project-bee" className="w-20 h-20 bg-on-background text-on-primary flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined scale-150">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
