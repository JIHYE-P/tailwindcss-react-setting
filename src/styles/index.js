import styled from 'styled-components';
import tw from 'twin.macro';

const StyledIndex = styled.main.attrs({
  className: 'flex flex-col h-screen justify-center items-center bg-gray-100'
})`
  & {
    h1 {
      ${tw`text-4xl text-indigo-600`}
    }
  }
`
export default StyledIndex;