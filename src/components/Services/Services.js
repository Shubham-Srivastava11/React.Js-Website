// import style from './Services.module.css';
import ServicesCard from '../Services/ServicesCard';
import images from "./../../images";
import { React, useState } from 'react';


const Services = () => {

    const [serviceCard, setServiceCard] = useState([
        { id: 's1', img: images.banner1, header: 'Engineering', body: 'years of individual experience.' },
        { id: 's2', img: images.banner1, header: 'Maintenance', body: 'projects completed over the years.' },
        { id: 's3', img: images.banner1, header: 'Production', body: 'experts to help you build a better solution.' },
        { id: 's4', img: images.banner1, header: 'Press Shop', body: 'experts to help you build a better solution.' },
        { id: 's5', img: images.banner1, header: 'Furnace', body: 'experts to help you build a better solution.' },
        { id: 's6', img: images.banner1, header: 'Management', body: 'experts to help you build a better solution.' }
    ]);

    return (
        <ServicesCard services={serviceCard}></ServicesCard>
    );
}

export default Services;