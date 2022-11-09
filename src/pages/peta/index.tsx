import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>Man shall not live by bread alone.</h2>
      <p>霜つききたり</p>
      <p>木ぬれをそむると</p>
      <p>おもひしものを</p>
      <p>庭にあづまやの</p>
      <p>遠見をそめ</p>
      <p>うすべにさせる</p>
      <p>魚をそめ</p>
      <p>わかるるきみの</p>  
      <p>くちをそめ</p>
      <p>
        Momidi written by{' '}
        <ExtLink href="https://www.aozora.gr.jp/cards/000067/files/53636_44277.html">
          HagiwaraSakutaro/AozoraBunko
        </ExtLink>
      </p>
    </div>
  </div>
)

export default RenderPage
