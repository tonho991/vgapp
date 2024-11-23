import "@/styles/globals.css";
import "@/styles/prism.css"
import "@/styles/material-icons.css"

import { ToastProvider } from "@/components/ToastProvider";

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}
