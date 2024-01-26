import React from 'react';
import {useTranslations} from 'next-intl';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import AnimationText from "./AnimationText"
import esT from "../../messages/es.json"

import enT from "../../messages/en.json"



const HeroSection = () => {
    const t = useTranslations('Index');

  return (
    <section>
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-6xl font-extrabold">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600'>{t('title')}</span>
        <br/>
        <div className='mt-5 sm:mt-0'>
        <AnimationText mename={t("meName")} txt1={t("skill.developer")} txt2={t("skill.uxui")} txt3={t("skill.webdev")}/>
        </div>
      </h1>          <p className="text-[#ADB7BE] text-base sm:text-lg text-lg lg:text-xl mb-6">
              {t('description')}
          </p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-blue-900 to-pink-700 hover:bg-slate-200 text-white'>{t('button.hire')}</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-blue-900 to-pink-700 hover:bg-slate-800 text-white border-white mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
            {t('button.CV')}
            </span>
            </button>
          </div>
      </div>
      <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
      <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative'>
        <Image 
          src="/images/hiro-me.jpeg"
          alt='Hiro image'
          className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
          width={300}
          height={300}
        />
        </div>
      </div>
    </div>
    </section>
  )
}

export default HeroSection