import React from 'react'


const Tab = function({ value: { category }, handle: handleFilterCategory, onItemClicked, isActive = false }) {
    return (
        <div className={isActive ? 'sidebar__btn active' : 'sidebar__btn'} onClick={() => { handleFilterCategory(category); onItemClicked() } }> {category} </div>
    )
};

export default Tab;