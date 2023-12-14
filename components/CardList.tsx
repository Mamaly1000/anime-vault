import React from "react";
import AnimeCard, { AnimeProp } from "./AnimeCard";

const CardList = ({ data }: { data: AnimeProp[] }) => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))}
    </section>
  );
};

export default CardList;
