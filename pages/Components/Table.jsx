import React from "react";

const Table = () => {
    const data = [
        {
            id: "#6775",
            name: "Test lead",
            phone: "+912312121212",
            date: "Apr 10, 2024",
            status: "Active",
            roomReserved: "Warden Boys Life",
            checkIn: "Apr 10, 2024",
            source: "Walk In",
            activity: "Reserve Room",
            statusColor: "bg-yellow-100 text-yellow-600",
        },
        {
            id: "#6260",
            name: "Contract test",
            phone: "+912892738283",
            date: "Apr 10, 2024",
            status: "Active",
            roomReserved: "Warden Boys Life",
            checkIn: "-",
            source: "Referral",
            activity: "Reserve Room",
            statusColor: "bg-yellow-100 text-yellow-600",
        },
        {
            id: "#1664",
            name: "Test Lead 1121",
            phone: "+911674562323",
            date: "Apr 10, 2024",
            status: "Payment Due",
            roomReserved: "F012,Warden Boys Life",
            checkIn: "May 23, 2024",
            source: "Website",
            activity: "Payment Pending",
            statusColor: "bg-red-100 text-red-600",
        },
        {
            id: "#610",
            name: "Test lead 124",
            phone: "+911241111111",
            date: "Apr 10, 2024",
            status: "Reserved",
            roomReserved: "G003 ,Warden Boys Life",
            checkIn: "Mar 27, 2024",
            source: "Google Search",
            activity: "Registration Form Pending",
            statusColor: "bg-green-100 text-green-600",
        },
        {
            id: "#610",
            name: "Test lead 124",
            phone: "+911241111111",
            date: "Apr 10, 2024",
            status: "Reserved",
            roomReserved: "G003,Warden Boys Life",
            checkIn: "Mar 27, 2024",
            source: "Google Search",
            activity: "Registration Form Pending",
            statusColor: "bg-green-100 text-green-600",
        },
    ];

    const getInitialBgColor = (name) => {
        const colors = [
            "bg-green-400",
            "bg-blue-400",
            "bg-purple-400",
            "bg-pink-400",
            "bg-indigo-400",
            "bg-teal-400",
            "bg-orange-400",
            "bg-red-400",
        ];

        // Generate a consistent color based on the name
        const hash = name.split("").reduce((acc, char) => {
            return char.charCodeAt(0) + ((acc << 5) - acc);
        }, 0);

        const index = Math.abs(hash) % colors.length;
        return colors[index];
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full bg-white table-auto">
                    <thead className="text-gray-600 text-left text-sm">
                        <tr>
                            <th className="p-4">ID</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Visit Date</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Room Reserved</th>
                            <th className="p-4">Tentative Check-In</th>
                            <th className="p-4">Source</th>
                            <th className="p-4">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 text-sm text-gray-500">
                                <td className="p-4">{item.id}</td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-2">
                                        <span
                                            className={`w-8 h-8 flex items-center justify-center rounded-lg ${getInitialBgColor(
                                                item.name
                                            )}`}
                                        >
                                            {item.name
                                                .split(" ")
                                                .map((word) => word[0].toUpperCase())
                                                .join("")}
                                        </span>
                                        <div>
                                            <p>{item.name}</p>
                                            <p className="text-sm text-gray-500">{item.phone}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="p-4">{item.date}</td>
                                <td className="p-4">
                                    <span className={`px-3 py-1 rounded-lg ${item.statusColor}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="p-4">
    {item.roomReserved.includes(",") ? (
        <div>
            {item.roomReserved.split(",").map((text, index) => (
                <div key={index}>
                    {["F012", "G003"].includes(text.trim()) ? (
                        <span className="font-bold">{text.trim()}</span>
                    ) : (
                        <span>{text.trim()}</span>
                    )}
                </div>
            ))}
        </div>
    ) : (
        ["F012", "G003"].includes(item.roomReserved.trim()) ? (
            <span className="font-bold">{item.roomReserved.trim()}</span>
        ) : (
            <span>{item.roomReserved.trim()}</span>
        )
    )}
</td>




                                <td className="p-4">{item.checkIn}</td>
                                <td className="p-4">{item.source}</td>
                                <td className="p-4">
                                    {item.activity === "Registration Form Pending" ? (
                                        <div className="flex flex-col items-start space-y-2">
                                            <div className="relative flex items-center w-full">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-4 h-4 flex items-center justify-center rounded-full bg-green-500 text-white">
                                                        ✓
                                                    </div>
                                                </div>
                                                <div className="flex-grow h-1 bg-green-500"></div>
                                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300"></div>
                                                <div className="flex-grow h-1 bg-gray-300"></div>
                                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300"></div>
                                                <div className="flex-grow h-1 bg-gray-300"></div>
                                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300"></div>
                                            </div>
                                            <span className="text-green-500 font-medium">Registration Form Pending</span>
                                        </div>
                                    ) : item.activity === "Payment Pending" ? (
                                        <div className="flex flex-col items-start space-y-2">
                                            <div className="relative flex items-center w-full">
                                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300"></div>
                                                <div className="flex-grow h-1 bg-gray-300"></div>
                                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300"></div>
                                                <div className="flex-grow h-1 bg-gray-300"></div>
                                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300"></div>
                                                <div className="flex-grow h-1 bg-gray-300"></div>
                                                <div className="w-4 h-4 flex items-center justify-center rounded-full bg-gray-300"></div>
                                            </div>
                                            <span className="text-red-500 font-medium">Payment Pending</span>
                                        </div>
                                    ) : (
                                        <span className="text-blue-500 cursor-pointer ">
                                            {item.activity}
                                        </span>
                                    )}
                                </td>



                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 text-sm text-gray-600">4 / 4 records</div>
            </div>

        </>
    );
};

export default Table;
