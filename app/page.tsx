import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "../components/LoadMore";
import { data } from "./_data";
import { fetchAnime } from "./action";
import CardList from "@/components/CardList";

async function Home() {
  const animes = await fetchAnime(1, 20, "popularity");
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      {animes}
      <LoadMore />
    </main>
  );
}

export default Home;
