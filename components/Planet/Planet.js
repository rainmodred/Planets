import { Tab } from '@headlessui/react';
import Image from 'next/image';
import iconSource from '../../public/images/icon-source.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import PlanetImage from './PlanetImage';
import PlanetInfo from './PlanetInfo';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Planet({ planetData }) {
  const { name, images, rotation, revolution, radius, temperature } =
    planetData;
  const [orientation, setOriientation] = useState('horizontal');
  const [tabIndex, setTabIndex] = useState(0);

  const categories = ['overview', 'structure', 'geology'];
  useEffect(() => {
    let { matches } = window.matchMedia('(min-width: 768px)');

    if (matches) {
      setOriientation('vertical');
    }
  }, []);

  function onTabChange(index) {
    setTabIndex(index);
  }

  return (
    <div className="grid items-center h-full gap-12 lg:container md:gap-8 lg:gap-y-0 lg:m-auto grid-rows-custom md:grid-rows-customMd md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2">
      <PlanetImage images={images} tabIndex={tabIndex} />
      <Tab.Group onChange={onTabChange} vertical={orientation === 'vertical'}>
        <Tab.List className="flex justify-between order-1 px-5 border-b lg:row-span-2 lg:pl-0 lg:pr-12 lg:col-span-2 md:pr-12 md:gap-4 lg:justify-self-auto border-white-100 md:border-none md:order-3 md:flex-col md:justify-end">
          {categories.map((catergory, index) => (
            <Tab
              key={`tab-${catergory}`}
              className={({ selected }) =>
                classNames(
                  'py-3 md:px-4 text-left text-[9px] tracking-[0.12rem] md:tracking-normal uppercase md:text-[11px] md:border md:border-white-100 lg:text-sm font-bold md:text-white after:md:hidden transition-all ease-linear duration-200',
                  selected
                    ? `relative text-white md:bg-${name.toLowerCase()} after:bg-${name.toLowerCase()} after:absolute after:bottom-0 after:left-0 after:scale-100 after:h-1 after:w-full`
                    : 'after:scale-0 after:hover:scale-100 text-lightGrey md:hover:bg-white-100',
                )
              }
            >
              <span className="hidden mr-5 md:inline text-white-700">{`0${
                index + 1
              }`}</span>
              {index === 1 && (
                <span className="hidden md:inline">internal </span>
              )}
              {index === 2 && (
                <span className="hidden md:inline">surface </span>
              )}
              {catergory}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="order-3 max-w-lg px-5 lg:self-end md:pl-12 lg:px-0 lg:pr-12 lg:row-span-1 lg:col-span-2 md:order-2 justify-self-center lg:justify-self-start">
          {categories.map(catergory => (
            <Tab.Panel
              key={`panel-${catergory}`}
              className="flex flex-col items-center gap-5 md:items-start lg:gap-10 lg:items-start"
            >
              <h1 className="gap-4 font-sans text-[40px] lg:text-7xl font-bold uppercase">
                {name}
              </h1>
              <p className="text-[11px] lg:text-sm text-white-700 leading-loose text-center md:text-left">
                {planetData[catergory].content}
              </p>
              <p className="text-white transition-opacity ease-linear opacity-50 hover:opacity-100">
                <span className="text-sm">Source :</span>
                <Link href={planetData[catergory].source}>
                  <a className="font-bold underline" target="_blank">
                    Wikipedia
                    <Image src={iconSource} alt="wikipedia link"></Image>
                  </a>
                </Link>
              </p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <PlanetInfo
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </div>
  );
}
