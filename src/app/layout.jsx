import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactShortcuts from "../components/ContactShortcuts";

export const metadata = {
  title: "Deore Door And Modular Furniture - Nashik",
  description: "Deore Door And Modular Furniture is a trusted name in Nashik for high-quality doors and modular furniture. We deliver products that combine strength, style, and sophistication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="app">
          <Header />
          <main>{children}</main>
          <Footer />
          <ContactShortcuts />
        </div>
      </body>
    </html>
  );
}
