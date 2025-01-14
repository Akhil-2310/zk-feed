import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AllGroups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(storedGroups);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
        All Groups
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.groupId}
            className="bg-white shadow-md rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {group.name}
            </h2>
            <p className="text-gray-600 mb-4">{group.description}</p>
            <Link
              to={`/view-group/${group.groupId}`}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Group
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllGroups;
