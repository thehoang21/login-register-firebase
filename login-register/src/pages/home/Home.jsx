import React from 'react';
import "./home.scss";

const Home = () => {
  return (
    <div className='home'>
      <div>
  {/* Hero */}
  <section className="et-hero-tabs">
    <h1>STICKY SLIDER NAV</h1>
    <h3>Sliding content with sticky tab nav</h3>
    <div className="et-hero-tabs-container">
      <a className="et-hero-tab" href="#tab-es6">ES6</a>
      <a className="et-hero-tab" href="#tab-flexbox">Flexbox</a>
      <a className="et-hero-tab" href="#tab-react">React</a>
      <a className="et-hero-tab" href="#tab-angular">Angular</a>
      <a className="et-hero-tab" href="#tab-other">Other</a>
      <span className="et-hero-tab-slider" />
    </div>
  </section>
  {/* Main */}
  <main className="et-main">
    <section className="et-slide" id="tab-es6">
      <h1>ES6</h1>
      <h3>something about es6</h3>
    </section>
    <section className="et-slide" id="tab-flexbox">
      <h1>Flexbox</h1>
      <h3>something about flexbox</h3>
    </section>
    <section className="et-slide" id="tab-react">
      <h1>React</h1>
      <h3>something about react</h3>
    </section>
    <section className="et-slide" id="tab-angular">
      <h1>Angular</h1>
      <h3>something about angular</h3>
    </section>
    <section className="et-slide" id="tab-other">
      <h1>Other</h1>
      <h3>something about other</h3>
    </section>
  </main>
</div>

    </div>
  )
}

export default Home