import { User } from '@prisma/client';
import {
  Link,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from 'remix';
import { prisma } from '~/db.server';
import { useOptionalUser, useUser } from '~/utils';

export const loader: LoaderFunction = async ({ request, params }) => {
  const profile = await prisma.user.findUnique({
    where: {
      email: params.email,
    },
  });

  if (profile == null) {
    return redirect('/');
  }

  return profile;
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: `Perfil - ${data.name}`,
  };
};

export default function Index() {
  const user = useLoaderData<User>();

  return (
    <main className="prose prose-main p-6">
      <header>
        <h1 className="mb-0">{user.name}</h1>
        <p className="mt-0">{user.email}</p>
      </header>
    </main>
  );
}
