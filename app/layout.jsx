import React from 'react';
import Headar from "@/app/_components/Header";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import ReservationProvider from './_components/ReservationContext';

const jsosefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap"
});

export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "The Wild Oasis"
  },

  description: "Mustafa Test"
}


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=
        {`
          ${jsosefin.className} 
          bg-primary-950 text-primary-50 
          min-h-screen
          flex 
          flex-col
          relative 
      `}>

        <Headar />

        <div className='flex-1 px-8 py-12 '>
          <main className='max-w-7xl mx-auto w-full' >
            <ReservationProvider>
              {children}
            </ReservationProvider>

          </main>
        </div>


        <footer>
          Copyright by The Wild Oasis
        </footer>
      </body> 
    </html>
  );
}
