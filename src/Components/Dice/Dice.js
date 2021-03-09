import React from "react"
import {Box} from "@material-ui/core";
import "./Dice.css"

const one = (
    <div className="first-face">
        <span className="pip"/>
    </div>
)

const two = (
    <div className="second-face">
        <span className="pip"/>
        <span className="pip"/>
    </div>
)

const three = (
    <div className="third-face">
        <span className="pip"/>
        <span className="pip"/>
        <span className="pip"/>
    </div>
)

const four = (
    <div className="fourth-face">
        <div className="column">
            <span className="pip"/>
            <span className="pip"/>
        </div>
        <div className="column">
            <span className="pip"/>
            <span className="pip"/>
        </div>
    </div>
)

const five = (
    <div className="fifth-face">
        <div className="column">
            <span className="pip"/>
            <span className="pip"/>
        </div>
        <div className="column">
            <span className="pip"/>
        </div>
        <div className="column">
            <span className="pip"/>
            <span className="pip"/>
        </div>
    </div>
)

const six = (
    <div className="sixth-face">
        <div className="column">
            <span className="pip"/>
            <span className="pip"/>
            <span className="pip"/>
        </div>
        <div className="column">
            <span className="pip"/>
            <span className="pip"/>
            <span className="pip"/>
        </div>
    </div>
)

const list = [one, two, three, four, five, six]

const Dice = (props) => {
    return (
        <Box>
            {list[props.item]}
        </Box>
    )
}

export default Dice
