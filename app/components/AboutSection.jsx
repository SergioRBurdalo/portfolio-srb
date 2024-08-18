import React from 'react'
import Image from "next/image";
import {useTranslations} from 'next-intl';
import aboutIMG from '../../public/images/about-image.jpeg'

const AboutSection = () => {
  const t = useTranslations('Index');

  return (
    <section className='text-black mt-10 bg-gray-300 rounded-lg'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src={aboutIMG} 
          className='rounded-md mb-4'
          width={500}
        height={500}/>
        <div>
          <h2 className='text-4xl font-bold text-black mb-4'> {t("aboutSection.title")}</h2>
          <p className='text-base md:text-lg'>
            {t("aboutSection.description")}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection