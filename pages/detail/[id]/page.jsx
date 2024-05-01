import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;  // Kullanılacak doğru parametre
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (!router.isReady) return; // Router hazır değilse fonksiyonu durdur

    const fetchData = async () => {
      if (!id) return;  // ID yoksa fonksiyonu durdur
      const urlQuery = encodeURIComponent(id); // Arama yapılacak spesifik bir terim
      const apiUrl = `https://newsapi.org/v2/everything?q=${urlQuery}&apiKey=935002bd262b4b8392de801283519e42`;

      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      if (jsonData.articles && jsonData.articles.length > 0) {
        setArticle(jsonData.articles.find(article => article.title.toLowerCase().includes(urlQuery.toLowerCase())) || jsonData.articles[0]);
      } else {
        console.log('No articles found for this query.');
      }
    };

    fetchData();
  }, [router.isReady, id]);  // id değişikliklerini izliyoruz

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="m-12 text-center border p-5 bg-purple-900 bg-opacity-10 rounded-lg shadow-2xl cursor-pointer transform transition duration-500 hover:scale-105">
        <h2 className="text-2xl text-purple-950 p-5 min-h-50">
          {article.title || "Başlık bulunamadı"}
        </h2>
        {article.urlToImage && (
          <Image
            src={article.urlToImage}
            alt={article.title || "Görsel Başlığı"}
            width={950}
            height={300}
            objectFit="cover"
            className="rounded-lg shadow-2xl mb-5 m-auto"
          />
        )}
        <p className="text-xl p-5 text-purple-900">
          {article.author || "Yazar bilinmiyor"}
        </p>
        <p className="p-5">
          {article.description || "Açıklama mevcut değil"}
        </p>
      </div>
    </div>
  );
}

export default DetailPage;
