'use client';

import { useState } from 'react';
import { TextInput, NumberInput, Button, Group, Title, Notification, Textarea, Checkbox, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CreateAttributePayload } from '@/pages/api/attributes';


export default function AttributesCreatePage() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            description: ''
        },
    });

    const handleSubmit = async (values: CreateAttributePayload) => {
        setSuccess(false);
        setError(null);

        try {
            const response = await fetch('/api/attributes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Failed to create attribute');
            }

            setSuccess(true);
            form.reset();
        } catch (err) {
            console.error('Error creating attribute:', err);
            setError('Failed to store the attribute. Please try again.');
        }
    };

    return (
        <Container>
            <Title order={2} mb="md">
                Create a New Attribute
            </Title>

            {success && (
                <Notification color="green" onClose={() => setSuccess(false)} mb="md">
                    Attribute created successfully!
                </Notification>
            )}

            {error && (
                <Notification color="red" onClose={() => setError(null)} mb="md">
                    {error}
                </Notification>
            )}
            <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                <TextInput
                    withAsterisk
                    label="Nome"
                    key={form.key('name')}
                    {...form.getInputProps('name')}
                />
                <Textarea
                    withAsterisk
                    label="Descrição"
                    key={form.key('description')}
                    {...form.getInputProps('description')}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit">Cadastrar</Button>
                </Group>
            </form>
        </Container>

    );
}
