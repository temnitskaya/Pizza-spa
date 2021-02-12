import react from "react"
import s from "./SwitchersPizza.module.css"

const SwitchersPizza = (props) => {
    return (
    <div className={s.switchers}> 
        <div className={s.switcherSize}>
           <button className={s.productBtn}>23 см</button>
           <button className={s.productBtn}>30 см</button>
        </div>
        <div className={s.switcherThickness}>
           <button className={s.productBtn}>Тонкое</button>
           <button className={s.productBtn}>Традиционное</button>
        </div>
    </div>
    )
}

export default SwitchersPizza;