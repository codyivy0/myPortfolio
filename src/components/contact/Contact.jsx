import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.contact}>
        <div className={styles.contactLeft}>
          <h1>About Me</h1>
          <p>
            I am a passionate, hard-working software engineer specializing in front-end technologies and ready to bring your designs to life. When Im not coding Im soaking in quality time with my wife and two kids. 
          </p>
          <h2>Contact Me!</h2>
          <div className={styles.socialButtons}>
            <a href="mailto:codyivy0@gmail.com" className={styles.emailButton}>
              codyivy0@gmail.com
            </a>
            <a
              href="https://github.com/codyivy0"
              target="_blank"
              className={styles.socialButton}
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/cody-ivy-7aa475241/"
              target="_blank"
              className={styles.socialButton}
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className={styles.contactRight}>
          <img className={styles.contactImg} src="/pixel beach.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
