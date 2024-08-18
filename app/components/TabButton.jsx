import React from 'react'
import {useTranslations} from 'next-intl';

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b border-custom-pink' : 'text-{#ADB7BE}';
  return (
    <button onClick={selectTab}>
    <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
    </p>
    </button>
  )
}

export default TabButton