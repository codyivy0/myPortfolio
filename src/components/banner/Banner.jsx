import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.bannerHero}>
      <h1>Cody Ivy</h1>
      <img  className={styles.headshotImg} src="/codyHeadshot.jpg" alt="Cody Ivy" />
    </div>
  )
};

export default Banner ;
