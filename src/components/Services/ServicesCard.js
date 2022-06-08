import style from './ServicesCard.module.css';

const ServicesCard = (props) => {
    return (
        <div className={style.card_container}>
            {
                props.services.map(data =>
                    <div className={style.card_column} key={Math.random()}>
                        < div className={style.card} >
                            <h3>{data.header}</h3>
                            <img src={data.img} alt=''>

                            </img>
                            <h4>
                                {data.body}
                            </h4>
                        </div >
                    </div>
                )
            }
        </div>
    );
}

export default ServicesCard;