import React from 'react'

const Home = () => {
    
  return (
     <div class="container mt-4">
      <h1 class="mb-4">Shop Products</h1>
      <div class="row">
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 text-center">
            <div class="card-body">
              <h5 class="card-title">Laptop</h5>
              <p class="card-text">$800</p>
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 text-center">
            <div class="card-body">
              <h5 class="card-title">Phone</h5>
              <p class="card-text">$500</p>
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 text-center">
            <div class="card-body">
              <h5 class="card-title">Headphones</h5>
              <p class="card-text">$100</p>
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="card shadow-sm h-100 text-center">
            <div class="card-body">
              <h5 class="card-title">Keyboard</h5>
              <p class="card-text">$70</p>
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home