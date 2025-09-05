import './res.css'
export default function TailwindGrid() {
  const cards = Array.from({ length: 8 }, (_, i) =>  i+1);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map(n => (
        <article key={n} className="rounded-xl border bg-white overflow-hidden grid grid-rows-[auto_auto_1fr_auto]">
          <img src={`https://picsum.photos/seed/${n}/600/400`} alt="" className="w-full h-40 object-cover" loading="lazy" />
          <h3 className="px-3 pt-3 text-lg font-semibold">Card {n}</h3>
          <p className="px-3 text-slate-600">Some description about this card.</p>
          <button className="m-3 px-3 py-2 rounded-md bg-black text-white">Action</button>
        </article>
      ))}
    </main>
  );
}
