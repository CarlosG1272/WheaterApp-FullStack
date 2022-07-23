import React from "react";
import { data } from "./data";
import styles from "./colors.module.scss"; 

export default function ColorsMeans() {
    return(
    <section className={styles.container}>
        <h2 className={styles.title}>Meaning of border colors</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Color</th>
                    <th>Color Code</th>
                    <th>Min Temperature( °F )</th>
                    <th>Max Temperature( °F )</th>
                </tr>
            </thead>
            <tbody>
                {data.map((el,index)=> 
                <tr key={index}>
                    <td>{index}</td>
                    <td><div style={{height: "1rem", width: "1rem", margin: "auto", background: el[1]}}></div></td>
                    <td>{el[1]}</td>
                    <td>{el[0][0]}</td>
                    <td>{el[0][1]}</td>
                </tr>)}
            </tbody>
        </table>
    </section>)
}