import { Header } from "@/components/Header";
import { MovieCard } from "@/components/MovieCard";
import { VideoCard } from "@/components/VideoCard";

const MOVIES = [
  {
    title: "Cosmic Journey",
    year: "2023",
    studio: "Dream Studios",
    tags: ["Adventure", "Sci-Fi", "Fantasy"],
    gradient: "linear-gradient(to right, #ff6b6b, #feca57)",
  },
  {
    title: "Ocean's Mystery",
    year: "2023",
    studio: "Wave Pictures",
    tags: ["Drama", "Mystery", "Adventure"],
    gradient: "linear-gradient(to right, #4834d4, #686de0)",
  },
  {
    title: "Mountain Peak",
    year: "2023",
    studio: "Summit Films",
    tags: ["Action", "Thriller", "Adventure"],
    gradient: "linear-gradient(to right, #6c5ce7, #a55eea)",
  },
  {
    title: "Desert Storm",
    year: "2023",
    studio: "Oasis Productions",
    tags: ["Action", "Drama", "Adventure"],
    gradient: "linear-gradient(to right, #f0932b, #ffbe76)",
  },
];

const VIDEOS = [
  {
    title: "Creating Digital Art",
    creator: "ArtistPro",
    playlist: "Digital Art Tutorials",
    gradient: "linear-gradient(to right, #ee5253, #ff9f43)",
  },
  {
    title: "Music Production Tips",
    creator: "BeatMaker",
    playlist: "Music Production",
    gradient: "linear-gradient(to right, #00d2d3, #54a0ff)",
  },
  {
    title: "Travel Vlog: Paris",
    creator: "Wanderlust",
    playlist: "Travel Series",
    gradient: "linear-gradient(to right, #5f27cd, #c8d6e5)",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Header />
      
      <main className="container mx-auto max-w-[1920px] px-8 pt-28">
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold">Recommended Movies & Series</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {MOVIES.map((movie) => (
              <MovieCard key={movie.title} {...movie} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-8 text-2xl font-bold">Recommended Videos</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;