"use client";
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { NavLink } from '@/components/NavLink'
import { Button } from '@/components/Button'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'


function MobileNavLink({
    href,
    children,
}: {
    href: string
    children: React.ReactNode
}) {
    return (
        <Popover.Button as={Link} href={href} className="block w-full p-2">
            {children}
        </Popover.Button>
    )
}

const SigninButtonHeaderMobile = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="block md:hidden">
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
            <MobileNavLink href="/login">Sign in</MobileNavLink>
        )
    }

    return (
        <MobileNavLink href="/login">Sign in</MobileNavLink>
    )
}

export default SigninButtonHeaderMobile;