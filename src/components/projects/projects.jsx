import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Sample Coursework</h2>
      <div className={styles.projectsContainer}>
        <a href="https://creative-seahorse-f22c68.netlify.app/">
          <img
            className={styles.project}
            src="/worldwiseSS.jpg"
            alt="worldwise app"
          />
        </a>
        <a href="https://starlit-muffin-6cf464.netlify.app/">
          <img
            className={styles.project}
            src="/space-tourism.jpg"
            alt="space tourism"
          />
        </a>
        <a href="https://guileless-ganache-302ba3.netlify.app/">
          <img
            className={styles.project}
            src="/farAwaySS.jpg"
            alt="usePopcorn"
          />
        </a>
        <a href="https://codyivy0.github.io/usepopcorn/">
          <img
            className={styles.project}
            src="/usePopcornSS.jpg"
            alt="usePopcorn"
          />
        </a>
      </div>
      <h2>Personal Projects</h2>

      <div className={styles.projectsContainer}>
        <a href="https://itty-bitty-url.netlify.app/">
          <img
            className={styles.project}
            src="/ittyBittyUrlSS.png"
            alt="URL shortener with logging"
          />
        </a>
        <a href="https://comforting-halva-5f64f3.netlify.app/">
          <img
            className={styles.project}
            src="/adviceGenSS.jpg"
            alt="advice generator"
          />
        </a>
        <a href="https://dainty-figolla-c2c247.netlify.app/">
          <img className={styles.project} src="/pokedexSS.jpg" alt="" />
        </a>
        <a href="https://vermillion-maamoul-68c9b3.netlify.app/">
          <img className={styles.project} src="/imageCarouselSS.jpg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
