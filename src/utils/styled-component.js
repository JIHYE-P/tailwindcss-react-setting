import React from 'react';
import domElements from "./domElements";

const parseTailwindCSS = (className, inheritedClassNames) => {
  const newClassNames = className
  .toString()
  .trim()
  .replace(/\s{2,}/g, " ")
  .split(" ");

  const inherited = inheritedClassNames ? inheritedClassNames.toString().split(" ") : [];
  const classesName = [...inherited]
  .concat(newClassNames)
  .reduce((acc, val) => `${acc} ${val}`, "")
  .trim()
  .replace(/\s{2,}/g, " ")
  
  return classesName;
}

const functionJSXElement = (Element) => (template) => React.forwardRef(({children, ...props}, ref) => {
  return <Element {...props} ref={ref} className={parseTailwindCSS(template, props.className)}>
    {children}
  </Element>
})

const domElementFactory = domElements.reduce((acc, domElement) => {
  return {...acc, [domElement]: functionJSXElement(domElement)}
}, {});

export const Main = domElementFactory.main`
  font-bold
  border border-gray-500 border-3
`;


