'use client';

import { AppShell, Burger, Button, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

export default function AppShellWrapper({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            padding="md"

        >
            <AppShell.Header>
                <div className="w-ful h-full p-3 flex justify-center align-middle gap-4">
                    <Link href="/attributes">
                        <Button variant='outline'>Atributos</Button>
                    </Link>
                    <Link href="/skills">
                        <Button variant='outline'>Perícias</Button>
                    </Link>
                </div>
            </AppShell.Header>
            <AppShell.Main >
                <Container>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    );
}
