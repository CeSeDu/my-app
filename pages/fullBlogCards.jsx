"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const FullBlogCards = () => {
  const [data, setData] = useState(null); // Verileri saklayacak state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=Apple&from=2024-04-27&sortBy=popularity&apiKey=935002bd262b4b8392de801283519e42"
        );
        const jsonData = await response.json();
        const validData = jsonData.articles.filter(
          (article) =>
            article.title &&
            article.description &&
            article.urlToImage &&
            article.author &&
            article.urlToImage.startsWith("https")
        );

        setData(validData); // Çekilen verileri state'e set et
        console.log(validData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // useEffect hook'unda veri çekme fonksiyonunu çağır
  }, []); // Boş bağımlılık listesi ile component mount edildiğinde bir kere çalıştır

  if (!data) {
    return <div>Loading...</div>; // Veri yükleniyorsa gösterilecek içerik
  }

  return (
    <>
        {data.map((article, index) => (
          <Link className="bg-purple-900 m-24"  key={index} href={`/detail/${encodeURIComponent(article.title)}/page`} passHref>         
            <div className="m-12 border p-5 bg-opacity-10 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105 ">
            <h2 className="text-4xl font-semibold text-purple-950 p-5">
                {article.title}
              </h2>
              <div className="flex">
              {article.urlToImage && (
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  width={450}
                  height={300}
                  objectFit="cover"
                  className="rounded-lg shadow-2xl mb-5 "
                />
              )}
              <div className="">
              <p className="text-xl p-5 text-purple-900">{article.author}</p>
              <p className="p-5 ">{article.description}</p>
              </div>
              </div>
            </div>
          </Link>

        ))}
    </>
  );
};

export default FullBlogCards;
