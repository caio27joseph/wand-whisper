// app/page.tsx
'use client';

import { Button, Text } from '@mantine/core';

export default function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Text size="xl" weight={700}>
        Welcome to My Mantine App
      </Text>
      <Button variant="filled" color="blue" style={{ marginTop: '20px' }}>
        Get Started
      </Button>
    </div>
  );
}
