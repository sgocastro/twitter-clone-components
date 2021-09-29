import React from "react"
import UsuarioPreview from "../UsuarioPreview"
import "./style/index.scss"



const TalVezTeGusteCard = () => {
    return (
        <div className="tal-vez-te-guste-container">
            <h1>Tal vez te guste</h1>
            <UsuarioPreview />
            <UsuarioPreview />
            <UsuarioPreview />
        </div>
    )
}

export default TalVezTeGusteCard
