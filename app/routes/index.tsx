import { auth } from "@/services/auth.server";
import type { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ request }) => {
  return auth.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1 className="text-2xl font-bold">Welcome to Remix, {data.name}</h1>
      <Form action="/logout" method="post">
        <button className="bg-blue-500 text-white rounded font-bold p-4">
          Logout
        </button>
      </Form>
    </div>
  );
}
