import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail() {
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
              Building an AI-Enabled Digital Operations Platform for South East Central Railway
            </h1>
            <p className="text-body-lg text-surface-variant max-w-3xl leading-relaxed opacity-90 mb-10">
              Digitizing telecom infrastructure management for South East Central Railway by replacing fragmented paper-based operations with an integrated digital platform combining GPS mapping, field mobility, asset intelligence, workflow automation, and AI-powered decision support.
            </p>
            <Link
              href="https://secrtelecom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-on-primary text-label-caps font-bold px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
            >
              <span>Visit Official Platform</span>
              <span className="material-symbols-outlined text-[20px]">open_in_new</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-surface/20 pt-8 mt-12">
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">YEAR</p>
              <p className="text-body-lg font-bold">2026 – Present</p>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">INDUSTRY</p>
              <p className="text-body-lg font-bold">Government • Railways • Telecom Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-surface relative -mt-24 z-20 mx-margin-page max-w-container-max md:mx-auto border-t-[8px] border-primary shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">ROLE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Business Consultant & UI Developer</h3>
            <p className="text-body-md text-on-surface-variant">Led business analysis, workflow discovery, stakeholder collaboration, requirement engineering, and product consulting across multiple operational modules.</p>
          </div>
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">TIMELINE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Ongoing Digital Transformation</h3>
            <p className="text-body-md text-on-surface-variant">Enterprise modernization across multiple telecom operations and field workflows.</p>
          </div>
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">6+ Integrated Modules</h3>
            <p className="text-body-md text-on-surface-variant">GPS Mapping • AI Assistant • Mobile App • Web Platform</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Context) */}
      <section className="bg-surface py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-headline-md leading-tight text-on-surface">
                Disconnected manual workflows were slowing critical telecom operations.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The South East Central Railway Telecom Department relied heavily on paper-based registers, disconnected records, and manual reporting across multiple operational processes. Critical information such as cable routes, field inspections, asset records, and infrastructure updates required significant manual effort, limiting operational visibility and delaying decision-making.
              </p>
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                As telecom infrastructure expanded, the need emerged for a unified digital platform capable of centralizing operational data, improving field collaboration, and enabling faster access to information across all organizational levels.
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
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwWyYKG5RfOCb9dta5HhgDc3PEPvV9WYzOnPVRQ1pxXMSWqbGYmyEh_lk7QVzVwtxXvgFwPGxJ0r_3cHSZ-A3gfVOYUw7WwdgeP3_3wGxybjyooQ_m_XPXTTALkKumSLD1z_-X9l3lmjfUaE0dg8i8SoawSRkLfeod92bVu-mVp49MGyUOuITCxO1KAD12xR_Fh2klu2Kz_V0uBWZBWFPZ8WCkYMhfbfAyJfVxmKC4iiHUPShOHDKkc6zFj3K1YjrFeOMSBISEPPgw')" }}
              ></div>
            </div>
            {/* Overlay Box */}
            <div className="md:absolute md:bottom-0 md:right-0 md:translate-y-12 md:-translate-x-12 bg-on-background text-on-primary p-6 md:p-12 max-w-2xl shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM ARCHITECTURE</span>
              <h3 className="text-[32px] font-headline-md mb-6 leading-tight">Designing a Unified Telecom Operations Ecosystem</h3>
              <p className="text-body-md text-surface-variant leading-relaxed">
                Instead of building isolated applications, the platform was designed as a connected ecosystem where every operational module contributes to a centralized source of truth. Data collected from field engineers, inspections, GPS tracking, and telecom assets flows into one unified platform, enabling operational transparency and smarter decision-making.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16">
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">01</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Cable Route Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Digitized telecom cable infrastructure using GPS-based mapping, enabling quick fault identification, cable tracking, and route visualization.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">02</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Daily Positioning</h4>
                <p className="text-on-surface-variant leading-relaxed">Replaced paper-based daily reporting with real-time operational updates, improving visibility across field activities and reducing reporting delays.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">03</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Asset Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Centralized telecom assets including routers, cameras, stations, UTS equipment, and infrastructure into a single searchable inventory.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">04</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Field Explorer</h4>
                <p className="text-on-surface-variant leading-relaxed">Enabled field teams to capture GPS coordinates, infrastructure details, and missing operational data directly from mobile devices.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">05</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Meggering</h4>
                <p className="text-on-surface-variant leading-relaxed">Digitized telecom cable quality inspections by allowing engineers to perform on-site testing and maintain centralized inspection records.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">06</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">AI Decision Support Assistant</h4>
                <p className="text-on-surface-variant leading-relaxed">Developed a personalized AI assistant that allows senior railway officers to query operational data, retrieve historical records, generate insights, and analyze information across all integrated modules using natural language.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY PLACEHOLDERS */}
      <section className="bg-surface py-24">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="aspect-[4/3] bg-secondary-container flex items-center justify-center p-6 text-center text-on-surface-variant/60 font-label-caps border border-outline-variant/30">
              GPS Map Screenshot
            </div>
            <div className="aspect-[4/3] bg-secondary-container flex items-center justify-center p-6 text-center text-on-surface-variant/60 font-label-caps border border-outline-variant/30">
              Cable Route Screenshot
            </div>
            <div className="aspect-[4/3] bg-secondary-container flex items-center justify-center p-6 text-center text-on-surface-variant/60 font-label-caps border border-outline-variant/30">
              Asset Dashboard
            </div>
            <div className="aspect-[4/3] bg-secondary-container flex items-center justify-center p-6 text-center text-on-surface-variant/60 font-label-caps border border-outline-variant/30">
              AI Assistant Screenshot
            </div>
            <div className="aspect-[4/3] bg-secondary-container flex items-center justify-center p-6 text-center text-on-surface-variant/60 font-label-caps border border-outline-variant/30">
              Mobile App Screenshots
            </div>
            <div className="aspect-[4/3] bg-secondary-container flex items-center justify-center p-6 text-center text-on-surface-variant/60 font-label-caps border border-outline-variant/30">
              Analytics Dashboard
            </div>
          </div>
        </div>
      </section>

      {/* BLACK SECTION (Operational Impact) */}
      <section className="bg-on-background text-on-primary py-32 border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-page text-center">
          <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-12 block">MEASURABLE OUTCOMES</span>
          <h2 className="text-[40px] md:text-[56px] font-headline-md mb-20 leading-tight">Operational Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">autorenew</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Paper-Based to Digital</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">share_location</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">GPS Enabled Mapping</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">hub</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Unified Operational Data</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">psychology</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">AI Decision Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-container-max mx-auto px-margin-page text-center max-w-4xl">
          <span className="material-symbols-outlined text-[48px] text-on-tertiary-container mb-8">format_quote</span>
          <blockquote className="text-[32px] md:text-[40px] font-headline-md leading-[1.3] mb-12 italic text-on-surface">
            "Digital transformation isn't just about replacing paper with software—it's about creating a connected operational ecosystem where information flows seamlessly, enabling faster decisions and better outcomes."
          </blockquote>
          <div>
            <p className="text-[20px] font-bold text-on-surface tracking-tight mb-1">Abhinav Singh</p>
            <p className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">BUSINESS CONSULTANT</p>
          </div>
        </div>
      </section>

      {/* UP NEXT */}
      <section className="bg-surface py-24 border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-page flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">UP NEXT</span>
            <h2 className="text-[32px] md:text-[48px] font-headline-md leading-tight max-w-2xl">
              Digitizing Vendor Certification through the SAMAR Platform
            </h2>
          </div>
          <Link href="/project-samar" className="w-20 h-20 bg-on-background text-on-primary flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined scale-150">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
