"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FullBlogCards = () => {
    const [data, setData] = useState(null); // Verileri saklayacak state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2024-04-27&sortBy=popularity&apiKey=935002bd262b4b8392de801283519e42');
                const jsonData = await response.json();
                const validData = jsonData.articles.filter(article => 
                    article.title && article.description && article.urlToImage && article.author && article.urlToImage.startsWith('https')
                );
                setData(validData); // Çekilen verileri state'e set et
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // useEffect hook'unda veri çekme fonksiyonunu çağır
    }, []); // Boş bağımlılık listesi ile component mount edildiğinde bir kere çalıştır

    if (!data) {
        return <div>Loading...</div>; // Veri yükleniyorsa gösterilecek içerik
    }

    return (
        <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {data.map((article, index) => (
          <Link key={index} href={`/detail/${article.id}`} passHref>
            <div className="relative pb-48 overflow-hidden">
              {article.urlToImage && (
                <Image
                  src={article.urlToImage}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 hover:opacity-75"
                />
              )}
            </div>
            <div className="p-4">
              <h5 className="text-xl font-bold tracking-tight text-gray-900">
                {article.title}
              </h5>
              <p className="mt-3 text-base text-gray-500">
                {article.description}
              </p>
            </div>
        </Link>
      ))}
    </div>
  </div>

    );
}

export default FullBlogCards;