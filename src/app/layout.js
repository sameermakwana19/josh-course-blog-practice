import React from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";

import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  BLOG_TITLE,
  COLOR_THEME_COOKIE_NAME,
} from "@/constants";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";
import { cookies } from "next/headers";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

// TODO: Exercise 3 - MetaData API
export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

function RootLayout({ children }) {
  // TODO: Dynamic theme depending on user preference
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
  const theme = savedTheme?.value || "dark";

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <Header initialTheme={theme} />
        {/* <ThemeProvider value={{ theme, toggleTheme }}> */}
        <main>{children}</main>
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
