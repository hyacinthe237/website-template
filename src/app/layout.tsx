import HeaderComponent from './components/header/header'
import BodyComponent from './components/body/body'

import './globals.css'

export const metadata = {
  title: 'NextJs Website Template',
  description: 'by Hyacinthe ABANDA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderComponent />
        <BodyComponent />
        {children}
        </body>
    </html>
  )
}
