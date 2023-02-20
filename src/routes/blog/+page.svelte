<style>
  .blog {
    background: var(--color-darkest);
    color: var(--color-light);
    min-height: 100vh;
  }

  .blog__title {
    font-size: var(--font-xl);
    color: var(--color-highlight);
  }

  .blog__list {
    margin: 0;
    padding: 1rem 0;
    list-style: none;
    font-family: var(--secondary-font);
  }

  .blog__post {
    margin: 0 auto;
  }

  .post__heading {
    font-size: var(--font-lg);
    color: var(--color-light-md);
  }

  .post__text {
    font-family: var(--secondary-font);
  }

  .post__link--button {
    background: var(--color-highlight);
    color: var(--color-light);
    padding: .25em 1em;
    border-radius: 10em;
    text-decoration: none;
  }


</style>

<script>
    export let data;
</script>
   

<section class="blog">
  <div class="container row">
    <h2 class="blog__title">Blog</h2>
    <ul class="blog__list">
      {#each data.posts as post}
        <li class="blog__post">
          <h2 class="post__heading">
            { post.meta.title}
          </h2>
          <p class="post__text">Published {post.meta.date}</p>
          <p class="post__category">Category: {post.meta.category}</p>
          <a class="post__link--button" href={post.path}>
            Read more
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
  