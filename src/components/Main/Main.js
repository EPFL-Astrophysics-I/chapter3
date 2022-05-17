import UnityApp from '../UnityApp/UnityApp';
import './Main.css';
import image1 from './img-load-virial-theorem.png';

const app1 = {
  index: 1,
  name: 'Virial Theorem',
  json: 'VirialTheorem/Build/VirialTheorem.json',
  unityLoader: 'VirialTheorem/Build/UnityLoader.js',
  description:
    'The virial theorem is a relation between the time-averaged kinetic energy and the time-averaged potential energy of a many-body system. ' +
    'It is very useful in astrophysics, as it allows us to estimate the mass of stable, gravitationally interacting objects like ' +
    'globular clusters of stars and, on even larger scales, clusters of galaxies.',
  image: image1,
  github: 'https://github.com/EPFL-Astrophysics-I/virial-theorem.git',
};

const app2 = {
  index: 2,
  name: 'Mass of a globular cluster',
  json: '',
  unityLoader: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app3 = {
  index: 3,
  name: 'N-body Accuracy',
  json: '',
  unityLoader: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default function Main() {
  return (
    <main className='content'>
      <UnityApp {...app1} />
      <UnityApp {...app2} />
      <UnityApp {...app3} />
    </main>
  );
}
