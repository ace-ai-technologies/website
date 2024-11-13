import NavBar from "@/app/(hero)/_components/NavBar";
import {
  MessageSquare,
  Heart,
  Lightbulb,
  Users,
  Sailboat,
  Wrench,
} from "lucide-react";

export default function CareersPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-black text-white px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h4 className="max-w-3xl mx-auto space-y-12 mt-11 text-center">
            Careers
          </h4>
        </div>
        <div className="max-w-3xl mx-auto space-y-12 mt-11">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Software has lost its magic.
              <br />
              We want your help to bring it back.
            </h1>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full">
              See open positions
            </button>
          </div>

          {/* Content sections */}
          <div className="space-y-8 text-gray-300">
            <p className="text-lg">
              Remember when software still felt magical? Good software used to
              be an experience. It used to radically change how we lived and
              worked. Software used to make us dream.
            </p>

            <p className="text-lg">
              Today, software is everywhere. But truly great software has become
              incredibly rare. Computers are faster, but apps work slower.
              Optimization has been replaced with growth hacks. Humanity has
              been traded for engagement metrics.
            </p>

            <p className="text-lg">
              The magic of software got lost along the way. At Linear, we are on
              a quest to bring it back.
            </p>

            <p className="text-lg">
              We are building the tools for the next generation of high-impact
              companies. The place where ambitious creators come to bring
              radical ideas to life. Our mission is to empower the world's best
              product and engineering teams to aim higher, move faster, and
              build products that feel{" "}
              <span className="text-purple-400">magical</span> again.
            </p>

            <p className="text-lg">But we can't do it alone.</p>

            <p className="text-lg">
              We are looking for talented people who share our passion for
              crafting exceptional software products. That person might be you.
            </p>

            <p className="text-lg">
              Join us and let's bring back the magic of software.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full inline-flex items-center gap-2">
              See open positions
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <a
              href="/company/readme"
              className="text-gray-400 hover:text-white px-6 py-2 rounded-full inline-flex items-center gap-2 border border-gray-800"
            >
              README
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Partners Section */}
          <div className="pt-24 space-y-8">
            <p className="text-center text-gray-500">
              Linear powers and empowers the next generation of high-impact
              companies
            </p>

            {/* Partner Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-70">
              <img src="/images/ramp.svg" alt="Ramp" className="h-6 w-auto" />
              <img
                src="/images/vercel.svg"
                alt="Vercel"
                className="h-6 w-auto"
              />
              <img src="/images/scale.svg" alt="Scale" className="h-6 w-auto" />
              <img src="/images/monzo.svg" alt="Monzo" className="h-6 w-auto" />
              <img
                src="/images/perplexity.svg"
                alt="Perplexity"
                className="h-6 w-auto"
              />
              <img
                src="/images/remote.svg"
                alt="Remote"
                className="h-6 w-auto"
              />
              <img
                src="/images/rippling.svg"
                alt="Rippling"
                className="h-6 w-auto"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto py-24 space-y-20">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-4xl font-bold">Join a team of makers</h2>
              <p className="text-gray-400 text-xl">
                We are designers and engineers. Problem solvers and
                storytellers. We are a diverse team of individuals, all makers
                at heart.
              </p>
              <a
                href="/company/team"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center gap-2"
              >
                Meet the team
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Qualities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {/* Quality 1 */}
              <div className="space-y-4">
                <MessageSquare className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-medium">
                  You are clear, concise, and engaging.
                </h3>
              </div>

              {/* Quality 2 */}
              <div className="space-y-4">
                <Heart className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-medium">
                  You care deeply about the quality of your work. Down to the
                  last pixel.
                </h3>
              </div>

              {/* Quality 3 */}
              <div className="space-y-4">
                <Lightbulb className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-medium">
                  You're able to take a bird's eye view and solve issues.
                </h3>
              </div>

              {/* Quality 4 */}
              <div className="space-y-4">
                <Users className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-medium">
                  You are a team player who loves to co-create.
                </h3>
              </div>

              {/* Quality 5 */}
              <div className="space-y-4">
                <Wrench className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-medium">
                  You are passionate about building truly great software.
                </h3>
              </div>

              {/* Quality 6 */}
              <div className="space-y-4">
                <Sailboat className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-medium">
                  You are a self-starter who gets things done.
                </h3>
              </div>
            </div>

            {/* Previous Experience Section */}
            <div className="space-y-8">
              <p className="text-center text-gray-500">
                Our team has learned their craft in various startups and
                high-growth environments
              </p>

              {/* Company Logos */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70">
                <img
                  src="/images/airbnb.svg"
                  alt="Airbnb"
                  className="h-8 w-auto"
                />
                <img
                  src="/images/coinbase.svg"
                  alt="Coinbase"
                  className="h-8 w-auto"
                />
                <img src="/images/uber.svg" alt="Uber" className="h-8 w-auto" />
                <img
                  src="/images/abstract.svg"
                  alt="Abstract"
                  className="h-8 w-auto"
                />
                <img
                  src="/images/stripe.svg"
                  alt="Stripe"
                  className="h-8 w-auto"
                />
                <img
                  src="/images/slack.svg"
                  alt="Slack"
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto py-24">
          <div className="space-y-3">
            <h2 className="text-6xl sm:text-7xl lg:text-7xl font-bold space-y-2">
              <div className="opacity-20">Designed in</div>
              <div className="opacity-20">California. And</div>
              <div className="opacity-20">Buenos Aires.</div>
              <div className="opacity-20">And New York.</div>
              <div>And Paris.</div>
            </h2>
          </div>

          <div className="mt-8 space-y-6 text-gray-400">
            <p className="text-lg">
              We believe that the freedom to work remotely allows for deeper and
              more meaningful work. That's why we built Linear as fully
              distributed company from the start.
            </p>

            <p className="text-lg">
              Today, our team is spread across seven countries across North
              America, Latin America and Europe*. We are divided by distance,
              but united by our mission to bring back software magic.
            </p>

            <p className="text-sm text-gray-600">*US/EU timezones</p>
          </div>
        </div>
      </main>
    </>
  );
}
