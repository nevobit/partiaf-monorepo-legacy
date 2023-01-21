import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import "../styles/globals.css";

const inter = Poppins({
  weight: ["100", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
