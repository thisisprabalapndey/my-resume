import "./globals.css";

export const metadata = {
  title: "Prabal Pandey - Resume",
  description: "Business Professional specializing in Strategic Thinking, Consulting, and Data Analytics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

