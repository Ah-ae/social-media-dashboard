import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html {
          margin: 0;
          padding: 0;
          font-family: ${inter.style.fontFamily};
          font-size: 14px;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
