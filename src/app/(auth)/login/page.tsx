'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { type Metadata } from 'next'
import SigninButton from '@/components/SigninButton/SigninButton';
import { SessionProvider } from 'next-auth/react';

export default function Login() {
  return (
    <SlimLayout>
      <div className="flex mb-5">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900 hidden">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700 hidden">
        Don’t have an account?{' '}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        for a free trial.
      </p>

      {/* hidden for future purpouses */}
      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8 hidden">
        <TextField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <div className="flex flex-col gap-2">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>

      <div className="flex flex-col gap-2 mt-2">
          <SessionProvider>
            <SigninButton />
          </SessionProvider>
        </div>
    </SlimLayout>
  )
}
