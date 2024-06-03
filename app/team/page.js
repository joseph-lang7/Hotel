import React from "react";
import Hero2 from "../components/hero2/Hero2";
import { TeamMembers } from "../pageComponents/team";
const TeamPage = () => {
  return (
    <div>
      <Hero2
        title="Our Team"
        imageUrl="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <TeamMembers />
    </div>
  );
};

export default TeamPage;
