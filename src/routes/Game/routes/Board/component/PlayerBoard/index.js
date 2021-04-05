import PokemonCard from "../../../../../../components/PokemonCard";
import cn from 'classnames';
import s from "./style.module.css";
import { useState } from 'react';

const PlayerBoard = ({ player, cards, onClickCard, classN }) => {
    const [isSelected, setSelected] = useState(null);

    return (
        <>
            {
                cards.map((item) => (
                    <div className={cn(s.cardBoard, {
                        [classN]: isSelected === item.id
                    })}
                        onClick={() => {
                            setSelected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item
                            })
                        }}
                    >
                        <PokemonCard
                            key={item.id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            minimize
                            isActive
                            cards={cards}
                        />
                    </div>
                ))
            }
        </>
    )
}
export default PlayerBoard;