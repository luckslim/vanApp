import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./providers";
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VanApp",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
