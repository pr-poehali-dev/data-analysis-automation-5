import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Степаново городище — деревенская усадьба в Пермском крае"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">
          100 км от Перми · Пермский край
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight">
          СТЕПАНОВО<br />ГОРОДИЩЕ
        </h1>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-90 mb-10 leading-relaxed">
          Жизнь, где время течёт иначе. Дома с русской печью, фермерская кухня и настоящий контактный зоопарк.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#booking"
            className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 uppercase tracking-wide text-sm font-semibold transition-colors duration-300"
          >
            Забронировать домик
          </a>
          <a
            href="#support"
            className="border border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-3 uppercase tracking-wide text-sm font-semibold transition-colors duration-300"
          >
            Поддержать нас
          </a>
        </div>
      </div>
    </div>
  );
}