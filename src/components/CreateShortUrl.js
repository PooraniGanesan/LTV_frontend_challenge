import { useState } from "react";
import { createUrl } from "../services/UrlService";

function CreateShortUrl() {
  const [fullUrl, setFullUrl] = useState("");
  const [shortCode, setShortCode] = useState(null);
  const [error, setError] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setShortCode(null);
    try {
      const result = await createUrl(fullUrl);
      setShortCode(result.short_code);
    } catch (err) {
      console.log("hhh")
      if (err.response && err.response.data) {
        setError(err.response.data.errors);
      } else {
        setError("Failed to shorten URL");
      }
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {shortCode && (
        <div>
          Short URL:{" "}
          <a
            href={`http://localhost:3000/${shortCode}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            http://localhost:3000/{shortCode}
          </a>
        </div>
       )}
    </div>
);
}

export default CreateShortUrl;
