import Head from "next/head";
import Footer from "./Components/Shared/Footer";
import Menu from "./Components/Shared/Menu";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "App Presentation",
  description: "This website will paresent your application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        
      </Head>
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
