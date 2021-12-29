import Planet from '../components/Planet/Planet';
import { getAllPaths, getPlanet } from '../utils/utils';
import data from '../utils/data.json';

export async function getStaticPaths() {
  const paths = getAllPaths();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const planet = getPlanet(params.planet);
  return {
    props: { planet },
  };
}

export default function ({ planet }) {
  return <Planet planetData={planet} />;
}
