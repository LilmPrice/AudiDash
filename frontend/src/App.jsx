import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
        📊 Audiology Dashboard
      </h1>
      <Dashboard />
    </div>
  );
}