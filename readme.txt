
#Setup typescript with node

#creat root foldr
mkdir cs-ts
cd cs-ts

#install and configure typescript
npm install typescript --save-dev

npm install @types/node --save-dev 
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
npx tsc --init --rootDir src --outDir build

#run typescript ts files from the command line
npm install ts-node --save-dev

npx ts-node .\src\index.ts

#jest unit testing
npm install --save-dev jest
npm install --save-dev @types/jest

npm install --save-dev jest typescript ts-jest @types/jest
npx ts-jest config:init

Instalation Reference
https://khalilstemmler.com/blogs/typescript/node-starter-project/
https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html
https://jestjs.io/docs/getting-started