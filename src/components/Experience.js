import { React, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef (null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LiIcon reference = {ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
}

const Experience = () => {
    const ref = useRef (null);
    const {scrollYProgress} = useScroll (
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2
        className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'
        >Experience</h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' />


            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details
               position="Software Developer and Database Admin" company="Real Gold Group Limited"
               companyLink='Real Gold group limited, Nairobi, Kenya.'
                time="November 2022-present" address="Nairobi, Kenya"
                work="Designed and developed a web-based visa registration system using Django, Python, and JavaScript. Implemented secure authentication and data encryption measures to protect sensitive information and integrated it with external systems for data validation and verification, ensuring accuracy and reliability. Streamlined the visa application process, reducing administrative workload and improving efficiency."
               />
               <Details
               position="UI/UX Designer(part time)" company="GALCK+"
               companyLink="galck.org"
                time="Aug 2021-Present" address="Nairobi, KE"
                work="Creating visually pleasing and consistent user interfaces that align with the brand's identity and guidelines
                and also with the campaign that was being run by the company,
                Collaborating with developers to ensure the technical feasibility of designs and providing necessary assets for implementation.
                Working closely with UI designers, developers, and stakeholders to translate user needs into actionable design solutions.
                "
               
               />

<Details
               position="Information Technology Support Assistant" company="Digital Imaging and Scanning International(disigroup.com)"
               companyLink="disigroup.com"
                time="Dec 2020-July 2021" address="Nairobi, KE"
                work="Roles included performing regular data backups,
                verifying and correcting data in excel documents to ensure
                accuracy,
                Responding to user requests for technical assistance and
                support,
                Troubleshooting computer hardware and software problems"
               
               />

<Details
               position="Transcriber & Captioner(part time)" company="REV.com"
               companyLink='rev.com'
                time="2019-2020" address="SanFransisco, USA"
                work="Roles included Audio-to-Text Conversion: Listening to audio recordings and accurately transcribing spoken content into written form.
                Formatting the transcribed text for clarity and readability.
                Maintaining strict confidentiality, especially when transcribing sensitive or private content."
               
               />
            </ul>
        </div>

    </div>
  )
}

export default Experience