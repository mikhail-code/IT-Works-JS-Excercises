import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Catalogue from './assets/components/Catalogue'

function App() {
  const [count, setCount] = useState(0)
  const imageDirectory = '../images/Persons.jpg'
  const imageDirectory_1 = '../images/Persons.jpg'
  const imageDirectory_2 = './assets/Persons.jpg'


  const cards = [
    {
      "name": "Luke Skywalker", 
      "height": "172", 
      "mass": "77", 
      "hair_color": "blond", 
      "skin_color": "fair", 
      "eye_color": "blue", 
      "birth_year": "19BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/", 
          "https://swapi.dev/api/vehicles/30/"
      ], 
      "starships": [
          "https://swapi.dev/api/starships/12/", 
          "https://swapi.dev/api/starships/22/"
      ], 
      "created": "2014-12-09T13:50:51.644000Z", 
      "edited": "2014-12-20T21:17:56.891000Z", 
      "url": "https://swapi.dev/api/people/1/"
    },
    {
      "name": "Luke Skywalker", 
      "height": "172", 
      "mass": "77", 
      "hair_color": "blond", 
      "skin_color": "fair", 
      "eye_color": "blue", 
      "birth_year": "19BBY", 
      "gender": "male", 
      "homeworld": "https://swapi.dev/api/planets/1/", 
      "films": [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      "species": [], 
      "vehicles": [
          "https://swapi.dev/api/vehicles/14/", 
          "https://swapi.dev/api/vehicles/30/"
      ], 
      "starships": [
          "https://swapi.dev/api/starships/12/", 
          "https://swapi.dev/api/starships/22/"
      ], 
      "created": "2014-12-09T13:50:51.644000Z", 
      "edited": "2014-12-20T21:17:56.891000Z", 
      "url": "https://swapi.dev/api/people/1/"
    }
  ];

  return (
    <div className="flex flex-col bg-black w-screen">
      <Catalogue
        people={cards}
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App
