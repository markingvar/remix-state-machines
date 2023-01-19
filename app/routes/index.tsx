import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">State Machines in JavaScript</h1>
      <ul>
        <li className="mb-4">
          <Link
            className="bg-indigo-700 hover:bg-indigo-800 text-indigo-50 font-medium text-lg px-6 py-2 rounded-lg"
            to="/software-and-modeling"
          >
            Software and Modeling
          </Link>
        </li>
        <li className="mb-4">
          <Link
            className="bg-indigo-700 hover:bg-indigo-800 text-indigo-50 font-medium text-lg px-6 py-2 rounded-lg"
            to="/x-state"
          >
            X State
          </Link>
        </li>
        <li className="mb-4">
          <Link
            className="bg-indigo-700 hover:bg-indigo-800 text-indigo-50 font-medium text-lg px-6 py-2 rounded-lg"
            to="/actions"
          >
            Actions
          </Link>
        </li>
      </ul>
    </div>
  );
}
