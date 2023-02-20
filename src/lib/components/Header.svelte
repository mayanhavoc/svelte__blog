<style>

/*********************** Navigation ************************/

header {
    background: #2e323f;
    padding: 2em 0;
    text-align: center;
  }

.nav {
    visibility: hidden;
    height: 0;
    position: absolute;
}

.nav--visible {
    visibility: visible;
    height: auto;
    position: relative;
}

.nav__list {
    margin: 0;
    padding: 1rem 0;
    list-style: none;
}

.nav__list--primary {
    margin: 0 auto;
}

.nav__item {
    margin-top: 1rem;
}

.nav__link {
    color: var(--color-light);
    text-decoration: none;
    text-transform: uppercase;
    font-size: var(--font-xs);
}

.nav__link--button {
    background: var(--color-highlight);
    color: var(--color-light);
    padding: .25em 1em;
    border-radius: 10em;
}

.nav__link:hover,
.nav__link:focus {
    opacity: .75;
}

.nav-toggle {
    cursor: pointer;
    border: 0;
    width: 3rem;
    height: 3rem;
    padding: 0em;
    border-radius: 50%;
    background: var(--color-highlight);
    color: var(--color-light);
    transition: opacity 250ms ease;
    position: absolute;
    left: 0;
}

.nav-toggle:focus,
.nav-toggle:hover {
    opacity: 0.75;
}

.hamburger {
    width: 50%;
    position: relative;
}

.hamburger,
.hamburger::before,
.hamburger::after {
    display: block;
    margin: 0 auto;
    height: 3px;
    background: var(--color-light);
}

.hamburger::before,
.hamburger::after {
    content: "";
    width: 100%;
}

.hamburger::before {
    transform: translateY(-6px);
}

.hamburger::after {
    transform: translateY(3px);
}

.logo {
    height: 30px;
}

@media only screen and (min-width: 767px) {
  .nav-toggle {
    display: none;
  }

  .nav {
    visibility: visible;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: auto;
  }

  .nav__list {
    display: flex;
    align-items: center;
    margin: 0;
    margin: 0 auto;
  }
  
  .nav__item {
    margin: 0 0 0 1.5em;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>

<script>
  let active = false;
</script>

<header>
  <div class="container">
      <button class="nav-toggle" aria-label="open navigation" on:click={() => (active = !active)}>
          <span class="hamburger"></span>
      </button>
      <a class="logo" href="">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/logo.svg" alt="">
      </a>
      <nav class="{active ? 'nav' : 'nav--visible' }">
          <ul class="nav__list nav__list--primary">
              <li class="nav__item"><a class="nav__link" href="/">Home</a></li>
              <li class="nav__item"><a class="nav__link" href="/about">About</a></li>
              <li class="nav__item"><a class="nav__link" href="/work">Work</a></li>
              <li class="nav__item"><a class="nav__link" href="/blog">Blog</a></li>
          </ul>
          <ul class="nav__list nav__list--secondary">
              <li class="nav__item"><a class="nav__link nav__link--button" href="">Contact</a></li>
          </ul>
      </nav>
  </div>
</header>