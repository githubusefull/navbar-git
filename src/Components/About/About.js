import React from 'react'
import img from './Git1.png';
import img2 from './Git2.png';
function About() {
  return (
    <div className='container content'>
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={img} class="img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Git</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img2} class="img-top2" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Git easy usefull.</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img} class="img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Git</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={img2}class="img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Git</h5>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About