import React from 'react'
import './Main.scss'
import Movie from '../../assets/img/movie.jpg'
import Actery from '../../assets/img/aktery.jpg'
import Sara from '../../assets/img/sarakonnor.jpg'
import Kaleriz from '../../assets/img/kaleriz.jpg'
import People from '../../assets/img/people.jpg'
import Illbeback from '../../assets/img/illbeback.jpg'
import Finish from '../../assets/img/finish.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__movie'>
                        <img src={Movie} alt='Movie' />
                    </div>
                    <div className='main__subtitle'>«Термина́тор» (англ. The Terminator) — американский научно-фантастический фильм 1984 года режиссёра Джеймса Кэмерона.</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Actery} alt='Actery' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>В центре сюжета — противостояние между солдатом освободительной армии человечества и роботом-терминатором, прибывшими в 1984 год из постапокалиптического 2029 года.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Цель терминатора: убить Сару Коннор — девушку, чей ещё нерождённый сын в возможном будущем выиграет войну человечества с машинами.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Sara} alt='Sara Connor' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Kaleriz} alt='Kale Riz' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Влюблённый в Сару солдат Кайл Риз пытается помешать терминатору.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>В фильме поднимаются проблемы путешествий во времени, судьбы, опасности искусственного интеллекта, поведения людей в экстремальных ситуациях.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={People} alt='People' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Illbeback} alt='I will be back' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Благодаря фильму слово «терминатор» превратилось в нарицательное, а фраза Арнольда Шварценеггера «I’ll be back» (с англ. — «Я вернусь») вошла в число самых известных киноцитат.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__movie'>
                        <img src={Finish} alt='Finish' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main