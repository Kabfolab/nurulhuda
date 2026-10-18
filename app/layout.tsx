export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="m-0 antialiased font-sans">{children}</body>
    </html>
  )
}
