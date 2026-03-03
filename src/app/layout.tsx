import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MetricFlow — Real-time Analytics Dashboard",
  description: "Monitor your key metrics with real-time dashboards and intelligent alerts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0a0a0a', color: '#fafafa' }}>
        {children}
      </body>
    </html>
  );
}
