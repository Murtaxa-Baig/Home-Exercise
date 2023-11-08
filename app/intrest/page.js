'use client'
import styles from "@/styles/intrest/intrest.module.css"
import Navbar from "../(component)/navbar/Navbar"
import Button from "../(component)/button/Button"
import NextBtn from "../(component)/nextBtn/NextBtn"
import { useState } from "react"
export default function Intrest() {
    const [btnTitle, setBtnTitle] = useState(null)

    const clickHandler = (title) => {
        setBtnTitle(title)
        console.log(title);

    }

    return (
        <>
            <div className={styles.mainDiv}>
                <Navbar progress={30} navigateTo="/" />
                <div className={styles.contentDiv}>
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        <p style={{ fontSize: 20, fontWeight: 500 }}>
                            What are you keen about?
                        </p>
                        <p style={{ color: '#7A7676' }}>Pick your play! What activities make you jump out of bed? 🏄‍♀️🧘‍♂️
                        </p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div className={styles.btnDiv}>
                            <Button title="🏞️ Hiking" clickHandler={()=> clickHandler("🏞️ Hiking")} btnTitle={btnTitle} />
                            <Button title="🎨 Art & Culture"  clickHandler={()=> clickHandler("🎨 Art & Culture")} btnTitle={btnTitle} />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏖️ Beaches" clickHandler={()=> clickHandler("🏖️ Beaches")} btnTitle={btnTitle}/>
                            <Button title="🍔 Foodie " clickHandler={()=> clickHandler("🍔 Foodie")} btnTitle={btnTitle}/>
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏰 History" clickHandler={()=> clickHandler("🏰 History")} btnTitle={btnTitle}/>
                            <Button title="🎵 Music " clickHandler={()=> clickHandler("🎵 Music")} btnTitle={btnTitle}/>
                            <Button title="🧘 Yoga" clickHandler={()=> clickHandler("🧘 Yoga")} btnTitle={btnTitle}/>
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏊‍♂️ Swimming" clickHandler={()=> clickHandler("🏊‍♂️ Swimming")} btnTitle={btnTitle}/>
                            <Button title="🏄‍♂️ Surfing" clickHandler={()=> clickHandler("🏄‍♂️ Surfing")} btnTitle={btnTitle}/>
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏃‍♂️ Runs" clickHandler={()=> clickHandler("🏃‍♂️ Runs")} btnTitle={btnTitle}/>
                            <Button title="🚴️ Bicycling" clickHandler={()=> clickHandler("🚴️ Bicycling")} btnTitle={btnTitle}/>
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🌃️ Nightlife" clickHandler={()=> clickHandler("🌃️ Nightlife")} btnTitle={btnTitle}/>
                            <Button title="☕ Coffee" clickHandler={()=> clickHandler("☕ Coffee")} btnTitle={btnTitle}/>
                            <Button title="🍷 Wine" clickHandler={()=> clickHandler("🍷 Wine")} btnTitle={btnTitle}/>
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🗽 Sightseeing" clickHandler={()=> clickHandler("🗽 Sightseeing")} btnTitle={btnTitle}/>
                            <Button title="🗣️ Socializing " clickHandler={()=> clickHandler("🗣️ Socializing ")} btnTitle={btnTitle}/>
                        </div>
                    </div>
                    <NextBtn navigateTo="/vehicle" />

                </div>
            </div>

        </>
    )
}
