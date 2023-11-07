"use client"
import styles from '@/styles/home/home.module.css'
import Navbar from './(component)/navbar/Navbar';
import NextBtn from './(component)/nextBtn/NextBtn'


export default function Home() {
 

  return (
    <>
      <div className={styles.mainDiv}>
        <Navbar progress={20}/>
        <div className={styles.contentDiv}>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p style={{ fontSize: 20, fontWeight: 500 }}>
              Discover Your Travel Energy!
            </p>
            <p style={{ color: '#7A7676' }}>Slide to your vibe! Are you the life of the party or a cozy bookworm? 🎉📚</p>
          </div>


          <div className={styles.emojiSection}>
            <div>
              <div className={styles.emojiDiv}>
                🤫
              </div>
              <p>Introvert</p>
            </div>

            <div className={styles.emptyDiv}>

            </div>
            <div>
              <div className={styles.emojiDiv}
                style={{ marginLeft: 27 }}
              >
                🎉
              </div>
              <p>Extrovert</p>
            </div>


          </div>

          <NextBtn navigateTo="/intrest" />

        </div>
      </div>
    </>
  )
}
