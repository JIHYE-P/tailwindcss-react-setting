import React from 'react';
import domElements from "./domElements";

// tailwind classNames parse (상속된 클래스와 새로 적용한 클래스명 정리하기)
const parseTailwindClassNames = (className, inheritedClasses) => {
  const newClasses = className.toString()
  .trim()
  .replace(/\s{2,}/g, " ")
  .split(" ")
  .filter(str => str !== ",");

  const inheritedClassesArray = inheritedClasses ? inheritedClasses.toString().split(" ") : [];
  const classesName = [...inheritedClassesArray].concat(newClasses);
  return classesName.reduce((acc, val) => `${acc} ${val}`, "").trim().replace(/\s{2,}/g, " ");
}

const createTemplate = (Element) => (className) => 
React.forwardRef(({children, ...props}, ref) => {
  return <Element 
    {...props} 
    ref={ref} 
    className={parseTailwindClassNames(className, props.className)}
    // className={parseTailwindClassNames(cleanClassNames(className, props.className))}
  >
    {children}
  </Element>
});

// dom 엘리먼트 배열 jsx 변환하여 반환 (구성요소)
const intrinsicElements = domElements.reduce((acc, dom) => {
  return ({...acc, [dom]: createTemplate(dom)})
}, {});

const twStyled = Object.assign(Component => createTemplate(Component), intrinsicElements);

export default twStyled;
