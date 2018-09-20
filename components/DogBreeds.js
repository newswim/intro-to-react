import React, { Component } from 'react';

const dogBreeds = fetch('https://dog.ceo/api/breeds/list/all')
  .then(data => data.json())
  .then(dogs => console.log(Object.keys(dogs.message)))

class DogBreeds extends Component {
  render() {
    return (
      <div>
        {dogBreeds}
      </div>
    );
  }
}

export default DogBreeds;