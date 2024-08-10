const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNewsFN = async (query = "") => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?language=es&q=${query}&pageSize=15&apiKey=${NEWS_API_KEY}`
  );
  const data = await res.json();

  if (!res.ok) throw new Error("Ocurrio un error");
  return data;
};

export const getNews12FN = async (categoria, pais) => {
  console.log(categoria);
  console.log(pais);
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${categoria}&country=${pais}&pageSize=15&apiKey=${NEWS_API_KEY}`
  );
  const data = await res.json();

  if (!res.ok) throw new Error("Ocurrio un error");
  return data;
};
