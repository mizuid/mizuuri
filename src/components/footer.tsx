import ExtLink from './ext-link'

import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <span>Powered by </span>
      <ExtLink href="https://alpacat.com/blog/easy-notion-blog">
        easy-notion-blog
      </ExtLink>
    </div>
  </footer>
)

export default Footer
