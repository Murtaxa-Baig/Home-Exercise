import backimage from "@/public/assets/images/backArrow.svg"
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "@/styles/navbar/navbar.module.css"
import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Navbar(props) {

    const router = useRouter()


    const previousPage = () => {
        router.push(props.navigateTo)
    }
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <button
                    onClick={previousPage}
                    className={styles.backBtn}>
                    <Image
                        src={backimage}
                        width={32}
                        height={32}
                        alt="Picture of the author"
                    />
                </button>
                <div >
                    <ProgressBar
                        completed={props.progress}
                        isLabelVisible={false}
                        height="5px"
                        width={"126"}
                        bgColor={'#B9E6F5'}
                    />

                </div>
                <p></p>
            </div>

        </>
    )
}
