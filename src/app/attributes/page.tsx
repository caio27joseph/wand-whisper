import AttributeCard from "@/components/Attribute/AttributeCard/AttributeCard";
import { Group, Title } from "@mantine/core";
import { useEffect, useState } from "react";


export default async function AttributesPage() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()

    const [attributes, setAttributes] = useState({
        strength: 0,
        agility: 0,
        intelligence: 0,
    });

    const [loading, setLoading] = useState(true);

    // Fetch attributes from the API
    useEffect(() => {
        async function fetchAttributes() {
            try {
                const response = await fetch('/api/attributes');
                const data = await response.json();
                setAttributes(data);
            } catch (error) {
                console.error('Failed to fetch attributes:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAttributes();
    }, []);




    return (
        <div style={{ padding: '20px' }}>
            <Title order={2} mb="md">
                Character Attributes
            </Title>
            <Group>
                <AttributeCard
                    name="Strength"
                />
                <AttributeCard
                    name="Agility"
                />
                <AttributeCard
                    name="Intelligence"
                />
            </Group>

        </div>
    );
}
