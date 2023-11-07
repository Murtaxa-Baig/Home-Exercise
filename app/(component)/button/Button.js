import styles from "@/styles/button/button.module.css"

export default function Button(props) {
    return (
        <>
            <div style={{ margin: 8 }}>
                <button className={styles.btn}>
                    {props.title}
                </button>
            </div>
        </>
    )
}
