<style>
/*********************** Content ************************/

/*********************** Content Feature ************************/

    .feature__heading {
        color: var(--color-highlight);
    }

    .feature__text {
        font-family: var(--secondary-font);
    }

    .feature__img {
        padding: 3em;
    }

/*********************** Content Sidebar ************************/

    .sidebar {
        padding: 1em 0;
    }

    .col--sidebar {
        background-color: var(--color-darkest);
        text-align: center;
        padding: 2em;
        margin-top: 1em;
        color: var(--color-light);
        border-radius: 15px;
    }

    .sidebar__heading {
        font-size: var(--font-lg);
        color: var(--color-highlight);
    }

    .sidebar__text {
        font-family: var(--secondary-font);
        margin: 1em 5em;
    }

    .sidebar__img {
        width: 30vw;
    }

    .btn--sidebar {
        margin: 1em 0;
    }
</style>

<section class="content">
    <div class="container row">
        <article class="feature">
            <h2 class="feature__heading">It doesn't have to be so hard</h2>
            <p class="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus illum nam unde laboriosam, rem tempora at. Illo iure necessitatibus aperiam ratione pariatur unde! Asperiores quasi fugit iure, in hic labore.</p>
            <img src="https://cdn-icons-png.flaticon.com/512/328/328199.png" alt="website ui sketches" class="feature__img">
            <p class="feature__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae libero earum quos beatae dolorem dolores iste tempore asperiores aliquid aut reiciendis veniam laborum saepe perspiciatis, consequatur nesciunt labore. Voluptatum, tempora?</p>
        </article>
        <section class="sidebar">
            <div class="row">
                <div class="col col--sidebar">
                    <h3 class="sidebar__heading">Web 3</h3>
                    <img class="sidebar__img" src="https://cdn-icons-png.flaticon.com/512/8849/8849385.png" alt="">
                    <p class="sidebar__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, temporibus?</p>
                    <a class="btn btn--sidebar" href="">Learn more</a>
                </div>
                <div class="col col--sidebar">
                    <h3 class="sidebar__heading">Blockchain</h3>
                    <img class="sidebar__img" src="https://cdn-icons-png.flaticon.com/512/2152/2152539.png" alt="">
                    <p class="sidebar__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, temporibus?</p>
                    <a class="btn btn--sidebar" href="">Learn more</a>
                </div>
            </div>
        </section>
    </div>
</section>