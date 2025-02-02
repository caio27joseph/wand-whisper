"use client";

import { AppShell, Button, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

export default function AppShellWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <div className="w-fulf h-full p-3 flex justify-center align-middle gap-4">
          <Link href="/feature-type">
            <Button variant="outline">Rescursos</Button>
          </Link>
        </div>
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
