"use client"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { LinkIcon } from '@heroicons/react/20/solid'
import supabase from '@/utils/supabase';

const NewReaction = ({ userId, openModal }: { userId: string, openModal:boolean }) => {

    const [open, setOpen] = useState(openModal)
    const [title, setTitle] = useState<string>('')
    const [startAt, setStartAt] = useState('')
    const [youtubeLink, setYoutubeLink] = useState('')
    const [reactedContent, setReactedContent] = useState('')

    const handleYoutubeLink = (element: any) => {
        element.preventDefault()
        const value = element.target.value
        try {
            const url = new URL(value);
            const getParam = url.searchParams.get('v');
            if (getParam !== null || getParam !== undefined || getParam !== '') {
                setYoutubeLink(getParam || '')
            }
        } catch (e) {
            element.target.value = ''
        }
    }

    const handleValidateStartAt = (element: any) => {
        element.preventDefault()
        const value = element.target.value
        const regex = new RegExp('^[0-5]?[0-9]:[0-5][0-9]$')
        if (regex.test(value)) {
            setStartAt(value)
        } else {
            if (value === '') {
                element.target.value = ''
            } else {
                element.target.value = startAt
            }
        }
    }

    //function that receives value in this format: 2:30 and returns in seconds
    const convertToSeconds = (time: string) => {
        const timeArray = time.split(':')
        const minutes = parseInt(timeArray[0])
        const seconds = parseInt(timeArray[1])
        return (minutes * 60) + seconds
    }

    //create function to insert with supabase adapter 
    const handleSave = async (e:any) => {
        e.preventDefault()
        if (title === '') {
            alert('The reaction name is required');
            return
        }

        if (startAt === '') {
            alert('The reaction start time is required');
            return
        }

        if (youtubeLink === '') {
            alert('The youtube link is required');
            return
        }

        if (reactedContent === '') {
            alert('The crunchyroll video link is required');
            return
        }

        const { error, status, statusText } = await supabase
            .from('reactions')
            .insert({ title: title, reaction_start_time: convertToSeconds(startAt), youtube_video_code: youtubeLink, user_id: userId, reacted_content_url: reactedContent })
        if (status === 201) {
            alert('Reaction created successfully');
            setOpen(false);
        } else {
            alert('Error creating reaction');
        }
    }

    const handleReactedContent = (element: any) => {
        element.preventDefault()
        const value = element.target.value
        try {
            const url = new URL(value);
            if (url !== null || url !== undefined || url !== '') {
                setReactedContent(url.toString() || '')
            }
        } catch (e) {
            element.target.value = ''
            alert('The reacted content link is not valid')
        }
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                        <div className="h-0 flex-1 overflow-y-auto">
                                            <div className="bg-[#2f6b2f] px-4 py-6 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <Dialog.Title className="text-base font-semibold leading-6 text-white">
                                                        New Reaction
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative rounded-md bg-[#193919] text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-1">
                                                    <p className="text-sm text-zinc-200">
                                                        Get started by filling in the information below to create your new reaction link to share with your subscribers in the video description.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 flex-col justify-between">
                                                <div className="divide-y divide-gray-200 px-4 sm:px-6">
                                                    <div className="space-y-6 pb-5 pt-6">
                                                        <div>
                                                            <label
                                                                htmlFor="project-name"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Reaction name
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="project-name"
                                                                    id="project-name"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2f6b2f] sm:text-sm sm:leading-6"
                                                                    placeholder="Eg. One piece chapter 1 reaction"
                                                                    value={title}
                                                                    onChange={(e) => { setTitle(e.target.value) }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor="youtube-link"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Youtube link
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="project-name"
                                                                    id="youtube-link"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2f6b2f] sm:text-sm sm:leading-6"
                                                                    placeholder="Eg. https://www.youtube.com/watch?v=SeEcF7uizEE"
                                                                    onBlur={(e) => { handleYoutubeLink(e) }}
                                                                    defaultValue={youtubeLink}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor="reacted-content-link"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Crunchyroll video link
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="reacted-content"
                                                                    id="reacted-content-link"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2f6b2f] sm:text-sm sm:leading-6"
                                                                    placeholder="Eg. https://www.crunchyroll.com/es-es/watch/G14U4GJ95/mash-burnedead-and-the-body-of-the-gods"
                                                                    onBlur={(e) => { handleReactedContent(e) }}
                                                                    defaultValue={reactedContent}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <label
                                                                htmlFor="minutes"
                                                                className="block text-sm font-medium leading-6 text-gray-900"
                                                            >
                                                                Reaction start at
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="project-name"
                                                                    id="reaction-start-at"
                                                                    min={0}
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2f6b2f] sm:text-sm sm:leading-6"
                                                                    placeholder="2:30"
                                                                    onBlur={(e) => { handleValidateStartAt(e) }}
                                                                    defaultValue={startAt}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pb-6 pt-4">
                                                        <div className="flex text-sm">
                                                            <a
                                                                href="#"
                                                                className="group inline-flex items-center font-medium text-[#2f6b2f] hover:text-[#387538]"
                                                            >
                                                                <LinkIcon
                                                                    className="h-5 w-5 text-[#2f6b2f] group-hover:text-[#387538]"
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="ml-2">Copy link</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                            <button
                                                type="button"
                                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                onClick={() => setOpen(false)}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                onClick={(e) => handleSave(e)}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}


export default NewReaction