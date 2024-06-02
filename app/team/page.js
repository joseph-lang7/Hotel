import React from "react";
import Hero2 from "../components/hero2/Hero2";
import TeamMemberCard from "../pageComponents/teampage/teamMemberCard.jsx/TeamMemberCard";
const TeamPage = () => {
  return (
    <div>
      <Hero2
        title="Our Team"
        imageUrl="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="max-w-screen flex justify-center h-auto mt-2 px-5 pt-20">
        <div className="grid h-auto max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px] grid-cols-1  xl:grid-cols-2 2xl:grid-cols-3 gap-5 w-full">
          <TeamMemberCard
            name="Lisa Hall"
            position="Room Attendant"
            imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <TeamMemberCard
            name="Carlos Stewart"
            position="Sales Manager"
            imageUrl="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"
          />
          <TeamMemberCard
            name="Joshua Thomas"
            position="Marketing Manager"
            imageUrl="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <TeamMemberCard
            name="Janice Phillips"
            position="Technician"
            imageUrl="https://images.pexels.com/photos/11938404/pexels-photo-11938404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <TeamMemberCard
            name="Wanda Lewis"
            position="Concierge Manager"
            imageUrl="https://images.pexels.com/photos/8528852/pexels-photo-8528852.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <TeamMemberCard
            name="Alice Smith"
            position="Restaurant Supervisor"
            imageUrl="https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
