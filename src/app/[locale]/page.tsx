"use client";

import { Link, useRouter } from "@/i18n/navigation";

const buttonStyle = {
  padding: "12px 20px",
  cursor: "pointer",
  border: "none",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "600",
  marginTop: "10px",
  marginRight: "10px",
  color: "white",
};

export default function HomePage() {
  const router = useRouter();

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "40px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>Bug Repro: next-intl router.push</h1>

      {/* TEST CASE 1: Il metodo che genera il bug */}
      <div style={{ marginBottom: "30px" }}>
        <h3>1. Imperative Navigation (Implicit Locale)</h3>
        <button
          onClick={() =>
            router.push("/search?destination=Milano&activity=hiking")
          }
          style={{ ...buttonStyle, backgroundColor: "#3b82f6" }}
        >
          Push Milano (No locale)
        </button>
        <button
          onClick={() =>
            router.push("/search?destination=Roma&activity=culture")
          }
          style={{ ...buttonStyle, backgroundColor: "#ef4444" }}
        >
          Push Roma (No locale)
        </button>
        <p>
          <small>
            <strong>Result:</strong> Fails on Vercel after 1st navigation
            (cached/empty params).
          </small>
        </p>
      </div>

      {/* TEST CASE 2: Il metodo che risolve forzando il locale */}
      <div
        style={{
          marginBottom: "30px",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <h3>2. Imperative Navigation (Explicit Locale /it/)</h3>
        <button
          onClick={() =>
            router.push("/it/search?destination=Venezia&activity=gondola")
          }
          style={{ ...buttonStyle, backgroundColor: "#10b981" }}
        >
          Push Venezia (/it/)
        </button>
        <button
          onClick={() =>
            router.push("/it/search?destination=Napoli&activity=food")
          }
          style={{ ...buttonStyle, backgroundColor: "#10b981" }}
        >
          Push Napoli (/it/)
        </button>
        <p>
          <small>
            <strong>Result:</strong> Works perfectly on Vercel because
            middleware skips normalization.
          </small>
        </p>
      </div>

      {/* TEST CASE 3: Il metodo dichiarativo */}
      <div
        style={{
          marginBottom: "30px",
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
        }}
      >
        <h3>3. Declarative Navigation (next-intl Link)</h3>
        <Link
          href={{
            pathname: "/search",
            query: { destination: "Firenze", activity: "art" },
          }}
          style={{
            ...buttonStyle,
            backgroundColor: "#8b5cf6",
            display: "inline-block",
            textDecoration: "none",
          }}
        >
          Link to Firenze
        </Link>
        <p>
          <small>
            <strong>Result:</strong> Works perfectly every time (Recommended).
          </small>
        </p>
      </div>
    </div>
  );
}
