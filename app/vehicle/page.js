"use client"
import React from 'react'
import styles from "@/styles/vehicle/vehicle.module.css"
import Navbar from '../(component)/navbar/Navbar'
import NextBtn from '../(component)/nextBtn/NextBtn'

export default function Vehicle() {
    return (
        <>
            <div className={styles.mainDiv}>
                <Navbar progress={40} navigateTo="/intrest"/>
                <div className={styles.contentDiv}>
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        <p style={{ fontSize: 20, fontWeight: 500 }}>
                            How do you roll?
                        </p>
                        <p style={{ color: '#7A7676' }}>Choose your go-to wheels or walks 🚗🚶
                        </p>
                    </div>

                    <div style={{ width: "100%" }}>
                        <div className={styles.radioDiv}>
                            <input type="radio" name='radio' className={styles.radio} />
                            <div className={styles.subDiv}>
                                <p style={{ fontSize: 14 }}>🚗 Car </p>
                                <p style={{ fontSize: 10 }}>We{"'"}ll map out the ultimate road trip just around your corner!</p>
                            </div>
                        </div>
                        <div className={styles.radioDiv}>
                            <input type="radio" name='radio' className={styles.radio} />
                            <div className={styles.subDiv}>
                                <p style={{ fontSize: 14 }}>🏍️ Bike </p>
                                <p style={{ fontSize: 10 }}>Two wheels, endless curves...
                                    Discover the curviest roads near you!</p>
                            </div>
                        </div>
                        <div className={styles.radioDiv}>
                            <input type="radio" name='radio' className={styles.radio} />
                            <div className={styles.subDiv}>
                                <p style={{ fontSize: 14 }}>🚌 Bus  </p>
                                <p style={{ fontSize: 10 }}>Sit back and relax! We{"'"}ll find the cheapest and quickest bus for you!</p>
                            </div>
                        </div>
                        <div className={styles.radioDiv}>
                            <input type="radio" name='radio' className={styles.radio} />
                            <div className={styles.subDiv}>
                                <p style={{ fontSize: 14 }}>🚶Walk </p>
                                <p style={{ fontSize: 10 }}>We{"'"}ll guide you to hidden gems,
                                    just a walk away!</p>
                            </div>
                        </div>
                        <div className={styles.radioDiv}>
                            <input type="radio" name='radio' className={styles.radio} />
                            <div className={styles.subDiv}>
                                <p style={{ fontSize: 14 }}>🚆 Train </p>
                                <p style={{ fontSize: 10 }}>Get the best train routes and
                                    fares to fuel your wanderlust!</p>
                            </div>
                        </div>
                    </div>


                    <NextBtn navigateTo="food"/>

                </div>
            </div>

        </>
    )
}
