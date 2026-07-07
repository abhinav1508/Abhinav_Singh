import Link from "next/link";
import Image from "next/image";

export default function VMMCProjectDetail() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-margin-page bg-on-background text-on-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFoJgB198tP9VwK9L2O7q1mGqP7sK0mK8x3kU9H6X-xU7R-hS5g_8EZyZ8j1C-8iM7N5mG9xM2O8D7Xw7e1C9qK8B1wF-g2L0p3N8zY5T1r9A0P4O9M3H5t6W2E7nC9P7A5Y2R8G9U1T4A6W8H2N9E5J1C0X8A3_9B7W8Y0F5R9X0Y8Z9C6B1X7Y9Z')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>

        <div className="max-w-container-max mx-auto relative z-10 w-full">
          <div className="max-w-4xl mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container mb-6 block tracking-[0.2em]">
              FEATURED CASE STUDY / MEDICAL EDUCATION PLATFORM
            </span>
            <h1 className="text-[48px] md:text-[72px] font-headline-md leading-[1.05] mb-8">
              Modernizing Medical Assessments through a Digital Question Bank Platform
            </h1>
            <p className="text-body-lg text-surface-variant max-w-3xl leading-relaxed opacity-90">
              Contributed to the development of a centralized Question Bank & Examination Management System for VMMC & Safdarjung Hospital, enabling academic departments to efficiently manage question repositories, streamline examination workflows, and improve the accessibility and organization of medical education resources through a secure digital platform.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-surface/20 pt-8 mt-12">
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">YEAR</p>
              <p className="text-body-lg font-bold">2025 – 2026</p>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">INDUSTRY</p>
              <p className="text-body-lg font-bold">Healthcare • Medical Education • Examination Management</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-surface relative -mt-24 z-20 mx-margin-page max-w-container-max md:mx-auto border-t-[8px] border-primary shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">ROLE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Business Analyst</h3>
            <p className="text-body-md text-on-surface-variant">Collaborated with academic stakeholders, faculty members, designers, and development teams to understand examination workflows, document requirements, optimize question management processes, and support the implementation of a centralized examination platform.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">TIMELINE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Academic Digital Transformation</h3>
            <p className="text-body-md text-on-surface-variant">Designed and supported the implementation of a scalable examination and question bank management platform.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Web Platform</h3>
            <p className="text-body-md text-on-surface-variant">Question Bank • Examination Management • Faculty Portal • Academic Administration</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Context) */}
      <section className="bg-surface py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-headline-md leading-tight text-on-surface">
                Managing examination content through spreadsheets and scattered documents made academic operations difficult to scale.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                Medical institutions maintain large repositories of examination questions across multiple departments, subjects, and academic sessions. Managing this content manually often results in duplication, inconsistent categorization, limited accessibility, and increased administrative effort.
              </p>
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The objective was to develop a centralized digital platform that enables faculty members to securely create, organize, review, and manage question banks while simplifying examination preparation and academic administration.
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
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFoJgB198tP9VwK9L2O7q1mGqP7sK0mK8x3kU9H6X-xU7R-hS5g_8EZyZ8j1C-8iM7N5mG9xM2O8D7Xw7e1C9qK8B1wF-g2L0p3N8zY5T1r9A0P4O9M3H5t6W2E7nC9P7A5Y2R8G9U1T4A6W8H2N9E5J1C0X8A3_9B7W8Y0F5R9X0Y8Z9C6B1X7Y9Z')" }}
              ></div>
            </div>
            {/* Overlay Box */}
            <div className="md:absolute md:bottom-0 md:right-0 md:translate-y-12 md:-translate-x-12 bg-on-background text-on-primary p-12 max-w-2xl shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM ARCHITECTURE</span>
              <h3 className="text-[32px] font-headline-md mb-6 leading-tight">Building a Centralized Medical Examination Ecosystem</h3>
              <p className="text-body-md text-surface-variant leading-relaxed">
                The platform was designed as a unified academic management system where faculty members, administrators, and academic departments collaborate through standardized digital workflows for question creation, review, categorization, and examination preparation.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16">
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">01</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Question Bank Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Created a centralized repository allowing faculty to create, categorize, organize, search, and maintain examination questions across departments and subjects.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">02</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Examination Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Supported structured workflows for examination preparation, question selection, paper generation, and academic review.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">03</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Subject &amp; Department Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Organized academic content using department, subject, semester, and specialization hierarchies for easier content discovery and administration.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">04</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Role-Based Access</h4>
                <p className="text-on-surface-variant leading-relaxed">Implemented secure role-based access ensuring administrators, faculty members, reviewers, and academic coordinators could access appropriate modules.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">05</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Academic Workflow Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Digitized review, approval, and content validation workflows to improve consistency and reduce manual coordination.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">06</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Reporting &amp; Administration</h4>
                <p className="text-on-surface-variant leading-relaxed">Provided centralized dashboards for monitoring question repositories, academic activities, examination readiness, and platform usage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MY CONTRIBUTION & BUSINESS IMPACT */}
      <section className="bg-surface py-32 border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* My Contribution */}
            <div>
              <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">MY CONTRIBUTION</span>
              <h3 className="text-[32px] font-headline-md mb-8 leading-tight">My Contribution</h3>
              <ul className="space-y-4 text-[18px] text-on-surface-variant leading-relaxed">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Conducted discussions with academic stakeholders to understand examination and question bank workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Prepared BRDs, FRDs, workflow diagrams, and functional documentation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Defined user stories and business requirements for examination and faculty modules.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Collaborated with UI/UX designers to simplify academic workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Worked closely with development teams during sprint planning, testing, and requirement validation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Participated in UAT, issue tracking, and release support activities.</span>
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
                  <span>Digitized examination and question bank management workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Improved organization and accessibility of academic content.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Reduced dependency on manual document management.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Simplified examination preparation for faculty members.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Created a scalable digital platform supporting future academic growth.</span>
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
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">inventory_2</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Centralized Question Repository</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">quiz</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Digital Exam Management</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">admin_panel_settings</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Role-Based Academic Workflows</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">school</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Scalable Education Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-container-max mx-auto px-margin-page text-center max-w-4xl">
          <span className="material-symbols-outlined text-[48px] text-on-tertiary-container mb-8">format_quote</span>
          <blockquote className="text-[32px] md:text-[40px] font-headline-md leading-[1.3] mb-12 italic text-on-surface">
            "Great educational platforms don't just store questions—they empower educators with structured workflows that improve collaboration, consistency, and academic excellence."
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
              Building an AI-Enabled Digital Operations Platform for South East Central Railway
            </h2>
          </div>
          <Link href="/project-detail" className="w-20 h-20 bg-on-background text-on-primary flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined scale-150">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
