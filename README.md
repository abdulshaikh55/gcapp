# How to create a React app

1. Create a folder with name 'alpha'
2. cd into that folder using `cd alpha` in terminal
3. create a GitHub repo with same name
4. copy the ssh `git@github.com:abdulshaikh55/alpha.git`
5. initiate git in folder using `git init`
6. connect git to github using `git remote add origin git@github.com:abdulshaikh55/alpha.git`
7. change branch using `git branch -m main`
8. run command `npx create-expo-app@latest ./` (./ helps in creating folders and files in current folder)
9. run app using npx expo start
10. scan the qr code in expo app
11. open a new terminal in the same directory
12. run npm run reset-project
13. rerun `npx expo start`
14. code


# How to setup nativewind in react app
1. `npm i nativewind tailwindcss react-native-reanimated react-native-safe-area-context`
2. after installation run `npx tailwindcss init -p`
3. go to tailwind.config.css and edit content: e.g.
 ```js
   module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: '#151312',
        light: {
          100: "#d6c6ff",
          200: "#a8b5db",
          300: "#9ca4ab"
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        accent: "#ab8bff",
      }
    },
  },
  plugins: [],
}
```
4. in app folder create new file globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. in root directory create babel.config.js
```js
module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
    };
};
```
6. in root directory create metro.config.js
```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './app/globals.css' })
```

7. in app/_layout.tsx import the globals file `import './globals.css';`
8. in root directory, create a file called nativewind-env.d.ts and insert this line: `/// <reference types="nativewind/types" />`

## Tech Stack and their resources

1. React Native - <https://reactnative.dev/docs/getting-started>
2. Expo - <https://docs.expo.dev/>
3. NativeWind - <https://www.nativewind.dev/docs>
4. Supabase - <https://supabase.com/docs>