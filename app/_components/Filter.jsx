"use client";

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const activeFilter = searchParams.get("capacity") ?? "all";
    console.log(activeFilter);
    function handlerFilter(filter) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('capacity', filter);
        router.replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className='border border-primary-800 flex'>

            <Button handlerFilter={handlerFilter} filter='all' activeFilter={activeFilter}>
                All Cabins
            </Button>

            <Button handlerFilter={handlerFilter} filter='small' activeFilter={activeFilter}>
                1&mdash; 3 guests
            </Button>

            <Button handlerFilter={handlerFilter} filter='medium' activeFilter={activeFilter}>
                4&mdash; 8 guests
            </Button>

            <Button handlerFilter={handlerFilter} filter='large' activeFilter={activeFilter}>
                8&mdash; 12 guests
            </Button>
        </div>
    );
}


function Button({ filter, handlerFilter, activeFilter, children }) {
    return <button className={`${filter === activeFilter ? 'bg-primary-700' : ""} px-5 py-2 hover:bg-primary-700`} onClick={() => handlerFilter(filter)}>
        {children}
    </button>
}