"use client";

import Image from "next/image";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully.");
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-32 px-margin-page bg-surface-container-high relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-container-max mx-auto relative z-10 flex flex-col items-center text-center">
          <span className="text-label-caps text-on-tertiary-container block mb-8">
            LET'S BUILD SOMETHING IMPACTFUL
          </span>
          <h1 className="text-display-lg lg:text-display-xl font-headline-md mb-8 leading-[1.05] max-w-5xl">
            Let's transform ideas into scalable digital <span className="italic text-on-tertiary-container">products.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-3xl leading-relaxed mb-4">
            Whether you're planning a digital transformation initiative, building an enterprise platform, improving an existing product, or looking for a Business Consultant to bridge business and technology—I’d love to hear about your challenge.
          </p>
          <p className="text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
            Let's discuss how structured product thinking and practical execution can create measurable business impact.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left Pane: Social Proof & Trusted By */}
        <aside className="lg:col-span-5 bg-surface-container-low p-margin-page flex flex-col border-r border-outline-variant/30 relative">
          {/* Subtle background decoration */}
          <div className="absolute -left-32 top-32 w-64 h-64 border border-outline-variant rounded-full opacity-20 pointer-events-none"></div>

          <div className="space-y-24 mb-24 relative z-10">
            <div className="space-y-8">
              <p className="font-label-caps text-label-caps text-on-tertiary-container">
                TRUSTED ACROSS INDUSTRIES
              </p>
              <div className="flex flex-col gap-6">
                <p className="font-headline-sm text-xl text-on-surface-variant opacity-80">Chhattisgarh IT Solutions</p>
                <p className="font-headline-sm text-xl text-on-surface-variant opacity-80">Tech Mahindra</p>
                <p className="font-headline-sm text-xl text-on-surface-variant opacity-80">Decision Point Analytics</p>
                <p className="font-headline-sm text-xl text-on-surface-variant opacity-80">QCI</p>
                <p className="font-headline-sm text-xl text-on-surface-variant opacity-80">SECR</p>
                <p className="font-headline-sm text-xl text-on-surface-variant opacity-80">Ministry of Power</p>
              </div>
            </div>
            <div className="space-y-8">
              <p className="font-label-caps text-label-caps text-on-tertiary-container">
                MY APPROACH
              </p>
              <blockquote className="font-headline-sm text-headline-sm italic leading-relaxed text-on-surface/90">
                “Every successful product starts with understanding the problem before building the solution.”
              </blockquote>
              <div className="pt-4">
                <p className="font-headline-sm text-[18px]">Abhinav Singh</p>
                <p className="font-label-caps text-[10px] opacity-60 mt-1">BUSINESS CONSULTANT</p>
                <p className="font-label-caps text-[10px] opacity-60 mt-1">PRODUCT STRATEGY • DIGITAL TRANSFORMATION</p>
              </div>
            </div>
            
            <div className="space-y-8 pt-8">
              <p className="font-label-caps text-label-caps text-on-tertiary-container">
                CURRENTLY AVAILABLE FOR
              </p>
              <h3 className="font-display-lg text-[42px] leading-tight">
                Business Consulting & Product Strategy
              </h3>
              <p className="font-body-lg text-on-surface-variant">
                I'm open to collaborating on enterprise products, digital transformation initiatives, AI-powered solutions, government technology projects, and product consulting opportunities.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-[22px]">location_on</span>
                  <p className="font-body-md">Raipur, Chhattisgarh, India</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-[22px]">phone</span>
                  <a href="tel:+919956761759" className="font-body-md underline">+91 9956761759</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-[22px]">mail</span>
                  <a href="mailto:abhinavs1508@gmail.com" className="font-body-md underline">abhinavs1508@gmail.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-[22px]">link</span>
                  <a href="https://www.linkedin.com/in/abhinav-singh1508/" target="_blank" rel="noopener noreferrer" className="font-body-md underline">linkedin.com/in/abhinav-singh1508</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary text-[22px]">code</span>
                  <a href="https://github.com/abhinav1508" target="_blank" rel="noopener noreferrer" className="font-body-md underline">github.com/abhinav1508</a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#10b981] text-[22px]">check_circle</span>
                  <p className="font-body-md font-medium">Available for Remote & On-site Opportunities</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto pt-16">
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 opacity-40">
              EST. 2024
            </p>
            <div className="h-px bg-outline-variant w-full"></div>
          </div>
        </aside>

        {/* Right Pane: Contact Form & Details */}
        <div className="lg:col-span-7 bg-surface p-margin-page py-24 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-section-gap">
            
            {/* Contact Form */}
            <div id="contact">
              <div className="mb-16">
                <p className="font-label-caps text-label-caps text-on-tertiary-container mb-4">
                  START A CONVERSATION
                </p>
                <h2 className="font-display-xl text-display-lg">Let's Build Together.</h2>
              </div>
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em]">
                      NAME
                    </label>
                    <input
                      className="input-minimalist"
                      placeholder="Your Name"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em]">
                      EMAIL
                    </label>
                    <input
                      className="input-minimalist"
                      placeholder="Your Email Address"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-label-caps text-[10px] text-on-surface-variant tracking-[0.2em]">
                    PROJECT DETAILS
                  </label>
                  <textarea
                    className="input-minimalist resize-none"
                    placeholder="Tell me about your project, business challenge, product idea, or collaboration opportunity."
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex items-start gap-4 py-2">
                  <input
                    className="mt-1 w-5 h-5 text-primary border-outline-variant focus:ring-0 rounded-none cursor-pointer"
                    id="consent"
                    required
                    type="checkbox"
                  />
                  <label
                    className="text-sm font-body-md text-on-surface-variant leading-relaxed cursor-pointer"
                    htmlFor="consent"
                  >
                    I agree to the Privacy Policy and Terms of Use.
                  </label>
                </div>
                <div className="pt-6">
                  <button
                    className="btn-primary w-full md:w-auto px-16 py-6 text-[14px]"
                    type="submit"
                  >
                    Start Conversation
                  </button>
                </div>
              </form>
            </div>

            {/* Minimal Map Card Section */}
            <div className="border border-outline-variant/30 rounded-2xl p-8 md:p-6 md:p-12 bg-surface-container-low shadow-sm">
              <h4 className="font-headline-sm text-2xl mb-4">Working Across India</h4>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Supporting organizations remotely and on-site across government, enterprise, and technology domains.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-outline-variant/30">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">BASE LOCATION</p>
                  </div>
                  <p className="font-headline-sm">Raipur, Chhattisgarh</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">public</span>
                    <p className="font-label-caps text-label-caps text-on-surface-variant">AVAILABLE ACROSS INDIA</p>
                  </div>
                  <p className="font-headline-sm">Government • Enterprise • Startups • SaaS</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
