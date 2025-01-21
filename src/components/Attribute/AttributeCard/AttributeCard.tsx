import { Card, Group, NumberInput, Text } from '@mantine/core';

interface AttributeCardProps {
    name: string;
}

export default function AttributeCard({ name }: AttributeCardProps) {
    return (
        <Card shadow="sm" padding="md" radius="md" withBorder>
            <Text size="md" >
                {name}
            </Text>
        </Card>
    );
}
