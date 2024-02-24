"use client";
import React, { useState, useEffect } from 'react';
import supabase from '@/utils/supabase';
import { signOut, useSession } from 'next-auth/react';
import { NavLink } from '@/components/NavLink'
import { Button } from '@/components/Button'

const getTokens = async (uuid: string) => {
    const { data, error } = await supabase
        .from('user_tokens')
        .select('tokens')
        .eq('user_id', uuid)
        .single()
    if (error) {
        console.log(error)
        return 0;
    } else {
        console.log(data.tokens)
        return data.tokens;
    }
}

const SigninButtonHeader = () => {
    const [tokens, setTokens] = useState(0);
    const { data: session, status } = useSession();
    const uuid = session?.user?.id;

    useEffect(() => {
        if (status === 'authenticated' && uuid) {
            const fetchData = async () => {
                try {
                    const fetchedTokens = await getTokens(uuid);
                    setTokens(fetchedTokens);
                } catch (error) {
                    console.error('Failed to fetch data:', error);
                }
            };
            fetchData();
            // Cleanup function
            return () => {
                // Cleanup logic if needed
            };
        }
    }, [status])

    if (session && session.user) {
        return (
            <div className="hidden md:flex items-center">
                <div className="flex flex-col mr-6">
                    <b>{session.user.name}</b>
                    <b className="italic">{session.user.profile.charAt(0).toUpperCase() + session.user.profile.slice(1)} User</b>
                </div>
                <Button href={'/reactions'} className="mr-6">
                    <span className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                        {tokens}/{session.user.profile === 'free' && '5'}{session.user.profile === 'premium' && '30'}{session.user.profile === 'founder' && '999'} tokens
                    </span>
                </Button>
                <Button href={'/reactions'} className="mr-6">
                    <span>
                        My reactions
                    </span>
                </Button>
                <Button onClick={() => { signOut({ callbackUrl: '/' }) }} color="green">
                    <span>
                        Sign out
                    </span>
                </Button>
            </div>
        )
    }
    if (status !== 'authenticated') {
        return (
            <div className="hidden md:block">
                <NavLink href="/login">Sign in</NavLink>
            </div>
        )
    }
}

export default SigninButtonHeader;