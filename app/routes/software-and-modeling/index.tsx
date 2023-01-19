import { Link } from "@remix-run/react";
export default function SoftwareAndModelingIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Software and Modeling</h1>
      <ul>
        <li>
          <Link
            className="block w-fit text-lg text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 mb-4 shadow-md"
            to="vanilla-js-state-machine"
          >
            Vanilla JS State Machine
          </Link>
        </li>
        <li>
          <Link
            className="block w-fit text-lg text-indigo-600 font-medium bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 mb-4 shadow-md"
            to="state-modeling-exercise"
          >
            State Modeling Exercise
          </Link>
        </li>
      </ul>
    </div>
  );
}
