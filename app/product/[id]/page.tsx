// app/product/[id]/page.tsx

"use client"
import { useParams } from 'next/navigation';
import Link from 'next/link'

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product {id}</h1>
      <p>This is the product page for item {id}.</p>
      <ul>
        <li><Link href="/products">Go to Products</Link></li>
        <li><Link href="/">Go Home</Link></li>
      </ul>
    </div>
  );
}