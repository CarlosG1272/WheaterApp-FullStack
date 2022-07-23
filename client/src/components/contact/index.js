import React from "react";
import styles from "./about.module.scss"; 
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"; 
import {BsBriefcase} from "react-icons/bs"
import {Link} from "react-router-dom"

export default function AboutMe () {
    return(
    <section className={styles.container}>
        <section className={styles.imageContainer}>
            <img src={require("../../assets/perfil.png")} alt="Carlos Guerra"/>
        </section>
        
        <section className={styles.descriptionContainer}>
            <p>Hello! Thanks for stopping by
            This is a weather application which not only provides information extracted from an api, but it also has custom images and colors created by me. This through Node.js, Express, MongoDB and a little bit of math. 
            </p>
            <hr/>
            <p>
            My name is Carlos Guerra and I am a full stack developer. If you have any comments, bug report, or need to contact me I leave you my means of contact. 
            If you want to check more of my projects I leave you the link to my personal portfolio.
            </p>
        </section>
        
        <section className={styles.contactContainer}>
            <a href="https://github.com/CarlosG1272" target={"_blank"} rel="noreferrer">
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/carlos-guerra-9510a9241/" target={"_blank"} rel="noreferrer">
                <AiFillLinkedin />
            </a>
            <a href="https://personal-portfolio-carlos-guerra.vercel.app/" target={"_blank"} rel="noreferrer">
                <BsBriefcase />
            </a>
        </section>
    </section>)
}