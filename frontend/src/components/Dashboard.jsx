import { useEffect, useState } from "react";

export default function Dashboard() {
  const [kpis, setKpis] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => {
        if (!res.ok) throw new Error("API request failed");
        return res.json();
      })
      .then(setKpis)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!kpis) return <p>Loading KPIs…</p>;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "1.5rem"
    }}>
      {Object.entries(kpis).map(([label, value]) => (
        <div
          key={label}
          style={{
            padding: "1rem",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          <h3 style={{ color: "#777", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            {label.replace(/([A-Z])/g, " $1")}
          </h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>{value}</p>
        </div>
      ))}
    </div>
  );
}