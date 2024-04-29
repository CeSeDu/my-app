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
      <div className="flex flex-wrap gap-5 justify-center">
        {" "}
        <div className="flex flex-wrap gap-5 justify-center">
          {data.map((article, index) => (
            <Link key={index} href={`/detail/${article.id}`} passHref>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {data.map((article, index) => (
                  <div
                    key={index}
                    className="text-center border p-5 bg-purple-900 bg-opacity-10 rounded-lg shadow-2xl cursor-pointer"
                  >
                    <h2 className="text-2xl text-purple-950 p-5 min-h-50">
                      {article.title}
                    </h2>
                    {article.urlToImage && (
                      <div className="flex justify-center">
                        <Image
                          src={article.urlToImage}
                          alt={article.title}
                          width={450}
                          height={550}
                          layout="intrinsic"
                          className="rounded-lg shadow-2xl"
                        />
                      </div>
                    )}
                    <p className="text-xl p-5 text-purple-900">
                      {article.author}
                    </p>
                    <p className="p-5">{article.description}</p>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>{" "}
      </div>
    </>
  );
};

export default FullBlogCards;
