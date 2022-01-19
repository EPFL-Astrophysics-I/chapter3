import UnityApp from '../UnityApp/UnityApp';
import './Main.css';

const app1 = {
  index: 1,
  name: 'Virial Theorem',
  json: 'UnityApp/Build/UnityApp.json',
  unityLoader: 'UnityApp/Build/UnityLoader.js',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app2 = {
  index: 2,
  name: 'Mass of a globular cluster',
  json: 'UnityApp/Build/UnityApp.json',
  unityLoader: 'UnityApp/Build/UnityLoader.js',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app3 = {
  index: 3,
  name: 'N-body Accuracy',
  json: 'UnityApp/Build/UnityApp.json',
  unityLoader: 'UnityApp/Build/UnityLoader.js',
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
