const { faker } = require('@faker-js/faker');
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//  async function seed() {
//    await prisma.utilisateur.deleteMany();
//   await prisma._ArticleToCategorie.deleteMany()
//     await prisma.article.deleteMany();
//     await prisma.commentaire.deleteMany();
//     await prisma.categorie.deleteMany();
//}
//seed()


// creating admin user
const AdminUsers = prisma.utilisateur.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: "ADMIN",
    },
  })
  .catch((error)=>{
    console.error(error);
  });

// creating 10 authors
function AuthorUser() {
    prisma.utilisateur.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: "AUTHOR",
    },
  })
  .catch((error)=>{
    console.error(error);
  })
}
for(let i=0;i<10;i++){
    AuthorUser()
  }



// creating 10 categories
function Categorie(){ prisma.categorie.create({
    data: {
     nom:faker.name.jobArea()
    },
  })
  .catch((error)=>{
    console.error(error);
  });
}

for(let i=0;i<10;i++){
    Categorie()
}
  



// creating articles

async function seedArticles() {
    
    await prisma.article.deleteMany();

   const users = await prisma.utilisateur.findMany({
  where: {
    role: 'AUTHOR'
  }
});
    const categories = await prisma.categorie.findMany();
    
    const articles = [];
  
    for (let i = 0; i < 100; i++) {
      const randomCategories = categories.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 4) + 1);
      const randomUser = users[Math.floor(Math.random() * users.length)];
  
      const article = await prisma.article.create({
        data: {
          titre: faker.lorem.sentence(),
          contenu: faker.lorem.paragraphs(3),
          image: faker.image.imageUrl(),
          published: true,
          utilisateur: {
            connect: { id: randomUser.id },
          },
          categories: {
            connect: randomCategories.map((category) => ({ id: category.id })),
          },
        },
      });
  
      articles.push(article);
    }
}

seedArticles()




async function addCommentsToArticles() {
    const articles = await prisma.article.findMany();
    for (const article of articles) {
      // Create 0 to 20 comments for each article
      const numComments = Math.floor(Math.random() * 21);
      for (let j = 0; j < numComments; j++) {
        await prisma.commentaire.create({
          data: {
            email: faker.internet.email(),
            contenu: faker.lorem.sentences(2),
            Article: {
              connect: { id: article.id },
            },
          },
        });
      }
    }
  }
addCommentsToArticles();  

