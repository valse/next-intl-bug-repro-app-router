"use client";

import { Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// 1. Sposta tutta la logica che usa useSearchParams in un sottocomponente
function SearchParamsContent() {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const activity = searchParams.get("activity");

  const hasBug = !destination;

  return (
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
      {hasBug && (
        <p style={{ color: "#b91c1c" }}>
          <strong>Observation:</strong> Query parameters are missing.
        </p>
      )}
    </div>
  );
}

// 2. La pagina principale ora usa Suspense
export default function SearchPage() {
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

      {/* Il Suspense avvolge il componente che legge gli searchParams */}
      <Suspense fallback={<div>Loading search results...</div>}>
        <SearchParamsContent />
      </Suspense>

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
