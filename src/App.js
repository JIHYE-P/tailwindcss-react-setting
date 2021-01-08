import styled from 'styled-components';
import tw from './utils/tailwind-styled-components';
import twStyled from './utils/tw-styled';
import {Main} from './utils/styled-component';

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

const Post = twStyled.div`text-lg`;
const PostInnter = twStyled(Post)`
  flex w-full
  p-5
  bg-gray-600
  text-white font-bold
`;

const StyledMain = twStyled(Main)`
  flex w-full
  p-5
  hover:bg-red-700
`;

function App() {
  return <>
    <main className="flex flex-col h-screen justify-center items-center bg-gray-100">
      {/* <Blog /> */}
      <PostInnter>tw 스타일 테스트~~~
        <h1 className="text-5xl">WOW</h1>
      </PostInnter>
      <StyledMain>
        여기는 메인
      </StyledMain>
      <h1 className="text-xl text-indigo-600">styled tailwind CSS with styled-components</h1>
      <div className="w-12 h-12 bg-indigo-600 skew-10deg"></div>
    </main>
  </>;
}

export default App;
