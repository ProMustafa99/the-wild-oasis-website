import React from 'react';
import Counter from '@/app/_components/Counter';

export default async function page() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1> Cabins</h1>
    </div>
  );
}
