import Link from 'next/link'

export default function Products() {
    return (
        <div>
        <h2>Here are list of products</h2>

        <ul>
            <li><Link href="/product/IPhone"> Iphone</Link></li>
            <li><Link href="/product/Mac-Mini"> Mac Mini</Link></li>
            <li><Link href={"/product/Mac-Book-Pro"}>Mac Book Pro</Link></li>
            <li><Link href="/product/Air-Pods-Pro">Air Pods Pro</Link></li>
        </ul>

        <Link href="/">Go Home</Link></div>
  );
}