import React from 'react';

const TeamDistributionItem = ({name, classPosition}) => {
    const itemClass = `team-distribution-img ${classPosition}`

    return (
        <div className={itemClass}>
            <a onclick="review('#modalPerfil')">
                <h2>{name}</h2>
            </a>
        </div>
    )
};

export default TeamDistributionItem;