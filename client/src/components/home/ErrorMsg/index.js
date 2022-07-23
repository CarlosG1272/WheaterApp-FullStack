import React from "react";
import styles from "./error.module.scss";

export default function ErrorMessage(){
    return(
    <section className={styles.container}>
        Opps! City not found. Please try again
    </section>)
}