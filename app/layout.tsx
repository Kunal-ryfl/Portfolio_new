import "./globals.css";
import { Fira_Sans } from "next/font/google";
import Sidebar from "./(component)/Sidebar";
import { AnimatePresence } from "framer-motion";
const font = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "200", "600", "900"],
});

export const metadata = {
  title: "Kunal Bhardwaj",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className=" flex   justify-center md:pt-36 min-h-screen    text-white bg-neutral-900">
        <div className="  w-full max-w-5xl flex flex-col md:flex-row  ">
          <Sidebar />
          <div className="  px-4  relative  md:px-20 py-2">{children}</div>
        </div>
      </body>
    </html>
  );
}
