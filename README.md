# The Psyche WebXR Experience
*Latest Hosted Build*: https://zacharyacooper.com

**Description:** This is a Web based virtual reality experience where you can interact with and learn about the Psyche asteroid and the technology behind the NASA Psyche mission. This project is written in React and utilizes the AFrame library for VR implementation.

## Technologies Used
IDE: Visual Studio Code = https://code.visualstudio.com/
Node Package Manager (NPM) = https://www.npmjs.com/ | Used to start the program, make a production build, and install dependecies
React = https://reactjs.org/ | Serves as the shell framework of our application
Aframe = https://aframe.io/docs/1.2.0/introduction/ | This is the framework used to Create the VR Scenes.
React-Aframe = https://www.npmjs.com/package/aframe-react | This is a node package that wraps the A-Frame framework into React components.
Jest = https://jestjs.io/ | This dependency is used for testing purposes.
MathJS = https://mathjs.org/ | This dependency is used to make rotational caculations for our mobile movement system.

## NPM Commands

Install Project Dependencies
```
npm i
```

Uninstall dependencies (i.e deletes /node_modules folder)
```
npm run clean
```

Run project server over HTTPS (Preferred)
```
npm run dev
```

Run project server over HTTP
```
npm run start
```

Run *Jest* test suite
```
npm run test
```

Compile a production build
```
npm run build
```

## Team

Member          |  GitHub Profile Url
----------------|-----------------------------
Zachary Cooper  | https://github.com/zacoope1
Ryan Tucker     | https://github.com/r-tuck
Yu Fu           | https://github.com/yufu6
Liangbin Gao    | https://github.com/Brucebb97

## Info About The Psyche Mission
**ASU Mission Page:** https://psyche.asu.edu/
**NASA Mission Page:** https://www.jpl.nasa.gov/missions/psyche

# Main Page Of Application
![Main Page](https://raw.githubusercontent.com/PSYCHE-WebXr-Group-16C/psychewebxr/master/public/Application%20Pictures/Main%20Screen.jpg)

## Local Development Notes (2026 Fixes)

### Node / build issues

- This project was built with `react-scripts@3.4.3` and webpack 4, which expect **Node 10–16**.
- On Node 17+ (including Node 24), running `npm start` or `npm run build` can fail with:
  - `Error: error:0308010C:digital envelope routines::unsupported`
- **Fix**:
  - Use `nvm` and switch to Node 16 in this folder:
    - `nvm install 16`
    - `nvm use 16`
  - Then reinstall and start:
    - `rm -rf node_modules package-lock.json`
    - `npm install`
    - `npm start`

### A-Frame version issue (white screen)

- A recent `npm install` can pull a newer `aframe` (e.g. `1.7.1`) which uses modern JS syntax (`?.`, `??`) that this older Babel/webpack setup does not transpile.
- Symptom: compile-time error similar to:
  - `./node_modules/aframe/dist/aframe-master.module.min.js ... Unexpected token ... ?.length ?? NaN`
- **Fix implemented**:
  - `package.json` now pins `aframe` to a compatible version:
    - `"aframe": "1.0.4"`
  - If you ever see this error again:
    - Ensure you are on Node 16 (`nvm use 16`)
    - Run `rm -rf node_modules package-lock.json && npm install`

### Runtime Fraction.js / MovementCalculations.js error (blank page)

- With the previous setup, the app could compile but still show a **blank white screen** with a console error like:
  - `Fraction.js: Uncaught TypeError: Cannot set properties of undefined (setting 'type')`
  - Trace pointing into `mathjs` and `src/math/MovementCalculations.js`.
- Root cause: the original `MovementCalculations` used `mathjs` matrix helpers, which pulled in a newer `mathjs`/`fraction.js` implementation incompatible with this bundler/runtime.
- **Fix implemented**:
  - `src/math/MovementCalculations.js` was rewritten to use plain JavaScript `Math` (no `mathjs` import).
  - Behavior of movement controls is preserved, but the dependency on `mathjs` is removed.

With these changes, the app runs correctly on modern macOS with Node 16, and the home page and experience images no longer disappear after visiting the Asteroid/Spacecraft scenes.