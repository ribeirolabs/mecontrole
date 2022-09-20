import { auth } from "@/services/auth.server";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) =>
  auth(request).logout(request, { redirectTo: "/login" });

export const action: ActionFunction = ({ request }) =>
  auth(request).logout(request, { redirectTo: "/login" });
