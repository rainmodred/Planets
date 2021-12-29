export default function PlanetInfo({
  rotation,
  revolution,
  radius,
  temperature,
}) {
  const info = [
    ['rotation time', rotation],
    ['revolution time', revolution],
    ['radius', radius],
    [' average temp.', temperature],
  ];
  return (
    <ul className="flex flex-col self-end justify-between order-4 gap-4 px-5 md:col-span-2 lg:col-span-5 mt-7 md:px-12 md:flex-row lg:gap-8">
      {info.map(([title, value]) => (
        <li
          key={title}
          className="flex items-center justify-between px-4 py-2 border md:flex-col md:py-4 grow md:gap-y-1 lg:gap-y-4 border-darkGrey md:items-start"
        >
          <h3 className="uppercase font-bold text-[8px] lg:text-[11px] text-white opacity-50">
            {title}
          </h3>
          <p className="font-sans text-xl tracking-custom md:text-2xl lg:text-[40px]">
            {value}
          </p>
        </li>
      ))}
    </ul>
  );
}
