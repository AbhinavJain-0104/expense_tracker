import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from 'chart.js/auto';
import Chart from 'chart.js'
import useStyles from './styles';
import useTransactions from '../../useTransactions';

const DetailsCard = ({ title}) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title}  />
      <CardContent>
        <Typography variant="h5">{'\u20B9'}{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;