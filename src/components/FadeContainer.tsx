import React from "react";
import type { ReactNode } from "react";

interface FadeContainerProps {
  children: ReactNode;
}

const FadeContainer: React.FC<FadeContainerProps> = ({ children }) => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>{children}</div>

      {/* Fade sinistro */}
      <div style={leftFadeStyle} />

      {/* Fade destro */}
      <div style={rightFadeStyle} />
    </div>
  );
};

// Stili in oggetti
const containerStyle: React.CSSProperties = {
  position: "relative",
  backgroundColor: "#F4F4F4",
  overflow: "hidden",
};

const contentStyle: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
};

const leftFadeStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "60px", // regola larghezza dissolvenza
  height: "100%",
  background: "linear-gradient(to right, #F4F4F4 0%, transparent 100%)",
  zIndex: 2,
};

const rightFadeStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  right: 0,
  width: "60px",
  height: "100%",
  background: "linear-gradient(to left, #F4F4F4 0%, transparent 100%)",
  zIndex: 2,
};

export default FadeContainer;
