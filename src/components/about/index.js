import React from 'react'
import styles from './style.module.css'

const About = () => {
    //console.log('styles', styles)
    const { about, main } = styles
    return <h1 className={`${about} ${main}`}>This is About page</h1>
}

export default About