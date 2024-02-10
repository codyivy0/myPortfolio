import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Sample Coursework</h2>
      <div className={styles.projectsContainer}>
        <a
          className={styles.projectLink}
          href="https://space-tourism-id.netlify.app/"
        >
          <img
            className={styles.project}
            src="/space-tourism.jpg"
            alt="space tourism"
          />
          <div className={styles.infoCard}>
            <h2>Space Tours</h2>
            <p>
              Multiple page application highlighting the destinations and flight
              crew of a space travel mission.
            </p>
          </div>
        </a>
        <a
          className={styles.projectLink}
          href="https://guileless-ganache-302ba3.netlify.app/"
        >
          <img
            className={styles.project}
            src="/farAwaySS.jpg"
            alt="usePopcorn"
          />
          <div className={styles.infoCard}>
            <h2>The Far Away Planner</h2>
            <p>A vacation packing helper.</p>
          </div>
        </a>
        <a
          className={styles.projectLink}
          href="https://creative-seahorse-f22c68.netlify.app/"
        >
          <img
            className={styles.project}
            src="/worldwiseSS.jpg"
            alt="worldwise app"
          />
          <div className={styles.infoCard}>
            <h2>Worldwise</h2>
            <p>
              Worldwise is a robust Single Page Application using several react
              libraries such as router and leaflet to allow a user to navigate a
              map and log trips complete with date and details.
            </p>
          </div>
        </a>
        <a
          className={styles.projectLink}
          href="https://codyivy0.github.io/usepopcorn/"
        >
          <img
            className={styles.project}
            src="/usePopcornSS.jpg"
            alt="usePopcorn"
          />
          <div className={styles.infoCard}>
            <h2>usePopcorn</h2>
            <p>
              Utilizing movieAPI, usePopcorn allows the user to search through a
              database of movies, seeing details, images and reviews. The user
              can also log their own rating to be saved using local storage.
            </p>
          </div>
        </a>
      </div>
      <h2>Personal Projects</h2>

      <div className={styles.projectsContainer}>
        <a
          className={styles.projectLink}
          href="https://designo-id.netlify.app/"
        >
          <img className={styles.project} src="/designo-SS.png" alt="designo" />
          <div className={styles.infoCard}>
            <h2>Designo</h2>
            <p>
              A multi page website showcasing a diverse range of captivating
              projects.
            </p>
          </div>
        </a>

        <a
          className={styles.projectLink}
          href="https://itty-bitty-url.netlify.app/"
        >
          <img
            className={styles.project}
            src="/ittyBittyUrlSS.png"
            alt="URL shortener with logging"
          />
          <div className={styles.infoCard}>
            <h2>Shortly</h2>
            <p>
              A URL shortening service using tinyURL api to convert long URLs
              into shorter links. The site also logs and displays your previous
              requests and copies the short url to be shared to your clipboard
              with a quick button tap.
            </p>
          </div>
        </a>

        <a className={styles.projectLink} href="https://myteam-id.netlify.app/">
          <img
            className={styles.project}
            src="/my-team-SS.jpg"
            alt="myTeam talent agency"
          />
          <div className={styles.infoCard}>
            <h2>myTeam</h2>
            <p>
              A beautiful responsive multi-page application utilizing
              react-router.
            </p>
          </div>
        </a>

        <a
          className={styles.projectLink}
          href="https://where-in-the-world-id.netlify.app/"
        >
          <img
            className={styles.project}
            src="/witwSS.png"
            alt="A multi page application with a searchable database of the worlds countries and pages for each countries details. "
          />
          <div className={styles.infoCard}>
            <h2>Where in the World?</h2>
            <p>
              A multi page application with a searchable database of the worlds
              countries and pages for each countries details.
            </p>
          </div>
        </a>

        <a
          className={styles.projectLink}
          href="https://comforting-halva-5f64f3.netlify.app/"
        >
          <img
            className={styles.project}
            src="/adviceGenSS.jpg"
            alt="advice generator"
          />
          <div className={styles.infoCard}>
            <h2>Advice Generator</h2>
            <p>
              Utlizing the Advice Slip API this simple application fetches an
              advice slip on button press.
            </p>
          </div>
        </a>
        <a
          className={styles.projectLink}
          href="https://dainty-figolla-c2c247.netlify.app/"
        >
          <img className={styles.project} src="/pokedexSS.jpg" alt="pokedex" />
          <div className={styles.infoCard}>
            <h2>Pokedex</h2>
            <p>
              A favorite of my children this pokedex allows a user to search for
              specific pokemon by name or by number, see thier details and add
              them to a party for quick viewing
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
