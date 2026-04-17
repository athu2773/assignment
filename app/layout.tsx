import "./global.css";

import { ReactNode } from "react";

export const metadata = {
  title: `My Assignment DotNet`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
