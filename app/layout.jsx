import "./globals.css";

export const metadata = {
  title: "Modern Business Agent Logo",
  description:
    "Professional corporate branding concept with an abstract agent logo in blue and silver tones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app-body">{children}</body>
    </html>
  );
}
