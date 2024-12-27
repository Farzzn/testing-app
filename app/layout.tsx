// app/layout.tsx file

import Link from 'next/link' // import linking component
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {/* Define Header Element of App Layout */}
        <header>
            <h1>Next JS Navigation and Linking</h1>

            {/* Define Navigation bar inside header */}
            <ul> 
                <li><Link href="/">Home</Link></li> 
                {/*<li><Link href="/products/">Products</Link></li>*/}
                <li><Link href="/contacts/">Contacts</Link></li>
                <li><Link href="/about">About Us</Link></li>
            </ul>
        </header>

        {/* Section to call rest of components */ }
        <main>{children}</main> 
      </body>
    </html>
  );
}