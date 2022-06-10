// import style from './Services.module.css';
import ServicesCard from '../Services/ServicesCard';
import images from "./../../images";
import { React, useState } from 'react';
import style from './Services.module.css';


const Services = () => {

    const [serviceCard, setServiceCard] = useState([
        { id: 's1', img: images.engineering, header: 'Engineering', body: 'years of individual experience.' },
        { id: 's2', img: images.maintenance, header: 'Maintenance', body: 'projects completed over the years.' },
        { id: 's3', img: images.production, header: 'Production', body: 'experts to help you build a better solution.' },
        { id: 's5', img: images.furnace, header: 'Furnace', body: 'experts to help you build a better solution.' },
        { id: 's6', img: images.management, header: 'Management', body: 'experts to help you build a better solution.' },
        { id: 's4', img: images.press, header: 'Press Shop', body: 'experts to help you build a better solution.' }

    ]);

    return (
        <div className={style.service_div} id='services'>
            <h1>Our Services</h1>
            <ServicesCard services={serviceCard}></ServicesCard>
        </div>
    );
}

export default Services;