import NavBar from "@/app/(hero)/_components/NavBar";
import TeamSection from "./TeamSection";
import Footer from "@/app/(hero)/_components/Footer";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[90vh] text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-relaxed">
              Linear is bringing{" "}
              <span className="block">magic back to software</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start py-24 px-40">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              We're crafting the expertise transfer tool for humanity
            </h2>
          </div>
          <div className="mt-8 lg:mt-4">
            <span className="text-gray-500 text-sm uppercase tracking-wider">
              Designing for Developers
            </span>
          </div>
        </div>

        <div className="px-8 py-24">
          <div>
            <div className="text-sm text-gray-500 mb-4 px-20">News</div>
            <div className="w-full h-px bg-white/20 mb-12"></div>
          </div>
          <div className="lg:flex lg:gap-x-8">
            <div className="max-w-2xl px-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
                We're crafting the expertise transfer tool
              </h2>
              <p className="text-gray-500 text-lg mb-8">Lorem ipsum</p>
              <button className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <span className="mr-2">We're hiring</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transform translate-y-px"
                >
                  <path
                    d="M6.5 3.5L11 8L6.5 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <TeamSection />
        <Footer />
      </main>
    </>
  );
}
