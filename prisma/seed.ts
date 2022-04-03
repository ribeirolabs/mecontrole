import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const USERS = [
  {
    name: "Igor Ribeiro",
    email: "igor@mecontrole.com",
    groups: ["Casal", "Viagem"],
  },
  {
    name: "Nayara Ribeiro",
    email: "nayara@mecontrole.com",
    groups: ["Casal", "Viagem"],
  },
  {
    name: "Lucas Abreu",
    email: "lucas@mecontrole.com",
    groups: ["Viagem"],
  },
];

async function seed() {
  // cleanup the existing database
  await Promise.all(
    USERS.map(user =>
      prisma.user.delete({ where: { email: user.email } }).catch(() => {
        // no worries if it doesn't exist yet
      }),
    ),
  );

  const password = await bcrypt.hash("mecontrole", 10);

  const groups = await Promise.all([
    prisma.group.create({
      data: {
        name: "Casal",
      },
    }),
    prisma.group.create({
      data: {
        name: "Viagem",
      },
    }),
  ]);

  const [igor, nay, lucas] = await Promise.all(
    USERS.map(({ groups: userGroups, ...user }) =>
      prisma.user.create({
        data: {
          ...user,
          password: {
            create: {
              hash: password,
            },
          },
          groups: {
            createMany: {
              data: userGroups!.map(name => ({
                groupId: groups.find(g => g.name === name)!.id,
                permissions: [],
              })),
            },
          },
        },
      }),
    ),
  );

  await prisma.category.createMany({
    data: ["Salário", "Pessoal", "Casa", "Diversão"].map(name => ({
      name,
    })),
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
