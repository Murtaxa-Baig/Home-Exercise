'use client'

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
    const [lactose, useLacktose] = useState(false)
    const [gluten, useGluten] = useState(false)
    const [fructose, useFructose] = useState(false)
    const lactoseHandler = () => {
        useLacktose(!lactose)
    }

    const glutenHandler = () => {
        useGluten(!gluten)
    }

    const fructoseHandler = () => {
        useFructose(!fructose)
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
                            <Button title="🥩 Omnivore" />
                            <Button title="🐟 Pescatarian" />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🌱 Vegan" />
                            <Button title="🚫🥩 Vegetarian" />
                        </div>
                        <p className={styles.text}>Cuisine</p>
                        <div
                            className={styles.countryBtn}
                            style={{ marginBottom: 20 }}
                        >
                            <button className={styles.btns}>
                                <Image
                                    src={jp}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
                                <Image
                                    src={it}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
                                <Image
                                    src={vn}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
                                <Image
                                    src={es}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
                                <Image
                                    src={cn}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                        </div>
                        <div className={styles.countryBtn}>
                            <button className={styles.btns}>
                                <Image
                                    src={ind}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
                                <Image
                                    src={us}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
                                <Image
                                    src={th}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
                                <Image
                                    src={turkey}
                                    width={16}
                                    height={20}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button className={styles.btns}>
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
