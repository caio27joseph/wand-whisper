import dbConnect from "@/lib/mongoose";
import Attribute from "@/models/Feature";
import { Card, Group, Text, Title } from "@mantine/core";
import Link from "next/link";

function AttributeCard({ name }: { name: string }) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Text size="md">{name}</Text>
    </Card>
  );
}

async function fetchAttributes() {
  await dbConnect();
  const attributes = await Attribute.find();
  return attributes;
}

export default async function AttributesPage() {
  // Fetch attributes server-side using Prisma
  const attributes = await fetchAttributes();

  return (
    <div style={{ padding: "20px" }}>
      <Title order={2} mb="md">
        Character Attributes
      </Title>
      <Link href={"/attributes/create"}>Create</Link>
      <Group>
        {attributes.map((attribute) => (
          <AttributeCard key={attribute.id} name={attribute.name} />
        ))}
      </Group>
    </div>
  );
}
