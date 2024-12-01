import React from 'react';
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const TableFilters = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 mt-4 space-y-2 sm:space-y-0">
                <button
                    className="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 w-full sm:w-52 h-10"
                    style={{ minWidth: "200px" }}
                >
                    + Add
                </button>
                <div className="flex flex-wrap sm:space-x-2 space-y-2 sm:space-y-0 justify-start sm:justify-end">
                    <button
                        className="bg-gray-100 text-gray-400 px-4 py-3 rounded-md w-full sm:w-52 h-10"
                        style={{ minWidth: "200px" }}
                    >
                        Check In Month
                    </button>
                    <button
                        className="bg-gray-100 text-gray-400 px-4 py-3 rounded-md flex items-center justify-between sm:justify-center space-x-1 w-full sm:w-52 h-10"
                        style={{ minWidth: "200px" }}
                    >
                        <span >All Properties</span>
                        <ChevronDownIcon className="h-5 w-5 text-gray-800" />
                    </button>
                    <button className="bg-gray-100 text-gray-600 px-4 py-1 rounded-md w-full sm:w-24 h-10 flex flex-col items-start justify-center">
                        <span className="text-sm" style={{ fontSize: "0.625rem", lineHeight: "1rem", padding: "0" }}>Sorted by</span>
                        <span className="text-base mt-0">Newest</span>
                    </button>


                    <button
                        className="bg-gray-100 text-gray-600 px-4 py-3 rounded-md flex items-center justify-between sm:justify-center space-x-1 w-full sm:w-52 h-10"
                        style={{ minWidth: "200px" }}
                    >
                        <span>Filters</span>
                        <ChevronDownIcon className="h-5 w-5 text-gray-800" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TableFilters
