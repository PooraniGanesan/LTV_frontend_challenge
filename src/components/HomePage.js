import { useEffect, useState } from "react";
import { getTopUrls } from "../services/UrlService";


function HomePage() {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
    async function fetchData() {
      const res = await getTopUrls();
      console.log("jjj");
      console.log(res.data)
      setUrls(res.urls);
    }
    fetchData();
  }, []);


  return (
    <div>
        <ul>
          <li> Short code {" " } Title </li>
          {urls.map((url) => (
            <li key={url.id}>
              <a
                href={url.full_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"http://localhost:3000/"+url.short_code}
              </a>{" "}
               {url.title}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default HomePage;
