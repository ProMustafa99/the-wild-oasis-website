import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <ul className=''>

      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/cabins">Cabins</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/account">Your Account</Link>
      </li>
    </ul>
  );
}
