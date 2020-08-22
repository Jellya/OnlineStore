import React from 'react'
import styles from './catalog.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeMaxPrice, changeMinPrice, resetPrice, selectSize } from '../../../redux/actions'
import { Form, Field } from 'react-final-form'

function Bar() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);

    const onChangeMinPrice = (event) => {
        dispatch(changeMinPrice(event.target.value))
    }

    const onChangeMaxPrice = (event) => {
        dispatch(changeMaxPrice(event.target.value))
    }

    const onClickSelectColor = (e) => {
        dispatch(selectColor(e.target.id))
    }
    console.log('filters', filters)
    const onClickSelectSize = (e) => {
        dispatch(selectSize(e.target.id))
    }

    const onSubmit = (formData) => {
        console.log('formData', formData)
    }

    return (
        <div className={styles.catalogBar}>
            <div className={styles.catalogBar__item}>
                Filters
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, values }) => {
                        console.log('values', values)
                        return (
                        <form onSubmit={handleSubmit} className={styles.catalogBar__formFilters}>
                            <div className={styles.catalogBar__category}>
                                <p className={styles.catalogBar__title}>Category</p>
                                <Field type="checkbox" component='input' id="freedom" name="freedom" />
                                <label for="freedom">Freedom Selection</label>
                                <Field type="checkbox" component='input' id="source" name="source" />
                                <label for="source">Source Selection</label>
                                <Field type="checkbox" component='input' id="sale" name="sale" />
                                <label for="sale">SALE</label>
                                <Field type="checkbox" component='input' id="outerwear" name="outerwear" />
                                <label for="outerwear">Outerwear</label>
                                <Field type="checkbox" component='input' id="dresses" name="dresses" />
                                <label for="dresses">Dresses</label>
                                <Field type="checkbox" component='input' id="suits" name="suits" />
                                <label for="suits">Suits</label>
                                <Field type="checkbox" component='input' id="jackets" name="jackets" />
                                <label for="jakets">Jackets</label>
                                <Field type="checkbox" component='input' id="shirtsBlouses" name="shirtsBlouses" />
                                <label for="shirtsBlouses">Shirts/Blouses</label>
                                <Field type="checkbox" component='input' id="t-shirts" name="t-shirts" />
                                <label for="tops-tshirts">Tops/T-shirts</label>
                                <Field type="checkbox" component='input' id="pants" name="pants" />
                                <label for="pants">Pants</label>
                                <Field type="checkbox" component='input' id="skirts" name="skirts" />
                                <label for="">Skirts</label>
                                <Field type="checkbox" component='input' id="overalls" name="overalls" />
                                <label for="overalls">Overalls</label>
                            </div>
                            <div className={styles.catalogBar__filters}>
                                <p className={styles.catalogBar__title}>Filters</p>
                                <div className={styles.catalogBar__sizes}>
                                    Size
                                     <div className={styles.catalogBar__checkboxRow}>
                                     <input type="checkbox" id="XS" name="XS"
                                            onClick={onClickSelectSize} />
                                        <label for="XS">XS</label>
                                        <input type="checkbox" id="S" name="S"
                                            onClick={onClickSelectSize} />
                                        <label for="S">S</label>
                                        <input type="checkbox" id="M" name="M"
                                            onClick={onClickSelectSize} />
                                        <label for="M">M</label>
                                        <input type="checkbox" id="L" name="L"
                                            onClick={onClickSelectSize} />
                                        <label for="L">L</label>
                                    </div>
                                </div>
                                <div className={styles.catalogBar__colors}>
                                    Colors
                                <div className={styles.catalogBar__checkboxRow}>
                                <input type="checkbox" id="green" name="green" onClick={onClickSelectColor}/>
                                <label for="green"></label>
                                <input onClick={onClickSelectColor} type="checkbox" id="pudra" name="pudra" />
                                <label for="pudra"></label>
                                <input onClick={onClickSelectColor} type="checkbox" id="gray" name="gray" />
                                <label for="gray"></label>
                                <input type="checkbox" id="black" name="black" />
                                <label for="black"></label>
                                <input type="checkbox" id="lightgray" name="lightgray" />
                                <label for="lightgray"></label>
                                <input type="checkbox" id="white" name="white" />
                                <label for="white"></label>
                            </div>
                        </div>
                        <div className={styles.catalogBar__pricing}>
                            Pricing ($)
                                <div className={styles.catalogBar__checkboxRow}>
                                    <input onChange={onChangeMinPrice} type="number" id="min" name="min" className={styles.checkbox__number} />
                                    -
                                    <input onChange={onChangeMaxPrice} type="number" id="max" name="max" className={styles.checkbox__number} />
                                </div>
                                    <input onClick={() => (dispatch(resetPrice()))} type="reset" value="Cancel selected" className={styles.catalogBar__reset} />
                                </div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>)}}
                />
            </div>
            <div className={styles.catalogBar__item}>
                Sorting
        </div>
        </div>
    )
}

export default Bar