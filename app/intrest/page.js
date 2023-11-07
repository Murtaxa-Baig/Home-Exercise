'use client'
import styles from "@/styles/intrest/intrest.module.css"
import Navbar from "../(component)/navbar/Navbar"
import Button from "../(component)/button/Button"
import NextBtn from "../(component)/nextBtn/NextBtn"
export default function Intrest() {
    return (
        <>
            <div className={styles.mainDiv}>
                <Navbar progress={30} navigateTo="/"/>
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
                            <Button title="🏞️ Hiking" />
                            <Button title="🎨 Art & Culture" />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏖️ Beaches" />
                            <Button title="🍔 Foodie " />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏰 History" />
                            <Button title="🎵 Music " />
                            <Button title="🧘 Yoga" />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏊‍♂️ Swimming" />
                            <Button title="🏄‍♂️ Surfing" />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🏃‍♂️ Runs" />
                            <Button title="🚴️ Bicycling " />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🌃️ Nightlife" />
                            <Button title="☕ Coffee" />
                            <Button title="🍷 Wine" />
                        </div>
                        <div className={styles.btnDiv}>
                            <Button title="🗽 Sightseeing" />
                            <Button title="🗣️ Socializing " />
                        </div>
                    </div>
                    <NextBtn navigateTo="/vehicle"/>

                </div>
            </div>

        </>
    )
}
