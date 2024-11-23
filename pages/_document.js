import { Html, Head, Main, NextScript } from "next/document";
import ActionBar from "../components/ActionBar";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className="antialiased">
        <ActionBar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
