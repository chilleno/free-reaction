"use client"
import { useEffect, useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import NewReaction from '@/components/Reactions/NewReaction'
import { useSession } from 'next-auth/react';
import supabase from '@/utils/supabase';
import { LinkIcon } from '@heroicons/react/20/solid'
import EmptyState from '@/components/Reactions/EmptyState'
import { Container } from '@/components/Container'

export default function Home() {
  const [reactions, setReactions] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const { data: session, status } = useSession();
  let uuid = session?.user?.id;

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      window.alert('Copied to clipboard!');
    }, 100);
  }

  //create a function that format seconds to minutes:seconds eg. 60 to 1:00
  const formatSeconds = (seconds: number) => {
    let date = new Date(0);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5);
  }

  const getReactions = async () => {
    const { data, error } = await supabase
      .from('reactions')
      .select('*')
      .eq('user_id', uuid)
    if (error) {
      console.log('error', error)
    } else {
      setOpenModal(false);
      setReactions(data);
    }
  }

  const deleteReaction = async (id: string) => {
    if (!confirm('Are you sure you want to delete this reaction?')) return;

    const { error } = await supabase
      .from('reactions')
      .delete()
      .eq('id', id)
    if (error) {
      console.log('error', error)
    } else {
      getReactions();
    }
  }

  useEffect(() => {
    if (status === 'loading') return
    if (status === 'unauthenticated') location.replace('/')
    getReactions();
  }, [status]);

  if (!uuid) return 'Loading...';

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">Reactions</h1>
                <p className="mt-2 text-sm text-gray-700">
                  A list of all the reactions you have created
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-[#2f6b2f] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1b3f1b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => setOpenModal(true)}
                >
                  Create new reaction
                </button>
              </div>
            </div>
            {
              reactions.length > 0 && (

                <div className="mt-8 flow-root">
                  <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                Title
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Youtube Reaction video
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Crunchyroll video
                              </th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Reaction start at
                              </th>
                              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Copy link</span>
                              </th>
                              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Edit</span>
                              </th>
                              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span className="sr-only">Delete</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {reactions.map((reaction) => (
                              <tr key={reaction.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {reaction.title}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <a href={"https://www.youtube.com/watch?v=" + reaction.youtube_video_code} target="_blank" className="text-[#2f6b2f] hover:text-[#1b3e1b]">
                                    Go to video
                                  </a>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  <a href={reaction.reacted_content_url} target="_blank" className="text-[#2f6b2f] hover:text-[#1b3e1b]">
                                    Go to video
                                  </a>
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatSeconds(reaction.reaction_start_time)}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <button
                                    onClick={() => handleCopyUrl("https://www.reaction-free.com/s/" + reaction.id)}
                                    className="group inline-flex items-center font-medium text-[#2f6b2f] hover:text-[#387538]"
                                  >
                                    <LinkIcon
                                      className="h-5 w-5 text-[#2f6b2f] group-hover:text-[#387538]"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2">Copy link</span>
                                  </button>
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <a href="#" className="text-[#2f6b2f] hover:text-[#1b3e1b]">
                                    Edit<span className="sr-only">, {reaction.name}</span>
                                  </a>
                                </td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <button
                                    onClick={() => deleteReaction(reaction.id)}
                                    className="group inline-flex items-center font-medium text-[#2f6b2f] hover:text-[#387538]"
                                  >
                                    <span className="ml-2">Delete</span>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            {
              reactions.length === 0 && (
                <EmptyState onClickHandler={() => setOpenModal(true)} />
              )
            }
          </div>
        </Container>
        <NewReaction userId={uuid} open={openModal} closeModal={() => setOpenModal(false)} getReactions={getReactions} />
      </main>
      <Footer />
    </>
  )
}
