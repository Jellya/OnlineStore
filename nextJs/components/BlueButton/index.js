import React from 'react'
import styles from './button.module.scss'

export const buttonStatus = {
    error: 'error',
    success: 'success',
    default: 'default'
}

function BlueButton({name, status = buttonStatus}) {
    switch (status) {
        case buttonStatus.error:
            return <button className={styles.red}>{name}</button>;

            case buttonStatus.success:
                return <button className={styles.green}>{name}</button>;

            default:  
            return <button className={styles.grey}>{name}</button>;
    }
  }

  export default BlueButton