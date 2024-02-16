"use client"
import { useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import NewReaction from '@/components/Reactions/NewReaction'
import { useSession } from 'next-auth/react';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const { data: session, status } = useSession();
  let uuid = session?.user?.id;

  if (!uuid) return 'Loading...';
  
  return (
    <>
      <Header />
      <main>
          <NewReaction userId={uuid} openModal={openModal} />
      </main>
      <Footer />
    </>
  )
}
