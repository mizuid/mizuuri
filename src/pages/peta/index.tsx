import DocumentHead from '../../components/document-head'
import ExtLink from '../../components/ext-link'
import styles from '../../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>真っ赤な空を見ただろうか！</h2>
      <p>
        kaminarigumo-official-blog powered by{' '}
        <ExtLink href="http://www.kaminarigumo.com/blog/">
          kaminarigumo/official-blog
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
