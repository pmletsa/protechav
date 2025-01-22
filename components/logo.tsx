import Image from 'next/image';
import Link from 'next/link';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src="/logo.png"
        alt="Protech AV Logo"
        width={48}
        height={48}
        className="h-12 w-auto"
      />
    </Link>
  );
}