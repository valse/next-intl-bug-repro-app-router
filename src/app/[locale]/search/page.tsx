"use client";

import { Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const activity = searchParams.get("activity");

  const hasBug = !destination;

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "40px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Search Results</h1>

      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: hasBug ? "#fee2e2" : "#ecfdf5",
        }}
      >
        <p>
          Destination: <strong>{destination || "EMPTY (BUG!)"}</strong>
        </p>
        <p>
          Activity: <strong>{activity || "EMPTY (BUG!)"}</strong>
        </p>
      </div>

      {hasBug && (
        <p style={{ color: "#b91c1c" }}>
          <strong>Observation:</strong> Query parameters are missing. The router
          failed to preserve them during navigation.
        </p>
      )}

      <div style={{ marginTop: "30px" }}>
        <Link
          href="/"
          style={{ color: "#3b82f6", textDecoration: "underline" }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
