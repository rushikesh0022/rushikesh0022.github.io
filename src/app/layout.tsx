import type { Metadata } from "next";
import "../lib/styles/globals.css";
import { LoadingProvider } from "./_components/LoadingProvider";
import ClientLayout from "./_components/ClientLayout";

export const metadata: Metadata = {
  title: "Rushikesh Reddy - Portfolio",
  description: "Full-stack developer specializing in modern web technologies, AI integration, and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen grid-lines" suppressHydrationWarning={true}>
        <LoadingProvider>
          <ClientLayout>{children}</ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
