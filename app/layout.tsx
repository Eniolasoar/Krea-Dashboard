
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";


export const metadata: Metadata = {
  title: "Krea Dashboard | Home",
  description: "Created by Eniola Anishe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      
      >
       <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
