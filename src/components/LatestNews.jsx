import React from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";

const LatestNews = () => {
  const { articles } = useLoaderData();

  // console.log(news);
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>

      <Marquee className="flex gap-5 font-bold" pauseOnHover={true} speed={60}>
        {articles.map((singleArticle) => (
          <p className="pl-3">{singleArticle.description}</p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
