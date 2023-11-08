"use client"
import React, { useState } from 'react'
import styles from "@/styles/vehicle/vehicle.module.css"
import Navbar from '../(component)/navbar/Navbar'
import NextBtn from '../(component)/nextBtn/NextBtn'

export default function Vehicle() {


    const [radioValue, setRadioValue] = useState(false)

    const data = [
        {
            title: "🚗 Car",
            subTitle: "Well map out the ultimate road trip just around your corner!"
        },
        {
            title: "🏍️ Bike ",
            subTitle: "Two wheels, endless curves...Discover the curviest roads near you!"
        },
        {
            title: "🚌 Bus  ",
            subTitle: "Sit back and relax! Well find the cheapest and quickest bus for you!"
        },
        {
            title: "🚶Walk ",
            subTitle: "Well guide you to hidden gems, just a walk away!"
        },
        {
            title: "🚆 Train",
            subTitle: "Get the best train routes and fares to fuel your wanderlust!"
        },
    ]
    return (
        <>
            <div className={styles.mainDiv}>
                <Navbar progress={40} navigateTo="/intrest" />
                <div className={styles.contentDiv}>
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        <p style={{ fontSize: 20, fontWeight: 500 }}>
                            How do you roll?
                        </p>
                        <p style={{ color: '#7A7676' }}>Choose your go-to wheels or walks 🚗🚶
                        </p>
                    </div>

                    <div style={{ width: "100%" }}>

                        {
                            data.map((item, index) => {
                                return (
                                    <div
                                        className={styles.radioDiv}
                                        key={index}
                                        onClick={() => setRadioValue(item.title)}
                                        style={{ backgroundColor: item.title == radioValue ? "#D9F5FE80" : "transparent" }}
                                    >
                                        <input
                                            type="radio"
                                            name='radio'
                                            className={styles.radio}
                                            checked={item.title == radioValue}
                                        />
                                        <div className={styles.subDiv}>
                                            <p style={{ fontSize: 14 }}>{item.title}</p>
                                            <p style={{ fontSize: 10 }}>{item.subTitle}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <NextBtn navigateTo="food" />

                </div>
            </div>

        </>
    )
}
