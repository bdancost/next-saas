import { redirect } from 'next/navigation'

import { isAuthenticated } from '../auth/auth'

export default function AppLayout({
  children,
  teste,
  sheet,
}: Readonly<{
  children: React.ReactNode
  teste: React.ReactNode
  sheet: React.ReactNode
}>) {
  if (!isAuthenticated()) {
    redirect('/auth/sign-in')
  }

  return (
    <>
      {children}
      {teste}
      {sheet}
    </>
  )
}
