import styled from 'styled-components';
import tw from './utils/tw-styled';
import './utils/util-styled';

const BlogWrapper = styled.article.attrs({
  className: 'grid grid-cols-3 gap-4'
})``;

const Container = tw.section`
  text-sm text-bold
  flex w-full h-full 
  bg-gray-400
`

const Blog = tw(Container)`
  border border-indigo-600
`;

function App() {
  return <>
    <Blog />
    <main className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <h1 className="text-xl text-indigo-600">styled tailwind CSS with styled-components</h1>
      <div className="w-12 h-12 bg-indigo-600 skew-10deg"></div>
    </main>
  </>;
}

export default App;
