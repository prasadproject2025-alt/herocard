import { Inter, Lora, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], weight: ["700"], variable: "--font-lora" });
const roboto = Roboto({ subsets: ["latin"], weight: ["700"], variable: "--font-roboto" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-jakarta" });

export const metadata = {
  title: "CampusPe — Connect 10X Faster",
  description: "One platform connecting students, colleges & employers — faster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lora.variable} ${roboto.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
