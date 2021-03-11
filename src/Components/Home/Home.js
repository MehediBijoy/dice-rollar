import React from "react";
import {connect} from "react-redux"
import {Box, makeStyles, Typography} from "@material-ui/core";
import Dice from "../Dice/Dice";
import {add_dice, clear_dice, sum} from "../../Store/Actions/Dice";

const useStyles = makeStyles({
    root: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        height: "auto",
        width: "50rem",
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        alignItems: "center",
        '&>:nth-child(1)': {
            fontWeight: "800"
        },
        '&>:nth-child(2)': {
            fontWeight: "800"
        }
    },
    containerBody: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        flexWrap: "wrap",
        marginTop: "1rem",
        marginBottom: "1rem"
    }
})

const Home = (props) => {
    const classes = useStyles()
    const rand = () => {
        return Math.floor(Math.random() * 6)
    }

    const addDiceHandler = () => {
        let random = rand()
        props.add_dice(random)
        props.sum(random+1)
    }

    const clearDiceHandler = () => {
        props.clear_dice()
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <Typography variant="h1">Roll the Dice</Typography>
                <Typography variant="h1">Sum = {`${props.value ? props.value : 0}`}</Typography>
                <Box className={classes.containerBody}>
                    {props.list ? props.list.map((items, key) => (
                        <Dice item={items} key={key}/>
                    )) : null}
                </Box>
                <Box className={classes.containerBody}>
                    <button className="btn btn-success btn-lg" onClick={addDiceHandler}>Roll Dice</button>
                    <button className="btn btn-danger btn-lg" onClick={clearDiceHandler}>Clear Dice</button>
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        value: state.sum
    }
}

export default connect(mapStateToProps, {add_dice, clear_dice, sum})(Home)
