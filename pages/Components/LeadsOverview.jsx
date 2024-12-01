import React from "react";
import { UserGroupIcon } from "@heroicons/react/24/solid"; // Importing the icon for display
import styles from './LeadsOverview.module.css'; 

// JSON data
const leadsData = [
  {
    id: 1,
    count: 2,
    description: "Active Leads, Pending Reservation",
    color: "red-500",
    iconColor: "green-600"
  },
  {
    id: 2,
    count: 1,
    description: "Payment Due Leads (0 beds)",
    color: "red-500",
    iconColor: "green-600"
  },
  {
    id: 3,
    count: 1,
    description: "Reserved Leads (0 beds)",
    color: "gray-500",
    iconColor: "green-600"
  },
  {
    id: 4,
    count: 4,
    description: "Total Leads in Pipeline (0 beds)",
    color: "gray-500",
    iconColor: "green-600"
  },
  {
    id: 5,
    count: 2,
    description: "Cancelled Leads",
    color: "gray-500",
    iconColor: "green-600"
  }
];

const LeadsOverview = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-1">
      {leadsData.map((lead) => (
        <div
          key={lead.id}
          className="bg-gray-100 rounded-lg p-4 md:p-6 flex flex-col relative flex-1 min-h-[130px] max-h-[130px]"
        >
          <UserGroupIcon
            className={`absolute top-2 right-2 h-6 md:h-6 w-6 md:w-8 text-${lead.iconColor} bg-green-200 rounded-lg`}
          />
          <span
            className={`text-${lead.color} text-3xl md:text-4xl font-bold self-start mt-2 md:mt-3`}
          >
            {lead.count}
          </span>
          <p
            className={`text-${lead.color} text-sm text-start mt-1 self-start`}
          >
            {lead.description}
          </p>

        </div>
      ))}
    </div>
  );
};

export default LeadsOverview;
