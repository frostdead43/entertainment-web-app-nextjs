import { PrismaClient } from "@/generated/prisma";
import { fetchPopularMovies } from "../../../../lib/fetchers";


const prisma = new PrismaClient();

export async function GET(req, res) {
  console.log("saveMovies endpoint çağrıldı");

  try {
    const movies = await fetchPopularMovies(1);

    if (!movies || movies.length === 0) {
      return new Response("Kaydedilecek film yok", { status: 200 });
    }

    await prisma.$transaction(
      movies.map((m) =>
        prisma.movie.upsert({
          where: { id: m.id },
          update: {},
          create: {
            id: m.id,
            title: m.title || "No title",
            originalTitle: m.original_title || "No original title",
            overview: m.overview || "",
            originalLang: m.original_language || "en",
            releaseDate: m.release_date ? new Date(m.release_date) : new Date(),
            posterPath: m.poster_path || "",
            backdropPath: m.backdrop_path || "",
            voteAverage: m.vote_average ?? 0,
            voteCount: m.vote_count ?? 0,
            popularity: m.popularity ?? 0,
            adult: m.adult ?? false,
          },
        })
      )
    );

    return new Response(`${movies.length} film kaydedildi`, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Hata oluştu: " + error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
