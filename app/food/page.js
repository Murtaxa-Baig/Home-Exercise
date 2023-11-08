"use client"
import Button from "../(component)/button/Button"
import Navbar from "../(component)/navbar/Navbar"
import NextBtn from "../(component)/nextBtn/NextBtn"
import styles from "@/styles/food/food.module.css"
import Image from "next/image"
import jp from "@/public/assets/images/jp.svg"
import it from "@/public/assets/images/it.svg"
import vn from "@/public/assets/images/vn.svg"
import es from "@/public/assets/images/es.svg"
import cn from "@/public/assets/images/cn.svg"
import ind from "@/public/assets/images/in.svg"
import us from "@/public/assets/images/us.svg"
import th from "@/public/assets/images/th.svg"
import turkey from "@/public/assets/images/tr.svg"
import mx from "@/public/assets/images/mx.svg"
import Switch from "react-switch";
import { useState } from "react"



export default function Food() {
    const [lactose, setLacktose] = useState(false)
    const [gluten, setGluten] = useState(false)
    const [fructose, setFructose] = useState(false)
    const [btnTitle, setBtnTitle] = useState(null)

    const lactoseHandler = () => {
        setLacktose(!lactose)
    }

    const glutenHandler = () => {
        setGluten(!gluten)
    }

    const fructoseHandler = () => {
        setFructose(!fructose)
    }

    const clickHandler = (title) => {
        setBtnTitle(title)
        // console.log(title);

    }



    return (
        <>
            <div className={styles.mainDiv}>
                <Navbar progress={60} navigateTo="/vehicle" />
                <div className={styles.contentDiv}>
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        <p style={{ fontSize: 20, fontWeight: 500 }}>
                            Are you a picky eater?
                        </p>
                        <p style={{ color: '#7A7676' }}>
                            Tell us about your food preferences!
                        </p>
                    </div>

                    <div style={{ textAlign: "center" }}>
                        <p className={styles.text}>Diet</p>
                        <div className={styles.btnDiv}>
                            <Button title="🥩 Omnivore" clickHandler={() => clickHandler("🥩 Omnivore")} btnTitle={btnTitle} />
                            <Button title="🐟 Pescatarian" clickHandler={() => clickHandler("🐟 Pescatarian")} btnTitle={btnTitle} />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🌱 Vegan" clickHandler={() => clickHandler("🌱 Vegan")} btnTitle={btnTitle} />
                            <Button title="🚫🥩 Vegetarian" clickHandler={() => clickHandler("🚫🥩 Vegetarian")} btnTitle={btnTitle} />
                        </div>
                        <p className={styles.text}>Cuisine</p>
                        <div
                            className={styles.countryBtn}
                            style={{ marginBottom: 20 }}
                        >
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "jp" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("jp")}
                            >
                                <Image
                                    src={jp}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "it" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("it")}
                            >
                                <Image
                                    src={it}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "vn" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("vn")}
                            >
                                <Image
                                    src={vn}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "es" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("es")}
                            >
                                <Image
                                    src={es}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "cn" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("cn")}
                            >
                                <Image
                                    src={cn}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                        </div>
                        <div className={styles.countryBtn}>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "ind" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("ind")}
                            >
                                <Image
                                    src={ind}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "us" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("us")}
                            >
                                <Image
                                    src={us}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "th" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("th")}
                            >
                                <Image
                                    src={th}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "turkey" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("turkey")}
                            >
                                <Image
                                    src={turkey}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button
                                className={styles.btns}
                                style={{ backgroundColor: btnTitle == "mx" ? "#D9F5FE80" : 'transparent' }}
                                onClick={() => clickHandler("mx")}
                            >
                                <Image
                                    src={mx}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                        </div>
                        <div style={{ marginTop: 16 }}>
                            <div
                                className={styles.textBtn}>
                                <p style={{ fontSize: 14, fontWeight: 500 }}>🥛 Lactose-intolerance</p>
                                <Switch
                                    onChange={lactoseHandler}
                                    checked={lactose}
                                    onColor="#B9E6F5"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />

                            </div>
                            <div
                                className={styles.textBtn}>
                                <p style={{ fontSize: 14, fontWeight: 500 }}>🌾 Gluten-intolerance</p>
                                <Switch
                                    onChange={glutenHandler}
                                    checked={gluten}
                                    onColor="#B9E6F5"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />

                            </div>
                            <div
                                className={styles.textBtn}>
                                <p style={{ fontSize: 14, fontWeight: 500 }}>🍓 Fructose-intolerance</p>
                                <Switch
                                    onChange={fructoseHandler}
                                    checked={fructose}
                                    onColor="#B9E6F5"
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                />

                            </div>
                        </div>
                    </div>
                    <NextBtn />
                </div>
            </div>

        </>
    )
}
