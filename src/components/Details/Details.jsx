import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'

import useStyles from './styles'
import useTransactions from '../../useTransactions'
import PieChart from '../PieChart/PieChart'

const Details = ({ title }) => {
    const classes = useStyles()
    const { total, chartData } = useTransactions(title)

    return (
        <Card className={ title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} />

            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <PieChart data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details