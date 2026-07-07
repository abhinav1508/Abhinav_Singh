import Link from "next/link";
import Image from "next/image";

export default function ProcurementProjectDetail() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-margin-page bg-on-background text-on-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4xQQhZq7lutve_BGWPvYxeHP5UellUX39ugpcVMG4DRtfOlKOktp1L-macYw4SdsoA2sUeCzSkgyr6FpmHR5Nht3bpqCvErqyuQkSHUPyfmpXqQud6gd2-JTO3bM17JViS9yd5B4CXR3D7AvRTTfn-OxUoFZYsq3gC04UdRdKTBko2oM-EMxrWchdbLdRztJMJH4dG1VKdyAJChFgtH2rW5PSkfnAMbrCPW-fIJDZSwFmyUh1mS-PYwvNKdeHDer3Q-5Gvjs6Fro0')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/80 to-transparent"></div>

        <div className="max-w-container-max mx-auto relative z-10 w-full">
          <div className="max-w-4xl mb-16">
            <span className="text-label-caps font-label-caps text-on-tertiary-container mb-6 block tracking-[0.2em]">
              FEATURED CASE STUDY / ENTERPRISE PRODUCT
            </span>
            <h1 className="text-[48px] md:text-[72px] font-headline-md leading-[1.05] mb-8">
              Modernizing Enterprise Procurement through Intelligent Inventory Management
            </h1>
            <p className="text-body-lg text-surface-variant max-w-3xl leading-relaxed opacity-90">
              Designed and implemented an end-to-end Procurement &amp; Inventory Management System that digitizes the complete procurement lifecycle—from purchase requests and vendor communication to inventory reconciliation and material movement—enabling organizations to streamline operations, improve inventory visibility, and maintain accurate stock control.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 border-t border-surface/20 pt-8 mt-12">
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">YEAR</p>
              <p className="text-body-lg font-bold">2026 – Present</p>
            </div>
            <div>
              <p className="text-label-caps font-label-caps text-surface-variant tracking-[0.2em] mb-2 opacity-60">INDUSTRY</p>
              <p className="text-body-lg font-bold">Enterprise • Procurement • Inventory Management • Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-surface relative -mt-24 z-20 mx-margin-page max-w-container-max md:mx-auto border-t-[8px] border-primary shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">ROLE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Business Consultant</h3>
            <p className="text-body-md text-on-surface-variant">Led business analysis, product planning, workflow design, requirement engineering, and stakeholder collaboration while defining procurement, inventory, and warehouse management processes.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">TIMELINE</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Enterprise Product Development</h3>
            <p className="text-body-md text-on-surface-variant">Designed and implemented a scalable procurement platform supporting inventory operations, vendor coordination, warehouse management, and material tracking.</p>
          </div>
          <div className="p-12">
            <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM</span>
            <h3 className="text-[24px] font-headline-md mb-4 leading-tight">Web Platform</h3>
            <p className="text-body-md text-on-surface-variant">Procurement • Inventory • Vendor Management • Warehouse Operations</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 (Context) */}
      <section className="bg-surface py-32">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <h2 className="text-[32px] md:text-[40px] font-headline-md leading-tight text-on-surface">
                Disconnected procurement workflows and manual inventory tracking created operational inefficiencies across the supply chain.
              </h2>
              <div className="w-16 h-1 bg-primary mt-8"></div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                Managing procurement through spreadsheets, emails, and manual records often resulted in inconsistent inventory data, delayed purchase tracking, limited stock visibility, and inefficient coordination between procurement teams, vendors, warehouses, and project sites.
              </p>
              <p className="text-[20px] text-on-surface-variant leading-relaxed">
                The objective was to create a centralized procurement ecosystem capable of managing the complete procurement lifecycle while maintaining accurate inventory records, improving vendor communication, and enabling real-time material tracking from purchase order creation to final site utilization.
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
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4xQQhZq7lutve_BGWPvYxeHP5UellUX39ugpcVMG4DRtfOlKOktp1L-macYw4SdsoA2sUeCzSkgyr6FpmHR5Nht3bpqCvErqyuQkSHUPyfmpXqQud6gd2-JTO3bM17JViS9yd5B4CXR3D7AvRTTfn-OxUoFZYsq3gC04UdRdKTBko2oM-EMxrWchdbLdRztJMJH4dG1VKdyAJChFgtH2rW5PSkfnAMbrCPW-fIJDZSwFmyUh1mS-PYwvNKdeHDer3Q-5Gvjs6Fro0')" }}
              ></div>
            </div>
            {/* Overlay Box */}
            <div className="md:absolute md:bottom-0 md:right-0 md:translate-y-12 md:-translate-x-12 bg-on-background text-on-primary p-12 max-w-2xl shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-4 block">PLATFORM ARCHITECTURE</span>
              <h3 className="text-[32px] font-headline-md mb-6 leading-tight">Designing an End-to-End Procurement Ecosystem</h3>
              <p className="text-body-md text-surface-variant leading-relaxed">
                Instead of treating procurement and inventory as isolated functions, the platform was designed as a connected operational ecosystem where every procurement activity—from purchase requests and vendor responses to inventory updates, material issuance, and stock reconciliation—is managed through a unified workflow with complete operational visibility.
              </p>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-16">
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">01</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Purchase Order Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Created structured workflows for generating purchase orders, managing approvals, tracking order status, and maintaining complete procurement history within a centralized platform.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">02</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Vendor Communication</h4>
                <p className="text-on-surface-variant leading-relaxed">Enabled vendors to respond to purchase orders by accepting deliveries, requesting delivery extensions, or declining requests, ensuring transparent communication throughout the procurement process.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">03</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Delivery Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Supported complete and partial deliveries while automatically updating procurement status, delivery records, and pending material quantities across the platform.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">04</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Inventory Management</h4>
                <p className="text-on-surface-variant leading-relaxed">Maintained a centralized inventory repository that automatically updates stock levels based on received materials, issued items, returns, and reconciliation activities.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">05</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Material Movement</h4>
                <p className="text-on-surface-variant leading-relaxed">Tracked material transfers from warehouses to project sites while recording issued quantities, remaining stock, and returned materials to maintain complete inventory accuracy.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <span className="text-[32px] font-headline-md text-on-tertiary-container opacity-80">06</span>
              <div>
                <h4 className="text-[20px] font-bold mb-3">Warehouse Visibility &amp; Reporting</h4>
                <p className="text-on-surface-variant leading-relaxed">Provided operational dashboards enabling procurement teams to monitor purchase orders, stock availability, vendor performance, inventory movement, and procurement activities through a single interface.</p>
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
                  <span>Conducted business discussions to understand procurement and inventory workflows.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Designed end-to-end procurement lifecycle and inventory movement processes.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Prepared BRDs, FRDs, workflow diagrams, and functional documentation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Collaborated with UI/UX designers to simplify procurement operations.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Worked closely with development teams during sprint planning and feature validation.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">check_circle</span>
                  <span>Supported testing, user acceptance validation, and production deployment activities.</span>
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
                  <span>Centralized procurement and inventory operations into a single digital platform.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Improved inventory visibility through automated stock updates.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Simplified vendor communication and purchase order management.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Enabled real-time tracking of material movement across warehouses and project sites.</span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-primary shrink-0 mt-1">trending_up</span>
                  <span>Reduced manual reconciliation efforts while improving procurement transparency and operational efficiency.</span>
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
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">account_tree</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Centralized Procurement Workflow</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">visibility</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Real-Time Inventory Visibility</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">precision_manufacturing</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Automated Material Tracking</span>
            </div>
            <div className="flex flex-col items-center gap-6">
              <span className="material-symbols-outlined text-[48px] md:text-[56px] text-red-500">handshake</span>
              <span className="text-[20px] md:text-[24px] font-headline-md leading-tight text-surface">Improved Vendor Coordination</span>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-container-max mx-auto px-margin-page text-center max-w-4xl">
          <span className="material-symbols-outlined text-[48px] text-on-tertiary-container mb-8">format_quote</span>
          <blockquote className="text-[32px] md:text-[40px] font-headline-md leading-[1.3] mb-12 italic text-on-surface">
            "Procurement is more than purchasing materials—it's about creating a connected ecosystem where inventory, vendors, warehouses, and project teams operate with complete visibility and confidence."
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
              Building a Smarter Workforce through Intelligent HR Management
            </h2>
          </div>
          <Link href="/project-hrms" className="w-20 h-20 bg-on-background text-on-primary flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-300 shrink-0">
            <span className="material-symbols-outlined scale-150">arrow_forward</span>
          </Link>
        </div>
      </section>
    </>
  );
}
