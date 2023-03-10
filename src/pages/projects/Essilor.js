import React, { useState }  from 'react';
import "./AvExpert.scss";
import { Essilor } from "../../dataPortfolio";


const EssilorAPP = () => {
    const [dataPortfolio] = useState(Essilor);
    
    return (
<>
        {dataPortfolio.map((dataPortfolio) => (
            



            /* CONTAINER */
            <section key={dataPortfolio.id} className="modal__container">

            {/* Section porfolio header */}
              <div className="modal__header modal__header-essilor">
              <div className="modal-header__text-box">
                <h1 className="heading-primary modal-header__title">
                  {dataPortfolio.headTitle}
                </h1>
                <article className="modal-header__info-content">
                  <p className="paragraph">
                    <strong> {dataPortfolio.roleTitle} </strong>
                    {dataPortfolio.role}
                  </p>
                  <p className="paragraph">
                    <strong> {dataPortfolio.dateTitle} </strong>
                    {dataPortfolio.date}
                  </p>
                  <p className="paragraph">
                    <strong> {dataPortfolio.companyTitle} </strong>
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
                      src="https://sebgraph.co/images/projects/essilor/project.png"
                      loading="lazy"
                      alt="AV Expert project"
                    />
                    <div className="project-info__text-box">
                      <span className="body-large">
                        {dataPortfolio.subtitleResume}
                      </span>
                      <h3 className="heading-tertiary project-info__name">
                        {dataPortfolio.titleResume}
                      </h3>
                      <p className="paragraph">{dataPortfolio.contentResume}</p>
                    </div>
                  </article>
                </section>

                {/* <!-- Section define --> */}
                <section className="modal__define define">
                  <article className="modal__text-box">
                    <h1 className="heading-primary modal__title">
                      {dataPortfolio.titleIntroduction}
                    </h1>
                    <p className="paragraph modal__text">
                      {dataPortfolio.contentIntroduction}
                    </p>
                  </article>
                  <article className="define__boxes">
                    <div className="define__box define__box--dark">
                      <h3 className="heading-tertiary modal__title">
                        {dataPortfolio.goalsTitle}
                      </h3>
                      <ol>
                        <ul className="define__goal-list">
                          <li className="paragraph define__goal-item">
                            {dataPortfolio.goal1}
                          </li>
                          <li className="paragraph define__goal-item">
                            {dataPortfolio.goal2}
                          </li>
                          <li className="paragraph define__goal-item">
                            {dataPortfolio.goal3}
                          </li>
                          <li className="paragraph define__goal-item">
                            {dataPortfolio.goal4}
                          </li>
                        </ul>
                      </ol>
                    </div>
                    <div className="define__box">
                      <h3 className="heading-tertiary modal__title">
                        {dataPortfolio.customerTitle}
                      </h3>
                      <div className="define__mindset-box">
                        <span className="body-large">
                          {dataPortfolio.user1Title}
                        </span>
                        <p className="paragraph">
                          {dataPortfolio.user1Content}
                        </p>
                      </div>
                      <div className="define__mindset-box">
                        <span className="body-large">
                          {dataPortfolio.user2Title}
                        </span>
                        <p className="paragraph">
                          {dataPortfolio.user2Content}
                        </p>
                      </div>
                    </div>
                  </article>
                </section>

                
                {/* <!-- Section ideate --> */}
                <section className="modal__template">
                  <article className="modal__text-box">
                    <h2 className="heading-secondary modal__title">
                      {dataPortfolio.ideateTitle}
                    </h2>
                    <p className="paragraph modal__text">
                      {dataPortfolio.ideateContent}
                    </p>
                  </article>
                </section>

                <section className="modal__template">
                  <h1 className="heading-primary modal__title modal__text-box">
                    {dataPortfolio.title2}
                  </h1>

                  <picture className="modal__img-container">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/empathy-map-responsive.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/empathy-map.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>
                </section>

                <section className="modal__template">
                  <h1 className="heading-primary modal__title modal__text-box">
                    {dataPortfolio.title5}
                  </h1>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.midFidelityTitle}
                    </h3>
                    <picture className="modal__img-container">
                      <source
                        srcSet="https://sebgraph.co/images/projects/essilor/mid-fidelity.png"
                        media="(max-width:900px)"
                      />
                      <img
                        className="modal__img-complete"
                        src="https://sebgraph.co/images/projects/essilor/mid-fidelity.png"
                        loading="lazy"
                        alt="ideate"
                      />
                    </picture>
                  </article>
                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.highFidelityTitle}
                    </h3>
                    <picture className="modal__img-container">
                      <source
                        srcSet="https://sebgraph.co/images/projects/essilor/high-fidelity.png"
                        media="(max-width:900px)"
                      />
                      <img
                        className="modal__img-complete"
                        src="https://sebgraph.co/images/projects/essilor/high-fidelity.png"
                        loading="lazy"
                        alt="ideate"
                      />
                    </picture>
                  </article>
                </section>

                <section className="modal__template">
                  <article className="modal__text-box">
                    <h1 className="heading-primary modal__title modal__text-box">
                      {dataPortfolio.title7}
                    </h1>
                    <p className="paragraph modal__text">
                      {dataPortfolio.styleContent}
                    </p>
                  </article>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.brandTitle}
                    </h3>
                    <p className="paragraph modal__text">
                      {dataPortfolio.brandContent}
                    </p>
                  </article>
                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/brand.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/brand.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.colorsTitle}
                    </h3>
                    <p className="paragraph modal__text">
                      {dataPortfolio.colorsContent}
                    </p>
                  </article>
                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/colors.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/colors.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.tipographyTitle}
                    </h3>
                    <p className="paragraph modal__text">
                      {dataPortfolio.tipographyContent}
                    </p>
                  </article>
                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/tipography.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/tipography.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.imageryTitle}
                    </h3>
                    <p className="paragraph modal__text">
                      {dataPortfolio.imageryContent}
                    </p>
                  </article>
                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/imagery.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/imagery.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.componentsTitle}
                    </h3>
                    <p className="paragraph modal__text">
                      {dataPortfolio.componentsContent}
                    </p>
                  </article>
                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/components.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/components.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>
                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/icons.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/icons.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>

                </section>


                <section className="modal__template">
                  <article className="mb-20">
                    <h1 className="heading-primary modal__title modal__text-box">
                      {dataPortfolio.title9}
                    </h1>
                    <p className="paragraph modal__text">
                      {dataPortfolio.finalContent}
                    </p>
                  </article>

                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/final-design.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/final-design.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.scanTitle}
                    </h3>
                    <p className="paragraph modal__text">
                      {dataPortfolio.scanContent}
                    </p>
                  </article>

                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/scan-code.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/scan-code.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>

                  <article className="modal__text-box">
                    <h3 className="heading-tertiary modal__subtitle">
                      {dataPortfolio.redeemTitle}
                    </h3>
                    <p className="paragraph modal__text">
                      {dataPortfolio.redeemContent}
                    </p>
                  </article>
                  <picture className="modal__img-container mb-20">
                    <source
                      srcSet="https://sebgraph.co/images/projects/essilor/redeem.png"
                      media="(max-width:900px)"
                    />
                    <img
                      className="modal__img-complete"
                      src="https://sebgraph.co/images/projects/essilor/redeem.png"
                      loading="lazy"
                      alt="ideate"
                    />
                  </picture>
                </section>

                <picture>
                  <source
                    srcSet="https://sebgraph.co/images/projects/essilor/final-img.png"
                    media="(max-width:900px)"
                  />
                  <img
                    className="modal__img-complete"
                    src="https://sebgraph.co/images/projects/essilor/final-img.png"
                    loading="lazy"
                    alt="prototyping"
                  />
                </picture>

                {/* <!-- Ending --> */}
                <section className="modal__other-projects end">
                  <article className="modal__text-box">
                    <hr className="end__line" />
                    <h2 className="heading-secondary modal__title end__text">
                      Thank you
                    </h2>
                  </article>
                </section>
              </section>


            
            
        ))}
        </>
        

        
        
       
        
    )
}

export default EssilorAPP;