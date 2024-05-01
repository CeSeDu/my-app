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
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 m-16">
        {data.map((article, index) => (
          <Link key={index} href={`/detail/${article.id}/page`} passHref>
            <div className="m-12 text-center border p-5 bg-purple-900 bg-opacity-10 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105">
              <h2 className="text-2xl text-purple-950 p-5 min-h-50">
                {article.title}
              </h2>
              {article.urlToImage && (
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  width={450}
                  height={300}
                  objectFit="cover"
                  className="rounded-lg shadow-2xl mb-5 m-auto"
                />
              )}
              <p className="text-xl p-5 text-purple-900">{article.author}</p>
              <p className="p-5">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default FullBlogCards;
