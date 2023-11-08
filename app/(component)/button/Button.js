import styles from "@/styles/button/button.module.css"

export default function Button(props) {
    return (
        <>
            <div style={{ margin: 8 }}>
                <button className={styles.btn} style={{ backgroundColor: props.title == props.btnTitle ? "#D9F5FE80" : 'transparent'}} onClick={props.clickHandler}>
                    {props.title}
                </button>
            </div>
        </>
    )
}
