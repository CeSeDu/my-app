import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;  // Kullanılacak doğru parametre (URL'den gelen)
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;  // Router hazır değilse fonksiyonu durdur

    const fetchData = async () => {
      if (!id) return;  // ID yoksa fonksiyonu durdur
      const urlQuery = encodeURIComponent(id);
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      // Çevre değişkeninden API anahtarını al (env dosyasında tanımlı)
      const apiUrl = `https://newsapi.org/v2/everything?q=${urlQuery}&from=2024-04-27&sortBy=popularity&apiKey=${apiKey}`;

      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      if (jsonData.articles && jsonData.articles.length > 0) {
        setArticle(
          jsonData.articles.find((article) => 
            article.title.toLowerCase().includes(urlQuery.toLowerCase())
          ) || jsonData.articles[0]
        );  // Eşleşen ilk makaleyi veya yoksa ilk makaleyi seç
      } else {
        console.log("No articles found for this query.");
      }
    };

    fetchData();
  }, [router.isReady, id]);  // id'nin değişikliklerini izle

  if (!article) {
    return <div>Loading...</div>;  // Makale yüklenene kadar yükleme mesajı
  }

  return (
    <div className="container mx-auto p-4">
      <div className="m-12 text-center border p-5 bg-opacity-10 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl text-purple-950 p-5 min-h-50">
          {article.title || "Başlık bulunamadı"}
        </h2>
        {article.urlToImage && (
          <Image
            src={article.urlToImage}
            alt={article.title || "Görsel Başlığı"}
            width={950}
            height={300}
            objectFit="fill"
            className="rounded-lg shadow-2xl mb-5 m-auto"
          />
        )}
        <div className="text-xl p-5 text-purple-900 flex justify-between">
          <p className="p-10">{article.author || "Yazar bilinmiyor"}</p>
          <p>{article.publishedAt || "Tarih bilinmiyor"}</p>
        </div>
        <p className="p-5">
          {article.description || "Açıklama mevcut değil"}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center p-5 border bg-purple-200 rounded-lg m-auto w-1/4"
        >
          <button className="text-gray-600">Read All</button>
        </a>
      </div>
    </div>
  );
};

export default DetailPage;
