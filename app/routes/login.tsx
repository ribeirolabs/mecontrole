import { auth } from "@/services/auth.server";
import type { LoaderFunction } from "@remix-run/node";
import { Form, useTransition } from "@remix-run/react";

export const loader: LoaderFunction = ({ request }) => {
  return auth(request).isAuthenticated(request, {
    successRedirect: "/",
  });
};

export default function Login() {
  const { state } = useTransition();
  return (
    <div className="pt-4">
      <Form
        action="/auth/google"
        method="post"
        className="bg-base-100 max-w-lg mx-auto p-4 rounded"
      >
        <h2 className="text-2xl font-bold">Login</h2>
        <div className="divider my-2"></div>
        <button className="btn btn-block gap-2" disabled={state !== "idle"}>
          <i className="fa-brands fa-google"></i>
          Login with Google
        </button>
      </Form>
    </div>
  );
}
