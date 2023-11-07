import styles from "@/styles/nextBtn/nextBtn.module.css"
import Image from "next/image"
import arrow from "@/public/assets/images/Arrow.svg"
import { useRouter } from 'next/navigation'

export default function NextBtn(props) {
    const router = useRouter()


    const NextPage = () => {
      router.push(props.navigateTo)
    }
    return (
        <>
            <div className={styles.nextBtnDIv}>
                <button className={styles.nextBtn}
                    onClick={NextPage}
                >Next
                    <Image
                        src={arrow}
                        width={30}
                        height={30}
                        alt="Picture of the author"
                        style={{ marginLeft: -5 }}
                    />

                </button>

            </div>
        </>
    )
}
