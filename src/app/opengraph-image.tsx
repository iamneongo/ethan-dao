import { ImageResponse } from "next/og";

export const alt = "Ethan Dao — Realtor, Dallas–Fort Worth Real Estate";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#14110c",
          color: "#ffffff",
          padding: "84px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#f7bf0d",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              border: "3px solid #f7bf0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            ED
          </div>
          EXP REALTY · TEXAS ACE TEAM
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 800,
            lineHeight: 1,
            marginTop: 34,
            letterSpacing: -5,
          }}
        >
          <span>ETHAN&nbsp;</span>
          <span style={{ color: "#f7bf0d" }}>DAO</span>
        </div>

        <div style={{ display: "flex", fontSize: 42, marginTop: 28, color: "rgba(255,255,255,0.88)" }}>
          Realtor · Top Producer 2024 &amp; 2025
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 12, color: "rgba(255,255,255,0.6)" }}>
          Dallas–Fort Worth Metroplex, Texas
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            height: 8,
            width: 200,
            background: "#f7bf0d",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
