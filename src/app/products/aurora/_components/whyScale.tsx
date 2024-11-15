import React from "react";
import {
  MonitorSmartphone,
  LineChart,
  Zap,
  Computer,
  Search,
  Users,
} from "lucide-react";

const WhyScaleSection = () => {
  const features = [
    {
      icon: <MonitorSmartphone size={24} />,
      title: "AI Expertise",
      description:
        "We work with the leading commercial foundation model providers (e.g. Open AI, Anthropic) and bring that expertise to our federal engagements.",
    },
    {
      icon: <LineChart size={24} />,
      title: "Model Performance",
      description:
        "Our Data Engine provides the infrastructure and expertise needed to continually improve model performance with human feedback.",
    },
    {
      icon: <Zap size={24} />,
      title: "Flexibility & Speed",
      description:
        "We are not tied to a particular cloud, foundation model, or analyst tool and can take models from pilot to production in weeks, not years.",
    },
    {
      icon: <Computer size={24} />,
      title: "Scalability",
      description:
        "The Donovan APIs allow users to programmatically interact and scale Donovan capabilities in other applications and workflows.",
    },
    {
      icon: <Search size={24} />,
      title: "Traceability",
      description:
        "Have confidence in the model's answers. Donovan provides citations and responses are transparently linked to authoritative sources.",
    },
    {
      icon: <Users size={24} />,
      title: "Agents",
      description:
        "Make data-driven decisions. Donovan is able to use tools, query databases, and hit API endpoints to pull the right information.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-zinc-900 rounded-full text-sm mb-6 text-purple-400">
            WHY SCALE
          </div>
          <h2 className="text-5xl font-light mb-6">Achieve AI Overmatch</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Our adversaries aren't waiting to field AI systems. Ensure decisive
            advantage with the most advanced, mission-ready AI capabilities the
            U.S. has in its toolkit.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyScaleSection;
