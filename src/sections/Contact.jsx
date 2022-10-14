import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {
  const [sending, setSending] = useState(false)
  const form = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      await emailjs.sendForm(
        'service_kyiqz8c', // service id
        'template_nvlh9gn', //template id
        form.current,
        'coqTwiQUsFqtQcwZF' // public key
      )
      toast.success('Message is sent successfully!')
      setSending(false)
      e.target.reset();

    } catch (err) {
      toast.error('Message Not Sent. Try later!')
      setSending(false)
    }
  }

  return (
    <div className="text-gray-200 body-font relative">
      <h2 className="text-4xl md:text-6xl text-center md:mb-10 mt-20 font-bold">Contact Me</h2>

      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=comilla&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
          <div className="bg-indigo-900 bg-opacity-50 backdrop-blur-sm relative -z-10 md:z-10 flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold  tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Brahmanpara, Cumilla <br /> Bangladesh </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold  tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:kazisharifulislam52@gmail.com?subject=Hey%2C%20I%20want%20to%20talk%20to%20you&body=Hey%20Shariful%20Islam%2C%0D%0A...." className="leading-relaxed">kazisharifulislam52@gmail.com</a>
              <h2 className="title-font font-semibold  tracking-widest text-xs mt-4">PHONE</h2>
              <a href="tel:01612178331" className="leading-relaxed">+8801612178331</a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 ">
          <h2 className=" text-lg mb-1 font-medium title-font">Contact Me</h2>
          <p>You can also contact me directly via phone or email</p>
          <p>Phone: <a href="tel:01612178331" className="leading-relaxed">+880 1612178331</a></p>
          <p>Whatsapp:
            <a target="_blank" className="hover:text-[#00ffc6] hover:translate-x-1 duration-300 p-2" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=+8801612178331&text=I%27m+interested+to+talk+with+you+about+your+portfolio&app_absent=0">
              +8801612178331
            </a>
          </p>
          <p>Email: <a href="mailto:kazisharifulislam52@gmail.com?subject=Hey%2C%20I%20want%20to%20talk%20to%20you&body=Hey%20Shariful%20Islam%2C%0D%0A...." className="text-indigo-400 leading-relaxed">kazisharifulislam52@gmail.com</a></p>
          <p className="leading-relaxed mb-5"></p>
          <form onSubmit={sendEmail} ref={form} className="leading-7 text-sm">
            <div className="relative mb-4">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-transparent rounded ring-0 sm:ring-1 border border-indigo-600 sm:border-none ring-indigo-400  focus:ring-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-transparent rounded ring-0 sm:ring-1 border border-indigo-600 sm:border-none ring-indigo-400  focus:ring-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="w-full bg-transparent rounded ring-0 sm:ring-1 border border-indigo-600 sm:border-none ring-indigo-400  focus:ring-indigo-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required></textarea>
            </div>
            <button disabled={sending} className=" w-full bg-indigo-500 bg-opacity-10  border-2 border-indigo-700 py-2 px-6 focus:outline-none hover:bg-indigo-600 hover:bg-opacity-40 rounded text-center">{sending ? 'Processing...' : 'Send Message'}</button>
          </form>
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;