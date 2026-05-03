"use client";

export default function Home() {

const openInPiBrowser = () => {
  const url = "https://jamiu.vercel.app";
  const encoded = encodeURIComponent(url);

  const isPi =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("pi");

  // If inside Pi Browser already → just open site
  if (isPi) {
    window.location.href = url;
    return;
  }

  // Try ONLY valid Pi deep link
  const piLink = `pi://open_url?url=${encoded}`;

  const win = window.open(piLink, "_self");

  // fallback if blocked after short delay
  setTimeout(() => {
    if (!win || win.closed) {
      window.location.href = url;
    }
  }, 1500);
};
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
          onClick={openInPiBrowser}
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

      </div>

    </main>
  );
}