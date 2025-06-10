// export const getDirector = async (id) => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${id}/credits?language=en-US`,
//       {
//         method: "GET",
//         headers: {
//           accept: "application/json",
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
//         },
//       }
//     );

//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
