"use client";

export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0b0f1a",
      color: "white",
      fontFamily: "Arial"
    }}>
      
      <div style={{
        background: "#151c2e",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        width: "320px"
      }}>
        
        <h2>🚀 My Web3 dApp</h2>

        <p style={{ fontSize: "14px", opacity: 0.8 }}>
          Open inside wallet browser for best experience
        </p>

        <button
          style={{
            marginTop: "15px",
            padding: "12px 18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#4f7cff",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Open in Pi Browser
        </button>

        {/* Clickable Pi link */}
        <a
          href="Pi://jamiu.vercel.app"
          style={{
            display: "block",
            marginTop: "12px",
            fontSize: "12px",
            opacity: 0.7,
            color: "#7aa2ff",
            textDecoration: "underline"
          }}
        >
          Pi://jamiu.vercel.app
        </a>

      </div>

    </main>
  );
}