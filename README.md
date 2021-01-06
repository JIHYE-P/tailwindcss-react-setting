### Install Tailwind CSS with Create React App
[Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)     

### 생산을 위한 최적화 Purge CSS
[생산을 위한 최적화 Purge CSS](https://tailwindcss.com/docs/optimizing-for-production)     

사용한 class만 .css 파일에 생산된다.     
클래스 이름을 사용할 때 `문자열 연결`로 사용하면 안된다.
```js
<div class="text-{{  error  ?  'red'  :  'green'  }}-600"></div> // X
<div class="{{  error  ?  'text-red-600'  :  'text-green-600'  }}"></div> // OK
```

### Tailwind CSS와 styled-components 같이 사용하기
[Tailwind CSS와 styled-components 같이 사용하기](https://www.freecodecamp.org/news/how-to-style-your-react-apps-with-less-code-using-tailwind-css-and-styled-components/)

### styled-components
> npm i styled-components

### Tailwind CSS & PostCSS 
> npm install tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

Create React App은 아직 PostCSS 8을 지원하지 않으므로 Tailwind CSS v2.0 PostCSS 7 호환성 빌드를 설치해야합니다.

### Tailwind CSS & PostCSS
> npm install -D twin.macro

### CRACO
> npm install @craco/craco

Create React App은 기본적으로 PostCSS 구성을 재정의 할 수 없으므로 Tailwind를 구성 할 수 있도록 CRACO도 설치해야합니다.

### 구성 설정
> craco.config.js 에만 postCSS, autoprefixer, purgeCSS 플러그인 설정하기




