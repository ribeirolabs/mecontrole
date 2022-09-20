import { auth } from "@/services/auth.server";
import type { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ request }) => {
  return auth(request).isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div className="p-4">
      <div className="bg-base-100 max-w-lg mx-auto p-4">
        <div className="flex justify-between items-center">
          <span className="font-bold"> {data.name}</span>
          <Form action="/logout" method="post">
            <button className="btn btn-sm">Logout</button>
          </Form>
        </div>
        <div className="divider"></div>
        <h1 className="text-4xl font-bold text-center">Me Controle</h1>
        <p className="text-center">Em breve</p>
      </div>
    </div>
  );
}
