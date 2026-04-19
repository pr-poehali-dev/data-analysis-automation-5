export default function Nature() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <img
        src="https://cdn.poehali.dev/projects/3a4fb72d-4bca-4f6e-8f19-4c1c3d803eeb/bucket/88796d14-8129-4c0d-83bb-fb5d0eb51720.jpg"
        alt="Рыбалка на реке в Степаново городище"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute bottom-12 left-6 md:left-12 text-white">
        <p className="text-xs uppercase tracking-widest opacity-70 mb-2">Природа вокруг</p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-xl">
          Река, лес и тишина —<br />в 100 км от города.
        </p>
      </div>
    </div>
  );
}
