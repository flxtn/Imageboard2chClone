import type { AppProps } from "next/app";
import { AppProvider } from "./app-providers";
import { Inter } from "next/font/google";
//
//const inter = Inter({ subsets: ["latin"] });

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  );
}

//className={inter.className}
