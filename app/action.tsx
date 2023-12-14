"use server";

import CardList from "@/components/CardList";

export const fetchAnime = async (
  page: number,
  limit: number,
  order: "popularity"
) => {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=${order}`
  );
  const data = await res.json();
  return <CardList data={data} />;
};
