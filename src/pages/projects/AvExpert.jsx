import React, { useState, useRef, useEffect } from 'react'
import './ProjectStyles.scss'
import { AV } from '../../dataPortfolio'
import lottie from 'lottie-web'
import { default as busqueda } from '../../img/busqueda.json'
import { default as calificacionInicio } from '../../img/calificacion-inicio.json'
import { default as calificacionFin } from '../../img/calificacion-fin.json'
import BackButton from '../../components/BackButton'

const AvExpert = () => {
    const [dataPortfolio] = useState(AV)
    const container1 = useRef(null)
    const container2 = useRef(null)
    const container3 = useRef(null)

    useEffect(() => {
        if (container1.current) {
            lottie.loadAnimation({
                container: container1.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: busqueda,
            })
        }

        if (container2.current) {
            lottie.loadAnimation({
                container: container2.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: calificacionInicio,
            })
        }

        if (container3.current) {
            lottie.loadAnimation({
                container: container3.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: calificacionFin,
            })
        }
    }, [])

    return (
        <>
            {dataPortfolio.map((dataPortfolio) => (
                /* CONTAINER */
                <section key={dataPortfolio.id} className="modal__container">
                    <BackButton />
                    {/* Section porfolio header */}
                    <div className="modal__header modal__header-av">
                        <div className="modal__header__text-box">
                            <h1 className="display__200--bold modal__header__title">
                                {dataPortfolio.headTitle}
                            </h1>
                            <article className="modal__header__info-content">
                                <p className="paragraph__100--medium">
                                    <strong> {dataPortfolio.roleTitle} </strong>
                                    {dataPortfolio.role}
                                </p>
                                <p className="paragraph__100--medium">
                                    <strong> {dataPortfolio.dateTitle} </strong>
                                    {dataPortfolio.date}
                                </p>
                                <p className="paragraph__100--medium">
                                    <strong>
                                        {' '}
                                        {dataPortfolio.companyTitle}{' '}
                                    </strong>
                                    {dataPortfolio.company}
                                </p>
                            </article>
                        </div>
                    </div>

                    {/* <!-- Section project info --> */}
                    <section className="modal__project-info">
                        <article className="project-info__container">
                            <img
                                className="project-info__img"
                                src="https://sebastiangonzalez.design/images/projects/av/project.png"
                                loading="lazy"
                                alt="AV Expert project"
                            />
                            <div className="project-info__text-box">
                                <span className="paragraph__300--medium">
                                    {dataPortfolio.subtitleResume}
                                </span>
                                <h3 className="heading__300--bold project-info__name">
                                    {dataPortfolio.titleResume}
                                </h3>
                                <p className="paragraph__100--medium">
                                    {dataPortfolio.contentResume}
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* <!-- Section define --> */}
                    <section className="modal__define__box">
                        <article className="modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.titleIntroduction}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.contentIntroduction}
                            </p>
                        </article>
                        <article className="modal__define__boxes">
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.goalsTitle}
                                </h3>
                                <ol>
                                    <ul className="modal__define__goal-list">
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal1}
                                        </li>
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal2}
                                        </li>
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal3}
                                        </li>
                                        <li className="paragraph__200--medium modal__define__goal-item">
                                            {dataPortfolio.goal4}
                                        </li>
                                    </ul>
                                </ol>
                            </div>
                            <div className="modal__define__box-goals">
                                <h3 className="heading__300--bold ">
                                    {dataPortfolio.customerTitle}
                                </h3>

                                <div className="define__mindset-box">
                                    <span className="paragraph__100--bold">
                                        {dataPortfolio.user1Title}
                                    </span>
                                    <p className="paragraph__100--medium">
                                        {dataPortfolio.user1Content}
                                    </p>
                                </div>
                                <div className="define__mindset-box">
                                    <span className="paragraph__100--bold">
                                        {dataPortfolio.user2Title}
                                    </span>
                                    <p className="paragraph__100--medium">
                                        {dataPortfolio.user2Content}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </section>

                    {/* <!-- Section ideate --> */}
                    <section className="modal__template">
                        <article className="modal__main-text-box">
                            <h2 className="display__200--bold modal__title">
                                {dataPortfolio.ideateTitle}
                            </h2>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.ideateContent}
                            </p>
                        </article>
                    </section>

                    <section className="modal__template">
                        <h1 className="heading__100--bold modal__title modal__main-text-box">
                            {dataPortfolio.title2}
                        </h1>

                        <picture className="modal__img-container">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/user-persona-responsive.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/user-persona.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                    </section>

                    <section className="modal__template">
                        <h1 className="heading__100--bold modal__title modal__main-text-box">
                            {dataPortfolio.title4}
                        </h1>

                        <picture className="modal__img-container">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/user-flow.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/user-flow.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                    </section>

                    <section className="modal__template">
                        <article className="modal__main-text-box">
                            <h1 className="heading__100--bold modal__title ">
                                {dataPortfolio.title5}
                            </h1>
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.midFidelityTitle}
                            </h3>
                        </article>
                        <picture className="modal__img-container">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/mid-fidelity.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/mid-fidelity.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                        <article className="modal__text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.highFidelityTitle}
                            </h3>
                            <picture className="modal__img-container">
                                <source
                                    srcSet="https://sebastiangonzalez.design/images/projects/av/high-fidelity.png"
                                    media="(max-width:900px)"
                                />
                                <img
                                    className="modal__img-complete"
                                    src="https://sebastiangonzalez.design/images/projects/av/high-fidelity.png"
                                    loading="lazy"
                                    alt="ideate"
                                />
                            </picture>
                        </article>
                    </section>

                    <section className="modal__template">
                        <article className="modal__text-box modal__main-text-box">
                            <h1 className="heading__100--bold modal__title">
                                {dataPortfolio.title7}
                            </h1>
                            <p className="paragraph__100--medium modal__paragrapht">
                                {dataPortfolio.styleContent}
                            </p>
                        </article>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.brandTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.brandContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/brand.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/brand.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.colorsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.colorsContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/colors.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/colors.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.tipographyTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.tipographyContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/tipography.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/tipography.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.imageryTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragrapht">
                                {dataPortfolio.imageryContent}
                            </p>
                        </article>
                        <picture className="modal__img-container-dark mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/imagery.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/imagery.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.componentsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.componentsContent}
                            </p>
                        </article>
                        <picture className="modal__img-container-dark mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/components.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/components.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                        <picture className="modal__img-container-dark mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/cards.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/cards.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                        <picture className="modal__img-container-dark mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/icons.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/icons.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                    </section>

                    <section className="modal__template">
                        <article className="mb-20 modal__main-text-box">
                            <h1 className="display__100--bold modal__title">
                                {dataPortfolio.title8}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.animationsContent}
                            </p>
                        </article>

                        <article className="animation-container animation">
                            <figure className="animation-box">
                                <div
                                    ref={container1}
                                    className="animation-dark"
                                ></div>
                            </figure>

                            <figure className="animation-box">
                                <div
                                    ref={container2}
                                    className="animation-dark"
                                ></div>
                            </figure>

                            <figure className="animation-box">
                                <div
                                    ref={container3}
                                    className="animation-dark"
                                ></div>
                            </figure>
                        </article>
                    </section>

                    <section className="modal__template">
                        <article className="mb-20 modal__secondary-text-box">
                            <h1 className="heading__100--bold modal__title modal__text-box">
                                {dataPortfolio.title9}
                            </h1>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.finalContent}
                            </p>
                        </article>

                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/final-design.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/final-design.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.keywordsTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.keywordsContent}
                            </p>
                        </article>

                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/keywords.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/keywords.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.advancedTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.advancedContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/advanced-search.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/advanced-search.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>

                        <article className="modal__secondary-text-box">
                            <h3 className="heading__300--bold modal__subtitle">
                                {dataPortfolio.productTitle}
                            </h3>
                            <p className="paragraph__100--medium modal__paragraph">
                                {dataPortfolio.productContent}
                            </p>
                        </article>
                        <picture className="modal__img-container mb-20">
                            <source
                                srcSet="https://sebastiangonzalez.design/images/projects/av/product-library.png"
                                media="(max-width:900px)"
                            />
                            <img
                                className="modal__img-complete"
                                src="https://sebastiangonzalez.design/images/projects/av/product-library.png"
                                loading="lazy"
                                alt="ideate"
                            />
                        </picture>
                    </section>

                    <picture>
                        <source
                            srcSet="https://sebastiangonzalez.design/images/projects/av/final-img.png"
                            media="(max-width:900px)"
                        />
                        <img
                            className="modal__img-complete"
                            src="https://sebastiangonzalez.design/images/projects/av/final-img.png"
                            loading="lazy"
                            alt="prototyping"
                        />
                    </picture>

                    {/* <!-- Ending --> */}
                    <section className="modal__other-projects modal__end">
                        <article className="modal__text-box">
                            <h2 className="display__200--regular modal__title modal__end__text">
                                Thank you
                            </h2>
                        </article>
                    </section>
                </section>
            ))}
        </>
    )
}

export default AvExpert
