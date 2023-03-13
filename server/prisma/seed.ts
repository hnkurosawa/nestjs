import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * @file https://zenn.dev/thirosue/books/49a4ee418743ed/viewer/57d161
 */

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      name: 'Alice',
      createdBy: 0,
      updatedBy: 0,
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@example.com' },
    update: {},
    create: {
      email: 'bob@example.com',
      name: 'Bob',
      createdBy: 0,
      updatedBy: 0,
    },
  });

  const org1 = await prisma.organization.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'org',
      createdBy: 0,
      updatedBy: 0,
    },
  });

  console.log(alice, bob, org1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
