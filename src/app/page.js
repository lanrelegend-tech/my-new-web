"use client";

export default function Home() {

 const openInPiBrowser = () => {
  const url = "https://jamiu.vercel.app";
  const encoded = encodeURIComponent(url);

  const isPi =
    typeof navigator !== "undefined" &&
    navigator.userAgent.toLowerCase().includes("pi");

  // If already inside Pi Browser, open normally
  if (isPi) {
    window.location.href = url;
    return;
  }

  // Try Pi Browser deep links (some devices support one or the other)
  window.location.href = `pi://open_url?url=${encoded}`;

  // fallback attempt after short delay
  setTimeout(() => {
    window.location.href = `pi://browser?url=${encoded}`;

    // final fallback to normal browser
    setTimeout(() => {
      window.open(url, "_blank");
    }, 1200);
  }, 1200);
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