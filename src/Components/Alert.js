import './Alert.css';
import React from 'react';

export default function Alert(props) {
    // const capitalize = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // };
    const {alert} =props;
    return (
        alert && (
            <div className={`alert alert-${alert.typ} alert-dismissible fade show`} role="alert">
                {alert.msg}
            </div>
        )
    );
}
