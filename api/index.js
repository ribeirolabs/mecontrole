var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AO4D3GUE.css";

// app/session.server.ts
init_react();
var import_remix2 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
init_react();
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
init_react();
var import_client = require("@prisma/client");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var prisma;
if (false) {
  prisma = getClient();
} else {
  if (!global.__db__) {
    global.__db__ = getClient();
  }
  prisma = global.__db__;
}
function getClient() {
  const { DATABASE_URL } = process.env;
  (0, import_tiny_invariant.default)(typeof DATABASE_URL === "string", "DATABASE_URL env var not set");
  const databaseUrl = new URL(DATABASE_URL);
  const isLocalHost = databaseUrl.hostname === "localhost";
  const PRIMARY_REGION = isLocalHost ? null : process.env.PRIMARY_REGION;
  const FLY_REGION = isLocalHost ? null : process.env.FLY_REGION;
  const isReadReplicaRegion = !PRIMARY_REGION || PRIMARY_REGION === FLY_REGION;
  if (!isLocalHost) {
    databaseUrl.host = `${FLY_REGION}.${databaseUrl.host}`;
    if (!isReadReplicaRegion) {
      databaseUrl.port = "5433";
    }
  }
  console.log(`\u{1F50C} setting up prisma client to ${databaseUrl.host}`);
  const client = new import_client.PrismaClient({
    datasources: {
      db: {
        url: databaseUrl.toString()
      }
    }
  });
  client.$connect();
  return client;
}

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  const hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  const userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: true
    }
  });
  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }
  const isValid = await import_bcryptjs.default.compare(password, userWithPassword.password.hash);
  if (!isValid) {
    return null;
  }
  const _a = userWithPassword, { password: _password } = _a, userWithoutPassword = __objRest(_a, ["password"]);
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant2.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: false
  }
});
var USER_SESSION_KEY = "userId";
async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (userId === void 0)
    return null;
  const user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const userId = await getUserId(request);
  if (!userId) {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return (0, import_remix2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  const session = await getSession(request);
  session.unset(USER_SESSION_KEY);
  return (0, import_remix2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Poppins:wght@400;600;800&display=swap"
    }
  ];
};
var meta = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1"
});
var loader = async ({ request }) => {
  return (0, import_remix3.json)({
    user: await getUser(request)
  });
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full bg-background text-background-contrast"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader2
});
init_react();
var loader2 = async ({ request }) => {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    const url = new URL("/", `http://${host}`);
    await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]);
    return new Response("OK");
  } catch (error) {
    console.log("healthcheck \u274C", { error });
    return new Response("ERROR", { status: 500 });
  }
};

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/$email.tsx
var email_exports = {};
__export(email_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta2
});
init_react();
var import_remix4 = __toESM(require_remix());
var loader3 = async ({ request, params }) => {
  const profile = await prisma.user.findUnique({
    where: {
      email: params.email
    }
  });
  if (profile == null) {
    return (0, import_remix4.redirect)("/");
  }
  return profile;
};
var meta2 = ({ data }) => {
  return {
    title: `Perfil - ${data.name}`
  };
};
function Index() {
  const user = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "prose prose-main p-6"
  }, /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("h1", {
    className: "mb-0"
  }, user.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-0"
  }, user.email)));
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader4
});
init_react();
var import_remix5 = __toESM(require_remix());
var action = async ({ request }) => {
  return logout(request);
};
var loader4 = async () => {
  return (0, import_remix5.redirect)("/");
};

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();

// app/utils.ts
init_react();
var import_react = require("react");
var import_remix6 = __toESM(require_remix());
function useMatchesData(id) {
  const matchingRoutes = (0, import_remix6.useMatches)();
  const route = (0, import_react.useMemo)(() => matchingRoutes.find((route2) => route2.id === id), [matchingRoutes, id]);
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user === "object" && typeof user.email === "string";
}
function useOptionalUser() {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return void 0;
  }
  return data.user;
}
function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");
  }
  return maybeUser;
}
function validateEmail(email) {
  return typeof email === "string" && email.length > 3 && email.includes("@");
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/index.tsx
function Index2() {
  const user = useOptionalUser();
  return /* @__PURE__ */ React.createElement("main", {
    className: ""
  });
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader5,
  meta: () => meta3
});
init_react();
var React2 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var loader5 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix7.redirect)("/");
  return (0, import_remix7.json)({});
};
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  const remember = formData.get("remember");
  if (!validateEmail(email)) {
    return (0, import_remix7.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix7.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_remix7.json)({ errors: { password: "Password is too short" } }, { status: 400 });
  }
  const user = await verifyLogin(email, password);
  if (!user) {
    return (0, import_remix7.json)({ errors: { email: "Invalid email or password" } }, { status: 400 });
  }
  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/notes"
  });
};
var meta3 = () => {
  return {
    title: "Login"
  };
};
function LoginPage() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_remix7.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = (0, import_remix7.useActionData)();
  const emailRef = React2.useRef(null);
  const passwordRef = React2.useRef(null);
  React2.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React2.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React2.createElement(import_remix7.Form, {
    method: "post",
    className: "space-y-6",
    noValidate: true
  }, /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React2.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React2.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React2.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React2.createElement("div", null, /* @__PURE__ */ React2.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React2.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React2.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "current-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React2.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React2.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React2.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Log in"), /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React2.createElement("input", {
    id: "remember",
    name: "remember",
    type: "checkbox",
    className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
  }), /* @__PURE__ */ React2.createElement("label", {
    htmlFor: "remember",
    className: "ml-2 block text-sm text-gray-900"
  }, "Remember me")), /* @__PURE__ */ React2.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Don't have an account?", " ", /* @__PURE__ */ React2.createElement(import_remix7.Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/join",
      search: searchParams.toString()
    }
  }, "Sign up"))))));
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader6
});
init_react();
var import_remix8 = __toESM(require_remix());

// app/models/note.server.ts
init_react();
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/notes.tsx
var loader6 = async ({ request }) => {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return (0, import_remix8.json)({ noteListItems });
};
function NotesPage() {
  const data = (0, import_remix8.useLoaderData)();
  const user = useUser();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex h-full min-h-screen flex-col"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex items-center justify-between bg-slate-800 p-4 text-white"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "."
  }, "Notes")), /* @__PURE__ */ React.createElement("p", null, user.email), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
  }, "Logout"))), /* @__PURE__ */ React.createElement("main", {
    className: "flex h-full bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full w-80 border-r bg-gray-50"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: "new",
    className: "block p-4 text-xl text-blue-500"
  }, "+ New Note"), /* @__PURE__ */ React.createElement("hr", null), data.noteListItems.length === 0 ? /* @__PURE__ */ React.createElement("p", {
    className: "p-4"
  }, "No notes yet") : /* @__PURE__ */ React.createElement("ol", null, data.noteListItems.map((note) => /* @__PURE__ */ React.createElement("li", {
    key: note.id
  }, /* @__PURE__ */ React.createElement(import_remix8.NavLink, {
    className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
    to: note.id
  }, "\u{1F4DD} ", note.title))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 p-6"
  }, /* @__PURE__ */ React.createElement(import_remix8.Outlet, null))));
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/notes/$noteId.tsx
var noteId_exports = {};
__export(noteId_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  action: () => action3,
  default: () => NoteDetailsPage,
  loader: () => loader7
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_remix10 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var loader7 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant3.default)(params.noteId, "noteId not found");
  const note = await getNote({ userId, id: params.noteId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return (0, import_remix10.json)({ note });
};
var action3 = async ({ request, params }) => {
  const userId = await requireUserId(request);
  (0, import_tiny_invariant3.default)(params.noteId, "noteId not found");
  await deleteNote({ userId, id: params.noteId });
  return (0, import_remix9.redirect)("/notes");
};
function NoteDetailsPage() {
  const data = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-bold"
  }, data.note.title), /* @__PURE__ */ React.createElement("p", {
    className: "py-6"
  }, data.note.body), /* @__PURE__ */ React.createElement("hr", {
    className: "my-4"
  }), /* @__PURE__ */ React.createElement(import_remix10.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Delete")));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", null, "An unexpected error occurred: ", error.message);
}
function CatchBoundary() {
  const caught = (0, import_remix10.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", null, "Note not found");
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/notes/index.tsx
var notes_exports2 = {};
__export(notes_exports2, {
  default: () => NoteIndexPage
});
init_react();
var import_remix11 = __toESM(require_remix());
function NoteIndexPage() {
  return /* @__PURE__ */ React.createElement("p", null, "No note selected. Select a note on the left, or", " ", /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: "new",
    className: "text-blue-500 underline"
  }, "create a new note."));
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/notes/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action4,
  default: () => NewNotePage
});
init_react();
var React3 = __toESM(require("react"));
var import_remix12 = __toESM(require_remix());
var action4 = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  if (typeof title !== "string" || title.length === 0) {
    return (0, import_remix12.json)({ errors: { title: "Title is required" } }, { status: 400 });
  }
  if (typeof body !== "string" || body.length === 0) {
    return (0, import_remix12.json)({ errors: { body: "Body is required" } }, { status: 400 });
  }
  const note = await createNote({ title, body, userId });
  return (0, import_remix12.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  const actionData = (0, import_remix12.useActionData)();
  const titleRef = React3.useRef(null);
  const bodyRef = React3.useRef(null);
  React3.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.title) {
      (_b2 = titleRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.body) {
      (_d2 = bodyRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React3.createElement(import_remix12.Form, {
    method: "post",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React3.createElement("span", null, "Title: "), /* @__PURE__ */ React3.createElement("input", {
    ref: titleRef,
    name: "title",
    className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) ? true : void 0,
    "aria-errormessage": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.title) ? "title-error" : void 0
  })), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ React3.createElement("div", {
    className: "pt-1 text-red-700",
    id: "title-error"
  }, actionData.errors.title)), /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React3.createElement("span", null, "Body: "), /* @__PURE__ */ React3.createElement("textarea", {
    ref: bodyRef,
    name: "body",
    rows: 8,
    className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6",
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.body) ? true : void 0,
    "aria-errormessage": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.body) ? "body-error" : void 0
  })), ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ React3.createElement("div", {
    className: "pt-1 text-red-700",
    id: "body-error"
  }, actionData.errors.body)), /* @__PURE__ */ React3.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React3.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Save")));
}

// route:/home/iribeiro/code/ribeirolabs/mecontrole/app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action5,
  default: () => Join,
  loader: () => loader8,
  meta: () => meta4
});
init_react();
var React4 = __toESM(require("react"));
var import_remix13 = __toESM(require_remix());
var loader8 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_remix13.redirect)("/");
  return (0, import_remix13.json)({});
};
var action5 = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = formData.get("redirectTo");
  if (!validateEmail(email)) {
    return (0, import_remix13.json)({ errors: { email: "Email is invalid" } }, { status: 400 });
  }
  if (typeof password !== "string") {
    return (0, import_remix13.json)({ errors: { password: "Password is required" } }, { status: 400 });
  }
  if (password.length < 8) {
    return (0, import_remix13.json)({ errors: { password: "Password is too short" } }, { status: 400 });
  }
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return (0, import_remix13.json)({ errors: { email: "A user already exists with this email" } }, { status: 400 });
  }
  const user = await createUser(email, password);
  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo: typeof redirectTo === "string" ? redirectTo : "/"
  });
};
var meta4 = () => {
  return {
    title: "Sign Up"
  };
};
function Join() {
  var _a, _b, _c, _d;
  const [searchParams] = (0, import_remix13.useSearchParams)();
  const redirectTo = searchParams.get("redirectTo") ?? void 0;
  const actionData = (0, import_remix13.useActionData)();
  const emailRef = React4.useRef(null);
  const passwordRef = React4.useRef(null);
  React4.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React4.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React4.createElement(import_remix13.Form, {
    method: "post",
    className: "space-y-6",
    noValidate: true
  }, /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React4.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React4.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) && /* @__PURE__ */ React4.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React4.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React4.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) && /* @__PURE__ */ React4.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React4.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React4.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Create Account"), /* @__PURE__ */ React4.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Already have an account?", " ", /* @__PURE__ */ React4.createElement(import_remix13.Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/login",
      search: searchParams.toString()
    }
  }, "Log in"))))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "13be4bc3", "entry": { "module": "/build/entry.client-7RAUWOXD.js", "imports": ["/build/_shared/chunk-47MRB3MN.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SEQ4RB7S.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$email": { "id": "routes/$email", "parentId": "root", "path": ":email", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$email-5RGP5JIT.js", "imports": ["/build/_shared/chunk-NHLHEKQA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/healthcheck": { "id": "routes/healthcheck", "parentId": "root", "path": "healthcheck", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/healthcheck-NMXCLMNE.js", "imports": ["/build/_shared/chunk-NHLHEKQA.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-U3SSCY4L.js", "imports": ["/build/_shared/chunk-L7XQL5BE.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/join": { "id": "routes/join", "parentId": "root", "path": "join", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/join-ILTXG4JO.js", "imports": ["/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-L7XQL5BE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-BZ5OLPAP.js", "imports": ["/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-L7XQL5BE.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-I6GSSVPS.js", "imports": ["/build/_shared/chunk-ME5PAYV3.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes": { "id": "routes/notes", "parentId": "root", "path": "notes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes-EPWJSTNM.js", "imports": ["/build/_shared/chunk-2YJZUK4K.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-L7XQL5BE.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes/$noteId": { "id": "routes/notes/$noteId", "parentId": "routes/notes", "path": ":noteId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes/$noteId-GKO6LE73.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/notes/index": { "id": "routes/notes/index", "parentId": "routes/notes", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/notes/index-OLWBDAX2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/notes/new": { "id": "routes/notes/new", "parentId": "routes/notes", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/notes/new-LZX42IRI.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-13BE4BC3.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/$email": {
    id: "routes/$email",
    parentId: "root",
    path: ":email",
    index: void 0,
    caseSensitive: void 0,
    module: email_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/notes/$noteId": {
    id: "routes/notes/$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: noteId_exports
  },
  "routes/notes/index": {
    id: "routes/notes/index",
    parentId: "routes/notes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: notes_exports2
  },
  "routes/notes/new": {
    id: "routes/notes/new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm9vdC50c3giLCAiLi4vYXBwL3Nlc3Npb24uc2VydmVyLnRzIiwgIi4uL2FwcC9tb2RlbHMvdXNlci5zZXJ2ZXIudHMiLCAiLi4vYXBwL2RiLnNlcnZlci50cyIsICJyb3V0ZTovaG9tZS9pcmliZWlyby9jb2RlL3JpYmVpcm9sYWJzL21lY29udHJvbGUvYXBwL3JvdXRlcy9oZWFsdGhjaGVjay50c3giLCAicm91dGU6L2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9yb3V0ZXMvJGVtYWlsLnRzeCIsICJyb3V0ZTovaG9tZS9pcmliZWlyby9jb2RlL3JpYmVpcm9sYWJzL21lY29udHJvbGUvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlOi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvdXRpbHMudHMiLCAicm91dGU6L2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9yb3V0ZXMvbG9naW4udHN4IiwgInJvdXRlOi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm91dGVzL25vdGVzLnRzeCIsICIuLi9hcHAvbW9kZWxzL25vdGUuc2VydmVyLnRzIiwgInJvdXRlOi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm91dGVzL25vdGVzLyRub3RlSWQudHN4IiwgInJvdXRlOi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm91dGVzL25vdGVzL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9pcmliZWlyby9jb2RlL3JpYmVpcm9sYWJzL21lY29udHJvbGUvYXBwL3JvdXRlcy9ub3Rlcy9uZXcudHN4IiwgInJvdXRlOi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm91dGVzL2pvaW4udHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9yb3V0ZXMvaGVhbHRoY2hlY2sudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm91dGVzLyRlbWFpbC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvaG9tZS9pcmliZWlyby9jb2RlL3JpYmVpcm9sYWJzL21lY29udHJvbGUvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9ob21lL2lyaWJlaXJvL2NvZGUvcmliZWlyb2xhYnMvbWVjb250cm9sZS9hcHAvcm91dGVzL25vdGVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9pcmliZWlyby9jb2RlL3JpYmVpcm9sYWJzL21lY29udHJvbGUvYXBwL3JvdXRlcy9ub3Rlcy8kbm90ZUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9pcmliZWlyby9jb2RlL3JpYmVpcm9sYWJzL21lY29udHJvbGUvYXBwL3JvdXRlcy9ub3Rlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9yb3V0ZXMvbm90ZXMvbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL2hvbWUvaXJpYmVpcm8vY29kZS9yaWJlaXJvbGFicy9tZWNvbnRyb2xlL2FwcC9yb3V0ZXMvam9pbi50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2hlYWx0aGNoZWNrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9oZWFsdGhjaGVja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJoZWFsdGhjaGVja1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvJGVtYWlsXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy8kZW1haWxcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiOmVtYWlsXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90ZXNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGVzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm5vdGVzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9ub3Rlcy8kbm90ZUlkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9ub3Rlcy8kbm90ZUlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbm90ZXNcIixcbiAgICAgIHBhdGg6IFwiOm5vdGVJZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbm90ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvbm90ZXNcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9ub3Rlcy9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL25vdGVzL25ld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL25vdGVzXCIsXG4gICAgICBwYXRoOiBcIm5ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvam9pblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvam9pblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJqb2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBqc29uLFxuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuXG5pbXBvcnQgdGFpbHdpbmRTdHlsZXNoZWV0VXJsIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSAnLi9zZXNzaW9uLnNlcnZlcic7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZFN0eWxlc2hlZXRVcmwgfSxcbiAgICB7IHJlbDogJ3ByZWNvbm5lY3QnLCBocmVmOiAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbScgfSxcbiAgICB7XG4gICAgICByZWw6ICdwcmVjb25uZWN0JyxcbiAgICAgIGhyZWY6ICdodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tJyxcbiAgICAgIGNyb3NzT3JpZ2luOiAnYW5vbnltb3VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlbDogJ3N0eWxlc2hlZXQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzp3Z2h0QDkwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcCcsXG4gICAgfSxcbiAgXTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiAoe1xuICBjaGFyc2V0OiAndXRmLTgnLFxuICB0aXRsZTogJ1JlbWl4IE5vdGVzJyxcbiAgdmlld3BvcnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xJyxcbn0pO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIHVzZXI6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0VXNlcj4+O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oe1xuICAgIHVzZXI6IGF3YWl0IGdldFVzZXIocmVxdWVzdCksXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGNsYXNzTmFtZT1cImgtZnVsbFwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLWJhY2tncm91bmQgdGV4dC1iYWNrZ3JvdW5kLWNvbnRyYXN0XCI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXRVc2VyQnlJZCB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuXG5pbnZhcmlhbnQocHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQsIFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIik7XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJfX3Nlc3Npb25cIixcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgICBtYXhBZ2U6IDAsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgc2VjcmV0czogW3Byb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUXSxcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgfSxcbn0pO1xuXG5jb25zdCBVU0VSX1NFU1NJT05fS0VZID0gXCJ1c2VySWRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBjb29raWUgPSByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpO1xuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0U2Vzc2lvbihjb29raWUpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoVVNFUl9TRVNTSU9OX0tFWSk7XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPG51bGwgfCBVc2VyPiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcbiAgaWYgKHVzZXJJZCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5SWQodXNlcklkKTtcbiAgaWYgKHVzZXIpIHJldHVybiB1c2VyO1xuXG4gIHRocm93IGF3YWl0IGxvZ291dChyZXF1ZXN0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBpZiAoIXVzZXJJZCkge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJlZGlyZWN0VG9cIiwgcmVkaXJlY3RUb11dKTtcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2luPyR7c2VhcmNoUGFyYW1zfWApO1xuICB9XG4gIHJldHVybiB1c2VySWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdCk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXJCeUlkKHVzZXJJZCk7XG4gIGlmICh1c2VyKSByZXR1cm4gdXNlcjtcblxuICB0aHJvdyBhd2FpdCBsb2dvdXQocmVxdWVzdCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih7XG4gIHJlcXVlc3QsXG4gIHVzZXJJZCxcbiAgcmVtZW1iZXIsXG4gIHJlZGlyZWN0VG8sXG59OiB7XG4gIHJlcXVlc3Q6IFJlcXVlc3Q7XG4gIHVzZXJJZDogc3RyaW5nO1xuICByZW1lbWJlcjogYm9vbGVhbjtcbiAgcmVkaXJlY3RUbzogc3RyaW5nO1xufSkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyZXF1ZXN0KTtcbiAgc2Vzc2lvbi5zZXQoVVNFUl9TRVNTSU9OX0tFWSwgdXNlcklkKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uLCB7XG4gICAgICAgIG1heEFnZTogcmVtZW1iZXJcbiAgICAgICAgICA/IDYwICogNjAgKiAyNCAqIDcgLy8gNyBkYXlzXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHJlcXVlc3QpO1xuICBzZXNzaW9uLnVuc2V0KFVTRVJfU0VTU0lPTl9LRVkpO1xuICByZXR1cm4gcmVkaXJlY3QoXCIvXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc2Vzc2lvblN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBQYXNzd29yZCwgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIn4vZGIuc2VydmVyXCI7XG5cbmV4cG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5SWQoaWQ6IFVzZXJbXCJpZFwiXSkge1xuICByZXR1cm4gcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkIH0gfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQnlFbWFpbChlbWFpbDogVXNlcltcImVtYWlsXCJdKSB7XG4gIHJldHVybiBwcmlzbWEudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIoZW1haWw6IFVzZXJbXCJlbWFpbFwiXSwgcGFzc3dvcmQ6IHN0cmluZykge1xuICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgcmV0dXJuIHByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZDoge1xuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICBoYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyQnlFbWFpbChlbWFpbDogVXNlcltcImVtYWlsXCJdKSB7XG4gIHJldHVybiBwcmlzbWEudXNlci5kZWxldGUoeyB3aGVyZTogeyBlbWFpbCB9IH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5TG9naW4oXG4gIGVtYWlsOiBVc2VyW1wiZW1haWxcIl0sXG4gIHBhc3N3b3JkOiBQYXNzd29yZFtcImhhc2hcIl1cbikge1xuICBjb25zdCB1c2VyV2l0aFBhc3N3b3JkID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBwYXNzd29yZDogdHJ1ZSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXVzZXJXaXRoUGFzc3dvcmQgfHwgIXVzZXJXaXRoUGFzc3dvcmQucGFzc3dvcmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICBwYXNzd29yZCxcbiAgICB1c2VyV2l0aFBhc3N3b3JkLnBhc3N3b3JkLmhhc2hcbiAgKTtcblxuICBpZiAoIWlzVmFsaWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgcGFzc3dvcmQ6IF9wYXNzd29yZCwgLi4udXNlcldpdGhvdXRQYXNzd29yZCB9ID0gdXNlcldpdGhQYXNzd29yZDtcblxuICByZXR1cm4gdXNlcldpdGhvdXRQYXNzd29yZDtcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgX19kYl9fOiBQcmlzbWFDbGllbnQ7XG59XG5cbi8vIHRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgaW4gZGV2ZWxvcG1lbnQgd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0XG4vLyB0aGUgc2VydmVyIHdpdGggZXZlcnkgY2hhbmdlLCBidXQgd2Ugd2FudCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Rcbi8vIGNyZWF0ZSBhIG5ldyBjb25uZWN0aW9uIHRvIHRoZSBEQiB3aXRoIGV2ZXJ5IGNoYW5nZSBlaXRoZXIuXG4vLyBpbiBwcm9kdWN0aW9uIHdlJ2xsIGhhdmUgYSBzaW5nbGUgY29ubmVjdGlvbiB0byB0aGUgREIuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHByaXNtYSA9IGdldENsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYl9fKSB7XG4gICAgZ2xvYmFsLl9fZGJfXyA9IGdldENsaWVudCgpO1xuICB9XG4gIHByaXNtYSA9IGdsb2JhbC5fX2RiX187XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudCgpIHtcbiAgY29uc3QgeyBEQVRBQkFTRV9VUkwgfSA9IHByb2Nlc3MuZW52O1xuICBpbnZhcmlhbnQodHlwZW9mIERBVEFCQVNFX1VSTCA9PT0gXCJzdHJpbmdcIiwgXCJEQVRBQkFTRV9VUkwgZW52IHZhciBub3Qgc2V0XCIpO1xuXG4gIGNvbnN0IGRhdGFiYXNlVXJsID0gbmV3IFVSTChEQVRBQkFTRV9VUkwpO1xuXG4gIGNvbnN0IGlzTG9jYWxIb3N0ID0gZGF0YWJhc2VVcmwuaG9zdG5hbWUgPT09IFwibG9jYWxob3N0XCI7XG5cbiAgY29uc3QgUFJJTUFSWV9SRUdJT04gPSBpc0xvY2FsSG9zdCA/IG51bGwgOiBwcm9jZXNzLmVudi5QUklNQVJZX1JFR0lPTjtcbiAgY29uc3QgRkxZX1JFR0lPTiA9IGlzTG9jYWxIb3N0ID8gbnVsbCA6IHByb2Nlc3MuZW52LkZMWV9SRUdJT047XG5cbiAgY29uc3QgaXNSZWFkUmVwbGljYVJlZ2lvbiA9ICFQUklNQVJZX1JFR0lPTiB8fCBQUklNQVJZX1JFR0lPTiA9PT0gRkxZX1JFR0lPTjtcblxuICBpZiAoIWlzTG9jYWxIb3N0KSB7XG4gICAgZGF0YWJhc2VVcmwuaG9zdCA9IGAke0ZMWV9SRUdJT059LiR7ZGF0YWJhc2VVcmwuaG9zdH1gO1xuICAgIGlmICghaXNSZWFkUmVwbGljYVJlZ2lvbikge1xuICAgICAgLy8gNTQzMyBpcyB0aGUgcmVhZC1yZXBsaWNhIHBvcnRcbiAgICAgIGRhdGFiYXNlVXJsLnBvcnQgPSBcIjU0MzNcIjtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhgXHVEODNEXHVERDBDIHNldHRpbmcgdXAgcHJpc21hIGNsaWVudCB0byAke2RhdGFiYXNlVXJsLmhvc3R9YCk7XG4gIC8vIE5PVEU6IGR1cmluZyBkZXZlbG9wbWVudCBpZiB5b3UgY2hhbmdlIGFueXRoaW5nIGluIHRoaXMgZnVuY3Rpb24sIHJlbWVtYmVyXG4gIC8vIHRoYXQgdGhpcyBvbmx5IHJ1bnMgb25jZSBwZXIgc2VydmVyIHJlc3RhcnQgYW5kIHdvbid0IGF1dG9tYXRpY2FsbHkgYmVcbiAgLy8gcmUtcnVuIHBlciByZXF1ZXN0IGxpa2UgZXZlcnl0aGluZyBlbHNlIGlzLiBTbyBpZiB5b3UgbmVlZCB0byBjaGFuZ2VcbiAgLy8gc29tZXRoaW5nIGluIHRoaXMgZmlsZSwgeW91J2xsIG5lZWQgdG8gbWFudWFsbHkgcmVzdGFydCB0aGUgc2VydmVyLlxuICBjb25zdCBjbGllbnQgPSBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBkYXRhc291cmNlczoge1xuICAgICAgZGI6IHtcbiAgICAgICAgdXJsOiBkYXRhYmFzZVVybC50b1N0cmluZygpLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgLy8gY29ubmVjdCBlYWdlcmx5XG4gIGNsaWVudC4kY29ubmVjdCgpO1xuXG4gIHJldHVybiBjbGllbnQ7XG59XG5cbmV4cG9ydCB7IHByaXNtYSB9O1xuIiwgIi8vIGxlYXJuIG1vcmU6IGh0dHBzOi8vZmx5LmlvL2RvY3MvcmVmZXJlbmNlL2NvbmZpZ3VyYXRpb24vI3NlcnZpY2VzLWh0dHBfY2hlY2tzXG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgaG9zdCA9XG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIlgtRm9yd2FyZGVkLUhvc3RcIikgPz8gcmVxdWVzdC5oZWFkZXJzLmdldChcImhvc3RcIik7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKFwiL1wiLCBgaHR0cDovLyR7aG9zdH1gKTtcbiAgICAvLyBpZiB3ZSBjYW4gY29ubmVjdCB0byB0aGUgZGF0YWJhc2UgYW5kIG1ha2UgYSBzaW1wbGUgcXVlcnlcbiAgICAvLyBhbmQgbWFrZSBhIEhFQUQgcmVxdWVzdCB0byBvdXJzZWx2ZXMsIHRoZW4gd2UncmUgZ29vZC5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBwcmlzbWEudXNlci5jb3VudCgpLFxuICAgICAgZmV0Y2godXJsLnRvU3RyaW5nKCksIHsgbWV0aG9kOiBcIkhFQURcIiB9KS50aGVuKChyKSA9PiB7XG4gICAgICAgIGlmICghci5vaykgcmV0dXJuIFByb21pc2UucmVqZWN0KHIpO1xuICAgICAgfSksXG4gICAgXSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIk9LXCIpO1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGNvbnNvbGUubG9nKFwiaGVhbHRoY2hlY2sgXHUyNzRDXCIsIHsgZXJyb3IgfSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShcIkVSUk9SXCIsIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn07XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcbmltcG9ydCB7XG4gIExpbmssXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhRnVuY3Rpb24sXG4gIHJlZGlyZWN0LFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICd+L2RiLnNlcnZlcic7XG5pbXBvcnQgeyB1c2VPcHRpb25hbFVzZXIsIHVzZVVzZXIgfSBmcm9tICd+L3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCBwcm9maWxlID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGVtYWlsOiBwYXJhbXMuZW1haWwsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKHByb2ZpbGUgPT0gbnVsbCkge1xuICAgIHJldHVybiByZWRpcmVjdCgnLycpO1xuICB9XG5cbiAgcmV0dXJuIHByb2ZpbGU7XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IGBQZXJmaWwgLSAke2RhdGEubmFtZX1gLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VMb2FkZXJEYXRhPFVzZXI+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJwcm9zZSBwcm9zZS1tYWluIHAtNlwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTBcIj57dXNlci5uYW1lfTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTBcIj57dXNlci5lbWFpbH08L3A+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiByZWRpcmVjdChcIi9cIik7XG59O1xuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyB1c2VPcHRpb25hbFVzZXIgfSBmcm9tICd+L3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VPcHRpb25hbFVzZXIoKTtcblxuICByZXR1cm4gPG1haW4gY2xhc3NOYW1lPVwiXCI+PC9tYWluPjtcbn1cbiIsICJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNYXRjaGVzIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLnNlcnZlclwiO1xuXG4vKipcbiAqIFRoaXMgYmFzZSBob29rIGlzIHVzZWQgaW4gb3RoZXIgaG9va3MgdG8gcXVpY2tseSBzZWFyY2ggZm9yIHNwZWNpZmljIGRhdGFcbiAqIGFjcm9zcyBhbGwgbG9hZGVyIGRhdGEgdXNpbmcgdXNlTWF0Y2hlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCBUaGUgcm91dGUgaWRcbiAqIEByZXR1cm5zIHtKU09OfHVuZGVmaW5lZH0gVGhlIHJvdXRlciBkYXRhIG9yIHVuZGVmaW5lZCBpZiBub3QgZm91bmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1hdGNoZXNEYXRhKFxuICBpZDogc3RyaW5nXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IG1hdGNoaW5nUm91dGVzID0gdXNlTWF0Y2hlcygpO1xuICBjb25zdCByb3V0ZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gbWF0Y2hpbmdSb3V0ZXMuZmluZCgocm91dGUpID0+IHJvdXRlLmlkID09PSBpZCksXG4gICAgW21hdGNoaW5nUm91dGVzLCBpZF1cbiAgKTtcbiAgcmV0dXJuIHJvdXRlPy5kYXRhO1xufVxuXG5mdW5jdGlvbiBpc1VzZXIodXNlcjogYW55KTogdXNlciBpcyBVc2VyIHtcbiAgcmV0dXJuIHVzZXIgJiYgdHlwZW9mIHVzZXIgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHVzZXIuZW1haWwgPT09IFwic3RyaW5nXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VPcHRpb25hbFVzZXIoKTogVXNlciB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IGRhdGEgPSB1c2VNYXRjaGVzRGF0YShcInJvb3RcIik7XG4gIGlmICghZGF0YSB8fCAhaXNVc2VyKGRhdGEudXNlcikpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBkYXRhLnVzZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVc2VyKCk6IFVzZXIge1xuICBjb25zdCBtYXliZVVzZXIgPSB1c2VPcHRpb25hbFVzZXIoKTtcbiAgaWYgKCFtYXliZVVzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIk5vIHVzZXIgZm91bmQgaW4gcm9vdCBsb2FkZXIsIGJ1dCB1c2VyIGlzIHJlcXVpcmVkIGJ5IHVzZVVzZXIuIElmIHVzZXIgaXMgb3B0aW9uYWwsIHRyeSB1c2VPcHRpb25hbFVzZXIgaW5zdGVhZC5cIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG1heWJlVXNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWw6IHVua25vd24pOiBlbWFpbCBpcyBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIGVtYWlsID09PSBcInN0cmluZ1wiICYmIGVtYWlsLmxlbmd0aCA+IDMgJiYgZW1haWwuaW5jbHVkZXMoXCJAXCIpO1xufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCc7XG5pbXBvcnQge1xuICBGb3JtLFxuICBqc29uLFxuICBMaW5rLFxuICB1c2VBY3Rpb25EYXRhLFxuICByZWRpcmVjdCxcbiAgdXNlU2VhcmNoUGFyYW1zLFxufSBmcm9tICdyZW1peCc7XG5cbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBnZXRVc2VySWQgfSBmcm9tICd+L3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB7IHZlcmlmeUxvZ2luIH0gZnJvbSAnfi9tb2RlbHMvdXNlci5zZXJ2ZXInO1xuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gJ34vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG4gIGlmICh1c2VySWQpIHJldHVybiByZWRpcmVjdCgnLycpO1xuICByZXR1cm4ganNvbih7fSk7XG59O1xuXG5pbnRlcmZhY2UgQWN0aW9uRGF0YSB7XG4gIGVycm9ycz86IHtcbiAgICBlbWFpbD86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm1EYXRhLmdldCgncmVkaXJlY3RUbycpO1xuICBjb25zdCByZW1lbWJlciA9IGZvcm1EYXRhLmdldCgncmVtZW1iZXInKTtcblxuICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwpKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBlbWFpbDogJ0VtYWlsIGlzIGludmFsaWQnIH0gfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfSxcbiAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ganNvbjxBY3Rpb25EYXRhPihcbiAgICAgIHsgZXJyb3JzOiB7IHBhc3N3b3JkOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnIH0gfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfSxcbiAgICApO1xuICB9XG5cbiAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICByZXR1cm4ganNvbjxBY3Rpb25EYXRhPihcbiAgICAgIHsgZXJyb3JzOiB7IHBhc3N3b3JkOiAnUGFzc3dvcmQgaXMgdG9vIHNob3J0JyB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH0sXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCB2ZXJpZnlMb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KFxuICAgICAgeyBlcnJvcnM6IHsgZW1haWw6ICdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJyB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH0sXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih7XG4gICAgcmVxdWVzdCxcbiAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgcmVtZW1iZXI6IHJlbWVtYmVyID09PSAnb24nID8gdHJ1ZSA6IGZhbHNlLFxuICAgIHJlZGlyZWN0VG86IHR5cGVvZiByZWRpcmVjdFRvID09PSAnc3RyaW5nJyA/IHJlZGlyZWN0VG8gOiAnL25vdGVzJyxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiAnTG9naW4nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5QYWdlKCkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCByZWRpcmVjdFRvID0gc2VhcmNoUGFyYW1zLmdldCgncmVkaXJlY3RUbycpIHx8ICcvbm90ZXMnO1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpIGFzIEFjdGlvbkRhdGE7XG4gIGNvbnN0IGVtYWlsUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBwYXNzd29yZFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsKSB7XG4gICAgICBlbWFpbFJlZi5jdXJyZW50Py5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uRGF0YT8uZXJyb3JzPy5wYXNzd29yZCkge1xuICAgICAgcGFzc3dvcmRSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthY3Rpb25EYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHctZnVsbCBtYXgtdy1tZCBweC04XCI+XG4gICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRW1haWwgYWRkcmVzc1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICByZWY9e2VtYWlsUmVmfVxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXthY3Rpb25EYXRhPy5lcnJvcnM/LmVtYWlsID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWwtZXJyb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS01MDAgcHgtMiBweS0xIHRleHQtbGdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzPy5lbWFpbCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xIHRleHQtcmVkLTcwMFwiIGlkPVwiZW1haWwtZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZWY9e3Bhc3N3b3JkUmVmfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycz8ucGFzc3dvcmQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBweC0yIHB5LTEgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnM/LnBhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgdGV4dC1yZWQtNzAwXCIgaWQ9XCJwYXNzd29yZC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFRvXCIgdmFsdWU9e3JlZGlyZWN0VG99IC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBiZy1ibHVlLTUwMCAgcHktMiBweC00IHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6YmctYmx1ZS00MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZW1lbWJlclwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IHJvdW5kZWQgYm9yZGVyLWdyYXktMzAwIHRleHQtYmx1ZS02MDAgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJyZW1lbWJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBibG9jayB0ZXh0LXNtIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCB1bmRlcmxpbmVcIlxuICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9qb2luJyxcbiAgICAgICAgICAgICAgICAgIHNlYXJjaDogc2VhcmNoUGFyYW1zLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IEZvcm0sIGpzb24sIHVzZUxvYWRlckRhdGEsIE91dGxldCwgTGluaywgTmF2TGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwifi91dGlsc1wiO1xuaW1wb3J0IHsgZ2V0Tm90ZUxpc3RJdGVtcyB9IGZyb20gXCJ+L21vZGVscy9ub3RlLnNlcnZlclwiO1xuXG50eXBlIExvYWRlckRhdGEgPSB7XG4gIG5vdGVMaXN0SXRlbXM6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgZ2V0Tm90ZUxpc3RJdGVtcz4+O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KTtcbiAgY29uc3Qgbm90ZUxpc3RJdGVtcyA9IGF3YWl0IGdldE5vdGVMaXN0SXRlbXMoeyB1c2VySWQgfSk7XG4gIHJldHVybiBqc29uPExvYWRlckRhdGE+KHsgbm90ZUxpc3RJdGVtcyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVzUGFnZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKSBhcyBMb2FkZXJEYXRhO1xuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBtaW4taC1zY3JlZW4gZmxleC1jb2xcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXNsYXRlLTgwMCBwLTQgdGV4dC13aGl0ZVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIuXCI+Tm90ZXM8L0xpbms+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgPEZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctc2xhdGUtNjAwIHB5LTIgcHgtNCB0ZXh0LWJsdWUtMTAwIGhvdmVyOmJnLWJsdWUtNTAwIGFjdGl2ZTpiZy1ibHVlLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBiZy13aGl0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCB3LTgwIGJvcmRlci1yIGJnLWdyYXktNTBcIj5cbiAgICAgICAgICA8TGluayB0bz1cIm5ld1wiIGNsYXNzTmFtZT1cImJsb2NrIHAtNCB0ZXh0LXhsIHRleHQtYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICsgTmV3IE5vdGVcbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8aHIgLz5cblxuICAgICAgICAgIHtkYXRhLm5vdGVMaXN0SXRlbXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicC00XCI+Tm8gbm90ZXMgeWV0PC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgIHtkYXRhLm5vdGVMaXN0SXRlbXMubWFwKChub3RlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bm90ZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgYGJsb2NrIGJvcmRlci1iIHAtNCB0ZXh0LXhsICR7aXNBY3RpdmUgPyBcImJnLXdoaXRlXCIgOiBcIlwifWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0bz17bm90ZS5pZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgXHVEODNEXHVEQ0REIHtub3RlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBwLTZcIj5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgVXNlciwgTm90ZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwifi9kYi5zZXJ2ZXJcIjtcblxuZXhwb3J0IHR5cGUgeyBOb3RlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlKHtcbiAgaWQsXG4gIHVzZXJJZCxcbn06IFBpY2s8Tm90ZSwgXCJpZFwiPiAmIHtcbiAgdXNlcklkOiBVc2VyW1wiaWRcIl07XG59KSB7XG4gIHJldHVybiBwcmlzbWEubm90ZS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IGlkLCB1c2VySWQgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RlTGlzdEl0ZW1zKHsgdXNlcklkIH06IHsgdXNlcklkOiBVc2VyW1wiaWRcIl0gfSkge1xuICByZXR1cm4gcHJpc21hLm5vdGUuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHVzZXJJZCB9LFxuICAgIHNlbGVjdDogeyBpZDogdHJ1ZSwgdGl0bGU6IHRydWUgfSxcbiAgICBvcmRlckJ5OiB7IHVwZGF0ZWRBdDogXCJkZXNjXCIgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RlKHtcbiAgYm9keSxcbiAgdGl0bGUsXG4gIHVzZXJJZCxcbn06IFBpY2s8Tm90ZSwgXCJib2R5XCIgfCBcInRpdGxlXCI+ICYge1xuICB1c2VySWQ6IFVzZXJbXCJpZFwiXTtcbn0pIHtcbiAgcmV0dXJuIHByaXNtYS5ub3RlLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgdGl0bGUsXG4gICAgICBib2R5LFxuICAgICAgdXNlcjoge1xuICAgICAgICBjb25uZWN0OiB7XG4gICAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVOb3RlKHtcbiAgaWQsXG4gIHVzZXJJZCxcbn06IFBpY2s8Tm90ZSwgXCJpZFwiPiAmIHsgdXNlcklkOiBVc2VyW1wiaWRcIl0gfSkge1xuICByZXR1cm4gcHJpc21hLm5vdGUuZGVsZXRlTWFueSh7XG4gICAgd2hlcmU6IHsgaWQsIHVzZXJJZCB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uLCBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEsIHVzZUNhdGNoLCBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuaW1wb3J0IHR5cGUgeyBOb3RlIH0gZnJvbSBcIn4vbW9kZWxzL25vdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBkZWxldGVOb3RlIH0gZnJvbSBcIn4vbW9kZWxzL25vdGUuc2VydmVyXCI7XG5pbXBvcnQgeyBnZXROb3RlIH0gZnJvbSBcIn4vbW9kZWxzL25vdGUuc2VydmVyXCI7XG5pbXBvcnQgeyByZXF1aXJlVXNlcklkIH0gZnJvbSBcIn4vc2Vzc2lvbi5zZXJ2ZXJcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBub3RlOiBOb3RlO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBpbnZhcmlhbnQocGFyYW1zLm5vdGVJZCwgXCJub3RlSWQgbm90IGZvdW5kXCIpO1xuXG4gIGNvbnN0IG5vdGUgPSBhd2FpdCBnZXROb3RlKHsgdXNlcklkLCBpZDogcGFyYW1zLm5vdGVJZCB9KTtcbiAgaWYgKCFub3RlKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKFwiTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cbiAgcmV0dXJuIGpzb248TG9hZGVyRGF0YT4oeyBub3RlIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuICBpbnZhcmlhbnQocGFyYW1zLm5vdGVJZCwgXCJub3RlSWQgbm90IGZvdW5kXCIpO1xuXG4gIGF3YWl0IGRlbGV0ZU5vdGUoeyB1c2VySWQsIGlkOiBwYXJhbXMubm90ZUlkIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9ub3Rlc1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVEZXRhaWxzUGFnZSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKSBhcyBMb2FkZXJEYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57ZGF0YS5ub3RlLnRpdGxlfTwvaDM+XG4gICAgICA8cCBjbGFzc05hbWU9XCJweS02XCI+e2RhdGEubm90ZS5ib2R5fTwvcD5cbiAgICAgIDxociBjbGFzc05hbWU9XCJteS00XCIgLz5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctYmx1ZS01MDAgIHB5LTIgcHgtNCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOmJnLWJsdWUtNDAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIERlbGV0ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiA8ZGl2PkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQ6IHtlcnJvci5tZXNzYWdlfTwvZGl2Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgaWYgKGNhdWdodC5zdGF0dXMgPT09IDQwNCkge1xuICAgIHJldHVybiA8ZGl2Pk5vdGUgbm90IGZvdW5kPC9kaXY+O1xuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGNhdWdodCByZXNwb25zZSB3aXRoIHN0YXR1czogJHtjYXVnaHQuc3RhdHVzfWApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZUluZGV4UGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8cD5cbiAgICAgIE5vIG5vdGUgc2VsZWN0ZWQuIFNlbGVjdCBhIG5vdGUgb24gdGhlIGxlZnQsIG9ye1wiIFwifVxuICAgICAgPExpbmsgdG89XCJuZXdcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIHVuZGVybGluZVwiPlxuICAgICAgICBjcmVhdGUgYSBuZXcgbm90ZS5cbiAgICAgIDwvTGluaz5cbiAgICA8L3A+XG4gICk7XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGb3JtLCBqc29uLCByZWRpcmVjdCwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgY3JlYXRlTm90ZSB9IGZyb20gXCJ+L21vZGVscy9ub3RlLnNlcnZlclwiO1xuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L3Nlc3Npb24uc2VydmVyXCI7XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZXJyb3JzPzoge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGJvZHk/OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpO1xuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpO1xuICBjb25zdCBib2R5ID0gZm9ybURhdGEuZ2V0KFwiYm9keVwiKTtcblxuICBpZiAodHlwZW9mIHRpdGxlICE9PSBcInN0cmluZ1wiIHx8IHRpdGxlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KFxuICAgICAgeyBlcnJvcnM6IHsgdGl0bGU6IFwiVGl0bGUgaXMgcmVxdWlyZWRcIiB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBib2R5ICE9PSBcInN0cmluZ1wiIHx8IGJvZHkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBib2R5OiBcIkJvZHkgaXMgcmVxdWlyZWRcIiB9IH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3Qgbm90ZSA9IGF3YWl0IGNyZWF0ZU5vdGUoeyB0aXRsZSwgYm9keSwgdXNlcklkIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChgL25vdGVzLyR7bm90ZS5pZH1gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld05vdGVQYWdlKCkge1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpIGFzIEFjdGlvbkRhdGE7XG4gIGNvbnN0IHRpdGxlUmVmID0gUmVhY3QudXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBib2R5UmVmID0gUmVhY3QudXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFjdGlvbkRhdGE/LmVycm9ycz8udGl0bGUpIHtcbiAgICAgIHRpdGxlUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb25EYXRhPy5lcnJvcnM/LmJvZHkpIHtcbiAgICAgIGJvZHlSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9XG4gIH0sIFthY3Rpb25EYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVxuICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgZ2FwOiA4LFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBnYXAtMVwiPlxuICAgICAgICAgIDxzcGFuPlRpdGxlOiA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3RpdGxlUmVmfVxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSByb3VuZGVkLW1kIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCBweC0zIHRleHQtbGcgbGVhZGluZy1sb29zZVwiXG4gICAgICAgICAgICBhcmlhLWludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycz8udGl0bGUgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgYXJpYS1lcnJvcm1lc3NhZ2U9e1xuICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5lcnJvcnM/LnRpdGxlID8gXCJ0aXRsZS1lcnJvclwiIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycz8udGl0bGUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXJlZC03MDBcIiBpZD1cInRpdGxlLWVycm9yXCI+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YS5lcnJvcnMudGl0bGV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC0xXCI+XG4gICAgICAgICAgPHNwYW4+Qm9keTogPC9zcGFuPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgcmVmPXtib2R5UmVmfVxuICAgICAgICAgICAgbmFtZT1cImJvZHlcIlxuICAgICAgICAgICAgcm93cz17OH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4LTEgcm91bmRlZC1tZCBib3JkZXItMiBib3JkZXItYmx1ZS01MDAgcHktMiBweC0zIHRleHQtbGcgbGVhZGluZy02XCJcbiAgICAgICAgICAgIGFyaWEtaW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzPy5ib2R5ID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGFyaWEtZXJyb3JtZXNzYWdlPXtcbiAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZXJyb3JzPy5ib2R5ID8gXCJib2R5LWVycm9yXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICB7YWN0aW9uRGF0YT8uZXJyb3JzPy5ib2R5ICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgdGV4dC1yZWQtNzAwXCIgaWQ9XCJib2R5LWVycm9yXCI+XG4gICAgICAgICAgICB7YWN0aW9uRGF0YS5lcnJvcnMuYm9keX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctYmx1ZS01MDAgIHB5LTIgcHgtNCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWUtNjAwIGZvY3VzOmJnLWJsdWUtNDAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBGb3JtLFxuICBMaW5rLFxuICByZWRpcmVjdCxcbiAgdXNlU2VhcmNoUGFyYW1zLFxuICBqc29uLFxuICB1c2VBY3Rpb25EYXRhLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgZ2V0VXNlcklkLCBjcmVhdGVVc2VyU2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb24uc2VydmVyXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVVzZXIsIGdldFVzZXJCeUVtYWlsIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIuc2VydmVyXCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUVtYWlsIH0gZnJvbSBcIn4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgdXNlcklkID0gYXdhaXQgZ2V0VXNlcklkKHJlcXVlc3QpO1xuICBpZiAodXNlcklkKSByZXR1cm4gcmVkaXJlY3QoXCIvXCIpO1xuICByZXR1cm4ganNvbih7fSk7XG59O1xuXG5pbnRlcmZhY2UgQWN0aW9uRGF0YSB7XG4gIGVycm9yczoge1xuICAgIGVtYWlsPzogc3RyaW5nO1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgZW1haWwgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbFwiKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm1EYXRhLmdldChcInJlZGlyZWN0VG9cIik7XG5cbiAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsKSkge1xuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KFxuICAgICAgeyBlcnJvcnM6IHsgZW1haWw6IFwiRW1haWwgaXMgaW52YWxpZFwiIH0gfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICk7XG4gIH1cblxuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGpzb248QWN0aW9uRGF0YT4oXG4gICAgICB7IGVycm9yczogeyBwYXNzd29yZDogXCJQYXNzd29yZCBpcyByZXF1aXJlZFwiIH0gfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICk7XG4gIH1cblxuICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgOCkge1xuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KFxuICAgICAgeyBlcnJvcnM6IHsgcGFzc3dvcmQ6IFwiUGFzc3dvcmQgaXMgdG9vIHNob3J0XCIgfSB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGdldFVzZXJCeUVtYWlsKGVtYWlsKTtcbiAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgIHJldHVybiBqc29uPEFjdGlvbkRhdGE+KFxuICAgICAgeyBlcnJvcnM6IHsgZW1haWw6IFwiQSB1c2VyIGFscmVhZHkgZXhpc3RzIHdpdGggdGhpcyBlbWFpbFwiIH0gfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICk7XG4gIH1cblxuICBjb25zdCB1c2VyID0gYXdhaXQgY3JlYXRlVXNlcihlbWFpbCwgcGFzc3dvcmQpO1xuXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih7XG4gICAgcmVxdWVzdCxcbiAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgcmVtZW1iZXI6IGZhbHNlLFxuICAgIHJlZGlyZWN0VG86IHR5cGVvZiByZWRpcmVjdFRvID09PSBcInN0cmluZ1wiID8gcmVkaXJlY3RUbyA6IFwiL1wiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiU2lnbiBVcFwiLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9pbigpIHtcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IHNlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpID8/IHVuZGVmaW5lZDtcbiAgY29uc3QgYWN0aW9uRGF0YSA9IHVzZUFjdGlvbkRhdGEoKSBhcyBBY3Rpb25EYXRhO1xuICBjb25zdCBlbWFpbFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgY29uc3QgcGFzc3dvcmRSZWYgPSBSZWFjdC51c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aW9uRGF0YT8uZXJyb3JzPy5lbWFpbCkge1xuICAgICAgZW1haWxSZWYuY3VycmVudD8uZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbkRhdGE/LmVycm9ycz8ucGFzc3dvcmQpIHtcbiAgICAgIHBhc3N3b3JkUmVmLmN1cnJlbnQ/LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYWN0aW9uRGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLWZ1bGwgZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZ1bGwgbWF4LXctbWQgcHgtOFwiPlxuICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwic3BhY2UteS02XCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVtYWlsIGFkZHJlc3NcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVmPXtlbWFpbFJlZn1cbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17YWN0aW9uRGF0YT8uZXJyb3JzPy5lbWFpbCA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsLWVycm9yXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNTAwIHB4LTIgcHktMSB0ZXh0LWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmVycm9ycz8uZW1haWwgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMSB0ZXh0LXJlZC03MDBcIiBpZD1cImVtYWlsLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5lcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVmPXtwYXNzd29yZFJlZn1cbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e2FjdGlvbkRhdGE/LmVycm9ycz8ucGFzc3dvcmQgPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBweC0yIHB5LTEgdGV4dC1sZ1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5lcnJvcnM/LnBhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgdGV4dC1yZWQtNzAwXCIgaWQ9XCJwYXNzd29yZC1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGEuZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJyZWRpcmVjdFRvXCIgdmFsdWU9e3JlZGlyZWN0VG99IC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBiZy1ibHVlLTUwMCAgcHktMiBweC00IHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS02MDAgZm9jdXM6YmctYmx1ZS00MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZSBBY2NvdW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/e1wiIFwifVxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgdW5kZXJsaW5lXCJcbiAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgICBzZWFyY2g6IHNlYXJjaFBhcmFtcy50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzEzYmU0YmMzJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC03UkFVV09YRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNDdNUkIzTU4uanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtU0VRNFJCN1MuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzLyRlbWFpbCc6eydpZCc6J3JvdXRlcy8kZW1haWwnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonOmVtYWlsJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzLyRlbWFpbC01UkdQNUpJVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTkhMSEVLUUEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaGVhbHRoY2hlY2snOnsnaWQnOidyb3V0ZXMvaGVhbHRoY2hlY2snLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonaGVhbHRoY2hlY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaGVhbHRoY2hlY2stTk1YQ0xNTkUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5ITEhFS1FBLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVUzU1NDWTRMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MN1hRTDVCRS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvam9pbic6eydpZCc6J3JvdXRlcy9qb2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2pvaW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvam9pbi1JTFRYRzRKTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstREZHNFhaRUkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NRTVQQVlWMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw3WFFMNUJFLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4nOnsnaWQnOidyb3V0ZXMvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4tQlo1T0xQQVAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLURGRzRYWkVJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTUU1UEFZVjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MN1hRTDVCRS5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ291dCc6eydpZCc6J3JvdXRlcy9sb2dvdXQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9nb3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ291dC1JNkdTU1ZQUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTUU1UEFZVjMuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ub3Rlcyc6eydpZCc6J3JvdXRlcy9ub3RlcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidub3RlcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3Rlcy1FUFdKU1ROTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMllKWlVLNEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1NRTVQQVlWMy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw3WFFMNUJFLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGVzLyRub3RlSWQnOnsnaWQnOidyb3V0ZXMvbm90ZXMvJG5vdGVJZCcsJ3BhcmVudElkJzoncm91dGVzL25vdGVzJywncGF0aCc6Jzpub3RlSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbm90ZXMvJG5vdGVJZC1HS082TEU3My5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOnRydWUsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvbm90ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbm90ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9ub3RlcycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ub3Rlcy9pbmRleC1PTFdCREFYMi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL25vdGVzL25ldyc6eydpZCc6J3JvdXRlcy9ub3Rlcy9uZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9ub3RlcycsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbm90ZXMvbmV3LUxaWDQySVJJLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMTNCRTRCQzMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFDQTtBQURBO0FBQUE7QUFDQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFVBQVU7QUFBQSxNQUN2QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxlQUFlO0FBQUEsTUFDNUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxvQkFBb0I7QUFBQSxNQUNqRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGFBQWE7QUFBQSxNQUMxQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsbUJBQW1CO0FBQUEsTUFDaEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDdE9sQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBK0I7QUFDL0IsbUJBQTRCO0FBR2IsdUJBQ2IsU0FDQSxvQkFDQSxpQkFDQSxjQUNBO0FBQ0EsUUFBTSxTQUFTLGtDQUNiLG9DQUFDLDBCQUFEO0FBQUEsSUFBYSxTQUFTO0FBQUEsSUFBYyxLQUFLLFFBQVE7QUFBQTtBQUduRCxrQkFBZ0IsSUFBSSxnQkFBZ0I7QUFFcEMsU0FBTyxJQUFJLFNBQVMsb0JBQW9CLFFBQVE7QUFBQSxJQUM5QyxRQUFRO0FBQUEsSUFDUixTQUFTO0FBQUE7QUFBQTs7O0FDbEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFRTzs7Ozs7O0FDUlA7QUFBQSxvQkFBcUQ7QUFDckQsNkJBQXNCOzs7QUNEdEI7QUFDQSxzQkFBbUI7OztBQ0RuQjtBQUFBLG9CQUE2QjtBQUM3Qiw0QkFBc0I7QUFFdEIsSUFBSTtBQVVKLElBQUksT0FBdUM7QUFDekMsV0FBUztBQUFBLE9BQ0o7QUFDTCxNQUFJLENBQUMsT0FBTyxRQUFRO0FBQ2xCLFdBQU8sU0FBUztBQUFBO0FBRWxCLFdBQVMsT0FBTztBQUFBO0FBR2xCLHFCQUFxQjtBQUNuQixRQUFNLEVBQUUsaUJBQWlCLFFBQVE7QUFDakMscUNBQVUsT0FBTyxpQkFBaUIsVUFBVTtBQUU1QyxRQUFNLGNBQWMsSUFBSSxJQUFJO0FBRTVCLFFBQU0sY0FBYyxZQUFZLGFBQWE7QUFFN0MsUUFBTSxpQkFBaUIsY0FBYyxPQUFPLFFBQVEsSUFBSTtBQUN4RCxRQUFNLGFBQWEsY0FBYyxPQUFPLFFBQVEsSUFBSTtBQUVwRCxRQUFNLHNCQUFzQixDQUFDLGtCQUFrQixtQkFBbUI7QUFFbEUsTUFBSSxDQUFDLGFBQWE7QUFDaEIsZ0JBQVksT0FBTyxHQUFHLGNBQWMsWUFBWTtBQUNoRCxRQUFJLENBQUMscUJBQXFCO0FBRXhCLGtCQUFZLE9BQU87QUFBQTtBQUFBO0FBSXZCLFVBQVEsSUFBSSx5Q0FBa0MsWUFBWTtBQUsxRCxRQUFNLFNBQVMsSUFBSSwyQkFBYTtBQUFBLElBQzlCLGFBQWE7QUFBQSxNQUNYLElBQUk7QUFBQSxRQUNGLEtBQUssWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUt2QixTQUFPO0FBRVAsU0FBTztBQUFBOzs7QURuRFQsMkJBQWtDLElBQWdCO0FBQ2hELFNBQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxPQUFPLEVBQUU7QUFBQTtBQUczQyw4QkFBcUMsT0FBc0I7QUFDekQsU0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUFBO0FBRzNDLDBCQUFpQyxPQUFzQixVQUFrQjtBQUN2RSxRQUFNLGlCQUFpQixNQUFNLHdCQUFPLEtBQUssVUFBVTtBQUVuRCxTQUFPLE9BQU8sS0FBSyxPQUFPO0FBQUEsSUFDeEIsTUFBTTtBQUFBLE1BQ0o7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFFBQVE7QUFBQSxVQUNOLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV2hCLDJCQUNFLE9BQ0EsVUFDQTtBQUNBLFFBQU0sbUJBQW1CLE1BQU0sT0FBTyxLQUFLLFdBQVc7QUFBQSxJQUNwRCxPQUFPLEVBQUU7QUFBQSxJQUNULFNBQVM7QUFBQSxNQUNQLFVBQVU7QUFBQTtBQUFBO0FBSWQsTUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixVQUFVO0FBQ25ELFdBQU87QUFBQTtBQUdULFFBQU0sVUFBVSxNQUFNLHdCQUFPLFFBQzNCLFVBQ0EsaUJBQWlCLFNBQVM7QUFHNUIsTUFBSSxDQUFDLFNBQVM7QUFDWixXQUFPO0FBQUE7QUFHVCxRQUF3RCx1QkFBaEQsWUFBVSxjQUFzQyxJQUF4QixnQ0FBd0IsSUFBeEIsQ0FBeEI7QUFFUixTQUFPO0FBQUE7OztBRHREVCxvQ0FBVSxRQUFRLElBQUksZ0JBQWdCO0FBRS9CLElBQU0saUJBQWlCLDhDQUEyQjtBQUFBLEVBQ3ZELFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFNBQVMsQ0FBQyxRQUFRLElBQUk7QUFBQSxJQUN0QixRQUFRO0FBQUE7QUFBQTtBQUlaLElBQU0sbUJBQW1CO0FBRXpCLDBCQUFpQyxTQUFrQjtBQUNqRCxRQUFNLFNBQVMsUUFBUSxRQUFRLElBQUk7QUFDbkMsU0FBTyxlQUFlLFdBQVc7QUFBQTtBQUduQyx5QkFBZ0MsU0FBK0M7QUFDN0UsUUFBTSxVQUFVLE1BQU0sV0FBVztBQUNqQyxRQUFNLFNBQVMsUUFBUSxJQUFJO0FBQzNCLFNBQU87QUFBQTtBQUdULHVCQUE4QixTQUF3QztBQUNwRSxRQUFNLFNBQVMsTUFBTSxVQUFVO0FBQy9CLE1BQUksV0FBVztBQUFXLFdBQU87QUFFakMsUUFBTSxPQUFPLE1BQU0sWUFBWTtBQUMvQixNQUFJO0FBQU0sV0FBTztBQUVqQixRQUFNLE1BQU0sT0FBTztBQUFBO0FBR3JCLDZCQUNFLFNBQ0EsYUFBcUIsSUFBSSxJQUFJLFFBQVEsS0FBSyxVQUN6QjtBQUNqQixRQUFNLFNBQVMsTUFBTSxVQUFVO0FBQy9CLE1BQUksQ0FBQyxRQUFRO0FBQ1gsVUFBTSxlQUFlLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxjQUFjO0FBQ3pELFVBQU0sNEJBQVMsVUFBVTtBQUFBO0FBRTNCLFNBQU87QUFBQTtBQVlULGlDQUF3QztBQUFBLEVBQ3RDO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FNQztBQUNELFFBQU0sVUFBVSxNQUFNLFdBQVc7QUFDakMsVUFBUSxJQUFJLGtCQUFrQjtBQUM5QixTQUFPLDRCQUFTLFlBQVk7QUFBQSxJQUMxQixTQUFTO0FBQUEsTUFDUCxjQUFjLE1BQU0sZUFBZSxjQUFjLFNBQVM7QUFBQSxRQUN4RCxRQUFRLFdBQ0osS0FBSyxLQUFLLEtBQUssSUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTVosc0JBQTZCLFNBQWtCO0FBQzdDLFFBQU0sVUFBVSxNQUFNLFdBQVc7QUFDakMsVUFBUSxNQUFNO0FBQ2QsU0FBTyw0QkFBUyxLQUFLO0FBQUEsSUFDbkIsU0FBUztBQUFBLE1BQ1AsY0FBYyxNQUFNLGVBQWUsZUFBZTtBQUFBO0FBQUE7QUFBQTs7O0FEL0VqRCxJQUFNLFFBQXVCLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsRUFBRSxLQUFLLGNBQWMsTUFBTTtBQUFBLElBQzNCLEVBQUUsS0FBSyxjQUFjLE1BQU07QUFBQSxJQUMzQjtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBO0FBQUEsSUFFZjtBQUFBLE1BQ0UsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUtMLElBQU0sT0FBcUIsTUFBTztBQUFBLEVBQ3ZDLFNBQVM7QUFBQSxFQUNULE9BQU87QUFBQSxFQUNQLFVBQVU7QUFBQTtBQU9MLElBQU0sU0FBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsU0FBTyx3QkFBaUI7QUFBQSxJQUN0QixNQUFNLE1BQU0sUUFBUTtBQUFBO0FBQUE7QUFJVCxlQUFlO0FBQzVCLFNBQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQUssV0FBVTtBQUFBLEtBQ3hCLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2Qsb0NBQUMsc0JBQUQsT0FDQSxvQ0FBQyxpQ0FBRCxPQUNBLG9DQUFDLHVCQUFELE9BQ0Esb0NBQUMsMEJBQUQ7QUFBQTs7O0FJekRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJTyxJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzNELFFBQU0sT0FDSixRQUFRLFFBQVEsSUFBSSx1QkFBdUIsUUFBUSxRQUFRLElBQUk7QUFFakUsTUFBSTtBQUNGLFVBQU0sTUFBTSxJQUFJLElBQUksS0FBSyxVQUFVO0FBR25DLFVBQU0sUUFBUSxJQUFJO0FBQUEsTUFDaEIsT0FBTyxLQUFLO0FBQUEsTUFDWixNQUFNLElBQUksWUFBWSxFQUFFLFFBQVEsVUFBVSxLQUFLLENBQUMsTUFBTTtBQUNwRCxZQUFJLENBQUMsRUFBRTtBQUFJLGlCQUFPLFFBQVEsT0FBTztBQUFBO0FBQUE7QUFHckMsV0FBTyxJQUFJLFNBQVM7QUFBQSxXQUNiLE9BQVA7QUFDQSxZQUFRLElBQUksc0JBQWlCLEVBQUU7QUFDL0IsV0FBTyxJQUFJLFNBQVMsU0FBUyxFQUFFLFFBQVE7QUFBQTtBQUFBOzs7QUNyQjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esb0JBTU87QUFJQSxJQUFNLFVBQXlCLE9BQU8sRUFBRSxTQUFTLGFBQWE7QUFDbkUsUUFBTSxVQUFVLE1BQU0sT0FBTyxLQUFLLFdBQVc7QUFBQSxJQUMzQyxPQUFPO0FBQUEsTUFDTCxPQUFPLE9BQU87QUFBQTtBQUFBO0FBSWxCLE1BQUksV0FBVyxNQUFNO0FBQ25CLFdBQU8sNEJBQVM7QUFBQTtBQUdsQixTQUFPO0FBQUE7QUFHRixJQUFNLFFBQXFCLENBQUMsRUFBRSxXQUFXO0FBQzlDLFNBQU87QUFBQSxJQUNMLE9BQU8sWUFBWSxLQUFLO0FBQUE7QUFBQTtBQUliLGlCQUFpQjtBQUM5QixRQUFNLE9BQU87QUFFYixTQUNFLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNkLG9DQUFDLFVBQUQsTUFDRSxvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FBUSxLQUFLLE9BQzNCLG9DQUFDLEtBQUQ7QUFBQSxJQUFHLFdBQVU7QUFBQSxLQUFRLEtBQUs7QUFBQTs7O0FDdENsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxvQkFBeUI7QUFHbEIsSUFBTSxTQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxTQUFPLE9BQU87QUFBQTtBQUdULElBQU0sVUFBeUIsWUFBWTtBQUNoRCxTQUFPLDRCQUFTO0FBQUE7OztBQ1RsQjtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBLG1CQUF3QjtBQUN4QixvQkFBMkI7QUFVcEIsd0JBQ0wsSUFDcUM7QUFDckMsUUFBTSxpQkFBaUI7QUFDdkIsUUFBTSxRQUFRLDBCQUNaLE1BQU0sZUFBZSxLQUFLLENBQUMsV0FBVSxPQUFNLE9BQU8sS0FDbEQsQ0FBQyxnQkFBZ0I7QUFFbkIsU0FBTywrQkFBTztBQUFBO0FBR2hCLGdCQUFnQixNQUF5QjtBQUN2QyxTQUFPLFFBQVEsT0FBTyxTQUFTLFlBQVksT0FBTyxLQUFLLFVBQVU7QUFBQTtBQUc1RCwyQkFBNkM7QUFDbEQsUUFBTSxPQUFPLGVBQWU7QUFDNUIsTUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssT0FBTztBQUMvQixXQUFPO0FBQUE7QUFFVCxTQUFPLEtBQUs7QUFBQTtBQUdQLG1CQUF5QjtBQUM5QixRQUFNLFlBQVk7QUFDbEIsTUFBSSxDQUFDLFdBQVc7QUFDZCxVQUFNLElBQUksTUFDUjtBQUFBO0FBR0osU0FBTztBQUFBO0FBR0YsdUJBQXVCLE9BQWlDO0FBQzdELFNBQU8sT0FBTyxVQUFVLFlBQVksTUFBTSxTQUFTLEtBQUssTUFBTSxTQUFTO0FBQUE7OztBRDFDMUQsa0JBQWlCO0FBQzlCLFFBQU0sT0FBTztBQUViLFNBQU8sb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBO0FBQUE7OztBRU56QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBdUI7QUFFdkIsb0JBT087QUFNQSxJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzNELFFBQU0sU0FBUyxNQUFNLFVBQVU7QUFDL0IsTUFBSTtBQUFRLFdBQU8sNEJBQVM7QUFDNUIsU0FBTyx3QkFBSztBQUFBO0FBVVAsSUFBTSxVQUF5QixPQUFPLEVBQUUsY0FBYztBQUMzRCxRQUFNLFdBQVcsTUFBTSxRQUFRO0FBQy9CLFFBQU0sUUFBUSxTQUFTLElBQUk7QUFDM0IsUUFBTSxXQUFXLFNBQVMsSUFBSTtBQUM5QixRQUFNLGFBQWEsU0FBUyxJQUFJO0FBQ2hDLFFBQU0sV0FBVyxTQUFTLElBQUk7QUFFOUIsTUFBSSxDQUFDLGNBQWMsUUFBUTtBQUN6QixXQUFPLHdCQUNMLEVBQUUsUUFBUSxFQUFFLE9BQU8sd0JBQ25CLEVBQUUsUUFBUTtBQUFBO0FBSWQsTUFBSSxPQUFPLGFBQWEsVUFBVTtBQUNoQyxXQUFPLHdCQUNMLEVBQUUsUUFBUSxFQUFFLFVBQVUsNEJBQ3RCLEVBQUUsUUFBUTtBQUFBO0FBSWQsTUFBSSxTQUFTLFNBQVMsR0FBRztBQUN2QixXQUFPLHdCQUNMLEVBQUUsUUFBUSxFQUFFLFVBQVUsNkJBQ3RCLEVBQUUsUUFBUTtBQUFBO0FBSWQsUUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPO0FBRXRDLE1BQUksQ0FBQyxNQUFNO0FBQ1QsV0FBTyx3QkFDTCxFQUFFLFFBQVEsRUFBRSxPQUFPLGlDQUNuQixFQUFFLFFBQVE7QUFBQTtBQUlkLFNBQU8sa0JBQWtCO0FBQUEsSUFDdkI7QUFBQSxJQUNBLFFBQVEsS0FBSztBQUFBLElBQ2IsVUFBVSxhQUFhLE9BQU8sT0FBTztBQUFBLElBQ3JDLFlBQVksT0FBTyxlQUFlLFdBQVcsYUFBYTtBQUFBO0FBQUE7QUFJdkQsSUFBTSxRQUFxQixNQUFNO0FBQ3RDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQTtBQUFBO0FBSUkscUJBQXFCO0FBL0VwQztBQWdGRSxRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sYUFBYSxhQUFhLElBQUksaUJBQWlCO0FBQ3JELFFBQU0sYUFBYTtBQUNuQixRQUFNLFdBQVcsQUFBTSxjQUF5QjtBQUNoRCxRQUFNLGNBQWMsQUFBTSxjQUF5QjtBQUVuRCxFQUFNLGlCQUFVLE1BQU07QUF0RnhCO0FBdUZJLFFBQUksZ0RBQVksV0FBWixvQkFBb0IsT0FBTztBQUM3QixzQkFBUyxZQUFULG9CQUFrQjtBQUFBLGVBQ1QsZ0RBQVksV0FBWixvQkFBb0IsVUFBVTtBQUN2Qyx5QkFBWSxZQUFaLG9CQUFxQjtBQUFBO0FBQUEsS0FFdEIsQ0FBQztBQUVKLFNBQ0UscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsb0JBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLFdBQVU7QUFBQSxJQUFZLFlBQVU7QUFBQSxLQUNsRCxxQ0FBQyxPQUFELE1BQ0UscUNBQUMsU0FBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLEtBQ1gsa0JBR0QscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsU0FBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsVUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsY0FBYTtBQUFBLElBQ2IsZ0JBQWMsZ0RBQVksV0FBWixtQkFBb0IsU0FBUSxPQUFPO0FBQUEsSUFDakQsb0JBQWlCO0FBQUEsSUFDakIsV0FBVTtBQUFBLE1BRVgsZ0RBQVksV0FBWixtQkFBb0IsVUFDbkIscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQW9CLElBQUc7QUFBQSxLQUNuQyxXQUFXLE9BQU8sVUFNM0IscUNBQUMsT0FBRCxNQUNFLHFDQUFDLFNBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxLQUNYLGFBR0QscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsU0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsS0FBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsY0FBYTtBQUFBLElBQ2IsZ0JBQWMsZ0RBQVksV0FBWixtQkFBb0IsWUFBVyxPQUFPO0FBQUEsSUFDcEQsb0JBQWlCO0FBQUEsSUFDakIsV0FBVTtBQUFBLE1BRVgsZ0RBQVksV0FBWixtQkFBb0IsYUFDbkIscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQW9CLElBQUc7QUFBQSxLQUNuQyxXQUFXLE9BQU8sYUFNM0IscUNBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQWEsT0FBTztBQUFBLE1BQzlDLHFDQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYLFdBR0QscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsU0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLE1BRVoscUNBQUMsU0FBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLEtBQ1gsaUJBSUgscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQW9DLDBCQUMxQixLQUN2QixxQ0FBQyxvQkFBRDtBQUFBLElBQ0UsV0FBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLE1BQ0YsVUFBVTtBQUFBLE1BQ1YsUUFBUSxhQUFhO0FBQUE7QUFBQSxLQUV4QjtBQUFBOzs7QUN0TGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWlFOzs7QUNBakU7QUFNTyxpQkFBaUI7QUFBQSxFQUN0QjtBQUFBLEVBQ0E7QUFBQSxHQUdDO0FBQ0QsU0FBTyxPQUFPLEtBQUssVUFBVTtBQUFBLElBQzNCLE9BQU8sRUFBRSxJQUFJO0FBQUE7QUFBQTtBQUlWLDBCQUEwQixFQUFFLFVBQWtDO0FBQ25FLFNBQU8sT0FBTyxLQUFLLFNBQVM7QUFBQSxJQUMxQixPQUFPLEVBQUU7QUFBQSxJQUNULFFBQVEsRUFBRSxJQUFJLE1BQU0sT0FBTztBQUFBLElBQzNCLFNBQVMsRUFBRSxXQUFXO0FBQUE7QUFBQTtBQUluQixvQkFBb0I7QUFBQSxFQUN6QjtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsR0FHQztBQUNELFNBQU8sT0FBTyxLQUFLLE9BQU87QUFBQSxJQUN4QixNQUFNO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBLE1BQU07QUFBQSxRQUNKLFNBQVM7QUFBQSxVQUNQLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT1Asb0JBQW9CO0FBQUEsRUFDekI7QUFBQSxFQUNBO0FBQUEsR0FDNEM7QUFDNUMsU0FBTyxPQUFPLEtBQUssV0FBVztBQUFBLElBQzVCLE9BQU8sRUFBRSxJQUFJO0FBQUE7QUFBQTs7O0FEdkNWLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxTQUFTLE1BQU0sY0FBYztBQUNuQyxRQUFNLGdCQUFnQixNQUFNLGlCQUFpQixFQUFFO0FBQy9DLFNBQU8sd0JBQWlCLEVBQUU7QUFBQTtBQUdiLHFCQUFxQjtBQUNsQyxRQUFNLE9BQU87QUFDYixRQUFNLE9BQU87QUFFYixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLFVBQUQ7QUFBQSxJQUFRLFdBQVU7QUFBQSxLQUNoQixvQ0FBQyxNQUFEO0FBQUEsSUFBSSxXQUFVO0FBQUEsS0FDWixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLEtBQUksV0FFZixvQ0FBQyxLQUFELE1BQUksS0FBSyxRQUNULG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxRQUFPO0FBQUEsSUFBVSxRQUFPO0FBQUEsS0FDNUIsb0NBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1gsYUFNTCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDZCxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxvQkFBRDtBQUFBLElBQU0sSUFBRztBQUFBLElBQU0sV0FBVTtBQUFBLEtBQWtDLGVBSTNELG9DQUFDLE1BQUQsT0FFQyxLQUFLLGNBQWMsV0FBVyxJQUM3QixvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBTSxrQkFFbkIsb0NBQUMsTUFBRCxNQUNHLEtBQUssY0FBYyxJQUFJLENBQUMsU0FDdkIsb0NBQUMsTUFBRDtBQUFBLElBQUksS0FBSyxLQUFLO0FBQUEsS0FDWixvQ0FBQyx1QkFBRDtBQUFBLElBQ0UsV0FBVyxDQUFDLEVBQUUsZUFDWiw4QkFBOEIsV0FBVyxhQUFhO0FBQUEsSUFFeEQsSUFBSSxLQUFLO0FBQUEsS0FDVixjQUNLLEtBQUssWUFRckIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsc0JBQUQ7QUFBQTs7O0FFbkVWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLG9CQUF5QjtBQUN6QixxQkFBb0Q7QUFDcEQsNkJBQXNCO0FBVWYsSUFBTSxVQUF5QixPQUFPLEVBQUUsU0FBUyxhQUFhO0FBQ25FLFFBQU0sU0FBUyxNQUFNLGNBQWM7QUFDbkMsc0NBQVUsT0FBTyxRQUFRO0FBRXpCLFFBQU0sT0FBTyxNQUFNLFFBQVEsRUFBRSxRQUFRLElBQUksT0FBTztBQUNoRCxNQUFJLENBQUMsTUFBTTtBQUNULFVBQU0sSUFBSSxTQUFTLGFBQWEsRUFBRSxRQUFRO0FBQUE7QUFFNUMsU0FBTyx5QkFBaUIsRUFBRTtBQUFBO0FBR3JCLElBQU0sVUFBeUIsT0FBTyxFQUFFLFNBQVMsYUFBYTtBQUNuRSxRQUFNLFNBQVMsTUFBTSxjQUFjO0FBQ25DLHNDQUFVLE9BQU8sUUFBUTtBQUV6QixRQUFNLFdBQVcsRUFBRSxRQUFRLElBQUksT0FBTztBQUV0QyxTQUFPLDRCQUFTO0FBQUE7QUFHSCwyQkFBMkI7QUFDeEMsUUFBTSxPQUFPO0FBRWIsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLEtBQXNCLEtBQUssS0FBSyxRQUM5QyxvQ0FBQyxLQUFEO0FBQUEsSUFBRyxXQUFVO0FBQUEsS0FBUSxLQUFLLEtBQUssT0FDL0Isb0NBQUMsTUFBRDtBQUFBLElBQUksV0FBVTtBQUFBLE1BQ2Qsb0NBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxLQUNYLG9DQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYO0FBQUE7QUFRRix1QkFBdUIsRUFBRSxTQUEyQjtBQUN6RCxVQUFRLE1BQU07QUFFZCxTQUFPLG9DQUFDLE9BQUQsTUFBSyxrQ0FBK0IsTUFBTTtBQUFBO0FBRzVDLHlCQUF5QjtBQUM5QixRQUFNLFNBQVM7QUFFZixNQUFJLE9BQU8sV0FBVyxLQUFLO0FBQ3pCLFdBQU8sb0NBQUMsT0FBRCxNQUFLO0FBQUE7QUFHZCxRQUFNLElBQUksTUFBTSwyQ0FBMkMsT0FBTztBQUFBOzs7QUNsRXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcUI7QUFFTix5QkFBeUI7QUFDdEMsU0FDRSxvQ0FBQyxLQUFELE1BQUcsbURBQytDLEtBQ2hELG9DQUFDLHFCQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBMEI7QUFBQTs7O0FDTnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXVCO0FBRXZCLHFCQUFvRDtBQVc3QyxJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzNELFFBQU0sU0FBUyxNQUFNLGNBQWM7QUFFbkMsUUFBTSxXQUFXLE1BQU0sUUFBUTtBQUMvQixRQUFNLFFBQVEsU0FBUyxJQUFJO0FBQzNCLFFBQU0sT0FBTyxTQUFTLElBQUk7QUFFMUIsTUFBSSxPQUFPLFVBQVUsWUFBWSxNQUFNLFdBQVcsR0FBRztBQUNuRCxXQUFPLHlCQUNMLEVBQUUsUUFBUSxFQUFFLE9BQU8seUJBQ25CLEVBQUUsUUFBUTtBQUFBO0FBSWQsTUFBSSxPQUFPLFNBQVMsWUFBWSxLQUFLLFdBQVcsR0FBRztBQUNqRCxXQUFPLHlCQUNMLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0JBQ2xCLEVBQUUsUUFBUTtBQUFBO0FBSWQsUUFBTSxPQUFPLE1BQU0sV0FBVyxFQUFFLE9BQU8sTUFBTTtBQUU3QyxTQUFPLDZCQUFTLFVBQVUsS0FBSztBQUFBO0FBR2xCLHVCQUF1QjtBQXZDdEM7QUF3Q0UsUUFBTSxhQUFhO0FBQ25CLFFBQU0sV0FBVyxBQUFNLGNBQXlCO0FBQ2hELFFBQU0sVUFBVSxBQUFNLGNBQTRCO0FBRWxELEVBQU0saUJBQVUsTUFBTTtBQTVDeEI7QUE2Q0ksUUFBSSxnREFBWSxXQUFaLG9CQUFvQixPQUFPO0FBQzdCLHNCQUFTLFlBQVQsb0JBQWtCO0FBQUEsZUFDVCxnREFBWSxXQUFaLG9CQUFvQixNQUFNO0FBQ25DLHFCQUFRLFlBQVIsb0JBQWlCO0FBQUE7QUFBQSxLQUVsQixDQUFDO0FBRUosU0FDRSxxQ0FBQyxxQkFBRDtBQUFBLElBQ0UsUUFBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLE1BQ2YsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBO0FBQUEsS0FHVCxxQ0FBQyxPQUFELE1BQ0UscUNBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQ2YscUNBQUMsUUFBRCxNQUFNLFlBQ04scUNBQUMsU0FBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLElBQ1YsZ0JBQWMsZ0RBQVksV0FBWixtQkFBb0IsU0FBUSxPQUFPO0FBQUEsSUFDakQscUJBQ0UsZ0RBQVksV0FBWixtQkFBb0IsU0FBUSxnQkFBZ0I7QUFBQSxPQUlqRCxnREFBWSxXQUFaLG1CQUFvQixVQUNuQixxQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsSUFBb0IsSUFBRztBQUFBLEtBQ25DLFdBQVcsT0FBTyxTQUt6QixxQ0FBQyxPQUFELE1BQ0UscUNBQUMsU0FBRDtBQUFBLElBQU8sV0FBVTtBQUFBLEtBQ2YscUNBQUMsUUFBRCxNQUFNLFdBQ04scUNBQUMsWUFBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sV0FBVTtBQUFBLElBQ1YsZ0JBQWMsZ0RBQVksV0FBWixtQkFBb0IsUUFBTyxPQUFPO0FBQUEsSUFDaEQscUJBQ0UsZ0RBQVksV0FBWixtQkFBb0IsUUFBTyxlQUFlO0FBQUEsT0FJL0MsZ0RBQVksV0FBWixtQkFBb0IsU0FDbkIscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQW9CLElBQUc7QUFBQSxLQUNuQyxXQUFXLE9BQU8sUUFLekIscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsVUFBRDtBQUFBLElBQ0UsTUFBSztBQUFBLElBQ0wsV0FBVTtBQUFBLEtBQ1g7QUFBQTs7O0FDM0dUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF1QjtBQUV2QixxQkFPTztBQU9BLElBQU0sVUFBeUIsT0FBTyxFQUFFLGNBQWM7QUFDM0QsUUFBTSxTQUFTLE1BQU0sVUFBVTtBQUMvQixNQUFJO0FBQVEsV0FBTyw2QkFBUztBQUM1QixTQUFPLHlCQUFLO0FBQUE7QUFVUCxJQUFNLFVBQXlCLE9BQU8sRUFBRSxjQUFjO0FBQzNELFFBQU0sV0FBVyxNQUFNLFFBQVE7QUFDL0IsUUFBTSxRQUFRLFNBQVMsSUFBSTtBQUMzQixRQUFNLFdBQVcsU0FBUyxJQUFJO0FBQzlCLFFBQU0sYUFBYSxTQUFTLElBQUk7QUFFaEMsTUFBSSxDQUFDLGNBQWMsUUFBUTtBQUN6QixXQUFPLHlCQUNMLEVBQUUsUUFBUSxFQUFFLE9BQU8sd0JBQ25CLEVBQUUsUUFBUTtBQUFBO0FBSWQsTUFBSSxPQUFPLGFBQWEsVUFBVTtBQUNoQyxXQUFPLHlCQUNMLEVBQUUsUUFBUSxFQUFFLFVBQVUsNEJBQ3RCLEVBQUUsUUFBUTtBQUFBO0FBSWQsTUFBSSxTQUFTLFNBQVMsR0FBRztBQUN2QixXQUFPLHlCQUNMLEVBQUUsUUFBUSxFQUFFLFVBQVUsNkJBQ3RCLEVBQUUsUUFBUTtBQUFBO0FBSWQsUUFBTSxlQUFlLE1BQU0sZUFBZTtBQUMxQyxNQUFJLGNBQWM7QUFDaEIsV0FBTyx5QkFDTCxFQUFFLFFBQVEsRUFBRSxPQUFPLDZDQUNuQixFQUFFLFFBQVE7QUFBQTtBQUlkLFFBQU0sT0FBTyxNQUFNLFdBQVcsT0FBTztBQUVyQyxTQUFPLGtCQUFrQjtBQUFBLElBQ3ZCO0FBQUEsSUFDQSxRQUFRLEtBQUs7QUFBQSxJQUNiLFVBQVU7QUFBQSxJQUNWLFlBQVksT0FBTyxlQUFlLFdBQVcsYUFBYTtBQUFBO0FBQUE7QUFJdkQsSUFBTSxRQUFxQixNQUFNO0FBQ3RDLFNBQU87QUFBQSxJQUNMLE9BQU87QUFBQTtBQUFBO0FBSUksZ0JBQWdCO0FBaEYvQjtBQWlGRSxRQUFNLENBQUMsZ0JBQWdCO0FBQ3ZCLFFBQU0sYUFBYSxhQUFhLElBQUksaUJBQWlCO0FBQ3JELFFBQU0sYUFBYTtBQUNuQixRQUFNLFdBQVcsQUFBTSxjQUF5QjtBQUNoRCxRQUFNLGNBQWMsQUFBTSxjQUF5QjtBQUVuRCxFQUFNLGlCQUFVLE1BQU07QUF2RnhCO0FBd0ZJLFFBQUksZ0RBQVksV0FBWixvQkFBb0IsT0FBTztBQUM3QixzQkFBUyxZQUFULG9CQUFrQjtBQUFBLGVBQ1QsZ0RBQVksV0FBWixvQkFBb0IsVUFBVTtBQUN2Qyx5QkFBWSxZQUFaLG9CQUFxQjtBQUFBO0FBQUEsS0FFdEIsQ0FBQztBQUVKLFNBQ0UscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMscUJBQUQ7QUFBQSxJQUFNLFFBQU87QUFBQSxJQUFPLFdBQVU7QUFBQSxJQUFZLFlBQVU7QUFBQSxLQUNsRCxxQ0FBQyxPQUFELE1BQ0UscUNBQUMsU0FBRDtBQUFBLElBQ0UsU0FBUTtBQUFBLElBQ1IsV0FBVTtBQUFBLEtBQ1gsa0JBR0QscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsU0FBRDtBQUFBLElBQ0UsS0FBSztBQUFBLElBQ0wsSUFBRztBQUFBLElBQ0gsVUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsY0FBYTtBQUFBLElBQ2IsZ0JBQWMsZ0RBQVksV0FBWixtQkFBb0IsU0FBUSxPQUFPO0FBQUEsSUFDakQsb0JBQWlCO0FBQUEsSUFDakIsV0FBVTtBQUFBLE1BRVgsZ0RBQVksV0FBWixtQkFBb0IsVUFDbkIscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQW9CLElBQUc7QUFBQSxLQUNuQyxXQUFXLE9BQU8sVUFNM0IscUNBQUMsT0FBRCxNQUNFLHFDQUFDLFNBQUQ7QUFBQSxJQUNFLFNBQVE7QUFBQSxJQUNSLFdBQVU7QUFBQSxLQUNYLGFBR0QscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2IscUNBQUMsU0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsS0FBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsTUFBSztBQUFBLElBQ0wsY0FBYTtBQUFBLElBQ2IsZ0JBQWMsZ0RBQVksV0FBWixtQkFBb0IsWUFBVyxPQUFPO0FBQUEsSUFDcEQsb0JBQWlCO0FBQUEsSUFDakIsV0FBVTtBQUFBLE1BRVgsZ0RBQVksV0FBWixtQkFBb0IsYUFDbkIscUNBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLElBQW9CLElBQUc7QUFBQSxLQUNuQyxXQUFXLE9BQU8sYUFNM0IscUNBQUMsU0FBRDtBQUFBLElBQU8sTUFBSztBQUFBLElBQVMsTUFBSztBQUFBLElBQWEsT0FBTztBQUFBLE1BQzlDLHFDQUFDLFVBQUQ7QUFBQSxJQUNFLE1BQUs7QUFBQSxJQUNMLFdBQVU7QUFBQSxLQUNYLG1CQUdELHFDQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLHFDQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFvQyw0QkFDeEIsS0FDekIscUNBQUMscUJBQUQ7QUFBQSxJQUNFLFdBQVU7QUFBQSxJQUNWLElBQUk7QUFBQSxNQUNGLFVBQVU7QUFBQSxNQUNWLFFBQVEsYUFBYTtBQUFBO0FBQUEsS0FFeEI7QUFBQTs7O0FDektmO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8saUJBQWdCLEVBQUMsTUFBSyxpQkFBZ0IsWUFBVyxRQUFPLFFBQU8sVUFBUyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxvQ0FBbUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHNCQUFxQixFQUFDLE1BQUssc0JBQXFCLFlBQVcsUUFBTyxRQUFPLGVBQWMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMseUNBQXdDLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sUUFBVSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGVBQWMsRUFBQyxNQUFLLGVBQWMsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrQ0FBaUMsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsQ0FBQyxvQ0FBbUMsb0NBQW1DLHFDQUFvQyxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGlCQUFnQixFQUFDLE1BQUssaUJBQWdCLFlBQVcsUUFBTyxRQUFPLFVBQVMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsb0NBQW1DLFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxNQUFLLGFBQVksTUFBSyxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxnQkFBZSxFQUFDLE1BQUssZ0JBQWUsWUFBVyxRQUFPLFFBQU8sU0FBUSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyxvQ0FBbUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sd0JBQXVCLEVBQUMsTUFBSyx3QkFBdUIsWUFBVyxnQkFBZSxRQUFPLFdBQVUsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkNBQTBDLFdBQVUsUUFBVSxhQUFZLE1BQUssYUFBWSxNQUFLLG9CQUFtQixNQUFLLG9CQUFtQixRQUFNLHNCQUFxQixFQUFDLE1BQUssc0JBQXFCLFlBQVcsZ0JBQWUsUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLHlDQUF3QyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxvQkFBbUIsRUFBQyxNQUFLLG9CQUFtQixZQUFXLGdCQUFlLFFBQU8sT0FBTSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx1Q0FBc0MsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0FsQmMzOEcsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNCQUFzQjtBQUFBLElBQ2xCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlCQUFpQjtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix3QkFBd0I7QUFBQSxJQUNwQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHNCQUFzQjtBQUFBLElBQ2xCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosb0JBQW9CO0FBQUEsSUFDaEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
