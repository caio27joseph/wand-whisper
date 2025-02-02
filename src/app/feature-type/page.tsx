import { Title } from "@mantine/core";

export function FeatureType() {}

export default async function FeatureTypePage() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()


  return (
    <div className="p-5 ">
      <Title>Recursos Disponiveis</Title>z
    </div>

    {{}}
  );
}
