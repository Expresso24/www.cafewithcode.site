import "./globals.css";

export const metadata = {
  title: "Caffe with Code",
  description: "A cozy place for devs ☕👨‍💻",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <header style={{ background: "#222", color: "white", padding: "1rem" }}>
          <h2 style={{ margin: 0 }}>☕ Caffe with Code</h2>
        </header>
        {children}
        <footer
          style={{
            background: "#222",
            color: "white",
            padding: "1rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <p>© 2025 Caffe with Code</p>
        </footer>
      </body>
    </html>
  );
}
