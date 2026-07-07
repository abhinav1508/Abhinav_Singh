"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 lg:pt-24 px-margin-page pb-section-gap overflow-hidden">
        <motion.div 
          className="max-w-container-max mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-label-caps text-on-tertiary-container block mb-8 md:mb-12">
            BUSINESS CONSULTANT • PRODUCT STRATEGY • DIGITAL TRANSFORMATION
          </span>
          <div className="grid grid-cols-12 gap-gutter items-start">
            <div className="col-span-12 lg:col-span-8">
              <h1 className="text-display-lg lg:text-display-xl font-display-xl leading-[1.05] mb-16 max-w-4xl">
                Designing digital products that simplify operations, empower teams, and drive <span className="text-on-tertiary-container italic">measurable business impact.</span>
              </h1>
            </div>
            <div className="col-span-12 lg:col-start-9 lg:col-span-4 mt-8 lg:mt-2">
              <div className="border-l border-outline-variant pl-8 py-4">
                <p className="text-body-lg text-on-surface-variant leading-relaxed mb-12">
                  I work at the intersection of business strategy, product thinking, and technology—helping organizations transform manual workflows into scalable digital platforms. From enterprise products to government digital transformation initiatives, I bridge business needs with practical execution through structured analysis, AI-assisted development, and stakeholder collaboration.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-[1px] bg-primary mt-1"></div>
                  <Link href="/work" className="text-label-caps text-primary uppercase font-bold hover:text-on-tertiary-container transition-colors">
                    Explore My Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Operating Principles Section */}
      <section className="py-section-gap px-margin-page border-t border-outline-variant/30">
        <motion.div 
          className="max-w-container-max mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-label-caps text-on-tertiary-container block mb-8">
            FOUNDATION
          </span>
          <h2 className="text-display-lg font-display-lg mb-20">How I Approach Every Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="group">
              <div className="text-on-tertiary-container text-label-caps mb-6">01</div>
              <h3 className="text-headline-sm mb-6">User-Centric Thinking</h3>
              <p className="text-on-surface-variant text-body-md border-t border-outline-variant pt-6">
                Every product begins with understanding the people who use it. I focus on solving real operational challenges rather than simply delivering features.
              </p>
            </div>
            <div className="group">
              <div className="text-on-tertiary-container text-label-caps mb-6">02</div>
              <h3 className="text-headline-sm mb-6">Structured Execution</h3>
              <p className="text-on-surface-variant text-body-md border-t border-outline-variant pt-6">
                I transform business requirements into clear workflows, user stories, and scalable product roadmaps that development teams can execute confidently.
              </p>
            </div>
            <div className="group">
              <div className="text-on-tertiary-container text-label-caps mb-6">03</div>
              <h3 className="text-headline-sm mb-6">Continuous Improvement</h3>
              <p className="text-on-surface-variant text-body-md border-t border-outline-variant pt-6">
                Products evolve through feedback, iteration, and measurable outcomes. Every solution is refined using stakeholder insights and operational data.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Competencies Section */}
      <section className="bg-on-background text-on-primary py-section-gap px-margin-page overflow-hidden relative">
        <div className="absolute -right-20 top-40 opacity-10 rotate-90 hidden lg:block">
          <span className="text-[200px] font-display-xl font-bold text-outline whitespace-nowrap uppercase">
            Services
          </span>
        </div>
        <motion.div 
          className="max-w-container-max mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-12 gap-gutter mb-24 items-end">
            <div className="col-span-12 lg:col-span-6">
              <span className="text-label-caps text-on-tertiary-container block mb-8">
                AREAS OF EXPERTISE
              </span>
              <h2 className="text-display-lg font-headline-md text-surface">
                Core Competencies
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-right">
              <p className="text-surface-variant/60 text-body-md max-w-md lg:ml-auto">
                A multidimensional approach to corporate evolution, designed for
                organizations operating at the highest level of complexity.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-outline/20">
            {/* Business Analysis */}
            <div className="expertise-card group p-12 lg:border-r border-outline/20 flex flex-col h-full">
              <div className="flex flex-col flex-grow">
                <div className="mb-auto">
                  <span
                    className="material-symbols-outlined text-4xl text-on-tertiary-container mb-12"
                  >
                    analytics
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-surface mb-6 lg:min-h-[64px]">
                    Business Analysis
                  </h3>
                  <p className="text-body-md text-surface-variant/70 leading-relaxed mb-8 lg:min-h-[120px]">
                    Translating business challenges into structured product requirements, user stories, workflows, and implementation-ready documentation.
                  </p>
                </div>
                <div className="space-y-2 mb-12 mt-8">
                  <span className="text-label-caps text-on-tertiary-container text-[10px] block mb-2">
                    FOCUS AREAS
                  </span>
                  <ul className="text-label-sm text-surface-variant/50 space-y-1 list-disc list-inside uppercase">
                    <li>BRD / FRD</li>
                    <li>Requirement Gathering</li>
                    <li>Workflow Mapping</li>
                    <li>Stakeholder Workshops</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-outline/10 mt-auto">
                <span className="text-label-caps text-on-tertiary-container block mb-2">
                  IMPACT
                </span>
                <span className="text-body-lg font-bold text-surface block lg:min-h-[56px]">30+ Product Documents</span>
              </div>
            </div>
            {/* Product Strategy */}
            <div className="expertise-card group p-12 lg:border-r border-outline/20 flex flex-col h-full">
              <div className="flex flex-col flex-grow">
                <div className="mb-auto">
                  <span
                    className="material-symbols-outlined text-4xl text-on-tertiary-container mb-12"
                  >
                    lightbulb
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-surface mb-6 lg:min-h-[64px]">
                    Product Strategy
                  </h3>
                  <p className="text-body-md text-surface-variant/70 leading-relaxed mb-8 lg:min-h-[120px]">
                    Designing scalable enterprise products by balancing business objectives, user needs, and technical feasibility.
                  </p>
                </div>
                <div className="space-y-2 mb-12 mt-8">
                  <span className="text-label-caps text-on-tertiary-container text-[10px] block mb-2">
                    FOCUS AREAS
                  </span>
                  <ul className="text-label-sm text-surface-variant/50 space-y-1 list-disc list-inside uppercase">
                    <li>Product Discovery</li>
                    <li>Feature Prioritization</li>
                    <li>MVP Definition</li>
                    <li>Product Roadmaps</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-outline/10 mt-auto">
                <span className="text-label-caps text-on-tertiary-container block mb-2">
                  IMPACT
                </span>
                <span className="text-body-lg font-bold text-surface block lg:min-h-[56px]">
                  Multiple Enterprise Platforms
                </span>
              </div>
            </div>
            {/* Digital Transformation */}
            <div className="expertise-card group p-12 lg:border-r border-outline/20 flex flex-col h-full">
              <div className="flex flex-col flex-grow">
                <div className="mb-auto">
                  <span
                    className="material-symbols-outlined text-4xl text-on-tertiary-container mb-12"
                  >
                    sync
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-surface mb-6 lg:min-h-[64px]">
                    Digital Transformation
                  </h3>
                  <p className="text-body-md text-surface-variant/70 leading-relaxed mb-8 lg:min-h-[120px]">
                    Helping organizations replace manual processes with digital platforms that improve visibility, collaboration, and operational efficiency.
                  </p>
                </div>
                <div className="space-y-2 mb-12 mt-8">
                  <span className="text-label-caps text-on-tertiary-container text-[10px] block mb-2">
                    FOCUS AREAS
                  </span>
                  <ul className="text-label-sm text-surface-variant/50 space-y-1 list-disc list-inside uppercase">
                    <li>Government Platforms</li>
                    <li>Enterprise Systems</li>
                    <li>Process Automation</li>
                    <li>Workflow Optimization</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-outline/10 mt-auto">
                <span className="text-label-caps text-on-tertiary-container block mb-2">
                  IMPACT
                </span>
                <span className="text-body-lg font-bold text-surface block lg:min-h-[56px]">
                  4+ Digital Transformation Projects
                </span>
              </div>
            </div>
            {/* AI-Assisted Product Development */}
            <div className="expertise-card group p-12 flex flex-col h-full">
              <div className="flex flex-col flex-grow">
                <div className="mb-auto">
                  <span
                    className="material-symbols-outlined text-4xl text-on-tertiary-container mb-12"
                  >
                    memory
                  </span>
                  <h3 className="text-headline-sm font-headline-sm text-surface mb-6 lg:min-h-[64px]">
                    AI-Assisted Product Development
                  </h3>
                  <p className="text-body-md text-surface-variant/70 leading-relaxed mb-8 lg:min-h-[120px]">
                    Leveraging modern AI tools to accelerate product ideation, prototyping, documentation, interface design, and solution validation.
                  </p>
                </div>
                <div className="space-y-2 mb-12 mt-8">
                  <span className="text-label-caps text-on-tertiary-container text-[10px] block mb-2">
                    FOCUS AREAS
                  </span>
                  <ul className="text-label-sm text-surface-variant/50 space-y-1 list-disc list-inside uppercase">
                    <li>Prompt Engineering</li>
                    <li>Rapid Prototyping</li>
                    <li>AI Workflows</li>
                    <li>UI Generation</li>
                  </ul>
                </div>
              </div>
              <div className="pt-8 border-t border-outline/10 mt-auto">
                <span className="text-label-caps text-on-tertiary-container block mb-2">
                  IMPACT
                </span>
                <span className="text-body-lg font-bold text-surface block lg:min-h-[56px]">Accelerated Product Delivery</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Engagement Model Section */}
      <section className="py-section-gap px-margin-page bg-surface">
        <motion.div 
          className="max-w-container-max mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-label-caps text-on-tertiary-container block mb-8">
            WORKFLOW
          </span>
          <h2 className="text-display-lg font-display-lg mb-20">From Business Challenges to Product Delivery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="step-connector">
              <div className="relative z-10 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-label-caps mb-8">
                01
              </div>
              <h4 className="text-headline-sm mb-4">Discover</h4>
              <p className="text-body-md text-on-surface-variant">
                Understand business goals, stakeholder expectations, user pain points, and operational workflows.
              </p>
            </div>
            <div className="step-connector">
              <div className="relative z-10 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-label-caps mb-8">
                02
              </div>
              <h4 className="text-headline-sm mb-4">Define</h4>
              <p className="text-body-md text-on-surface-variant">
                Create process maps, product requirements, user stories, and implementation plans.
              </p>
            </div>
            <div className="step-connector">
              <div className="relative z-10 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-label-caps mb-8">
                03
              </div>
              <h4 className="text-headline-sm mb-4">Deliver</h4>
              <p className="text-body-md text-on-surface-variant">
                Collaborate with cross-functional teams to build scalable digital products that solve real business problems.
              </p>
            </div>
            <div>
              <div className="relative z-10 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-label-caps mb-8">
                04
              </div>
              <h4 className="text-headline-sm mb-4">Optimize</h4>
              <p className="text-body-md text-on-surface-variant">
                Measure adoption, gather feedback, refine workflows, and continuously improve product outcomes.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expanded Case Study Section / Featured Work */}
      <section className="py-section-gap px-margin-page bg-surface-container-low border-y border-outline-variant/30">
        <motion.div 
          className="max-w-container-max mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-12 gap-gutter">
            {/* Left: Sticky Content */}
            <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
              <div className="lg:sticky lg:top-40">
                <span className="text-label-caps text-on-tertiary-container block mb-8">
                  FEATURED WORK
                </span>
                <h2 className="text-display-lg font-display-lg mb-12 leading-[1.1]">
                  Building products that create measurable operational impact.
                </h2>
                <div className="mb-12">
                  <p className="text-body-md text-on-surface-variant">
                    From government digital transformation initiatives to enterprise workflow platforms, every project focuses on solving complex business problems through structured product thinking and scalable digital solutions.
                  </p>
                </div>
                <Link href="/work" className="flex items-center gap-6 group w-fit">
                  <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                  <span className="text-label-caps font-bold tracking-widest uppercase">
                    View All Projects
                  </span>
                </Link>
              </div>
            </div>
            {/* Right: Visual Highlights */}
            <div className="col-span-12 lg:col-start-7 lg:col-span-6">
              <div className="space-y-32">
                {/* Case Study Card */}
                <Link href="/project-detail" className="group block cursor-pointer">
                  <div className="relative aspect-[4/5] bg-secondary-container overflow-hidden mb-8">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Digital Dashboard Illustration"
                      className="w-full h-full object-contain bg-[#0f1115] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      src="/project-dashboard.jpg"
                    />
                    <div className="absolute top-8 left-8 bg-primary/90 backdrop-blur text-on-primary px-4 py-2 text-label-caps">
                      GOVERNMENT • DIGITAL TRANSFORMATION
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-[32px] font-headline-md mb-4 leading-tight group-hover:text-on-tertiary-container transition-colors">
                        SECR Telecom Digital Transformation Platform
                      </h3>
                      <p className="text-body-md text-on-surface-variant max-w-xl">
                        Digitized telecom operations for South East Central Railway through GPS-based cable mapping, real-time field reporting, centralized asset management, and digital inspection workflows.
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-3xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform hidden sm:block">
                      north_east
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <span className="border border-outline-variant px-3 py-1 rounded-full text-label-caps text-on-surface-variant bg-surface">✓ GPS Mapping</span>
                    <span className="border border-outline-variant px-3 py-1 rounded-full text-label-caps text-on-surface-variant bg-surface">✓ Field Operations</span>
                    <span className="border border-outline-variant px-3 py-1 rounded-full text-label-caps text-on-surface-variant bg-surface">✓ Workflow Automation</span>
                    <span className="border border-outline-variant px-3 py-1 rounded-full text-label-caps text-on-surface-variant bg-surface">✓ Enterprise Platform</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Impact Snapshot Section */}
      <section className="py-section-gap px-margin-page bg-on-background text-on-primary">
        <div className="max-w-container-max mx-auto">
          <span className="text-label-caps text-on-tertiary-container block mb-8 text-center">
            IMPACT SNAPSHOT
          </span>
          <h2 className="text-display-lg font-display-lg mb-20 text-center max-w-3xl mx-auto">
            Creating measurable business outcomes.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden border border-outline/20 p-8 flex items-center justify-center text-center hover:bg-on-tertiary-container hover:border-on-tertiary-container hover:-translate-y-1 transition-all cursor-pointer min-h-[160px]">
              <span className="material-symbols-outlined absolute -bottom-6 -right-4 text-[120px] text-white opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:rotate-[-10deg]">account_balance</span>
              <span className="relative z-10 text-headline-sm font-headline-sm">Government Projects</span>
            </div>
            <div className="group relative overflow-hidden border border-outline/20 p-8 flex items-center justify-center text-center hover:bg-on-tertiary-container hover:border-on-tertiary-container hover:-translate-y-1 transition-all cursor-pointer min-h-[160px]">
              <span className="material-symbols-outlined absolute -bottom-6 -right-4 text-[120px] text-white opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:rotate-[-10deg]">corporate_fare</span>
              <span className="relative z-10 text-headline-sm font-headline-sm">Enterprise Platforms</span>
            </div>
            <div className="group relative overflow-hidden border border-outline/20 p-8 flex items-center justify-center text-center hover:bg-on-tertiary-container hover:border-on-tertiary-container hover:-translate-y-1 transition-all cursor-pointer min-h-[160px]">
              <span className="material-symbols-outlined absolute -bottom-6 -right-4 text-[120px] text-white opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:rotate-[-10deg]">groups</span>
              <span className="relative z-10 text-headline-sm font-headline-sm">Cross-functional Collaboration</span>
            </div>
            <div className="group relative overflow-hidden border border-outline/20 p-8 flex items-center justify-center text-center hover:bg-on-tertiary-container hover:border-on-tertiary-container hover:-translate-y-1 transition-all cursor-pointer min-h-[160px]">
              <span className="material-symbols-outlined absolute -bottom-6 -right-4 text-[120px] text-white opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:rotate-[-10deg]">memory</span>
              <span className="relative z-10 text-headline-sm font-headline-sm">AI-powered Workflows</span>
            </div>
            <div className="group relative overflow-hidden border border-outline/20 p-8 flex items-center justify-center text-center hover:bg-on-tertiary-container hover:border-on-tertiary-container hover:-translate-y-1 transition-all cursor-pointer min-h-[160px]">
              <span className="material-symbols-outlined absolute -bottom-6 -right-4 text-[120px] text-white opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:rotate-[-10deg]">transform</span>
              <span className="relative z-10 text-headline-sm font-headline-sm">Business Process Digitization</span>
            </div>
            <div className="group relative overflow-hidden border border-outline/20 p-8 flex items-center justify-center text-center hover:bg-on-tertiary-container hover:border-on-tertiary-container hover:-translate-y-1 transition-all cursor-pointer min-h-[160px]">
              <span className="material-symbols-outlined absolute -bottom-6 -right-4 text-[120px] text-white opacity-0 group-hover:opacity-30 transition-all duration-500 pointer-events-none group-hover:rotate-[-10deg]">handshake</span>
              <span className="relative z-10 text-headline-sm font-headline-sm">Stakeholder Alignment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-section-gap px-margin-page bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4">
              <span className="text-label-caps text-on-tertiary-container block mb-8">
                EXPERIENCE
              </span>
              <h2 className="text-display-lg font-display-lg mb-12">Professional Journey</h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-12">
              <div className="border-l-2 border-primary pl-8 pb-4 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0 border-4 border-surface"></div>
                <h3 className="text-headline-md font-headline-md mb-2">Business Consultant</h3>
                <p className="text-label-caps text-on-tertiary-container mb-4">Chhattisgarh IT Solutions</p>
                <p className="text-body-lg text-on-surface-variant">Leading digital transformation initiatives across government and enterprise platforms.</p>
              </div>
              <div className="border-l-2 border-outline-variant pl-8 pb-4 relative">
                <div className="absolute w-4 h-4 bg-outline-variant rounded-full -left-[9px] top-0 border-4 border-surface"></div>
                <h3 className="text-headline-md font-headline-md mb-2">Business Analyst</h3>
                <p className="text-label-caps text-on-tertiary-container mb-4">Webority Technologies</p>
                <p className="text-body-lg text-on-surface-variant">Managed product documentation, stakeholder collaboration, and workflow design for government and SaaS platforms.</p>
              </div>
              <div className="border-l-2 border-outline-variant pl-8 pb-4 relative">
                <div className="absolute w-4 h-4 bg-outline-variant rounded-full -left-[9px] top-0 border-4 border-surface"></div>
                <h3 className="text-headline-md font-headline-md mb-2">Associate Moderator</h3>
                <p className="text-label-caps text-on-tertiary-container mb-4">Tech Mahindra (Google AI Program)</p>
                <p className="text-body-lg text-on-surface-variant">Contributed to AI prompt evaluation, quality assurance, and policy compliance for Google&apos;s AI systems.</p>
              </div>
              <div className="border-l-2 border-outline-variant pl-8 pb-4 relative">
                <div className="absolute w-4 h-4 bg-outline-variant rounded-full -left-[9px] top-0 border-4 border-surface"></div>
                <h3 className="text-headline-md font-headline-md mb-2">QA Intern</h3>
                <p className="text-label-caps text-on-tertiary-container mb-4">Decision Point Analytics</p>
                <p className="text-body-lg text-on-surface-variant">Supported the development and documentation of Beagle GPT, an enterprise AI assistant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Marquee/Strip */}
      <section className="px-margin-page py-16 border-y border-outline-variant/30 bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">Government</span>
            </div>
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">Railways</span>
            </div>
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">Healthcare</span>
            </div>
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">Energy</span>
            </div>
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">Enterprise SaaS</span>
            </div>
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">AI Products</span>
            </div>
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">Telecom</span>
            </div>
            <div className="border border-outline-variant/60 rounded-xl p-6 flex items-center justify-center text-center hover:border-on-tertiary-container hover:text-on-tertiary-container transition-all duration-300 cursor-pointer bg-surface/30 hover:bg-surface">
              <span className="text-headline-sm font-bold tracking-tighter uppercase">Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-margin-page bg-surface text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-label-caps text-on-tertiary-container block mb-8">
            NEXT STEPS
          </span>
          <h2 className="text-display-lg font-display-lg mb-10 leading-tight">
            Let&apos;s build products that make complex work simple.
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-12">
            Whether it&apos;s enterprise software, government platforms, or AI-powered solutions, I&apos;m always interested in solving meaningful business problems through product thinking and digital innovation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-on-primary text-label-caps font-bold px-10 py-5 hover:bg-on-surface transition-colors duration-300 uppercase tracking-widest"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </section>
    </>
  );
}
