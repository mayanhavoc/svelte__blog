<style>

header {
  background: #222c2a;
  padding: 1em 0;
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

.logo {
  width: 40px;
  height: auto;
}

.nav__list {
  margin: 0;
  padding: 1rem 0;
  list-style: none;
  font-size: .9rem;
}

.nav__item {
  margin-top: 1rem;
}

.nav__link {
  color: #f3eed9;
  text-decoration: none;
  text-transform: uppercase;
}

.nav__link--button {
  background: #f3eed9;
  color: #136c72;
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
  background: #824936;
  color: #f3eed9;
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
  background: white;
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
  <div class="container row">
    <button class="nav-toggle"  aria-label="open navigation" on:click="{() => active = !active}">
      <span class="hamburger"></span>
    </button>
    <a href="/">
      <img class="logo" src="logo.svg" alt="">
    </a>
    <nav class="{active ? 'nav': 'nav--visible'}">
      <ul class="nav__list nav__list--primary">
        <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
        <li class="nav__item"><a href="/about" class="nav__link">About</a></li>
        <li class="nav__item"><a href="/work" class="nav__link">Work</a></li>
        <li class="nav__item"><a href="/blog" class="nav__link">Blog</a></li>
        <li class="nav__item"><a href="mailto:robertomh@proton.me" class="btn">Contact me</a></li>
      </ul>
    </nav>
  </div>
</header>