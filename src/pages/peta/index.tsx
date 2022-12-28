import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>真っ赤な空を見ただろうか！</h2>
      <p>理屈ばかりこねまわして　すっかり冷めた胸の奥が</p>
      <p>ただ一度の微笑みで</p>
      <p>こんなに見事に燃えるとは</p>
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
