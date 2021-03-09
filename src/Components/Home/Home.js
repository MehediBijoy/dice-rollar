import React, {useState} from "react";
import {connect} from "react-redux"
import {Box, Button, Divider, makeStyles, Typography} from "@material-ui/core";
import Dice from "../Dice/Dice";
import {add_dice, clear_dice} from "../../Store/Actions/Dice";

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
    const [sum, setSum] = useState(0)
    const rand = () => {
        return Math.floor(Math.random() * 6)
    }

    const addDiceHandler = () => {
        let random = rand()
        setSum(sum+(random+1))
        props.add_dice(random)
    }

    const clearDiceHandler = () => {
        props.clear_dice()
        setSum(0)
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.container}>
                <Typography variant="h1">Roll the Dice</Typography>
                <Typography variant="h1">Sum = {`${sum}`}</Typography>
                <Box className={classes.containerBody}>
                    {props.list ? props.list.map((items, key) => (
                        <Dice item={items} key={key}/>
                    )) : null}
                </Box>
                <Box className={classes.containerBody}>
                    <Button variant="contained" color="primary" size="large" onClick={addDiceHandler}>Roll Dice</Button>
                    <Button variant="contained" color="secondary" size="large" onClick={clearDiceHandler}>Clear Dice</Button>
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps, {add_dice, clear_dice})(Home)
