"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";


interface ProviderProps {
    children: ReactNode;
}

const Providers = (props: ProviderProps) => {
    return <SessionProvider>{props.children}</SessionProvider>;
}

export default Providers;