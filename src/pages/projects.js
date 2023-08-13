import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/ecomic.png"
import project2 from "../../public/images/projects/powerBi.png"
import project3 from "../../public/images/projects/django.png"
import project4 from "../../public/images/projects/nextjs.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full relative flex items-center justify-between rounded-3xl border 
        border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>


            <Link href="https://github.com/samgit36/FullStack-eCommerce-web-app-using-Python-and-Django" target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
              <FramerImage src={img} alt={title} className='w-full h-auto'
              whileHover={{scale:1.05}}
              transition={{duration:0.2}}
              />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between
            pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark
                xs:text-base
                '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light
                    sm:text-sm
                    '>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target="_blank" className='w-10'> <GithubIcon/> </Link>
            <Link href={link} target="_blank"
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg 
            font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            '
            > Visit Project </Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark bg-light p-6
        relative dark:bg-dark dark:border-light
        xs:p-4
        '>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
rounded-br-3xl dark:bg-light
md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
'/>


             <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
              <FramerImage src={img} alt={title} className='w-full h-auto'
              whileHover={{scale:1.05}}
              transition={{duration:0.2}}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </Link>

            <div className='w-full flex flex-col items-start justify-between 
            mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl
                lg:text-lg md:text-base
                '>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold
                    lg:text-2xl
                    '>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target="_blank"
            className='text-lg font-semibold underline md:text-base'
            > Visit </Link>
            <Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon/> </Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>

    <Head>
        <title>SamNinga | Projects Page</title>
        <meta name='description' content='any description'/>
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Just Some Of My Previous Works" 
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
            />
            <div className='grid grid-cols-12 gap-24 gap-y-32 
            xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject
                    img={project1}
                    title="FullStack eCommerce Web App made with Python and Django"
                    summary="Your comic book club is a fullstack web application using python and the django library. It also comes
                    with an admin dashboard on it managed using django"
                    link="https://github.com/samgit36/FullStack-eCommerce-web-app-using-Python-and-Django"
                    github="https://github.com/samgit36/FullStack-eCommerce-web-app-using-Python-and-Django"
                    type="Featured Project"
                    
                    />

                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    img={project2}
                    title="Visualizations Of Real World Hotel Data Using powerBi"
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                    link="https://github.com/samgit36/PowerBI-Dashboards"
                    github="https://github.com/samgit36/PowerBI-Dashboards"
                    type="Featured Project"
                    
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
                    img={project3}
                    title="Django Administration"
                    summary="An admin Dashboard for a fullstack ecommerce project built on the Python Framework"
                    link="https://github.com/samgit36/FullStack-eCommerce-web-app-using-Python-and-Django"
                    github="https://github.com/samgit36/FullStack-eCommerce-web-app-using-Python-and-Django"
                    type="Featured Project"
                    
                    />
                </div>
                <div className='col-span-12'>
                <FeaturedProject
                    img={project4}
                    title="Multi Vendor FullStack Ecommerce Project Made on the NextJs Framework"
                    summary="This project comes with an inbuild dashboard to give insights to the seller plus
                    a user friendly store made with React and TailwindCss
                    "
                    link="https://github.com/samgit36/fullstack-ecommerce-Admin-Dashboard"
                    github="https://github.com/samgit36/fullstack-ecommerce-Admin-Dashboard"
                    type="Featured Project"
                    
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    Project-3
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    Project-4
                </div>

            </div>
        </Layout>
    </main>

    </>
  )
}

export default projects