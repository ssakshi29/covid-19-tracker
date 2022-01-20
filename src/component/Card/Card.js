import React from 'react'
import './Card.css'
import CountUp from 'react-countup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function Card1(props) {
 
        const date = new Date().toLocaleDateString();
        return (
            <div className="section">
            <div className="box1">
                <Card sx={{ maxWidth: 345 }}  >
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Infected
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Number of Active Cases of Covid-19 
                        </Typography>
                        <CountUp start={0} end={props.active} duration={2.5} separator=','/>
                        <Typography variant="h6" color="text.secondary"  component="div" >
                            {date}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="box2">
                <Card sx={{ maxWidth: 345 }}  className="box2">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Recovered
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Number of Recovered Cases from Covid-19
                        </Typography>
                        <CountUp start={0} end={props.recovered} duration={2.5} separator=','/>
                        <Typography variant="h6" color="text.secondary"  component="div" >
                            {date}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="box3">
                <Card sx={{ maxWidth: 345 }}  className="box3">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Deaths
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Number of Deaths caused by Covid-19
                        </Typography>
                        <CountUp start={0} end={props.deaths} duration={2.5} separator=','/>
                        <Typography variant="h6" color="text.secondary"  component="div" >
                            {date}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
          </div>


          

        )
}

export default Card1
