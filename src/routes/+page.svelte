<style>
    .container {
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.col {
  /* these are now flex items */
  width: 100%;
}

.col + .col {
  margin-left: 30px;
}
</style>

<section class="hero">
    <div class="container hero">
        <span class="hero__text">lorem ipsum sit</span>
        <h1 class="hero__title">Responsive layouts don't have to be a struggle</h1>
    </div>
</section>
