import React from 'react';
import JoinClubForm from '../components/forms/joinClubForm';
import ChooseTemplate from '../components/modalCardGenerator/chooseTemplate';

export default function home() {

    return (
        <>
            <section className="banner">
                <div className="wrapper">
                    <div className="inner">
                        <div className="title">
                            <h1>
                                Simple modal
                                card creator
                            </h1>
                        </div>
                        <div className="description">
                            <p>
                                A utility-first CSS framework packed with classeslike flex, pt-4, text-center and
                                rotate-90 that can becomposed to build any design, directly in your markup.
                            </p>
                        </div>
                        <div className="btn">
                            <a href='#' className='btn-try'>Try for free</a>
                        </div>
                        <div className="sub-description">
                            <ul>
                                <li><i className="fa-solid fa-check"></i> Free and paid plans</li>
                                <li><i className="fa-solid fa-check"></i> Setup in minutes</li>
                                <li><i className="fa-solid fa-check"></i> No credit card required*</li>
                            </ul>
                            <div className='bg'>
                                <img src="/images/bg-sub-description.png" alt='' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='statistics'>
                <div className='wrapper'>
                    <div className='inner'>
                        <div className='join-club-form'>
                            <div className='content'>
                                <img src="/images/vector.png" alt='' />
                                <h1>Join the club</h1>
                                <p>Subscribe and Get an Extra <br />
                                    25% Off on your first purchase.</p>

                                <JoinClubForm />

                                <span>
                                    By signing up, you agree to  Privacy Policy <br />
                                    and Terms of Use.
                                </span>
                            </div>
                            <img className="right-img" src="/images/join-club-img.png" alt="" />

                            <a href="#" className='btn-close'>
                                <i className="fa-solid fa-xmark"></i>
                            </a>

                            <div className='lightning'>
                                <i className="fa-solid fa-bolt-lightning"></i>
                                Grow email list
                            </div>

                            <div className='dollar'>
                                <i className="fa-solid fa-dollar-sign"></i>
                                Increase sales conversion
                            </div>
                        </div>

                        <div className='info-items'>
                            <div className='item'>
                                <h3>3x</h3>
                                <p>Increase <br />
                                    Conversion Rate</p>
                            </div>
                            <div className='item'>
                                <h3>120%</h3>
                                <p>Email <br />
                                    Subscribers
                                </p>
                            </div>
                            <div className='item'>
                                <h3>390%</h3>
                                <p>More Customer <br />
                                    Engagement
                                </p>
                            </div>
                            <div className='item'>
                                <p className='single-text'>Popupsmart meets <br />
                                    all your business <br />
                                    needs.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className='modal-card-generator'>
                <div className='wrapper'>
                    <div className='inner'>
                        <div className='title'>
                            <h1> Modal Card Generator</h1>
                        </div>
                        <div className='description'>
                            <p>
                                Measure your return on email marketing efforts easier and <br />
                                faster by using thebest online tools. Popupsmart is ready to <br />
                                help you build an efficient email list! <br />
                            </p>
                        </div>
                        <ChooseTemplate />
                    </div>
                </div>
            </section>

            <section className='services'>
                <div className='wrapper'>
                    <div className='title'>
                        <h1>Conversion & UX ready popups & modals</h1>
                    </div>

                    <div className='items'>
                        <div className='item'>
                            <div className='inner'>
                                <img src='/images/services-icon-1.png' alt='' />
                                <h1>Pixel Perfect</h1>
                                <p>Helps you calculate your email
                                    marketing roi to measure success.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='inner'>
                                <img src='/images/services-icon-2.png' alt='' />
                                <h1>Pixel Perfect</h1>
                                <p>Empowers your emails by
                                    generating afree code for
                                    a CTA in your subject line.</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='inner'>
                                <img src='/images/services-icon-3.png' alt='' />
                                <h1>Pixel Perfect</h1>
                                <p>Enables you to estimate the
                                    total profit of your investment
                                    on a popup service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='faq'>
                <div className='wrapper'>
                    <div className='inner'>
                        <div className='title'>
                            <h1>Frequently Asked Questions</h1>
                        </div>

                        <div className='items'>
                            <div className='item'>
                                <div className='head'>
                                    <p className='question'> Can I cancel my essentials or premium plan subscription at my time? </p>
                                    <a href='#!' className='btn-show'>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </a>
                                    <a href='#!' className='btn-hide'>
                                        <i className="fa-solid fa-circle-minus"></i>
                                    </a>
                                </div>

                                <p className='answer'> You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                    automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in
                                    United States). We will renew your subscription automatically at the end of every billing cycle.
                                </p>
                            </div>
                            <div className='item active'>
                                <div className='head'>
                                    <p className='question'> Can I cancel my essentials or premium plan subscription at my time? </p>
                                    <a href='#!' className='btn-show'>
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </a>
                                    <a href='#!' className='btn-hide'>
                                        <i className="fa-solid fa-circle-minus"></i>
                                    </a>
                                </div>

                                <p className='answer'> You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription
                                    automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in
                                    United States). We will renew your subscription automatically at the end of every billing cycle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
