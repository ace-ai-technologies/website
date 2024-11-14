"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Youtube, Slack } from "lucide-react";
import { useState } from "react";

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

export default function Footer() {
  return (
    <footer
      className={`border-t border-zinc-800 bg-black transition-all duration-300}`}
    >
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
                  { label: "Careers", href: "/company/careers" },
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
  );
}
