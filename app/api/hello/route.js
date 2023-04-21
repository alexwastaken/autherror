import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Create a new user with the given username
    const newUser = await prisma.user.create({
      data: { username: "jklasdlk2" },
    });

    const second = await prisma.user.upsert({
      where: {
        username: "jklasdlk2",
      },
      create: {
        username: "jklasdlk2",
        comments: {
          create: {
            content: "This is a comment"
          }
        }
      },
      update: {
        comments: {
          create: {
            content: "This is a comment"
          }
        }
      }
    });
    
    // Return a JSON response with the user id and name
    return new Response('wow');
  } catch (error) {
    // Handle any errors that may occur
    console.error(error);
    return new Response(error);
  }
}