"use client";
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
const SigninButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        location.href = '/';
        return "loading...."
    }
    if (session === null) {
        return (
            <button onClick={() => { signIn('google', { callbackUrl: '/' }) }} className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full" >
                <svg className="mr-2 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                <h6 className="py-1 text-md">Login with Google</h6>
            </button>
        )
    }
}

export default SigninButton;