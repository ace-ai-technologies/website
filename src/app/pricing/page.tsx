import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Twitter, Youtube, Slack } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function PricingTable() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Free for everyone",
      features: [
        "Unlimited members",
        "2 teams",
        "250 issues (+unlimited archived)",
        "Slack, GitHub, and API access",
      ],
      button: "Get started",
      highlight: false,
    },
    {
      name: "Basic",
      price: "$8 per user/month",
      description: "Billed yearly",
      billed: "-20%",
      features: [
        "All free plan features and...",
        "5 teams",
        "Unlimited issues and file uploads",
        "Admin roles",
      ],
      button: "Get started",
      highlight: false,
    },
    {
      name: "Business",
      price: "$12 per user/month",
      description: "Billed yearly",
      billed: "-20%",
      features: [
        "All basic plan features and...",
        "Linear Asks",
        "Unlimited teams",
        "Private teams and guest accounts",
        "Linear Insights",
        "Zendesk and Intercom integrations",
        "Triage responsibility",
      ],
      button: "Get started",
      additionalButton: "Contact sales",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description: "Annual billing only",
      features: [
        "All business plan features and...",
        "Linear Asks Advanced",
        "Issue SLAs",
        "SAML and SCIM",
        "Advanced security controls",
        "Migration and onboarding support",
      ],
      button: "Request trial",
      highlight: false,
    },
  ];

  function FooterLinkGroup({
    title,
    links,
  }: {
    title: string;
    links: { label: string; href: string }[];
  }) {
    return (
      <div className="flex flex-col gap-4">
        <h3 className="text-zinc-100 text-sm font-medium">{title}</h3>
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-400 text-sm hover:text-zinc-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

  const companies = [
    { name: 'Boom', logo: '/path/to/boom-logo.png' },
    { name: 'Descript', logo: '/path/to/descript-logo.png' },
    { name: 'Retool', logo: '/path/to/retool-logo.png' },
    { name: 'Raycast', logo: '/path/to/raycast-logo.png' },
    { name: 'Netlify', logo: '/path/to/netlify-logo.png' },
    { name: 'Watershed', logo: '/path/to/watershed-logo.png' },
    { name: 'Together.ai', logo: '/path/to/togetherai-logo.png' },
  ];

  const pricingComparison = {
    sections: [
      {
        title: 'Usage',
        features: [
          { name: 'Members', plans: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { name: 'File upload size', plans: ['10MB', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { name: 'Issues (excluding Archive)', plans: ['250', 'Unlimited', 'Unlimited', 'Unlimited'] },
          { name: 'Teams', plans: ['2', '5', 'Unlimited', 'Unlimited'] },
        ],
      },
      {
        title: 'Features',
        features: [
          { name: 'Issues, projects, cycles, and initiatives', plans: [true, true, true, true] },
          { name: 'Integrations', plans: [true, true, true, true] },
          { name: 'API and Webhook access', plans: [true, true, true, true] },
          { name: 'Import and export', plans: [true, true, true, true] },
          { name: 'Triage', plans: [true, true, true, true] },
          { name: 'Issue sync', plans: [false, true, true, true] },
        ],
      },
      {
        title: 'Analytics & Reporting',
        features: [
          { name: 'Progress reports', plans: [false, true, true, true] },
          { name: 'Insights', plans: [false, true, true, true] },
          { name: 'Data warehouse sync', plans: [false, false, true, true] },
        ],
      },
      {
        title: 'Security',
        features: [
          { name: 'SSO', plans: ['G Suite', 'G Suite', 'G Suite', 'G Suite + SAML'] },
          { name: 'Admin roles', plans: [false, true, true, true] },
          { name: 'Advanced authentication controls', plans: [false, false, true, true] },
        ],
      },
      {
        title: 'Support',
        features: [
          { name: 'Priority support', plans: [false, false, true, true] },
          { name: 'Account manager', plans: [false, false, false, true] },
          { name: 'Custom terms', plans: [false, false, false, true] },
          { name: 'Uptime SLA', plans: [false, false, false, true] },
        ],
      },
    ],
    plans: ['Free', 'Basic', 'Business', 'Enterprise'],
  };

  return (
    <div className="bg-black text-white py-16 px-4 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12 mt-20">
        <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Pricing
        </h2>
        <p className="text-lg mt-4 text-gray-500 max-w-2xl mx-auto">
          Tens of thousands of companies use our product to build better. From next-gen startups to established enterprises.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-8">
  {plans.map((plan, index) => (
    <div
      key={index}
      className={`rounded-xl p-8 w-full md:w-1/4 flex flex-col ${
        plan.highlight ? 'bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800' : 'bg-black-900'
      }`}
    >
      <div className="text-left">
        <h3 className="text-xl font-semibold bg-gradient-to-b from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent">
          {plan.name}
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-xxs font-bold text-gray-500">{plan.price}</span>
          {plan.billed && (
            <span className="ml-2 text-sm text-gray-500">{plan.billed}</span>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-2 mb-6">{plan.description}</p>
      </div>

      <ul className="space-y-3 mb-6 text-left">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm text-gray-400">
            <span className="mr-2 text-green-400">✔️</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button and additional link container */}
      <div className="mt-auto flex items-center space-x-2">
        <Button
          className={`bg-white text-black hover:bg-zinc-200 px-2 py-2 text-base ${
            plan.highlight ? 'bg-white text-black' : 'bg-zinc-700 text-white'
          }`}
        >
          {plan.button}
        </Button>
        {plan.additionalButton && (
          <a href="#" className="text-sm text-gray-400 hover:underline">
            or {plan.additionalButton}
          </a>
        )}
      </div>
    </div>
  ))}
</div>


{/* Scrolling Branding Section */}
<div className="overflow-hidden mt-16">
  <div className="flex animate-scroll">
    {companies.concat(companies).map((company, index) => (
      <div key={index} className="mx-4 flex-shrink-0">
        <img
          src={company.logo}
          alt={company.name}
          className="w-24 h-12 object-contain grayscale opacity-80"
        />
      </div>
    ))}
  </div>
</div>

      {/* Pricing Comparison Table */}
      <div className="bg-black-900 text-gray-200 p-8 mt-16 rounded-lg">
        <div className="grid grid-cols-5 gap-4 text-center font-semibold">
          <div></div>
          {pricingComparison.plans.map((plan, index) => (
            <div key={index}>
              <h3 className="text-xl text-gray-100">{plan}</h3>
            </div>
          ))}
        </div>
        {pricingComparison.sections.map((section, sectionIndex) => (
  <div key={sectionIndex} className="mt-8">
    <h4 className="text-lg font-bold text-gray-300">{section.title}</h4>
    {section.features.map((feature, featureIndex) => (
      <div key={featureIndex} className="grid grid-cols-5 gap-4 py-2 border-t border-gray-800">
        <span className="text-left text-gray-400">{feature.name}</span>
        {feature.plans.map((plan, planIndex) => (
          <div key={planIndex} className="text-center">
            {plan === 'Unlimited' ? (
              <span className="text-green-500 flex items-center justify-center">
                ✔ {plan}
              </span>
            ) : typeof plan === 'boolean' ? (
              plan ? (
                <span className="text-green-500">✔</span>
              ) : (
                <span className="text-gray-500"></span>
              )
            ) : (
              <span className="text-gray-300">{plan}</span>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
))}


      </div>
      <footer className="border-t border-zinc-800 bg-black">
        <div className="container mx-auto px-16">
          <div className="flex flex-col gap-12 py-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 justify-between">
              <div className="max-w-xl">
                <div className="flex flex-col gap-6 ml-20">
                  <Link href="/" className="w-fit">
                    <Image
                      src="/logo-white.png"
                      alt="logo"
                      width={40}
                      height={40}
                    />
                  </Link>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-zinc-400 text-sm">
                      Artificial Expertise
                    </h3>
                    <h3 className="text-zinc-400 text-sm">
                      Trained by Real Humans
                    </h3>
                  </div>
                </div>
              </div>

              {/* Navigation links section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                <FooterLinkGroup
                  title="Product"
                  links={[
                    { label: "Features", href: "#" },
                    { label: "Integrations", href: "#" },
                  ]}
                />
                <FooterLinkGroup
                  title="Company"
                  links={[
                    { label: "About us", href: "#" },
                    { label: "Blog", href: "#" },
                    { label: "Careers", href: "#" },
                    { label: "Customers", href: "#" },
                    { label: "Brand", href: "#" },
                  ]}
                />
                <FooterLinkGroup
                  title="Resources"
                  links={[
                    { label: "Startup Program", href: "#" },
                    { label: "Community", href: "#" },
                    { label: "Contact", href: "#" },
                    { label: "DPA", href: "#" },
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of service", href: "#" },
                    { label: "Report a vulnerability", href: "#" },
                  ]}
                />
                <FooterLinkGroup
                  title="Pricing"
                  links={[
                    { label: "Changelog", href: "#" },
                    { label: "Docs", href: "#" },
                    { label: "Linear Method", href: "#" },
                    { label: "Download", href: "#" },
                  ]}
                />
              </div>
            </div>

            {/* Bottom section with social icons*/}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-6">
              <div className="max-w-xl w-full">
                <div className="flex gap-4 ml-20">
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Twitter size={20} />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Github size={20} />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Slack size={20} />
                  </Link>
                  <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                    <Youtube size={20} />
                  </Link>
                </div>
              </div>
              {/* Location */}
              <div className="text-zinc-400 text-sm">Made in Palo Alto</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
