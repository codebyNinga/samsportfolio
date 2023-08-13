import FormElement from '@/components/FormElement'
import IconInfo from '@/components/IconInfo'
import IconEmail from '@/components/icons/IconEmail'
import IconPhone from '@/components/icons/IconPhone'
import React, { useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xe1985c', 'template_t7bh14k', form.current, 'xHXcT_tUrTeqcUX7T')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        setIsSent(true); // Set success status to true
        setTimeout(() => {
          window.location.reload(); // Refresh the page after a delay
        }, 3000); // Refresh after 3 seconds
      })
      .catch((error) => {
        console.log(error.text);
      });
  };


  const  { 
    control, 
    formState: {errors}, 
  
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });


  return (

    
    <div className='xl:container mx-auto mb-32'>
        <div className='flex justify-center' 
            style={{
            background:'radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(252,70,107,1) 100%)',
            height:'250px',
        }}>
            <h1 className='text-5xl sm:text-7xl text-primary uppercase pt-12'>Let's Chat</h1>
        </div>
        <div className='px-4 sm:w-2/3 lg:w-1/2 mx-auto'>
            <div className='rounded-lg shadow-lg bg-light -mt-24 py-10 md:py-12 px-4 md:px-6'>
              <div className='grid grid-cols-2 gap-x-6 mb-12 mx-auto'>
                <IconInfo icon={<IconEmail />} text="contact@ninga254@gmail.com"/>
                <IconInfo icon={<IconPhone />} text="https://www.linkedin.com/in/samuelninga/"/>
              </div>
              <div>
                <form
                ref={form}
                onSubmit={sendEmail}>
                  <Controller
                  name='to_name'
                  control={control}
                  rules={{required: true}}
                  render={({field}) => (
                    <FormElement 
                    type="text" 
                    label="Name" 
                    placeholder="Enter name here..." 
                    fieldRef={field} 
                    hasError={errors.name?.type === 'required'} 
                    />
                    
                  )}
                  />

                <Controller
                  name='from_name'
                  control={control}
                  rules={{required: true}}
                  render={({field}) => (
                    <FormElement 
                    type="email" 
                    label="Email" 
                    placeholder="Enter your Email Address..." 
                    fieldRef={field} 
                    hasError={errors.email?.type === 'required'} 
                    />
                  )}
                  />
                  <Controller
                  name='message'
                  control={control}
                  rules={{required: true}}
                  render={({field}) => (
                    <FormElement 
                    type="textarea" 
                    label="Message" 
                    placeholder="" 
                    fieldRef={field} 
                    hasError={errors.message?.type === 'required'} 
                    />
                    
                  )}
                  />
                  <button type='submit' className='w-full px-6 py-3 bg-pink-600
                  text-light font-medium uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg
                  focus:bg-pink-700 focus:outline-none focus:ring-0 active:bg-pink-800
                  '>Send</button>
                </form>
              </div>
              </div>
        </div>
    </div>
  )
}

export default Contact