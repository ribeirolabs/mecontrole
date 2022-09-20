import { Authenticator } from "remix-auth";
import { sessionStorage } from "@/services/session.server";
import { GoogleStrategy } from "remix-auth-google";
import { env } from "@/env/server";

export const auth = new Authenticator(sessionStorage);

const googleAuth = new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3303/auth/google/callback",
  },
  async (response) => {
    return {
      email: response.profile.emails[0].value,
      name: response.profile.displayName,
      photo: response.profile.photos[0]?.value,
      token: response.accessToken,
    };
  }
);

auth.use(googleAuth);
