"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimeProp } from "./AnimeCard";
import CardList from "./CardList";
let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<JSX.Element[]>([]);
  useEffect(() => {
    if (inView) {
      fetchAnime(2, 20, "popularity")
        .then((res) => {
          setData([...data, res]);
          page++;
        })
        .catch((err: any) => {
          alert(err.toString());
        });
    }
  }, [inView, data]);
  return (
    <>
      {data}
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
