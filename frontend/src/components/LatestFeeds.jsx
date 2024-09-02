import Feed from "@/components/Feed";
import prisma from "@/lib/db";

export default async function LatestFeeds() {
  // Fetch creators along with their posts and associated images
  const creators = await prisma.user.findMany({
    include: {
      posts: {
        include: {
          image: true, // Include images related to each post
        },
      },
    },
  });

  return (
    <div className="flex flex-col">
      {creators.map((creator) =>
        creator.posts.map((post) => (
          <Feed
            key={post.id} // Use post.id as the unique key
            address={creator.address}
            link={`/creators/${creator.address}`}
            avatar={`/images/${creator.profilePic}`}
            username={creator.address}
            fullName={creator.name}
            paragraph={post.description}
            image={`/images/${post.image.length > 0 ? post.image[0].imageUrl : ""}`}
          />
        ))
      )}
    </div>
  );
}

// import Feed from "@/components/Feed";
// import prisma from "@/lib/db";
//
// export default async function LatestFeeds() {
//   const creators = await prisma.user.findMany({
//     include: {
//       posts: true,
//     },
//   });
//
//   console.log(postsWithImages);
//   return (
//     <div className="flex flex-col">
//       {creators.map((creator) => (
//         creator.posts.map((post) => (
//           <Feed
//             key={creator.address}
//             address={creator.address}
//             link={`/creators/${creator.address}`}
//             avatar={creator.profilePic}
//             username={creator.address}
//             fullName={creator.name}
//             paragraph={post.description}
//             image={post.image.length > 0 ? post.image[0].imageUrl : ""} // Accessing the first image's URL
//           />
//         ))
//       ))}
//     </div>
//   );
// }
