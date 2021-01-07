import styled from 'styled-components';
import './utils/tw-styled';

const BlogWrapper = styled.article.attrs({
  className: 'grid grid-cols-3 gap-4'
})``;

function App() {
  return <>
    <main className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <h1 className="text-xl text-indigo-600">styled tailwind CSS with styled-components</h1>
      <div className="w-12 h-12 bg-indigo-600 skew-10deg"></div>
    </main>
  </>;
}

export default App;
