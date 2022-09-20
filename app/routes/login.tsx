import { Form } from "@remix-run/react";

export default function Login() {
  return (
    <Form action="/auth/google" method="post">
      <button className="rounded bg-blue-500 text-white p-2 font-bold">
        Login with Google
      </button>
    </Form>
  );
}
