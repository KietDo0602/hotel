// IcelandComponent.js

import React from 'react';

const IcelandComponent = () => {
  return (
    <>
      <section className="textoverpic bg-cover bg-fixed">
        <h1 className="text-white uppercase text-7xl">Come To Iceland</h1>
      </section>

      <section className="bg-white">
        <h1 className="text-gray-800 text-4xl">
          The last settled part of Europe, much of Iceland remains pristine and untouched.
        </h1>
      </section>

      <section className="pop bg-cover bg-fixed text-white">
        <h1>Population: 325,671</h1>
        <h1>Area: 103,001km<sup>2</sup></h1>
        <h1>= 3 people per square km</h1>
      </section>

      <section className="bg-cover bg-fixed">
        <h1 className="text-white text-4xl">
          With abundant geothermal energy, Iceland is also one of the greenest places on earth.
        </h1>
      </section>

      <section className="bg-white">
        <h1 className="text-gray-800 text-4xl">Come to Iceland. You’ll be amazed.</h1>
      </section>
    </>
  );
};

export default IcelandComponent;
