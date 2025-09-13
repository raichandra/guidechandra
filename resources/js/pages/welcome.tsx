import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Nepal Guide">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <h2 className="text-4xl font-bold text-sky-700">This site will be published soon.........</h2>
            </div>
        </>
    );
}
