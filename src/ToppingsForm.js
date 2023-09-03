import React from "react";
import styles from "./RadioForm.module.css";
import {RedBean, LycheeJelly, CheeseFoam, BrownSugar, TofuPudding,
    GrassJelly, MangoPudding, Boba, AgarBoba, Honey, Mochi} from "./TopppingTypes";

function ToppingsForm() {
    return (
        <div className={styles.mainFormToppings}>
            <div className={styles.choices}>
            <h4>Toppings</h4>
            <p className={styles.extraInfo}>Please Select Up To 5</p>
                <form>
                    <div className={styles.container}>
                    <label className={styles.label} for="ReadBean">Red Bean</label>
                    <input className={styles.input} name="topping" id="RedBean" type="checkbox"></input>
                    <p className={styles.price}>{`+${RedBean.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="LycheeJelly">Lychee Jelly</label>
                    <input className={styles.input} name="topping" id="LycheeJelly" type="checkbox"></input>
                    <p className={styles.price}>{`+${LycheeJelly.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label}  for="CheeseFoam">Cheese Foam</label>
                    <input className={styles.input} name="topping" id="CheeseFoam" type="checkbox"></input>
                    <p className={styles.price}>{`+${CheeseFoam.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="BrownSugar">Brown Sugar</label>
                    <input className={styles.input} name="topping" id="BrownSugar" type="checkbox"></input>
                    <p className={styles.price}>{`+${BrownSugar.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="TofuPudding">Tofu Pudding</label>
                    <input className={styles.input} name="topping" id="TofuPudding" type="checkbox"></input>
                    <p className={styles.price}>{`+${TofuPudding.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="GrassJelly">Grass Jelly</label>
                    <input className={styles.input} name="topping" id="GrassJelly" type="checkbox"></input>
                    <p className={styles.price}>{`+${GrassJelly.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="MangoPudding">Mango Pudding</label>
                    <input className={styles.input} name="topping" id="MangoPudding" type="checkbox"></input>
                    <p className={styles.price}>{`+${MangoPudding.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="Boba">Boba</label>
                    <input className={styles.input} name="topping" id="Boba" type="checkbox"></input>
                    <p className={styles.price}>{`+${Boba.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="AgarBoba">Agar Boba</label>
                    <input className={styles.input} name="topping" id="AgarBoba" type="checkbox"></input>
                    <p className={styles.price}>{`+${AgarBoba.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="Honey">Honey</label>
                    <input className={styles.input} name="topping" id="Honey" type="checkbox"></input>
                    <p className={styles.price}>{`+${Honey.price}`}</p>
                    </div>
                    <div className={styles.container}>
                    <label className={styles.label} for="Mochi">Mochi</label>
                    <input className={styles.input} name="topping" id="Mochi" type="checkbox"></input>
                    <p className={styles.price}>{`+${Mochi.price}`}</p>
                    </div>
                </form>
            </div>
        </div>
        )
}

export default ToppingsForm;