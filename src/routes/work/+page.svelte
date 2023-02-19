<style>
    .card__container {
        display: flex;
        flex-direction: column;
        gap: 3em;
        margin: 0 2rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: var(--secondary-color);
        color: var(--background-color);
        padding: 3em 2em;
        border-radius: 5%;
    }

    .card__img {
        max-width: 40%;
    }

    .card__text {
        text-align: center;
        max-width: 50vw;
    }

    .work__btn {
        display: inline-block;
        margin-top: 1.25em;
        background-color: var(--background-color);
        color: var(--primary-color);
        padding: 1em 2.5em;
        border-radius: 10px;
        font-size: 0.75em;
        text-decoration: none;
        font-weight: 700;
    }

    .work__btn:hover,
    .work__btn:focus {
        opacity: .75;
    }

    @media only screen and (min-width: 767px) {
        .row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card__container {
            flex-direction: row;
            justify-content: space-evenly;
            gap: 1em;
            margin-top: 1em;
            padding: 0;
        }

        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: var(--secondary-color);
            color: var(--background-color);
            padding: 1.25em 1em;
            border-radius: 5%;
        }

        .card h2 {
            font-size: 1.5rem;
        }

        .card__text {
            font-size: 0.75em;
        }
    }
</style>


<section class='feature'>
    <section class='container'>
        <h2 class='feature__title--mobile'>Work</h2>
        <section class='card__container row'>
            <div class='card card--web2'>
                <h2>Web2</h2>
                <img class='card__img' src='https://cdn-icons-png.flaticon.com/512/5839/5839602.png' alt='web2 icon'/>
                <p class='card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a href='#' class='work__btn'>Read more</a>
            </div>
            <div class='card card--blockchain'>
                <h2>Smart contracts</h2>
                <img class='card__img' src='https://cdn-icons-png.flaticon.com/512/4783/4783234.png' alt='blockchain icon'/>
                <p class='card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a href='#' class='work__btn'>Read more</a>
            </div>
            <div class='card card--documentation'>
                <h2>Documentation</h2>
                <img class='card__img' src='https://cdn-icons-png.flaticon.com/512/2015/2015058.png' alt='web2 icon'/>
                <p class='card__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <a href='#' class='work__btn'>Read more</a>
            </div>
            
        </section>
    </section>
</section>