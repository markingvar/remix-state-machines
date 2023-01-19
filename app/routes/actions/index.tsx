import { Link } from "@remix-run/react";

export default function XStateIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">X State</h1>
      <Link
        className="block w-fit text-lg text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 mb-4 shadow-md"
        to="getting-started"
      >
        Getting Started
      </Link>
      <Link
        className="block w-fit text-lg text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 mb-4 shadow-md"
        to="actions-exercise"
      >
        Actions Exercise
      </Link>
    </div>
  );
}
