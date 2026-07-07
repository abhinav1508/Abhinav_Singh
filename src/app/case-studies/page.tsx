import Link from "next/link";

export default function CaseStudies() {
  const gridProjects = [
    {
      id: 2,
      href: "/project-samar",
      label: "GOVERNMENT PLATFORM",
      heading: "SAMAR Vendor Certification Platform",
      description: "Designed a digital certification platform for QCI and DRDO that simplified vendor onboarding, certification workflows, compliance tracking, and document management through structured business analysis and workflow design.",
      tags: ["Government", "Certification", "Workflow"],
      imageLeft: true,
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuClx96LBoxi_Cz_LE4d6NSTjutD65VhB9EYq6PeiZFTb5G0vgxC8XLmOTlVgPD4jIscb2rPguYm6MSOYsgtfPirQyrlDtmKmmArW8zkGcbaVhzO_U3F21edVwwj8xm6GRJloPr7PkJWN6tq-yU_rg14eZeR5N7FMj9MMffIegTnD2HygAHlDGmCsc5LdM3qOku1CrZEynMBvRWYD8yDaT7I6dl9DuA4cKGA5XaFOF6QzF7-is1A_O53mxa23YY77mb31ynevHeW1Oy1"
    },
    {
      id: 3,
      href: "/project-procurement",
      label: "ENTERPRISE PRODUCT",
      heading: "Procurement & Inventory Management System",
      description: "Developed an end-to-end procurement platform managing purchase orders, vendor communication, inventory updates, material movement, deliveries, returns, and stock reconciliation through a unified workflow.",
      tags: ["ERP", "Inventory", "Procurement"],
      imageLeft: false,
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4xQQhZq7lutve_BGWPvYxeHP5UellUX39ugpcVMG4DRtfOlKOktp1L-macYw4SdsoA2sUeCzSkgyr6FpmHR5Nht3bpqCvErqyuQkSHUPyfmpXqQud6gd2-JTO3bM17JViS9yd5B4CXR3D7AvRTTfn-OxUoFZYsq3gC04UdRdKTBko2oM-EMxrWchdbLdRztJMJH4dG1VKdyAJChFgtH2rW5PSkfnAMbrCPW-fIJDZSwFmyUh1mS-PYwvNKdeHDer3Q-5Gvjs6Fro0"
    },
    {
      id: 4,
      href: "/project-hrms",
      label: "ENTERPRISE PRODUCT",
      heading: "Smart HRMS",
      description: "Built a modern workforce management platform featuring geo-fenced attendance, GPS verification, employee lifecycle management, workforce tracking, and location-aware attendance automation.",
      tags: ["HRMS", "GPS", "Geo-Fencing"],
      imageLeft: true,
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh6Q3cbhucN66S3-hCO9KxkaGQdya6LRbjpy2f6Z1BLJANDKtO4616VBNM0EZliotRLZoSq97flpPzCPFkr7T2Kd6xGBu1XpFVMc8NArgb0Age0B4G7t2oTEU8Kn1hw8ra2X7uSyVFNCHqdLbKgrJmGk_CgBcYCuK4MFV9sFPFNRp1D_q2T4pKWqtOnLPE4-3UEzb6vIx843R2yn283CgJGHbVCY5Shbi3LA55i9vQLYoVm_uf_sphBJkr3sB4GiUGu0DROlLqKEmw"
    },
    {
      id: 5,
      href: "/project-ai",
      label: "ENTERPRISE AI",
      heading: "Beagle GPT",
      description: "Contributed to an enterprise AI assistant that simplified internal knowledge retrieval, business intelligence, and documentation workflows while supporting faster organizational decision-making.",
      tags: ["AI", "LLM", "Knowledge Base"],
      imageLeft: false,
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa8o859wIbnnABD4bj-rKN4GU4leIzzTI0hQnjK22FyKhihKxZsUVvMsfGboyL0hFstU32jfc90nLpcS4wF-imFl7nzj72ZnrsrwXlHaddNx8Sl33o9NCPRfVfgjjOyfGwWXFMSJuMKDQs89BUBADaacntN4mQMLAbr2GIQJR-5jAYQNGy18KHN532AsdZuFE8GaYDekRkS_iCLdzLc6Le8CghXGdaBoAB2noV_BLErPmfICsa3CIjC3a3TsA048o1rljgdWVuBLuz"
    },
    {
      id: 6,
      href: "/project-bee",
      label: "GOVERNMENT PLATFORM",
      heading: "BEE Digital Energy Compliance Platform",
      description: "Contributed to an integrated digital ecosystem connecting central administration, state agencies, vigilance officers, and citizens to drive energy efficiency compliance across India.",
      tags: ["Government", "Compliance", "Ecosystem"],
      imageLeft: true,
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwWyYKG5RfOCb9dta5HhgDc3PEPvV9WYzOnPVRQ1pxXMSWqbGYmyEh_lk7QVzVwtxXvgFwPGxJ0r_3cHSZ-A3gfVOYUw7WwdgeP3_3wGxybjyooQ_m_XPXTTALkKumSLD1z_-X9l3lmjfUaE0dg8i8SoawSRkLfeod92bVu-mVp49MGyUOuITCxO1KAD12xR_Fh2klu2Kz_V0uBWZBWFPZ8WCkYMhfbfAyJfVxmKC4iiHUPShOHDKkc6zFj3K1YjrFeOMSBISEPPgw"
    },
    {
      id: 7,
      href: "/project-vmmc",
      label: "MEDICAL EDUCATION",
      heading: "VMMC Safdarjung Digital Workflow Platform",
      description: "Designed digital workflows that improved healthcare administration, process visibility, and operational coordination through structured requirement analysis and workflow optimization.",
      tags: ["Healthcare", "Operations", "Workflow"],
      imageLeft: false,
      imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYeGJLDd0LuWxyyyCbcMG2jdB21AwvpC3u74-tbo1i9Lv3ADkehRjytwEy4Eov9h_gPLsREIV1ylSwqRoYkmQGzyKrJtd4ad9CBtUFgcWgcT6slYq6Zh47ysyS3eYecB2YW5GbmKHhQAGcTQ_PjM7093LXcKsCrhu82gHqrLVTGILNGfK6nA9G7Ha4V3azJwSDGVAsAvN4JqSFyTWmYvOQQlMshZDrTE2FW9a2ldErcWD58R6pE6uJKJwKQsGgK7xWHs0sPb8hDu5V"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="px-margin-page max-w-container-max mx-auto mb-24 pt-24">
        <div className="md:grid md:grid-cols-12 gap-gutter items-end">
          <div className="md:col-span-8">
            <span className="text-label-caps font-label-caps text-on-surface-variant mb-6 block tracking-[0.2em]">CASE STUDY ARCHIVE</span>
            <h1 className="text-display-lg-mobile md:text-[56px] font-display-xl leading-[1.1]">
              Business challenges transformed into scalable digital products and <span className="italic text-on-tertiary-container">measurable outcomes.</span>
            </h1>
          </div>
          <div className="md:col-span-4 mt-8 md:mt-0 md:text-right">
            <p className="text-body-lg text-on-surface-variant max-w-xs md:ml-auto leading-relaxed">
              Explore the thinking, strategy, and execution behind enterprise platforms, government transformation initiatives, and AI-powered solutions—showcasing how business problems were translated into scalable digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="border-y border-outline-variant py-16 mb-section-gap bg-surface-container-lowest">
        <div className="px-margin-page max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          <div className="flex flex-col gap-4 md:pr-12">
            <span className="text-headline-md font-headline-md text-primary leading-tight">Government</span>
            <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">DIGITAL TRANSFORMATION</span>
          </div>
          <div className="flex flex-col gap-4 md:px-12 pt-12 md:pt-0">
            <span className="text-headline-md font-headline-md text-primary leading-tight">Enterprise</span>
            <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">PRODUCTS DELIVERED</span>
          </div>
          <div className="flex flex-col gap-4 md:pl-12 pt-12 md:pt-0">
            <span className="text-headline-md font-headline-md text-primary leading-tight">AI</span>
            <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">PRODUCT SOLUTIONS</span>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-margin-page max-w-container-max mx-auto mb-section-gap">
        <div className="relative group overflow-hidden bg-on-background min-h-[600px] flex items-end">
          {/* Background Image Container */}
          <div 
            className="absolute inset-0 opacity-60 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgTF4KSMhYHbtTqfxZR64KYN8YdkCNQ5iMbMB1yhrUdZY4ruWkZdM-SMfXrLJLJdEk5v3t14lN7tx0ELruPRhR-R74XLNkmUYZNs7W3w1bjAMaSpl5fFe2HV6Qym_9QK8-3HFvFJY52hWp5nTqp0MpW9pdOdQinPs1HWka5oDQYg-4Zr3mt9-kuQPkJNUI5Tnmxm3UbOR_Tc6sQjdnfg1qZs_e00IdzHPHc2rRUjnvHFq_c5JqXeGp03MDWx8WtiNXXTCwkxIJ6Mtu')" }}
          >
          </div>
          {/* Content Overlay */}
          <div className="relative z-10 p-8 md:p-16 w-full md:max-w-3xl">
            <div className="bg-surface p-8 md:p-12 shadow-2xl">
              <span className="text-label-caps font-label-caps text-on-tertiary-container mb-4 block tracking-[0.2em]">FEATURED CASE STUDY / GOVERNMENT DIGITAL TRANSFORMATION</span>
              <h2 className="text-[32px] md:text-[40px] font-headline-md mb-6 leading-tight">
                Building an AI-Enabled Digital Operations Platform for South East Central Railway
              </h2>
              <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Digitized telecom operations for South East Central Railway by replacing fragmented manual workflows with an integrated digital platform featuring GPS-based cable mapping, real-time field reporting, centralized asset management, digital cable inspections, and an AI-powered decision support assistant for senior officers.
              </p>
              <div className="flex flex-wrap gap-12 mb-10">
                <div>
                  <span className="text-headline-sm font-headline-sm text-primary block">6+</span>
                  <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">INTEGRATED MODULES</span>
                </div>
                <div>
                  <span className="text-headline-sm font-headline-sm text-primary block">Web + Mobile + AI</span>
                  <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em]">ENTERPRISE PLATFORM</span>
                </div>
              </div>
              <Link
                href="/project-detail"
                className="inline-flex items-center gap-4 text-label-caps font-bold text-primary hover:gap-6 transition-all"
              >
                READ FULL CASE STUDY 
                <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-2">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="px-margin-page max-w-container-max mx-auto mb-section-gap">
        <div className="flex flex-col gap-px bg-outline-variant border border-outline-variant">
          
          {gridProjects.map((project, index) => (
            <Link key={project.id} href={project.href || "/project-detail"} className="bg-surface md:grid md:grid-cols-12 hover:bg-surface-container-low transition-colors group cursor-pointer block">
              <div className={`md:col-span-5 p-8 border-b md:border-b-0 md:border-r border-outline-variant overflow-hidden ${!project.imageLeft ? 'md:order-2' : ''}`}>
                <div className="aspect-video bg-secondary-container relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110" 
                    alt={project.heading} 
                    src={project.imgSrc}
                  />
                </div>
              </div>
              <div className={`md:col-span-7 p-8 md:p-12 flex flex-col justify-center ${!project.imageLeft ? 'md:order-1' : ''}`}>
                <span className="text-label-caps font-label-caps text-on-surface-variant mb-4 tracking-[0.2em]">{project.label}</span>
                <h3 className="text-headline-md font-headline-md mb-4">{project.heading}</h3>
                <p className="text-body-md text-on-surface-variant mb-6 max-w-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-label-caps font-label-caps py-2 px-4 bg-surface-variant tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-4 text-label-caps font-bold border-b-2 border-primary pb-2 w-max text-primary">
                  Read Full Case Study →
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* Pre-Footer CTA Specific to Case Studies */}
      <section className="bg-surface-container-low py-24 mb-section-gap">
        <div className="max-w-container-max mx-auto px-margin-page text-center flex flex-col items-center">
          <h2 className="text-[40px] md:text-[56px] font-headline-md mb-8 leading-tight max-w-3xl">
            Ready to explore the complete story behind these products?
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            Every case study documents the business challenge, product strategy, stakeholder collaboration, solution design, and measurable outcomes that shaped each digital transformation initiative.
          </p>
          <Link href="/contact" className="px-10 py-5 bg-primary text-on-primary font-label-caps text-label-caps tracking-widest hover:bg-on-background transition-colors">
            LET'S TALK
          </Link>
        </div>
      </section>
    </>
  );
}
