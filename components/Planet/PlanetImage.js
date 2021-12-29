import Image from 'next/image';

export default function PlanetImage({ tabIndex, images }) {
  return (
    <span className="relative order-2 max-w-[40%] md:max-w-[45%] lg:max-w-[90%] justify-self-center md:order-1 md:col-span-2 lg:col-span-3 lg:row-span-2">
      {tabIndex === 1 ? (
        <Image src={images.internal} alt="" width={450} height={450} />
      ) : (
        <Image src={images.planet} alt="" width={450} height={450} />
      )}

      <span
        className={`${
          tabIndex !== 2 ? 'scale-0' : 'scale-100'
        } absolute w-2/5 -translate-x-1/2 left-1/2 top-[60%] transition-all ease-linear origin-top`}
      >
        <Image src={images.geology} width="326" height="398" alt="" />
      </span>
    </span>
  );
}
