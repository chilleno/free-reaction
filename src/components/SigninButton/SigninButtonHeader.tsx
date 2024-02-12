"use client";
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { NavLink } from '@/components/NavLink'
import { Button } from '@/components/Button'

const SigninButtonHeader = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="hidden md:block">
                <span className="mr-6">  <b>{session.user.name}</b></span>
                <Button onClick={() => { signOut({ callbackUrl: '/' }) }} color="green">
                    <span>
                        Sign out
                    </span>
                </Button>
            </div>
        )
    }
    if (session === null) {
        return (
            <div className="hidden md:block">
                <NavLink href="/login">Sign in</NavLink>
            </div>
        )
    }

    return (
        <div className="hidden md:block">
            <NavLink href="/login">Sign in</NavLink>
        </div>
    )
}

export default SigninButtonHeader;