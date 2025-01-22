import React from 'react';
import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '../_lib/data-service';


export default async function CabinList({ filter }) {

    const cabins = await getCabins();

    if (!cabins.length) return null;

    let dispalyedCbins;
    
    if (filter === "all") dispalyedCbins = cabins;

    if (filter === "small")
        dispalyedCbins = cabins.filter((cabin) => cabin.maxCapacity <= 3);

    if (filter === "medium")
        dispalyedCbins = cabins.filter((cabin) => cabin.maxCapacity > -4 && cabin.maxCapacity <= 7);

    if (filter === "large")
        dispalyedCbins = cabins.filter((cabin) => cabin.maxCapacity >= 8);


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {dispalyedCbins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    );
}
