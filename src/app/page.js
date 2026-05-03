"use client";

export default function Home() {

  const openInPiBrowser = () => {
    const url = "https://jamiu.vercel.app";

    const isPiBrowser = navigator.userAgent.toLowerCase().includes("pibrowser");

    // If already inside Pi Browser, just open normally
    if (isPiBrowser) {
      window.location.href = url;
      return;
    }

    // Try opening Pi Browser
    window.location.href = `pi://browser?url=${encodeURIComponent(url)}`;

    // Fallback if Pi Browser fails
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1500);
  };

  const isPiBrowser =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("pibrowser");

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
          {isPiBrowser
            ? "You are inside Pi Browser ✅"
            : "Open inside Pi Browser for best experience"}
        </p>

        <button
          onClick={openInPiBrowser}
          disabled={isPiBrowser}
          style={{
            marginTop: "15px",
            padding: "12px 18px",
            borderRadius: "8px",
            border: "none",
            cursor: isPiBrowser ? "not-allowed" : "pointer",
            background: isPiBrowser ? "#555" : "#4f7cff",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Open in Pi Browser
        </button>

      </div>

    </main>
  );
}