import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-margin-page mb-24 pt-24">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 lg:col-span-10">
              <span className="text-label-caps font-label-caps text-on-tertiary-container mb-6 block tracking-[0.2em]">
                SELECTED WORK
              </span>
              <h1 className="text-display-lg font-display-lg leading-[1.05] mb-8">
                Building enterprise products that transform operations, improve decision-making, and deliver <span className="text-on-tertiary-container italic">measurable impact.</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                A selection of enterprise platforms, government transformation initiatives, and AI-powered solutions I've contributed to—each focused on solving complex operational challenges through structured product thinking, business analysis, and scalable digital execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section (Replaces stats) */}
      <section className="bg-primary text-on-primary py-24 mb-section-gap border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 gap-y-16 md:gap-y-0">
            <div className="md:px-12 first:pl-0 flex flex-col justify-between h-full">
              <p className="text-[32px] font-headline-md leading-tight mb-8">
                Government<br />Digital Transformation
              </p>
              <div>
                <p className="text-label-caps font-label-caps text-primary-fixed-dim tracking-[0.15em] opacity-80 uppercase">
                  Railways • Energy • Healthcare
                </p>
                <div className="w-12 h-1 bg-on-tertiary-container mt-6"></div>
              </div>
            </div>
            <div className="md:px-12 flex flex-col justify-between h-full">
              <p className="text-[32px] font-headline-md leading-tight mb-8 mt-12 md:mt-0">
                Enterprise<br />Products
              </p>
              <div>
                <p className="text-label-caps font-label-caps text-primary-fixed-dim tracking-[0.15em] opacity-80 uppercase">
                  HRMS • Procurement • Workflow Platforms
                </p>
                <div className="w-12 h-1 bg-on-tertiary-container mt-6"></div>
              </div>
            </div>
            <div className="md:px-12 last:pr-0 flex flex-col justify-between h-full">
              <p className="text-[32px] font-headline-md leading-tight mb-8 mt-12 md:mt-0">
                AI &amp;<br />Intelligent Systems
              </p>
              <div>
                <p className="text-label-caps font-label-caps text-primary-fixed-dim tracking-[0.15em] opacity-80 uppercase">
                  LLMs • GPT • AI Workflows
                </p>
                <div className="w-12 h-1 bg-on-tertiary-container mt-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study (SECR) */}
      <section className="px-margin-page mb-section-gap">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="col-span-8 relative group overflow-hidden h-full min-h-[500px] md:min-h-[700px]">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAa8o859wIbnnABD4bj-rKN4GU4leIzzTI0hQnjK22FyKhihKxZsUVvMsfGboyL0hFstU32jfc90nLpcS4wF-imFl7nzj72ZnrsrwXlHaddNx8Sl33o9NCPRfVfgjjOyfGwWXFMSJuMKDQs89BUBADaacntN4mQMLAbr2GIQJR-5jAYQNGy18KHN532AsdZuFE8GaYDekRkS_iCLdzLc6Le8CghXGdaBoAB2noV_BLErPmfICsa3CIjC3a3TsA048o1rljgdWVuBLuz')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-16 text-on-primary max-w-2xl">
                <p className="text-label-caps font-label-caps text-tertiary-fixed-dim mb-6 tracking-widest">
                  SECR ENTERPRISE PLATFORM • 5 INTEGRATED PORTALS
                </p>
              </div>
            </div>
            <div className="col-span-4 flex flex-col justify-center">
              <div className="p-12 md:p-16 border border-outline-variant bg-surface-container-lowest h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-on-tertiary-container/5 rounded-full -mr-16 -mt-16"></div>
                <span className="text-label-caps font-label-caps text-on-tertiary-container tracking-[0.2em] mb-6">FLAGSHIP PROJECT</span>
                <h3 className="text-headline-md font-headline-md mb-6 leading-[1.2]">
                  SECR Telecom Digital Operations Platform
                </h3>
                <p className="text-body-md text-on-surface-variant mb-10 leading-relaxed">
                  An enterprise platform developed for South East Central Railway to digitize telecom operations through GPS-based infrastructure mapping, real-time field reporting, centralized asset management, digital cable inspections, and an AI-powered decision support assistant.
                </p>
                <div className="flex flex-wrap gap-2 mb-12">
                  {["Government", "Railways", "AI", "GPS", "Enterprise"].map((badge) => (
                    <span key={badge} className="px-3 py-1.5 border border-outline-variant/60 bg-surface-container-low rounded text-[10px] font-label-caps uppercase tracking-wider text-on-surface-variant">
                      {badge}
                    </span>
                  ))}
                </div>
                <Link
                  href="/project-detail"
                  className="block text-center w-full border-2 border-primary px-8 py-5 text-label-caps font-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300 tracking-widest"
                >
                  VIEW CASE STUDY →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects List */}
      <section className="px-margin-page mb-section-gap">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
                <h2 className="text-display-lg font-display-lg max-w-3xl leading-tight mb-6">
                  Featured Projects
                </h2>
                <p className="text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Enterprise products designed to solve operational challenges across government organizations, infrastructure, AI, and business operations.
                </p>
            </div>
          </div>
          <div className="space-y-32">
            {[
              {
                id: 2,
                imageLeft: true,
                href: "/project-samar",
                label: "Government Platform",
                title: "SAMAR Vendor Certification Platform",
                description: "Digitized vendor certification workflows for QCI and DRDO by transforming complex onboarding, compliance, and certification processes into a scalable digital platform.",
                tags: ["Government", "Workflow", "Certification", "Digital Transformation"],
                linkText: "View Case Study →",
                imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuClx96LBoxi_Cz_LE4d6NSTjutD65VhB9EYq6PeiZFTb5G0vgxC8XLmOTlVgPD4jIscb2rPguYm6MSOYsgtfPirQyrlDtmKmmArW8zkGcbaVhzO_U3F21edVwwj8xm6GRJloPr7PkJWN6tq-yU_rg14eZeR5N7FMj9MMffIegTnD2HygAHlDGmCsc5LdM3qOku1CrZEynMBvRWYD8yDaT7I6dl9DuA4cKGA5XaFOF6QzF7-is1A_O53mxa23YY77mb31ynevHeW1Oy1"
              },
              {
                id: 3,
                imageLeft: false,
                href: "/project-procurement",
                label: "Enterprise Product",
                title: "Procurement & Inventory Management",
                description: "Built an end-to-end procurement platform managing purchase orders, vendor workflows, inventory tracking, deliveries, returns, and material reconciliation through a centralized digital system.",
                tags: ["Procurement", "Inventory", "ERP", "Workflow"],
                linkText: "View Case Study →",
                imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4xQQhZq7lutve_BGWPvYxeHP5UellUX39ugpcVMG4DRtfOlKOktp1L-macYw4SdsoA2sUeCzSkgyr6FpmHR5Nht3bpqCvErqyuQkSHUPyfmpXqQud6gd2-JTO3bM17JViS9yd5B4CXR3D7AvRTTfn-OxUoFZYsq3gC04UdRdKTBko2oM-EMxrWchdbLdRztJMJH4dG1VKdyAJChFgtH2rW5PSkfnAMbrCPW-fIJDZSwFmyUh1mS-PYwvNKdeHDer3Q-5Gvjs6Fro0"
              },
              {
                id: 4,
                imageLeft: true,
                href: "/project-hrms",
                label: "Enterprise Product",
                title: "Smart HRMS",
                description: "Designed an HR platform with geo-fenced attendance, GPS verification, workforce tracking, and employee lifecycle management for modern organizations.",
                tags: [],
                linkText: "View Case Study →",
                imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh6Q3cbhucN66S3-hCO9KxkaGQdya6LRbjpy2f6Z1BLJANDKtO4616VBNM0EZliotRLZoSq97flpPzCPFkr7T2Kd6xGBu1XpFVMc8NArgb0Age0B4G7t2oTEU8Kn1hw8ra2X7uSyVFNCHqdLbKgrJmGk_CgBcYCuK4MFV9sFPFNRp1D_q2T4pKWqtOnLPE4-3UEzb6vIx843R2yn283CgJGHbVCY5Shbi3LA55i9vQLYoVm_uf_sphBJkr3sB4GiUGu0DROlLqKEmw"
              },
              {
                id: 5,
                imageLeft: false,
                href: "/project-ai",
                label: "Enterprise AI",
                title: "Beagle GPT",
                description: "Contributed to the development and documentation of an enterprise AI assistant designed to simplify business intelligence, internal knowledge retrieval, and decision support.",
                tags: ["AI", "LLM", "Enterprise", "Knowledge Base"],
                linkText: "View Case Study →",
                imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa8o859wIbnnABD4bj-rKN4GU4leIzzTI0hQnjK22FyKhihKxZsUVvMsfGboyL0hFstU32jfc90nLpcS4wF-imFl7nzj72ZnrsrwXlHaddNx8Sl33o9NCPRfVfgjjOyfGwWXFMSJuMKDQs89BUBADaacntN4mQMLAbr2GIQJR-5jAYQNGy18KHN532AsdZuFE8GaYDekRkS_iCLdzLc6Le8CghXGdaBoAB2noV_BLErPmfICsa3CIjC3a3TsA048o1rljgdWVuBLuz"
              },
              {
                id: 6,
                imageLeft: true,
                href: "/project-bee",
                label: "Government Platform",
                title: "BEE Digital Energy Compliance Platform",
                description: "Contributed to an integrated digital ecosystem connecting central administration, state agencies, vigilance officers, and citizens to drive energy efficiency compliance across India.",
                tags: [],
                linkText: "View Case Study →",
                imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuClx96LBoxi_Cz_LE4d6NSTjutD65VhB9EYq6PeiZFTb5G0vgxC8XLmOTlVgPD4jIscb2rPguYm6MSOYsgtfPirQyrlDtmKmmArW8zkGcbaVhzO_U3F21edVwwj8xm6GRJloPr7PkJWN6tq-yU_rg14eZeR5N7FMj9MMffIegTnD2HygAHlDGmCsc5LdM3qOku1CrZEynMBvRWYD8yDaT7I6dl9DuA4cKGA5XaFOF6QzF7-is1A_O53mxa23YY77mb31ynevHeW1Oy1"
              },
              {
                id: 7,
                imageLeft: false,
                href: "/project-vmmc",
                label: "Healthcare",
                title: "VMMC Digital Workflow",
                description: "Designed operational workflows and digital process improvements supporting healthcare administration and institutional management.",
                tags: [],
                linkText: "View Case Study →",
                imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4xQQhZq7lutve_BGWPvYxeHP5UellUX39ugpcVMG4DRtfOlKOktp1L-macYw4SdsoA2sUeCzSkgyr6FpmHR5Nht3bpqCvErqyuQkSHUPyfmpXqQud6gd2-JTO3bM17JViS9yd5B4CXR3D7AvRTTfn-OxUoFZYsq3gC04UdRdKTBko2oM-EMxrWchdbLdRztJMJH4dG1VKdyAJChFgtH2rW5PSkfnAMbrCPW-fIJDZSwFmyUh1mS-PYwvNKdeHDer3Q-5Gvjs6Fro0"
              }
            ].map((project) => (
              <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
                {project.imageLeft ? (
                  <>
                    <Link href={project.href || "/project-detail"} className="col-span-7 group cursor-pointer block">
                      <div className="aspect-[16/10] overflow-hidden relative border border-outline-variant/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={project.imgSrc}
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center">
                          <div className="bg-primary text-on-primary px-8 py-4 text-label-caps opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 tracking-widest">
                            VIEW CASE STUDY
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="col-span-5">
                      <p className="text-label-caps font-label-caps text-on-tertiary-container mb-6 tracking-widest uppercase">
                        {project.label}
                      </p>
                      <h3 className="text-[32px] md:text-[40px] font-headline-md mb-6 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-body-lg text-on-surface-variant mb-10 max-w-md">
                        {project.description}
                      </p>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-10">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 border border-outline-variant/60 bg-surface-container-low rounded text-[10px] font-label-caps uppercase tracking-wider text-on-surface-variant">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        href={project.href || "/project-detail"}
                        className="inline-flex items-center gap-4 text-label-caps font-bold border-b-2 border-primary pb-2 hover:gap-6 transition-all"
                      >
                        {project.linkText}
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-5 order-2 md:order-1">
                      <p className="text-label-caps font-label-caps text-on-tertiary-container mb-6 tracking-widest uppercase">
                        {project.label}
                      </p>
                      <h3 className="text-[32px] md:text-[40px] font-headline-md mb-6 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-body-lg text-on-surface-variant mb-10 max-w-md">
                        {project.description}
                      </p>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-10">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1.5 border border-outline-variant/60 bg-surface-container-low rounded text-[10px] font-label-caps uppercase tracking-wider text-on-surface-variant">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        href={project.href || "/project-detail"}
                        className="inline-flex items-center gap-4 text-label-caps font-bold border-b-2 border-primary pb-2 hover:gap-6 transition-all"
                      >
                        {project.linkText}
                      </Link>
                    </div>
                    <Link
                      href={project.href || "/project-detail"}
                      className="col-span-7 group cursor-pointer order-1 md:order-2 block"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative border border-outline-variant/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          src={project.imgSrc}
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 flex items-center justify-center">
                          <div className="bg-primary text-on-primary px-8 py-4 text-label-caps opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 tracking-widest">
                            VIEW CASE STUDY
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section (Replaces Testimonial) */}
      <section className="bg-surface-container-low py-32 mb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-page">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-10 md:col-start-2 text-center flex flex-col items-center">
              <span className="text-label-caps font-label-caps text-on-tertiary-container mb-6 block tracking-[0.2em]">
                Beyond Traditional Product Development
              </span>
              <h2 className="text-[32px] md:text-[42px] font-headline-md mb-12 leading-[1.3] max-w-4xl text-on-surface-variant">
                Alongside enterprise products, I actively leverage AI to accelerate product discovery, requirement analysis, rapid prototyping, interface design, workflow automation, and solution validation.
              </h2>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {["ChatGPT", "Claude", "Cursor", "Lovable", "Gemini", "GitHub Copilot"].map((badge) => (
                  <span key={badge} className="px-6 py-4 bg-surface border border-outline-variant/30 text-on-surface text-label-caps font-bold tracking-wider rounded-lg shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="px-margin-page py-24 border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto text-center">
          <p className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-12">
            Organizations I've Worked With
          </p>
          <div className="flex justify-center items-center opacity-70 gap-10 md:gap-16 flex-wrap">
            <span className="text-headline-sm md:text-[28px] font-bold tracking-tighter">SECR</span>
            <span className="text-headline-sm md:text-[28px] font-bold tracking-tighter uppercase">QCI</span>
            <span className="text-headline-sm md:text-[28px] font-bold tracking-tighter">Tech Mahindra</span>
            <span className="text-headline-sm md:text-[28px] font-bold tracking-tighter uppercase text-center leading-tight">Decision<br/>Point</span>
            <span className="text-headline-sm md:text-[28px] font-bold tracking-tighter text-center leading-tight">Chhattisgarh<br/>IT Solutions</span>
            <span className="text-headline-sm md:text-[28px] font-bold tracking-tighter">BEE</span>
            <span className="text-headline-sm md:text-[28px] font-bold tracking-tighter uppercase">DRDO</span>
          </div>
        </div>
      </section>
    </>
  );
}
