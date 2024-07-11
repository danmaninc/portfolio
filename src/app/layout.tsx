import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/src/app/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <header className="flex flex-row gap-[1.75rem] justify-center my-20">
          <Link href={"/"}>
            <div className="w-fit h-[2.5rem] bg-[#262626] rounded-2xl items-center flex px-8 text-xl font-semibold">
              Home
            </div>
          </Link>
          <Link href={"/hw2"}>
            <div className="w-fit h-[2.5rem] bg-[#262626] rounded-2xl items-center flex px-8 text-xl font-semibold">
              Comic
            </div>
          </Link>
          <Link href={"/isaac"}>
            <div className="w-fit h-[2.5rem] bg-[#262626] rounded-2xl items-center flex px-8 text-xl font-semibold">
              Isaac
            </div>
          </Link>
        </header>
        {children}
        <footer className="flex w-full text-center justify-center text-white/50 my-20">
          © Daniil Nikulin, 2024
          <br />
          Carpe diem, memento mori
        </footer>
      </body>
    </html>
  );
}
