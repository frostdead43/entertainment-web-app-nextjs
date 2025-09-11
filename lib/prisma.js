import { PrismaClient } from "@/generated/prisma";
import { fetchPopularMovies } from "./fetchers";

export const prisma = new PrismaClient();

// console.log("as")
// async function saveMovies() {
//   try {
//     const movies = await fetchPopularMovies(1);

//     if (!movies || movies.length === 0) {
//       console.log("Kaydedilecek film yok.");
//       return;
//     }
//     console.log("sa");
//     await prisma.movie.createMany({
//       data: movies.map((m) => ({
//         id: m.id,
//         title: m.title,
//         originalTitle: m.original_title,
//         overview: m.overview,
//         originalLang: m.original_language,
//         releaseDate: new Date(m.release_date),
//         posterPath: m.poster_path,
//         backdropPath: m.backdrop_path,
//         voteAverage: m.vote_average,
//         voteCount: m.vote_count,
//         popularity: m.popularity,
//         adult: m.adult,

//       })),
//       skipDuplicates: false, // zaten varsa eklemez
//     });
//     console.log(prisma.movie);

//     console.log(`${movies.length} film veritabanına kaydedildi ✅`);
//   } catch (error) {
//     console.error("Filmler kaydedilirken hata oluştu:", error.message);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// saveMovies();