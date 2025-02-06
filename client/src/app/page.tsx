async function loader() {
  const path = "/api/home-page";
  const BASE_URL = "http://localhost:1337";
  const url = new URL(path, BASE_URL);
  const response = await fetch(url.href);
  const responseData = await response.json();
  console.log("URL IS : ", url);
  return { ...responseData.data };
}

export default async function Home() {
  const data = await loader();
  console.log("DATA IS : ", data);
  return (
    <div>
      <h1>{data.Title}</h1>
      <h2>{data.Description}</h2>
    </div>
  );
}
