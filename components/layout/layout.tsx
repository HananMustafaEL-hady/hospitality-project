import Head from 'next/head'
import React from 'react'
import { HeaderLayout } from '../../hoc/headerLayout.hoc'

interface LayoutParams {
    title?: string;
    children?: any;
}

export const Layout = ({ title = 'sample title', children }: LayoutParams) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <HeaderLayout />
                {children}
            </main>
        </>
    )
}
