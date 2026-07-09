import Link from "next/link";
import Image from "next/image";

export default function HRMSProjectDetail() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-margin-page bg-on-background text-on-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh6Q3cbhucN66S3-hCO9KxkaGQdya6LRbjpy2f6Z1BLJANDKtO4616VBNM0EZliotRLZoSq97flpPzCPFkr7T2Kd6xGBu1XpFVMc8NArgb0Age0B4G7t2oTEU8Kn1hw8ra2X7uSyVFNCHqdLbKgrJmGk_CgBcYCuK4MFV9sFPFNRp1D_q2T4pKWqtOnLPE4-3UEzb6vIx843R2yn283CgJGHbVCY5Shbi3LA55i9vQLYoVm_uf_sphBJkr3sB4GiUGu0DROlLqKEmw')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>

        <div className="max-w-container-max mx-auto relative z-10 w-full">
          <div className="max-w-4xl mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container mb-6 block tracking-[0.2em]">
              FEATURED CASE STUDY / ENTERPRISE PRODUCT
            </span>
            <h1 className="text-[48px] md:text-[72px] font-headline-md leading-[1.05] mb-8">
              Building a Smarter Workforce through Intelligent HR Management
            </h1>
            <p className="text-body-lg text-surface-variant max-w-3xl leading-relaxed opacity-90">
              Designed and implemented a modern HRMS platform that streamlines workforce operations through intelligent attendance management, geo-fenced check-ins, GPS validation, employee lifecycle management, and real-time workforce visibility, enabling organizations to manage distributed teams more efficiently.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-surface/20 pt-8 mt-12">
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">YEAR</p>
              <p className="text-body-lg font-bold">2026 – Present</p>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">INDUSTRY</p>
              <p className="text-body-lg font-bold">Enterprise • Human Resources • Workforce Management • Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-surface relative -mt-24 z-20 mx-margin-page max-w-container-max md:mx-auto border-t-[8px] border-primary shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">ROLE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Business Consultant</h3>
            <p className="text-body-md text-on-surface-variant">Led business analysis, workflow design, requirement engineering, stakeholder discussions, and product planning while defining modern workforce management processes.</p>
          </div>
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">TIMELINE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Enterprise Product Development</h3>
            <p className="text-body-md text-on-surface-variant">Designed and implemented an intelligent HR platform supporting workforce management, attendance automation, employee lifecycle tracking, and operational visibility.</p>
          </div>
          <div className="p-6 md:p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Web & Mobile Platform</h3>
            <p className="text-body-md text-on-surface-variant">HRMS • Attendance • GPS • Geo-Fencing • Workforce Management</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Context) */}
      <section className="bg-surface py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-headline-md leading-tight text-on-surface">
                Traditional attendance systems lacked workforce visibility, accountability, and operational accuracy.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                Organizations managing distributed teams often relied on traditional attendance systems that could not verify employee locations or accurately represent field activity. Manual attendance processes, fragmented employee records, and limited operational visibility created challenges for HR teams and managers.
              </p>
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The objective was to build a centralized HR platform capable of managing the complete employee lifecycle while introducing intelligent attendance verification through geo-fencing, GPS validation, and activity tracking.
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
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh6Q3cbhucN66S3-hCO9KxkaGQdya6LRbjpy2f6Z1BLJANDKtO4616VBNM0EZliotRLZoSq97flpPzCPFkr7T2Kd6xGBu1XpFVMc8NArgb0Age0B4G7t2oTEU8Kn1hw8ra2X7uSyVFNCHqdLbKgrJmGk_CgBcYCuK4MFV9sFPFNRp1D_q2T4pKWqtOnLPE4-3UEzb6vIx843R2yn283CgJGHbVCY5Shbi3LA55i9vQLYoVm_uf_sphBJkr3sB4GiUGu0DROlLqKEmw')" }}
              ></div>
            </div>
            {/* Overlay Box */}
            <div className="md:absolute md:bottom-0 md:right-0 md:translate-y-12 md:-translate-x-12 bg-on-background text-on-primary p-6 md:p-12 max-w-2xl shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM ARCHITECTURE</span>
              <h3 className="text-[32px] font-headline-md mb-6 leading-tight">Designing a Connected Workforce Management Platform</h3>
              <p className="text-body-md text-surface-variant leading-relaxed">
                The platform was designed as a unified HR ecosystem where employee information, attendance, workforce activity, approvals, and reporting are managed through a single digital platform. Intelligent location-based features ensure accurate attendance while providing managers with real-time workforce visibility.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16">
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">01</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Employee Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Centralized employee profiles, organizational structure, department hierarchy, roles, and complete employee lifecycle management within a unified platform.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">02</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Geo-Fenced Attendance</h4>
                <p className="text-on-surface-variant leading-relaxed">Implemented location-aware attendance allowing employees to check in only within predefined office or project boundaries, ensuring accurate attendance validation.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">03</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">GPS Verification</h4>
                <p className="text-on-surface-variant leading-relaxed">Captured real-time employee location during attendance to improve workforce transparency and validate field operations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">04</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Workforce Activity Tracking</h4>
                <p className="text-on-surface-variant leading-relaxed">Introduced step tracking and activity monitoring to provide additional visibility into employee movement during field operations.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">05</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Leave &amp; Approval Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Digitized leave requests, approvals, attendance regularization, and manager workflows through structured approval processes.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">06</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">HR Dashboard &amp; Analytics</h4>
                <p className="text-on-surface-variant leading-relaxed">Provided centralized dashboards enabling HR teams to monitor attendance trends, workforce distribution, employee activity, and operational insights from a single interface.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYEE JOURNEY DIAGRAM (BONUS) */}
      <section className="bg-surface py-32 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="text-center mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">WORKFLOW</span>
            <h2 className="text-[40px] md:text-[56px] font-headline-md leading-tight">Employee Journey Architecture</h2>
            <p className="text-[20px] text-on-surface-variant max-w-3xl mx-auto mt-6">
              A structured lifecycle that seamlessly manages every stage of a modern employee's daily operations.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto overflow-hidden">
            {/* The vertical dashed line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-primary/30 -translate-x-1/2"></div>
            
            <div className="space-y-6 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Employee Onboarding</h4>
                  <p className="text-on-surface-variant">Seamless digital entry into the organization.</p>
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
                  <span className="material-symbols-outlined text-primary">person_add</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">Profile Creation</h4>
                  <p className="text-on-surface-variant">Centralized record management and hierarchies.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Geo-Fence Assignment</h4>
                  <p className="text-on-surface-variant">Mapping operational boundaries per role.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">share_location</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">my_location</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">GPS Attendance</h4>
                  <p className="text-on-surface-variant">Location-verified check-ins and check-outs.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Activity Tracking</h4>
                  <p className="text-on-surface-variant">Monitoring steps and field movement.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">directions_run</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">fact_check</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">Leave &amp; Approvals</h4>
                  <p className="text-on-surface-variant">Streamlined request and manager workflows.</p>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 text-center md:text-right">
                  <h4 className="text-[24px] font-bold text-on-surface">Performance Insights</h4>
                  <p className="text-on-surface-variant">Evaluating workforce activity data.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                </div>
                <div className="md:w-5/12 hidden md:block"></div>
              </div>

              {/* Step 8 */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 group">
                <div className="md:w-5/12 hidden md:block"></div>
                <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary">dashboard</span>
                </div>
                <div className="md:w-5/12 text-center md:text-left">
                  <h4 className="text-[24px] font-bold text-on-surface">HR Analytics Dashboard</h4>
                  <p className="text-on-surface-variant">Unified operational visibility for leaders.</p>
                </div>
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
                  <span>Conducted stakeholder workshops to understand HR and workforce management challenges.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Designed complete employee lifecycle and attendance workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Created BRDs, FRDs, user stories, workflow diagrams, and product documentation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Collaborated with designers and developers to improve usability and operational efficiency.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Participated in sprint planning, requirement validation, testing, and production deployment.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Ensured business requirements aligned with organizational policies and workforce operations.</span>
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
                  <span>Centralized workforce management into a unified digital platform.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Improved attendance accuracy through geo-fenced and GPS-based validation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Enhanced workforce visibility for HR teams and managers.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Reduced manual HR processes through workflow automation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Created a scalable HR platform supporting distributed teams and future organizational growth.</span>
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
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">location_on</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Geo-Fenced Attendance Validation</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">my_location</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">GPS-Based Workforce Visibility</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">account_tree</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Automated HR Workflows</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">groups</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Centralized Employee Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-container-max mx-auto px-margin-page text-center max-w-4xl">
          <span className="material-symbols-outlined text-[48px] text-on-tertiary-container mb-8">format_quote</span>
          <blockquote className="text-[32px] md:text-[40px] font-headline-md leading-[1.3] mb-12 italic text-on-surface">
            "A modern HR platform should do more than record attendance—it should provide organizations with real-time visibility into their workforce, enabling smarter decisions, stronger accountability, and more efficient operations."
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
              Building an Enterprise AI Assistant for Smarter Knowledge Discovery
            </h2>
          </div>
          <Link href="/project-ai" className="w-20 h-20 bg-on-background text-on-primary flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined scale-150">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
