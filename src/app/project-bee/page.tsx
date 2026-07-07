import Link from "next/link";
import Image from "next/image";

export default function BEEProjectDetail() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-margin-page bg-on-background text-on-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwWyYKG5RfOCb9dta5HhgDc3PEPvV9WYzOnPVRQ1pxXMSWqbGYmyEh_lk7QVzVwtxXvgFwPGxJ0r_3cHSZ-A3gfVOYUw7WwdgeP3_3wGxybjyooQ_m_XPXTTALkKumSLD1z_-X9l3lmjfUaE0dg8i8SoawSRkLfeod92bVu-mVp49MGyUOuITCxO1KAD12xR_Fh2klu2Kz_V0uBWZBWFPZ8WCkYMhfbfAyJfVxmKC4iiHUPShOHDKkc6zFj3K1YjrFeOMSBISEPPgw')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>

        <div className="max-w-container-max mx-auto relative z-10 w-full">
          <div className="max-w-4xl mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container mb-6 block tracking-[0.2em]">
              FEATURED CASE STUDY / GOVERNMENT DIGITAL TRANSFORMATION
            </span>
            <h1 className="text-[48px] md:text-[72px] font-headline-md leading-[1.05] mb-8">
              Driving Energy Efficiency Compliance through a Unified Digital Platform
            </h1>
            <p className="text-body-lg text-surface-variant max-w-3xl leading-relaxed opacity-90">
              Contributed to the development of an integrated digital platform for the Bureau of Energy Efficiency (BEE), Ministry of Power, bringing together centralized administration, state-level operations, public verification, and field inspections into a unified ecosystem that supports India's energy efficiency initiatives.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-surface/20 pt-8 mt-12">
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">YEAR</p>
              <p className="text-body-lg font-bold">2025 – 2026</p>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">INDUSTRY</p>
              <p className="text-body-lg font-bold">Government • Energy • Regulatory Compliance • Public Services</p>
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
            <p className="text-body-md text-on-surface-variant">Collaborated with stakeholders, designers, and engineering teams to gather requirements, define workflows, prepare business documentation, and support the implementation of web and mobile applications across multiple user groups.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">TIMELINE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Government Digital Transformation</h3>
            <p className="text-body-md text-on-surface-variant">Supported the modernization of national energy efficiency services through integrated web and mobile platforms.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Web Portal + Mobile App</h3>
            <p className="text-body-md text-on-surface-variant">Admin Portal • SDA Portal • Public App • Vigilance Module</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Context) */}
      <section className="bg-surface py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-headline-md leading-tight text-on-surface">
                Managing energy efficiency programs across multiple stakeholders required a connected digital ecosystem.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The Bureau of Energy Efficiency operates multiple initiatives involving central administrators, State Designated Agencies (SDAs), field inspectors, manufacturers, and citizens. Traditional workflows made it difficult to coordinate activities, verify product authenticity, and efficiently monitor compliance across states.
              </p>
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The objective was to build a unified digital ecosystem that enables centralized administration, state-level operations, public verification of BEE Star Label products, and mobile-based field inspections through role-specific web and mobile applications.
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
            <div className="md:absolute md:bottom-0 md:right-0 md:translate-y-12 md:-translate-x-12 bg-on-background text-on-primary p-12 max-w-2xl shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM ARCHITECTURE</span>
              <h3 className="text-[32px] font-headline-md mb-6 leading-tight">Building a Connected Energy Compliance Ecosystem</h3>
              <p className="text-body-md text-surface-variant leading-relaxed">
                The solution was designed as an integrated digital ecosystem connecting government administrators, State Designated Agencies, vigilance officers, and citizens through dedicated web and mobile applications, improving transparency, compliance monitoring, and public accessibility.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16">
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">01</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Central Administration Portal</h4>
                <p className="text-on-surface-variant leading-relaxed">Developed a centralized web platform enabling BEE administrators to manage programs, users, product records, compliance data, and overall system operations from a single interface.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">02</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">SDA Management Portal</h4>
                <p className="text-on-surface-variant leading-relaxed">Designed dedicated workflows for State Designated Agencies to monitor regional activities, manage compliance initiatives, and coordinate state-level operations efficiently.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">03</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Public Product Verification</h4>
                <p className="text-on-surface-variant leading-relaxed">Built a mobile application allowing citizens to verify BEE Star Label products, helping users confirm the authenticity and energy efficiency ratings of electronic appliances before purchase or use.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">04</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Vigilance Inspection Module</h4>
                <p className="text-on-surface-variant leading-relaxed">Enabled authorized vigilance officers to securely log in, perform on-site inspections, capture observations, and submit compliance reports directly through the mobile application.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">05</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Role-Based Access Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Implemented role-specific workflows ensuring administrators, state agencies, field officers, and public users could securely access features relevant to their responsibilities.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">06</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Digital Reporting &amp; Compliance</h4>
                <p className="text-on-surface-variant leading-relaxed">Centralized inspection records, compliance reports, and verification data to improve operational visibility and support informed decision-making across the organization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM DIAGRAM (BONUS) */}
      <section className="bg-surface py-32 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="text-center mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">ECOSYSTEM</span>
            <h2 className="text-[40px] md:text-[56px] font-headline-md leading-tight">Digital Energy Compliance Platform</h2>
            <p className="text-[20px] text-on-surface-variant max-w-3xl mx-auto mt-6">
              A deeply integrated workflow connecting central administration down to public end-users.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto overflow-hidden">
            {/* The vertical dashed line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/30 -translate-x-1/2"></div>
            
            <div className="space-y-6 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">BEE Admin</h4>
                  <p className="text-on-surface-variant">Centralized control, reporting, and policy management.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">admin_panel_settings</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">corporate_fare</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">State Designated Agencies (SDA)</h4>
                  <p className="text-on-surface-variant">State-level coordination and compliance monitoring.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Vigilance Officers</h4>
                  <p className="text-on-surface-variant">Mobile-enabled field inspections and on-site reports.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">mobile_friendly</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">Citizens</h4>
                  <p className="text-on-surface-variant">Public app for Star Label verification and transparency.</p>
                </div>
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
                  <span>Conducted stakeholder discussions to understand regulatory and operational workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Prepared BRDs, FRDs, user stories, and functional documentation for both web and mobile platforms.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Defined workflows for administrators, State Designated Agencies (SDAs), vigilance officers, and public users.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Collaborated with UI/UX designers to improve usability across multiple user journeys.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Worked closely with development teams during sprint planning, requirement clarification, testing, and implementation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Participated in UAT, feature validation, and release support to ensure business requirements were successfully delivered.</span>
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
                  <span>Unified multiple stakeholder workflows into a single digital ecosystem.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Improved transparency across national and state-level energy efficiency operations.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Enabled citizens to verify BEE Star Label products through a mobile application.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Digitized field inspections and compliance reporting for vigilance officers.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Created a scalable platform supporting future energy efficiency initiatives across India.</span>
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
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">public</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Unified Government Ecosystem</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">verified_user</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Citizen Product Verification</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">app_shortcut</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Mobile Field Inspections</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">rule</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Digital Compliance Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-container-max mx-auto px-margin-page text-center max-w-4xl">
          <span className="material-symbols-outlined text-[48px] text-on-tertiary-container mb-8">format_quote</span>
          <blockquote className="text-[32px] md:text-[40px] font-headline-md leading-[1.3] mb-12 italic text-on-surface">
            "Digital public platforms create the greatest impact when they seamlessly connect government agencies, field teams, and citizens through transparent, accessible, and data-driven services."
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
              Modernizing Medical Assessments through a Digital Question Bank Platform
            </h2>
          </div>
          <Link href="/project-vmmc" className="w-20 h-20 bg-on-background text-on-primary flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined scale-150">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
