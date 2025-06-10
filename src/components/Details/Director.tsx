// import { getMoreInfo } from "@/lib/api/get-more-info";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { getDirector } from "@/lib/api/get-director";

// export const Director = ({ id }) => {
//   const [directors, setDirector] = useState([]);
//   const [writers, setWriters] = useState([]);
//   const [casts, setCasts] = useState([]);
//   useEffect(() => {
//     if (!id) return;
//     const fetchdDirector = async () => {
//       try {
//         const data = await getDirector(id);
//         console.log("Raw director data:", data);

//         const isDirector = data?.crew?.filter(
//           (person) => person.job === "Director"
//         );

//         const isWriter = data?.crew?.filter(
//           (person) => person.department === "Writing"
//         );
//         const writers = isWriter.slice(0, 1);
//         const isStar = data?.cast?.filter(
//           (person) => person.known_for_department === "Acting"
//         );
//         const cast = isStar.slice(0, 3);

//         setDirector(isDirector);
//         setWriters(writers);
//         setCasts(cast);
//       } catch (error) {
//         console.error("Failed to fetch directors:", error);
//       }
//     };

//     fetchdDirector();
//   }, [id]);

//   return (
//     <div className="flex-col flex gap-y-[33px] divide-y">
//       <div className="flex">
//         <p className="font-bold gap-13"> Director</p>
//         {directors.map((person) => (
//           <div key={person.id} className="flex px-[20px] gap-13 flex-col">
//             <p className="text-[16px]  ">{person.name}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <p className="text-[16px] font-bold w-[64px]">Writers</p>
//         {writers.map((person) => (
//           <div key={person.id} className="flex px-[20px] gap-13">
//             <p className="text-[16px]">{person.name}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex">
//         <p className="text-[16px] font-bold w-[64px]">Stars</p>
//         {casts.map((cast) => (
//           <div key={cast.id} className="flex px-[20px] gap-13">
//             <p className="text-[16px]">{cast.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
