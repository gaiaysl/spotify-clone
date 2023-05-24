import React from 'react';
import Sections from '@/components/Sections';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
  type:string;
}

interface HomeProps {
  // Props tanımlamalarını burada yapabilirsiniz.
}

const Home: React.FC<HomeProps> = () => {
  const items: Item[] = [
    {
      id: 1,
      title: "Shape my of heart",
      description: "Dale Prince",
      image: "https://i.scdn.co/image/ab67616d0000b273332a2b47194b83f228032f94",
      type:"album"
    },
    {
      id: 2,
      title: "Classic Road Trip Songs",
      description: "A sondtrack to fuel your good mood while on the road.",
      image: "https://i.scdn.co/image/ab67706f000000026906e3e07bd1de92c8a6fb08",
      type:"album"
    },
    {
      id: 3,
      title: "Peaceful Piano",
      description: "Peaceful piano to help you slow down, breathe, and relax.Peaceful piano to help you slow down, breathe, and relax.Peaceful piano to help you slow down, breathe, and relax.Peaceful piano to help you slow down, breathe, and relax.",
      image: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      type:"artist"
    },
    {
      id: 4,
      title: "mercury in retrograde",
      description: "soundtracking your ex calling/nothing's working/existential crisis",
      image: "https://i.scdn.co/image/ab67706f00000002c99c17bbcdadddf326983b5d",
      type:"podcast"
    },
    {
      id: 5,
      title: "Shape my of heart",
      description: "Dale Prince",
      image: "https://i.scdn.co/image/ab67706c0000da841dd5c799338c46e64abf3446",
      type:"podcast"
    },
  ];

  return (
    <div className="text-2xl font-semibold mx-6">
      <Sections title="Recently played" items={items} />
    </div>
  );
};

export default Home;
