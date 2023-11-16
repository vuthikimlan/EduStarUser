/* eslint-disable @next/next/no-img-element */
import React from "react";

import { getNewsById, getAllNews } from "@/api/apiNews";
import Link from "next/link";

async function PageDetailNews({ params }) {
  const { id } = params;
  let itemNew = null;
  const resDetailNew = await getNewsById(params.id);
  itemNew = resDetailNew?.data;

  const listNew = await getAllNews();
  let news = null;
  let sortedNews = [];
  let latestNews = [];
  if (listNew) {
    // console.log("thành công  ",listNew?.data?.items);
    news = listNew?.data?.items;

    sortedNews = news.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
    // console.log(sortedNews);

    latestNews = sortedNews.slice(0, 7);
    // console.log("latestNews", latestNews);
  }

  // console.log(params.id);

  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="grid grid-cols-4 gap-[2rem] my-[6%]">
        <div className="col-span-3 m-[5rem]">
          <div dangerouslySetInnerHTML={{ __html: itemNew?.content }}></div>
        </div>
        <div className="col-span-1">
          {latestNews.map((item, index) => (
            <div key={index} className="flex">
              <div className="mb-[30px]">
                <Link key={item.id} href={`/new/${item.id}`} className="flex">
                  <img src={item?.image} alt="" width={190} />
                  <div>
                    <h3 className=" ml-[15px] text-[15px] ">{item?.name} </h3>
                    <p
                      // dangerouslySetInnerHTML={{ __html: item.content }}
                      className="text-[#333]  line-clamp-1 mb-[3rem] ml-[15px] "
                    >
                      {item?.description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PageDetailNews;
