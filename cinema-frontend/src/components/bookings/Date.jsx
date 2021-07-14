import moment from 'moment';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form'

const Date = ({ setSelectedDate }) => {

    const [dates, setDates] = useState([]);

    useEffect(() => {
        addDates();
    }, [])

    const addDates = () => {
        let dates = [];
        for (let i = 0; i < 7; i++) {

            dates.push(moment().add(i, 'days'));
        }
        setDates(dates)
    }



    return (
        <Form.Control as="select" onLoad={setSelectedDate(moment().format('DD,MM,YYYY'))} onChange={(e) => { setSelectedDate(e.target.value) }}>
            {dates.map((date, i) => (
                <option key={i} value={date.format('DD,MM,YYYY')} >{date.format('dddd')}</option>
            ))
            }
        </Form.Control >
    );
}

export default Date;