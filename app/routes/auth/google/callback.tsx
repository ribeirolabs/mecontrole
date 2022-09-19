import { auth } from "@/services/auth.server";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) => {
  return auth.authenticate("google", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};
