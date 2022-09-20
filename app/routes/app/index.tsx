import { requireAuth } from "@/services/auth.server";
import type { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ request }) => {
  return requireAuth(request);
};

export default function Index() {
  const data = useLoaderData();

  return (
    <div className="p-4">
      <div className="bg-base-100 max-w-[70vw] mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-center">Me Controle</h1>
          <div className="flex gap-2 items-center">
            <span className="font-bold"> {data.name}</span>
            <Form action="/logout" method="post">
              <button className="btn btn-sm">Logout</button>
            </Form>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  );
}
