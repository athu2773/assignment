import "./global.css";

export const metadata = {
  title: "HLS Global Group - Empowered Workplaces",
  description: "Accountants and Global Business Advisors - Accounting, Taxation, & Business Advisory between India, Japan, and the World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body>{children}</body>
    </html>
  );
}
