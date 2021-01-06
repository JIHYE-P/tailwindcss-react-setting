import logo from './logo.svg';
import "./style.css";
import Hero from './components/Hero';

function App() {
  return <>
    <Hero />
    <div className="grid gap-4 grid-cols-3 bg-gray-200 text-center">
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">1</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">2</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">3</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">4</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">5</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">6</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">7</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">8</div>
      <div className="shadow border-2 border-transparent hover:border-indigo-600 bg-indigo-200 p-4">9</div>
    </div>
    <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
      <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt="logo" />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-semibold">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-cyan-600">Sarah Dayan</div>
          <div className="text-gray-500">Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
    <button className="btn-blue">click</button>
    <div className="p-4 my-10 bg-orange-200 flex flex-col">
      <div className="w-20 h-20 leading-5 bg-orange-400 text-center text-lg text-white rounded-lg">1</div>
      <div className="w-20 h-20 leading-5 bg-orange-400 text-center text-lg text-white rounded-lg">2</div>
      <div className="w-20 h-20 leading-5 bg-orange-400 text-center text-lg text-white rounded-lg">3</div>
    </div>
  </>;
}

export default App;
// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>