import { Outlet, Link } from "@remix-run/react";

export default function ParentRoute() {
  return (
    <>
      <Link className="block text-lg mb-4" to="/">
        ⬅️ Home
      </Link>
      <Link to="." className="block text-lg mb-4">
        ⬅️ Context
      </Link>

      <Outlet />
    </>
  );
}

