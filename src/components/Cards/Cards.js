import style from './Cards.module.css';

const Cards = (props) => {
    return (
        <div className={style.card_container}>
            {
                props.cardData.map(data =>
                    <div className={style.card_column} key={Math.random()}>
                        < div className={style.card} >
                            <h1>
                                {data.header}
                            </h1>
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

export default Cards;