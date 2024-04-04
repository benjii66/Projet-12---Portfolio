import { Inter } from "next/font/google";
import "./globals.css";
import MetaComponent from "./components/common/metaComponent";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <MetaComponent/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
