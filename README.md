<div align="center"><img src="./public/assets/hackato.png" alt="hackathon header"></div>

# Boored: Prova Frontend Hackató Saló Ocupació 2024
<div align="center">
<img src="./public/demo/video/BooredDemo.gif" alt="boored demo gif"></div>

Boored és una aplicació web que ofereix una varietat d'activitats per a realitzar en moments d'avorriment amb una interfície amigable i atractiva. L'aplicació permet filtrar activitats per tipus, com a social, educació, caritat o cuina. Es tracta de la prova tècnica per a la categoria FrontEnd de la [Hackató del 22 i 23 d'Octubre del 2024](https://cibernarium.barcelonactiva.cat/es/hackato-marketplace-2024).

## Taula de Continguts

1. [Introducció](#boored-prova-frontend-hackató-saló-ocupació-2024)
2. [Característiques](#característiques)
3. [Tecnologies Utilitzades](#tecnologies-utilitzades)
4. [Descripció del flux](#descripció-del-flux)
5. [Estructura del projecte](#estructura-del-projecte)
6. [Instal·lació](#installació)
7. [Ús](#ús)
8. [Errors coneguts](#errors-coneguts)
9. [Galeria d'imatges i funcionalitats](#galeria-dimatges-i-funcionalitats)
10. [Autora](#autora)

## Característiques

- Filtres per tipus d'activitats: social, educació, caritat, cuina.
- Generació d'activitats aleatòries.
- Disseny responsiu per a mòbils i escriptoris.
- Maneig d'estats de càrrega i errors.

## Tecnologies Utilitzades

#### FrontEnd:
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge">  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat" alt="JavaScript Badge"> 
  
#### Validacions:
  <img src="https://img.shields.io/badge/PropTypes-lightblue?style=flat&logo=React&logoColor=black" alt="PropTypes Badge">

#### Disseny i Maquetació:
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat" alt="Tailwind CSS Badge">  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=fff&style=flat" alt="DaisyUI Badge">   <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat" alt="CSS3 Badge"> 

#### API i Peticions HTTP:
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat" alt="Axios Badge">

#### Eines de Desenvolupament:
  <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat" alt="React Router Badge">   <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat" alt="Vite Badge">



> [!NOTE]
> Per aquesta prova s'ha utilitzat una [plantilla](https://github.com/Luovtyrell/React-Vite-PropTypes-React-Router-Tailwind-Starter) pròpia.

## Descripció del flux:
1. L'aplicació comença a la pàgina `Home`.
2. L'usuari selecciona un filtre a `FiltersBar`, que actualitza l'estat del filtre utilitzant l'`ActivityContext`.
3. `ToDoCard` fa una crida a la funció `fetchActivity` amb el filtre actualitzat.
4. `fetchActivity` fa la sol·licitud a l'API per obtenir una nova activitat i actualitza l'`ActivityContext` amb la informació rebuda.
5. `ActivityResult` mostra l'activitat obtinguda o gestiona l'estat de càrrega i els errors, depenent de la resposta de l'API.

## Estructura del projecte
<details>

```
── public
│   ├── assets/
│   └── demo/
├── src
│   ├── App.jsx
│   ├── Components
│   │   ├── Header
│   │   │   ├── FiltersBar.jsx
│   │   │   └── NavBar.jsx
│   │   ├── Main
│   │   │   ├── ActivityResult.jsx
│   │   │   ├── ToDoCard.css
│   │   │   └── ToDoCard.jsx
│   │   └── UI
│   │       ├── MainButton.jsx
│   │       └── PurpleButton.jsx
│   ├── context
│   │   └── ActivityContext.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── home
│   │       └── Home.jsx
│   ├── routes
│   │   └── AppRoutes.jsx
│   └── services
│       └── apiFetchActivity.js
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.cjs
└── vite.config.js
```
</details>

## Instal·lació

1. Clona el repositori:

   ```bash
   git clone https://github.com/Luovtyrell/Prova-Frontend-Hackato-Barcelona.git
   ```

2. Navega al directori del projecte:

   ```bash
   cd Prova-Frontend-Hackato-Barcelona.git
   ```

3. Instal·la les dependències:

   ```bash
   npm install
   ```

4. Inicia la aplicació:

   ```bash
   npm run dev
   ```

5. Obre el navegador i visita `http://localhost:{NumeroDePort}` per veure l'aplicació en funcionament.

## Ús
1. Utilitza la barra de filtres a la part superior per seleccionar una categoria d'activitats.
2. Prem el botó "Generar" per obtenir una activitat aleatòria de la categoria seleccionada.
3. Si no hi ha cap filtre seleccionat, es mostrarà una activitat aleatòria sense filtrar.

## Errors coneguts

- **Problemes de CORS**:
  - **Solució**: s'ha configurat un proxy a `vite.config.js` (ja està implementat).
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/random': {
        target: 'https://bored-api.appbrewery.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/random/, '/random')
      },
      '/filter': {
        target: 'https://bored-api.appbrewery.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/filter/, '/filter')
      }
    }
  }
});
```
- **Limitacions d'ús de l'API** (`429: Too Many Requests`)
  - **Solució**: Esperar uns 15 minuts i tornar-ho a intentar, per a més informació podeu consultar el header del Fetch a Network a les eines de desenvolupament del navegador



## Galeria d'imatges i funcionalitats

| **Imatge**                                                      | **Funcionalitat**                    |
|-----------------------------------------------------------------|--------------------------------------|
| <img src="./public/demo/img/randomDesk.png" alt="randomDesk" width="300"/> | **Activitat Random Web** |
| <img src="./public/demo/img/errorDesk.png" alt="errorDesk" width="300"/>   | **Error al carregar activitat**      |
| <img src="./public/demo/img/eduDesk.png" alt="eduDesk" width="300"/>       | **Activitat de tipus Educació i filtre seleccionat**         |
| <img src="./public/demo/img/mobileRandom.png" alt="mobileRandom" width="300"/> | **Activitat random en mòbil**       |
| <img src="./public/demo/img/mobileError.png" alt="mobileError" width="300"/>   | **Error en mòbil**                  |
| <img src="./public/demo/img/mobileCuinar.png" alt="mobileCuinar" width="300"/> | **Activitat de tipus Cuina i filtre seleccionat mòbil**                  |


## Autora

[![Lucía Ordoñez Vilanova](https://avatars.githubusercontent.com/u/153511070?v=4&s=100 "Lucía Ordoñez Vilanova's GitHub Avatar")](https://github.com/Luovtyrell) <a href="https://www.github.com/Luovtyrell"> <br>
<img src="https://img.shields.io/badge/LUCIA%20ORDO%C3%91EZ%20VILANOVA-gray?style=flat&color=ffdf0a"  height="30" alt="Made by Lucía Ordoñez Vilanova"/>
</a>

<a href="mailto:luciaorvilanova@gmail.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat"  height="23" alt="Gmail" /></a> <a href="https://www.linkedin.com/in/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat" height="23" alt="LinkedIn" /></a> <a href="https://t.me/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=fff&style=flat" height="23" alt="Telegram" /></a> <a href="http://discordapp.com/users/664163194989707308" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=fff&style=flat" height="23" alt="Discord" /></a> 

---
🇬🇧 EN Version:
<details>
<div align="center"><img src="./public/assets/hackato.png" alt="hackathon header"></div>

# Boored: Frontend technical test for Hackathon
<div align="center">
<img src="./public/demo/video/BooredDemo.gif" alt="boored demo gif"></div>

Boored is a web application that offers a variety of activities to do when bored, featuring a friendly and attractive interface. The app allows users to filter activities by type, such as social, educational, charity, or cooking. This is the technical test for the Frontend category of the [Hackathon on October 22 and 23, 2024](https://cibernarium.barcelonactiva.cat/es/hackato-marketplace-2024).

## Table of Contents

1. [Introduction](#boored-frontend-test-for-hackathon-at-the-employment-fair-2024)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Workflow Description](#workflow-description)
5. [Project Structure](#project-structure)
6. [Installation](#installation)
7. [Usage](#usage)
8. [Known Issues](#known-issues)
9. [Gallery of Images and Features](#gallery-of-images-and-features)
10. [Author](#author)

## Features

- Filters for activity types: social, education, charity, cooking.
- Random activity generation.
- Responsive design for mobile and desktop.
- Handling of loading states and errors.

## Technologies Used

#### FrontEnd:
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat" alt="React Badge">  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat" alt="JavaScript Badge"> 
  
#### Validations:
  <img src="https://img.shields.io/badge/PropTypes-lightblue?style=flat&logo=React&logoColor=black" alt="PropTypes Badge">

#### Design and Layout:
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat" alt="Tailwind CSS Badge">  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=fff&style=flat" alt="DaisyUI Badge">   <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat" alt="CSS3 Badge"> 

#### API and HTTP Requests:
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat" alt="Axios Badge">

#### Development Tools:
  <img src="https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat" alt="React Router Badge">   <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat" alt="Vite Badge">

> For this test, I used my [template](https://github.com/Luovtyrell/React-Vite-PropTypes-React-Router-Tailwind-Starter). 

## Workflow Description:
1. The application starts on the `Home` page.
2. The user selects a filter from the `FiltersBar`, which updates the filter state using the `ActivityContext`.
3. `ToDoCard` calls the `fetchActivity` function with the updated filter.
4. `fetchActivity` makes a request to the API to get a new activity and updates the `ActivityContext` with the received information.
5. `ActivityResult` displays the obtained activity or handles loading and error states, depending on the API response.

## Project Structure
<details>

```
── public
│   ├── assets/
│   └── demo/
├── src
│   ├── App.jsx
│   ├── Components
│   │   ├── Header
│   │   │   ├── FiltersBar.jsx
│   │   │   └── NavBar.jsx
│   │   ├── Main
│   │   │   ├── ActivityResult.jsx
│   │   │   ├── ToDoCard.css
│   │   │   └── ToDoCard.jsx
│   │   └── UI
│   │       ├── MainButton.jsx
│   │       └── PurpleButton.jsx
│   ├── context
│   │   └── ActivityContext.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   └── home
│   │       └── Home.jsx
│   ├── routes
│   │   └── AppRoutes.jsx
│   └── services
│       └── apiFetchActivity.js
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── README.md
├── tailwind.config.cjs
└── vite.config.js
```
</details>

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Luovtyrell/Prova-Frontend-Hackato-Barcelona.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Prova-Frontend-Hackato-Barcelona.git
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:{PortNumber}` to see the application in action.

## Usage
1. Use the filter bar at the top to select an activity category.
2. Click the "Generate" button to get a random activity from the selected category.
3. If no filter is selected, a random unfiltered activity will be displayed.

## Known Issues

- **CORS Issues**:
  - **Solution**: A proxy has been configured in `vite.config.js` (already implemented).
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/random': {
        target: 'https://bored-api.appbrewery.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/random/, '/random')
      },
      '/filter': {
        target: 'https://bored-api.appbrewery.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/filter/, '/filter')
      }
    }
  }
});
```
- **API Usage Limitations** (`429: Too Many Requests`)
  - **Solution**: Wait about 15 minutes and try again. For more information, you can check the Fetch header in the Network tab of your browser's developer tools.

## Gallery of Images and Features

| **Image**                                                      | **Functionality**                    |
|-----------------------------------------------------------------|--------------------------------------|
| <img src="./public/demo/img/randomDesk.png" alt="randomDesk" width="300"/> | **Random Web Activity** |
| <img src="./public/demo/img/errorDesk.png" alt="errorDesk" width="300"/>   | **Error loading activity**      |
| <img src="./public/demo/img/eduDesk.png" alt="eduDesk" width="300"/>       | **Educational activity and selected filter**         |
| <img src="./public/demo/img/mobileRandom.png" alt="mobileRandom" width="300"/> | **Random activity on mobile**       |
| <img src="./public/demo/img/mobileError.png" alt="mobileError" width="300"/>   | **Error on mobile**                  |
| <img src="./public/demo/img/mobileCuinar.png" alt="mobileCuinar" width="300"/> | **Cooking activity and selected filter on mobile**                  |

## Author

[![Lucía Ordoñez Vilanova](https://avatars.githubusercontent.com/u/153511070?v=4&s=100 "Lucía Ordoñez Vilanova's GitHub Avatar")](https://github.com/Luovtyrell) <a href="https://www.github.com/Luovtyrell"> <br>
<img src="https://img.shields.io/badge/LUCIA%20ORDO%C3%91EZ%20VILANOVA-gray?style=flat&color=ffdf0a"  height="30" alt="Made by Lucía Ordoñez Vilanova"/>
</a>

<a href="mailto:luciaorvilanova@gmail.com" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat"  height="23" alt="Gmail" /></a> <a href="https://www.linkedin.com/in/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat" height="23" alt="LinkedIn" /></a> <a href="https://t.me/luovtyrell" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Telegram-26A5E4?logo=telegram&logoColor=fff&style=flat" height="23" alt="Telegram" /></a> <a href="http://discordapp.com/users/664163194989707308" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=fff&style=flat" height="23" alt="Discord" /></a> 


</details>
