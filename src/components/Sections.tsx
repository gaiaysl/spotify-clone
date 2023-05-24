import React from 'react';

interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SectionsProps {
  title: string;
  items: Item[];
}

export default function Sections({ title, items }: SectionsProps) {
  return (
    <section className="mt-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="grid grid-cols-4 mt-6 gap-x-6">
        {items.map((item) => (
          <div key={item.id} className="bg-backdrop p-4 group relative">
            <div className="mx-auto">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center"
              />
              <button className="w-10 h-10 rounded-full bg-primary absolute bottom-0 right-0 transform translate-x-1/6         translate-y-1/4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">
                {/* İçeriğini doldurun */}
              </button>
            </div>
            <h3 className="text-base font-bold mt-2">{item.title}</h3>
            <p className="text-sm font-semibold text-link overflow-hidden overflow-ellipsis whitespace-nowrap">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
