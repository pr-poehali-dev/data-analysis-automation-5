const packages = [
  {
    title: "Семейный уикенд",
    tag: "Для семьи с детьми",
    description: "Домик на 4 ночи + кормление животных + мастер-класс по выпечке хлеба в русской печи.",
    price: "от 12 000 ₽",
  },
  {
    title: "Романтик-тур",
    tag: "Для двоих",
    description: "Домик + баня с чаном + ужин при свечах от шефа из местных продуктов.",
    price: "от 9 500 ₽",
  },
  {
    title: "Своя ферма",
    tag: "Для искателей приключений",
    description: "Домик + доение козы + урок верховой езды с дядей Ваней.",
    price: "от 8 000 ₽",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/3a4fb72d-4bca-4f6e-8f19-4c1c3d803eeb/bucket/5e5d3c07-443c-4e1d-9dde-4a34d37236ba.jpg"
          alt="Жизнь в Степаново городище"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Готовые сценарии отдыха</h3>
        <p className="text-2xl lg:text-3xl mb-10 text-neutral-900 leading-tight font-semibold">
          Не просто домики —<br />живые впечатления.
        </p>
        <div className="flex flex-col gap-6 mb-10">
          {packages.map((pkg) => (
            <div key={pkg.title} className="border-l-2 border-amber-500 pl-4">
              <div className="flex justify-between items-start mb-1">
                <span className="font-semibold text-neutral-900">{pkg.title}</span>
                <span className="text-amber-600 font-semibold text-sm ml-4 shrink-0">{pkg.price}</span>
              </div>
              <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">{pkg.tag}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{pkg.description}</p>
            </div>
          ))}
        </div>
        <a
          href="#booking"
          className="bg-amber-600 hover:bg-amber-500 text-white border border-amber-600 px-6 py-3 text-sm transition-all duration-300 cursor-pointer w-fit uppercase tracking-wide font-semibold"
        >
          Выбрать и забронировать
        </a>
      </div>
    </div>
  );
}