import Link from "next/link";
import Image from "next/image";

export default function SamarProjectDetail() {
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
              FEATURED CASE STUDY / GOVERNMENT DIGITAL TRANSFORMATION
            </span>
            <h1 className="text-[48px] md:text-[72px] font-headline-md leading-[1.05] mb-8">
              Digitizing Vendor Certification through the SAMAR Platform
            </h1>
            <p className="text-body-lg text-surface-variant max-w-3xl leading-relaxed opacity-90 mb-10">
              Designed and contributed to a national digital certification platform for the Quality Council of India (QCI) and DRDO, transforming complex vendor registration, assessment, and certification workflows into a unified digital ecosystem that supports India's indigenous defence manufacturing initiatives.
            </p>
            <Link
              href="/SAMAR-case-study.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-on-primary text-label-caps font-bold px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
            >
              <span>View Full Case Study (PDF)</span>
              <span className="material-symbols-outlined text-[20px]">open_in_new</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-surface/20 pt-8 mt-12">
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">YEAR</p>
              <p className="text-body-lg font-bold">2025 – 2026</p>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">INDUSTRY</p>
              <p className="text-body-lg font-bold">Government • Defence • Certification • Digital Governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-surface relative -mt-24 z-20 mx-margin-page max-w-container-max md:mx-auto border-t-[8px] border-primary shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">ROLE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Business Analyst</h3>
            <p className="text-body-md text-on-surface-variant">Led requirement gathering, stakeholder discussions, workflow design, business documentation, and product validation while collaborating with cross-functional teams throughout the platform development lifecycle.</p>
          </div>
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">TIMELINE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">National Digital Transformation</h3>
            <p className="text-body-md text-on-surface-variant">Designed and implemented a scalable certification platform supporting thousands of defence vendors across India.</p>
          </div>
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Web Platform</h3>
            <p className="text-body-md text-on-surface-variant">Vendor Portal • Assessment Workflow • Certification Management • Admin Dashboard</p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTED CONTEXT SECTION */}
      <section className="bg-surface pt-24 pb-8">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="bg-surface-container-low border-l-4 border-primary p-8 md:p-6 md:p-12">
            <h3 className="text-[24px] font-headline-md mb-4 text-on-surface">Project Context</h3>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              SAMAR is a national digital initiative developed for the Quality Council of India (QCI) in collaboration with DRDO to strengthen India's indigenous defence manufacturing ecosystem by streamlining vendor certification and assessment processes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Context) */}
      <section className="bg-surface py-24">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-headline-md leading-tight text-on-surface">
                Managing defence vendor certification through fragmented manual processes created unnecessary delays and operational complexity.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The certification journey for defence vendors involved multiple disconnected processes, manual documentation, and extensive coordination between applicants, assessors, and certification authorities. These challenges slowed onboarding, reduced process visibility, and increased administrative effort.
              </p>
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The objective was to create a unified digital platform capable of managing the complete vendor certification lifecycle—from registration and document submission to assessments, approvals, certification issuance, and renewal—while improving transparency and operational efficiency.
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
                className="w-full h-full bg-cover bg-center opacity-90"
                style={{ backgroundImage: "url('/samar-ecosystem.jpg')" }}
              ></div>
            </div>
            {/* Overlay Box */}
            <div className="md:absolute md:bottom-0 md:right-0 md:translate-y-12 md:-translate-x-12 bg-on-background text-on-primary p-6 md:p-12 max-w-2xl shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM ARCHITECTURE</span>
              <h3 className="text-[32px] font-headline-md mb-6 leading-tight">Building a Unified Vendor Certification Ecosystem</h3>
              <p className="text-body-md text-surface-variant leading-relaxed">
                Instead of digitizing isolated workflows, the platform was designed as a centralized certification ecosystem where vendors, assessors, administrators, and certification authorities collaborate through standardized digital workflows. Every stage of the certification lifecycle is connected within a single platform, ensuring consistency, transparency, and faster decision-making.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16">
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">01</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Vendor Registration</h4>
                <p className="text-on-surface-variant leading-relaxed">Created structured digital onboarding workflows allowing organizations to register, manage profiles, and submit certification applications through a centralized platform.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">02</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Document Verification</h4>
                <p className="text-on-surface-variant leading-relaxed">Digitized document collection, validation, and compliance review processes to reduce manual effort and improve verification accuracy.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">03</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Assessment Workflow</h4>
                <p className="text-on-surface-variant leading-relaxed">Designed structured workflows enabling assessors to evaluate vendors, schedule inspections, record observations, and submit assessment reports digitally.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">04</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Certification Lifecycle</h4>
                <p className="text-on-surface-variant leading-relaxed">Managed complete certification workflows including approvals, certificate generation, renewals, and status tracking through a unified digital interface.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">05</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Workflow Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Configured role-based workflows ensuring seamless collaboration between vendors, assessment teams, administrators, and certification authorities.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">06</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Dashboard &amp; Analytics</h4>
                <p className="text-on-surface-variant leading-relaxed">Provided centralized dashboards enabling stakeholders to monitor certification progress, pending actions, workflow performance, and operational insights in real time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION WORKFLOW INFOGRAPHIC (BONUS) */}
      <section className="bg-surface py-32 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="text-center mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">WORKFLOW</span>
            <h2 className="text-[40px] md:text-[56px] font-headline-md leading-tight">Vendor Certification Lifecycle</h2>
            <p className="text-[20px] text-on-surface-variant max-w-3xl mx-auto mt-6">
              A structured and transparent process connecting vendors, reviewers, and authorities.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto overflow-hidden">
            {/* The vertical dashed line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/30 -translate-x-1/2"></div>
            
            <div className="space-y-6 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Vendor Registration</h4>
                  <p className="text-on-surface-variant">Secure onboarding and initial profile creation.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">how_to_reg</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">find_in_page</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">Application Review</h4>
                  <p className="text-on-surface-variant">Digital document validation and compliance check.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Assessment &amp; Testing</h4>
                  <p className="text-on-surface-variant">Structured evaluation and on-site inspection logging.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">fact_check</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">workspace_premium</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">Certification</h4>
                  <p className="text-on-surface-variant">Official approval and automated certificate issuance.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Renewal &amp; Surveillance</h4>
                  <p className="text-on-surface-variant">Ongoing monitoring and lifecycle management.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">autorenew</span>
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
                  <span>Conducted stakeholder discussions to understand certification workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Translated business requirements into BRDs, FRDs, user stories, and process documentation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Designed workflow diagrams covering end-to-end certification journeys.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Collaborated with UI/UX designers to improve usability and simplify complex workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Worked closely with development teams during sprint planning, requirement clarification, and solution validation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Supported testing, requirement verification, and release readiness activities.</span>
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
                  <span>Digitized end-to-end vendor certification workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Improved transparency across registration, assessment, and approval stages.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Reduced dependency on paper-based documentation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Enabled centralized tracking for certification lifecycle management.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Created a scalable platform supporting future growth in certified indigenous defence vendors.</span>
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
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">important_devices</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Digital Vendor Onboarding</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">account_tree</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Centralized Certification Workflow</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">admin_panel_settings</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Role-Based Assessment Process</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">trending_up</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Scalable National Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-container-max mx-auto px-margin-page text-center max-w-4xl">
          <span className="material-symbols-outlined text-[48px] text-on-tertiary-container mb-8">format_quote</span>
          <blockquote className="text-[32px] md:text-[40px] font-headline-md leading-[1.3] mb-12 italic text-on-surface">
            "Successful digital transformation is not about moving paper forms online—it's about redesigning complex operational workflows into intuitive, scalable systems that improve transparency, collaboration, and decision-making."
          </blockquote>
          <div>
            <p className="text-[20px] font-bold text-on-surface tracking-tight mb-1">Abhinav Singh</p>
            <p className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">BUSINESS ANALYST</p>
          </div>
        </div>
      </section>

      {/* UP NEXT */}
      <section className="bg-surface py-24 border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-page flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">UP NEXT</span>
            <h2 className="text-[32px] md:text-[48px] font-headline-md leading-tight max-w-2xl">
              Modernizing Enterprise Procurement through Intelligent Inventory Management
            </h2>
          </div>
          <Link href="/project-procurement" className="w-20 h-20 bg-on-background text-on-primary flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined scale-150">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
