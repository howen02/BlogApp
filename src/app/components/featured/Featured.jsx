import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

export const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Howen here!</b> Discovery my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit.
                    </h1>
                    <p className={styles.postDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint laudantium adipisci magnam beatae placeat. Sunt,
                        eveniet nemo sapiente atque aperiam saepe iusto! Esse
                        nihil totam, voluptate impedit perferendis provident
                        iste!
                    </p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
