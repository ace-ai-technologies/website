import React from "react";

const TeamMember = ({ name, imageUrl }: { name: string; imageUrl: string }) => (
  <div className="flex items-center space-x-2 py-2">
    <div className="w-8 h-8 rounded-full bg-gray-800 overflow-hidden">
      <img
        src={imageUrl || "/api/placeholder/32/32"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    { name: "Sam Hajj", imageUrl: "/api/placeholder/32/32" },
    { name: "Nathaly Cobo Piza", imageUrl: "/api/placeholder/32/32" },
    { name: "Brian Kang", imageUrl: "/api/placeholder/32/32" },
    { name: "Alec van Etten", imageUrl: "/api/placeholder/32/32" },
    { name: "Stefano", imageUrl: "/api/placeholder/32/32" },
    { name: "Summer Lee", imageUrl: "/api/placeholder/32/32" },
    { name: "Jacky Liu", imageUrl: "/api/placeholder/32/32" },
    { name: "Osman Özden", imageUrl: "/api/placeholder/32/32" },
    { name: "Jacob Kim", imageUrl: "/api/placeholder/32/32" },
    // Add more team members here as needed
  ];

  return (
    <div className="px-8 py-24 bg-black">
      <div>
        <div className="text-sm text-gray-500 mb-4 px-20">Our Team</div>
        <div className="w-full h-px bg-white/20 mb-12"></div>
      </div>
      <div className="px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
