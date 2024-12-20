import '../globals.css'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full flex justify-center">
      <div className="container py-4 min-h-screen">{children}</div>
    </div>
  )
}
