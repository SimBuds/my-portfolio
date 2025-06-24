import "./globals.css";

export const metadata = {
  title: "Casey's Portfolio",
  description: "Portfolio of Casey's work",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}