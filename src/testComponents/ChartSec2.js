import SecondChart from "components/organism/SecondChart"

const { Box } = require("@material-ui/core")

const ChartSec2 = ({ ...props }) => {
    return (
        <Box sx={{ padding: 2 }}>
            {props.list.map((itemList, index) => (

                <div key={'list' + index}>

                    {props.tabIndex === itemList.num && (
                        <Box>
                            <SecondChart
                                itemList={itemList}
                                choiceAcc={props.choiceAc}
                            />
                        </Box>
                    )}

                </div>

            ))}
        </Box>
    )
}

export default ChartSec2