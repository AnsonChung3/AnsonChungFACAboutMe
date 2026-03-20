const sectionContent = {
	about: `
        <h2>About Anson Chung</h2>
        <p>
            A self-taught junior software developer trying to start a career in tech. Specialising in JavaScript, with
            good exposure to Python. Most of my past projects were built with Vue.js, and I've dipped into React to broaden my front-end toolkit. Comfortable using Git via the command line, and Docker to keep
            environments consistent.</p>
        <p>
            I moved to the UK just before Covid and used that time to reflect on what I wanted to do long term. Before
            relocating, I worked in a shipping liner company that owned container vessels, which gave me exposure to large-scale
            operations and problem solving. Since moving here, I worked in a care home for a while and have now moved on to
            volunteering at the World Heritage Centre and Victoria Art Gallery in Bath, where I connect with visitors and share
            my knowledge of the city. Recently I have taken on my first comissioned project.
        </p>
        <p>
            Other than code, I enjoy knitting and sewing. They both allow creative engineering. There are patterns to follow
            and foundamental techniques to learn, but also plenty of room to experiment and design something unique. I find the
            process of working step by step towards a finished piece both practical and rewarding.
        </p>
        <figure>
            <img
                src="img/wall_pocket_and_bats.jpg"
                alt="A storage solution I sewed for myself. And bonus knitted bats in one of the pockets."
            />
            <figcaption>
                A storage solution I sewed for myself. Bonus knitted bats in one
                of the pockets.
            </figcaption>
        </figure>
    `,
	contact: `
        <h2>Contact</h2>
        <ul>
            <li><a href="https://github.com/AnsonChung3">Github Profile</a></li>
            <li>
                <a href="https://www.linkedin.com/in/ansonchung3/">LinkedIn</a>
            </li>
        </ul>
    `,
	'why-switch': `
        <h2>Why do I want a switch</h2>
        <p>
            I want to move into a career as a software developer because it offers a chance to do what I enjoy as work.
        </p>
        <p>
            Programming itself is fun, and there's a real sense of satisfaction when something I've built finally works
            after problem-solving and debugging. What makes it especially engaging is the freedom it allows. There are
            often multiple ways to solve the same problem, each with its own benefit, which keeps the work fresh and
            interesting.
        </p>
        <p>
            Beyond that, I find programming intellectually stimulating, constantly challenging me to think creatively and
            logically.
        </p>
        <p>
            A career in software development feels like the perfect balance of opportunity and personal fulfilment.
        </p>
    `,
	snake: `
        <h2>Snake mini game</h2>
        <p>
            <a href="https://github.com/AnsonChung3/AnsonChungFACSnake.git">The classic mini game</a>. Very simple code,
            very simple game play, <a href="https://ansonchung3.github.io/AnsonChungFACSnake/">but lots of fun</a>.
        </p>
        <figure>
            <img src="img/snake_game_1.jpg" alt="A screen shot of the rules" />
            <img
                src="img/snake_game.png"
                alt="A partial screen shot of the mini game Snake"
            />
        </figure>
    `,
	battleship: `
        <h2>My favourite project!</h2>
        <p>
            <a href="https://github.com/AnsonChung3/Battleship">Battleship</a> is my favourite project so far.
        </p>
        <p>
            I started to work on it when I wanted to start tackling my first reasonbly sized project. I experimented a
            lot of new tools with it. It was challenging to make but very satifying when I could share the link to my
            friends and they can <a href="https://ansonchung3.github.io/Battleship/">play a game</a> with it.
        </p>
        <figure>
            <img
                src="img/battleship_1.png"
                alt="A screenshot of player choosing their formation."
            />
            <img
                src="img/battleship_2.png"
                alt="A screenshot in the middle of the game showing one tile of a ship is damaged."
            />
        </figure>
    `,
	'route-calculator': `
        <h2>Route Calculator</h2>
        <p>
            My first commissioned project — and a lovely (tiny) milestone. 
            The client needs a simple interactive visualiser that maps connections between locations and sums their assigned values to see if they are qualified for some tiered award.
        </p>
        <p>
            It is still a work in progress, demoed here with the client's permission.
            I picked cathedrals and notable churches across England, Wales, and Scotland as the mock data — I enjoy visiting them myself.
            It is a small project, but there is something genuinely satisfying about building something rooted in a real-world need.
        </p>
        <figure>
            <img
                src="img/route-calculator.jpg"
                alt="A screenshot of Route Calculator demo with mock data about cathedrals in England, Wales, and Scotland."
            />
        </figure>
    `,
	'older-projects': `
        <h2>Older Projects</h2>
        <h3>Stock Exchange</h3>
        <p>
            The first 'big' project when I first started coding. I set the project up when I was going through
            an online <a href="https://www.udemy.com/course/vuejs-2-the-complete-guide/">Vue course</a>. 
        </p>
        <p>
            It was a good practice project to include everything I've learned up to that point: building reusable custom components,
            fetching real data from external API with a key, conditional rendering on the frontend, using an UI framework (Quasar) on top of a Javascript framework (Vue), using localStorage and etc.
            It was very satisfying when the game runs properly.
        </p>
        <p>
            Link to <a href="https://github.com/AnsonChung3/Reboot-Stock-Exchange">project repo</a> and <a href="https://ansonchung3.github.io/Reboot-Stock-Exchange/#/">live demo</a>.
        </p>
        <small>To try out the live demo, you need to register for a free API key from <a href="https://marketstack.com/">Marketstack</a> because this project is all about fetching real data.</small>
        <figure>
            <img
                src="img/stock_exchange.jpg"
                alt="Main game screen, with Market and Portfolio tab. Account balance shown on the right. Added border around each stock for visibility."
            />
            <img
                src="img/stock_exchange_modal.jpg"
                alt="After pressing the 'Buy Max' button, a confirmation modal pops up."
            />
            <img
                src="img/stock_exchange_bought.jpg"
                alt="Showing the stock that is bought, with updated numbers in the account on top right."
            />
            <img
                src="img/stock_exchange_end_screen.jpg"
                alt="The end game report screen."
            />
        </figure>

        <hr>

        <h3>Hangman</h3>
        <p>
            Hangman was the learner project for Python the language, an app with a backend, and running things in a Docker container.
            It was one of those 'I don't know why I am doing it, but I am doing it for funsies' projects.
        </p>
        <p>
            The animation is as simple as the game itself: it's changing/rendering array.
        </p>
        <p>
            Link to <a href="https://github.com/AnsonChung3/hangman/tree/main">project repo</a>.
        </p>
        <figure>
            <img
                src="img/hangman_start.jpg"
                alt="Starting screen of Hangman"
            />
            <img
                src="img/hangman_wrong_guess.jpg"
                alt="Showing wrong guesses and input sanitise"
            />
            <img
                src="img/hangman_almost_dead.jpg"
                alt="One more guess left!"
            />
            <img
                src="img/hangman_uh_oh.jpg"
                alt="End game screen"
            />
        </figure>

    `,
};

const techTools = [
	'LLM-augmented development',
	'JavaScript (ES6+)',
	'Typescript',
	'Python 3',
	'Vue.js + state management tool',
	'React',
	'HTTP request tools (Axios, aiohttp, fetch api)',
	'HTML',
	'CSS',
	'Git',
	'Docker',
];
