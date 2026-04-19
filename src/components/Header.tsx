interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-semibold">Степаново</div>
        <nav className="flex gap-6 md:gap-8">
          <a
            href="#packages"
            className="text-white hover:text-amber-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Жильё
          </a>
          <a
            href="#booking"
            className="text-white hover:text-amber-400 transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Бронь
          </a>
          <a
            href="#support"
            className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-1.5 uppercase text-sm tracking-wide transition-colors duration-300"
          >
            Поддержать
          </a>
        </nav>
      </div>
    </header>
  );
}