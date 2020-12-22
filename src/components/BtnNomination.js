import React from 'react'

export default function BtnNomination(props) {
    return (
        <div>
            <button type="button" className="btn btn-secondary m-2" disabled={props.disableBtn}>{props.heading}</button>
        </div>
    )
}
