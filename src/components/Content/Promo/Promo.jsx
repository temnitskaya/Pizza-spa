import React from 'react'
import s from './Promo.module.css'

const Promo = (props) => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Акции</h3>
            {
                props.promo.map(elem =>
                    <div key={elem.id} className={s.promo}>
                        <a href="/">
                            <img src={elem.image} alt="sales"></img>
                        </a>
                    </div>
                )
            }
        </div>
    )
}

export default Promo;


