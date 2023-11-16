/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-unescaped-entities */
import "../globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import AppProvider from "@/component/AppContext/AppContext";
import Script from "next/script";
import { ConfigProvider } from "antd";
import vinVN from "antd/locale/vi_VN";
import PluginChat from "@/component/pluginChat/PluginChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edustar",
  description: "Generated by create next app",
  googleSiteVerification: "7NfyyKNf1wgXluHFskpe0p9TWMwbnHGVo-X8LsimyPk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-B7XT6S0MB3"
        strategy="beforeInteractive"
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B7XT6S0MB3');
        `,
        }}
        strategy="beforeInteractive"
      />

      <body className={inter.className}>
        <AppProvider>
          <Header />
          <ConfigProvider locale={vinVN}>{children}</ConfigProvider>
          <PluginChat />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
