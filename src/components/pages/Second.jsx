import React from 'react'
import './Second.scss'
import Theterm from '../../assets/img/theterm.png'
import Fightscene from '../../assets/img/fightscene.jpeg'
import Skelet from '../../assets/img/skelet.jpg'
import Skeletface from '../../assets/img/skeletface.jpg'
import Press from '../../assets/img/press.jpeg'
import Glass from '../../assets/img/glass.jpg'
import Incar from '../../assets/img/incar.jpg'
import Visit from '../../assets/img/visit.png'
import Explosion from '../../assets/img/explosion.png'
import Sarakonnor from '../../assets/img/sarakonnor.jpeg'
import Sarawith from '../../assets/img/sarawith.jpeg'
import Finishtwo from '../../assets/img/finishtwo.png'

const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__theterm'>
                        <img src={Theterm} alt='The terminator' />
                    </div>
                    <div className='second__title'>Технические решения</div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Fightscene} alt='Fight scene' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>В связи с ограниченностью бюджета картины режиссёр был вынужден решать, какие именно сцены фильма более всего нуждаются в снабжении специальными эффектами. Он выбрал две сцены — начальная сцена боя в будущем и заключительная сцена появления Терминатора в виде эндоскелета.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Над обеими сценами работали сотрудники компании Fantasy II. Эндоскелет Терминатора был разработан и нарисован Джеймсом Кэмероном. Роль зрачков выполняли фотографические линзы.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Skelet} alt='Skelet' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Skeletface} alt='Skelet face' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Для съёмок было изготовлено несколько версий эндоскелета: полная — в человеческий рост, бюст и руки с головой, приводимые в движение двумя кукловодами, и уменьшенная копия для покадровой анимации. Отдельно очень крупно была изготовлена часть лица и глаз для сцен, где видна работа камеры-глаза.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Для финальной сцены уничтожения робота под прессом был изготовлен манекен из плотной фольги, «глазом» которого была небольшая красная лампочка. «Пресс» был двумя большими кусками пенопласта, выкрашенными в стальной цвет.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Press} alt='Press' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Glass} alt='Glass' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Большинство автомобильных погонь снималось на нормальной скорости, а затем при монтаже их скорость увеличивали. Сцена, в которой Шварценеггер разбивает лобовое стекло машины с сидящей в ней Сарой и Ризом, снималась при неподвижном автомобиле.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Поскольку разбить такое стекло было не под силу даже Шварценеггеру, ему сделали на правую руку металлическую накладку с гидравлическим приводом. Сам актёр при этом был жёстко закреплён на капоте, машина стояла на месте (потому что нужно было управлять его рукой за пределами машины).</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Incar} alt='In a car' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Visit} alt='Visit' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Эффект движения машины был достигнут за счёт того, что на заднем плане во время съёмки в обратную сторону проезжал грузовик с подвешенной бутафорской стеной. Изначально предполагалось, что сцены путешествий во времени будут состоять только из нескольких электрических вспышек.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>В одной из сцен используется грузовик с цистерной. Изначально Кэмерон хотел взорвать настоящий, но власти Лос-Анджелеса запретили это, так как съёмки проходили в центре города, да ещё и рядом с полицейским складом оружия. Взрыв цистерны снимали в студии при помощи уменьшенной копии грузовика длиной два с половиной метра.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Explosion} alt='Explosion' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Sarakonnor} alt='Sara Konnor' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Убегающая от взрыва Сара была затем добавлена с помощью рирпроекции, когда в тёмной студии на просветный экран проецировались заранее снятые кадры взрыва грузовика, а камера снимала на фоне этого экрана бегущую Линду Хэмилтон.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Чтобы не брать в аренду дорогую операторскую тележку (англ. «dolly»), оператор Адам Гринберг импровизировал: вёл «съёмки с тележки», сидя со своей ручной камерой в инвалидной коляске, которую с большой скоростью толкал руками другой человек.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Sarawith} alt='Sara with Riws' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__theterm'>
                        <img src={Finishtwo} alt='Finish two' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second