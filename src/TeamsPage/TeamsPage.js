import React from "react";
import TeamLeads from "./TeamLeads";
import DomainLeads from "./DomainLeads";
import AssociateLeads from "./AssociateLeads";
import Members from "./Members";
import "./Teams.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data.json";
import Directors from "./Directors";

const TeamsPage = () => {
  return (
    <div className="Teams">
      <div>
        {Data && <TeamLeads data={Data.TeamLeads} />}
        {Data && <DomainLeads data={Data.DomainLeads} />}
        {Data && <Directors data={Data.Directors} />}
        {/* {Data && <AssociateLeads data={Data.AssociateLeads} />} */}
        {Data && <Members data={Data.Members} />}
      </div>
    </div>
  );
};

export default TeamsPage;
