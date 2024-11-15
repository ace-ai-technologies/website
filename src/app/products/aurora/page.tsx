import React from "react";
import {
  ArrowRight,
  Database,
  HelpCircle,
  Shield,
  AlertCircle,
  FileText,
  Plane,
  Check,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import WhyScaleSection from "./_components/whyScale";
import NavBar from "@/app/(hero)/_components/NavBar";

const HeroSection = () => {
  const processSteps = [
    { name: "Ingest Data", isActive: true },
    { name: "Apply AI", isActive: false },
    { name: "Operationalize", isActive: false },
    { name: "Generate Reports", isActive: false },
    { name: "Improve Models", isActive: false },
  ];
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-black text-white px-4 py-40 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero content section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
            {/* Left Column - Header Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg"></div>
                <div className="text-2xl font-semibold">Donovan</div>
              </div>

              <h2 className="text-lg text-gray-300 mb-8">
                AI Digital Staff Officer for national security.
              </h2>

              <button className="bg-purple-900/30 hover:bg-purple-900/50 text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2">
                Book a Demo
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Column - Workflow Card */}
            <div>
              <Card className="bg-gradient-to-br from-purple-700 to-purple-900 p-6 rounded-3xl w-full">
                <div className="space-y-6">
                  <div className="text-sm text-gray-300">SCALE AI 2024</div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-white text-2xl">Workflows</span>
                      <ArrowRight className="text-gray-400" size={20} />
                      <span className="text-white text-2xl">
                        Identify critical information,
                      </span>
                    </div>

                    <div className="text-gray-400 text-2xl font-light">
                      Run code,
                    </div>
                    <div className="text-gray-400 text-2xl font-light">
                      Error correct,
                    </div>
                    <div className="text-gray-400 text-2xl font-light">
                      Validate sources
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      Identifies critical information
                    </div>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Trust badge section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 mb-32">
            <span>Trusted by the world's most ambitious AI teams.</span>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              Meet our customers
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-zinc-800 my-16" />

          {/* Challenges Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-zinc-900 rounded-full text-sm mb-6 text-purple-400">
              CHALLENGES
            </div>
            <h2 className="text-4xl font-light mb-2">Operating Constraints</h2>
            <h2 className="text-4xl font-light mb-16">Delay Mission Success</h2>

            {/* Challenge Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Drowning in Data */}
              <div className="text-left">
                <div className="bg-zinc-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Database size={24} />
                </div>
                <h3 className="text-xl mb-4">Drowning in Data</h3>
                <p className="text-gray-400">
                  Personnel constrained by time, technology, and other resources
                  overlook petabytes of historical information and incoming
                  data.
                </p>
              </div>

              {/* Missed Insights */}
              <div className="text-left">
                <div className="bg-zinc-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <HelpCircle size={24} />
                </div>
                <h3 className="text-xl mb-4">Missed Insights</h3>
                <p className="text-gray-400">
                  Uncertainty around the information that exists prevents you
                  from unlocking valuable insights and providing optimal
                  recommendations.
                </p>
              </div>

              {/* Security Specifications */}
              <div className="text-left">
                <div className="bg-zinc-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl mb-4">Security Specifications</h3>
                <p className="text-gray-400">
                  Classified information can't leave secure networks and be sent
                  directly to open-source AI models.
                </p>
              </div>

              {/* Limited Mission Support */}
              <div className="text-left">
                <div className="bg-zinc-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-xl mb-4">Limited Mission Support</h3>
                <p className="text-gray-400">
                  Existing AI solutions are not geared towards defense and
                  intelligence use cases, terminology, or context.
                </p>
              </div>

              {/* Too Many Tasks */}
              <div className="text-left">
                <div className="bg-zinc-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl mb-4">Too Many Tasks</h3>
                <p className="text-gray-400">
                  Stakeholders frequently need written reports and briefings
                  that require manual and time-intensive effort.
                </p>
              </div>

              {/* Mission Specialization */}
              <div className="text-left">
                <div className="bg-zinc-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Plane size={24} />
                </div>
                <h3 className="text-xl mb-4">Mission Specialization</h3>
                <p className="text-gray-400">
                  Stakeholders require an adaptable solution that can conduct
                  translation, coding assistance, and parse data for insights.
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-zinc-800 my-16" />

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-zinc-900 rounded-full text-sm mb-6 text-purple-400">
              HOW DONOVAN SOLVES YOUR CHALLENGES
            </div>
            <h2 className="text-4xl font-light mb-16">
              Rapidly Discover Mission
              <br />
              Critical Insights From Your Data
            </h2>

            {/* Process Steps */}
            <div className="inline-flex bg-zinc-900/50 rounded-full p-1 mb-16">
              {processSteps.map((step, index) => (
                <React.Fragment key={step.name}>
                  <button
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      step.isActive
                        ? "bg-zinc-900 text-white"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {step.name}
                  </button>
                  {index < processSteps.length - 1 && (
                    <div className="h-full w-px bg-zinc-800 mx-1" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Solutions Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Features */}
              <div className="space-y-8 text-left">
                <div className="flex items-start gap-4">
                  <Check className="mt-1 text-purple-400" />
                  <p className="text-gray-300">
                    Leverage your organization's corpus of data: intelligence
                    reports, satellite imagery, publications, and more.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="mt-1 text-purple-400" />
                  <p className="text-gray-300">
                    Access data locally, through your cloud, or via API.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Check className="mt-1 text-purple-400" />
                  <p className="text-gray-300">
                    Get insights from data that never leaves the classified
                    networks it's stored on.
                  </p>
                </div>
              </div>

              {/* Right Column - Upload UI */}
              <div className="bg-zinc-900 p-8 rounded-2xl">
                <div className="bg-zinc-800 p-6 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg">
                      <span>Local Upload</span>
                      <Shield size={20} />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg">
                      <span>Cloud Upload</span>
                      <Database size={20} />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg">
                      <span>URL</span>
                      <FileText size={20} />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-zinc-900 rounded-lg">
                      <span>Connect App</span>
                      <Plane size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-zinc-800 my-16" />

          {/* Intelligence Section */}
          <div className="mb-16">
            <div className="inline-block px-4 py-1 bg-zinc-900 rounded-full text-sm mb-6 text-purple-400">
              INTELLIGENCE
            </div>

            {/* Intelligence Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Features */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-4">
                    Uncover Insights and Expedite Discovery
                  </h3>
                  <p className="text-gray-300">
                    Dig into all available data to rapidly identify trends,
                    insights, and anomalies. Accelerate intelligence cycles and
                    provide exhaustive analysis without overlooking information.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl mb-4">
                    Advanced Summary and Translation
                  </h3>
                  <p className="text-gray-300">
                    Precisely translate documents with Donovan to capture
                    semantic nuance and context. Reduce the time required for
                    manual translation, auditing, and summarization across
                    thousands of documents.
                  </p>
                </div>
              </div>

              {/* Right Column - Interface Preview */}
              <div className="bg-zinc-900 p-4 rounded-2xl">
                <img
                  src="/api/placeholder/800/500"
                  alt="Donovan Interface"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-zinc-800 my-16" />

          {/* Operations Section */}
          <div className="mb-16">
            <div className="inline-block px-4 py-1 bg-zinc-900 rounded-full text-sm mb-6 text-purple-400">
              OPERATIONS
            </div>

            {/* Operations Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Features */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl mb-4">
                    AI-Assisted Report Generation
                  </h3>
                  <p className="text-gray-300">
                    Automatically synthesize insights and provide all relevant
                    information in custom report templates.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl mb-4">
                    Advanced Operational Efficiency
                  </h3>
                  <p className="text-gray-300">
                    Gather ground truth mission-critical information with
                    traceability through data source citations.
                  </p>
                </div>
              </div>

              {/* Right Column - Interface Preview */}
              <div className="bg-zinc-900/50 p-4 rounded-2xl">
                <div className="bg-zinc-900 p-6 rounded-xl">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-zinc-800 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex-shrink-0" />
                      <div className="space-y-2 w-full">
                        <div className="h-4 bg-zinc-700 rounded w-3/4" />
                        <div className="h-4 bg-zinc-700 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-zinc-800 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex-shrink-0" />
                      <div className="space-y-2 w-full">
                        <div className="h-4 bg-zinc-700 rounded w-2/3" />
                        <div className="h-4 bg-zinc-700 rounded w-1/3" />
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-zinc-800 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex-shrink-0" />
                      <div className="space-y-2 w-full">
                        <div className="h-4 bg-zinc-700 rounded w-5/6" />
                        <div className="h-4 bg-zinc-700 rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WhyScaleSection />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
