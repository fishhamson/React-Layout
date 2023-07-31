import React from 'react'

const Header = () => {
  return (
    <div>
<nav class="navbar navbar-expand-lg bg-black">
  <div class="container">
    <a class="navbar-brand text-white" href="#">Start Bootstrap</a>
    <div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
        <a class="nav-link text-white" href="#">Features</a>
        <a class="nav-link text-white" href="#">Pricing</a>
      </div>
    </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header