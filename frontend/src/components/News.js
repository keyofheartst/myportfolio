import { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8002/api/news/")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main style={{ maxWidth: "800px", margin: "3rem auto", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>
        Latest Dev.to Articles
      </h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading latest articles...</p>
      ) : (
        <div>
          {articles.map((a, index) => (
            <article
              key={index}
              style={{
                marginBottom: "2rem",
                padding: "1.5rem",
                border: "1px solid #eee",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#1976d2",
                  fontSize: "1.3rem",
                  fontWeight: "500",
                }}
              >
                {a.title}
              </a>
              <p style={{ marginTop: "0.5rem", color: "#555" }}>
                {a.description}
              </p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default News;
