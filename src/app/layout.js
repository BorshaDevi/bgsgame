import Layout from "@/component/Layout";
import "./globals.css";



export const metadata = {
  title: "betqix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#f1f1f1] w-full min-h-screen '>
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  );
}
