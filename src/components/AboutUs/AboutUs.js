import style from './AboutUs.module.css';
import images from "./../../images";

const AboutUs = () => {
    return (
        <div className={style.about} id='about'>

            <section className={style.about_left}>
                <img src={images.aboutUs} alt='aboutUs'></img>
            </section>

            <section className={style.about_right}>
                <h1>
                    About Us
                </h1>

                <h3>
                    Our approach embodies who we are: a community of solvers coming together in unexpected ways to deliver sustained outcomes for organisations, their customers, stakeholders and communities, which make a positive and enduring impact right across the value chain.
                </h3>

                <h3>
                    Our formula is simple: we deliver bold ideas, solutions which are human-led and tech-powered and meaningful experiences which deliver real-life results.
                </h3>
            </section>

        </div>

    );
}

export default AboutUs;