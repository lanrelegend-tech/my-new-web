"use client";

export default function Home() {

  const openInWalletBrowser = () => {
    const url = "https://jamiu.vercel.app";
    const encoded = encodeURIComponent(url);

    const ua = navigator.userAgent.toLowerCase();

    // Pi Browser
    if (ua.includes("pibrowser")) {
      window.location.href = url;
      return;
    }

    // Trust Wallet
    if (ua.includes("trust")) {
      window.location.href = `trust://open_url?url=${encoded}`;
      return;
    }

    // MetaMask
    if (ua.includes("metamask")) {
      window.location.href = `metamask://dapp/${url}`;
      return;
    }

    // Phantom
    if (ua.includes("phantom")) {
      window.location.href = `phantom://browse/${url}`;
      return;
    }

    // OKX Wallet
    if (ua.includes("okx")) {
      window.location.href = `okx://dapp?url=${encoded}`;
      return;
    }

    // Fallback attempt (generic deep link)
    window.location.href = `pi://browser?url=${encoded}`;

    setTimeout(() => {
      window.open(url, "_blank");
    }, 1500);
  };

  const ua = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
  const isPiBrowser = ua.includes("pibrowser");

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
            ? "Wallet Browser detected ✅"
            : "Open in your wallet browser for best experience"}
        </p>

        <button
          onClick={openInWalletBrowser}
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
          Open dApp
        </button>

      </div>

    </main>
  );
}