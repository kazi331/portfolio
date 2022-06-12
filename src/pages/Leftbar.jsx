import { Messenger, Whatsapp } from "@styled-icons/boxicons-logos";
import { EmailOutline, GithubOutline, LinkedinOutline, TwitterOutline } from "@styled-icons/evaicons-outline";

const Leftbar = () => {
    return (
        <div className="flex flex-col gap-4 justify-end items-center text-white opacity-30 mb-4">
            <a target="_blank" rel="noreferrer" href="https://github.com/kazi331"> <GithubOutline size={20} /> </a>
            <a target="_blank" rel="noreferrer" href="mailto:kazisharifulislam52@gmail.com"> <EmailOutline size={20} /> </a>
            <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/kazi331"> <LinkedinOutline size={20} /> </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/dev_kazi"> <TwitterOutline size={20} /> </a>
            <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=01612178331&text=I%27m+interested+to+talk+with+you+about+your+portfolio&app_absent=0"> <Whatsapp size={20} /> </a>
            <a target="_blank" rel="noreferrer" href="https://messenger.com/t/kazi331"> <Messenger size={20} /> </a>
            
            {/* <svg fill="#fff" opacity={0.5} enable-background="new 0 0 476.213 476.213" version="1.1" viewBox="0 0 476.21 476.21" xmlns="http://www.w3.org/2000/svg">
                <polygon points="287.5 384.39 253.11 418.79 253.11 0 223.11 0 223.11 418.79 188.71 384.39 167.5 405.61 238.11 476.21 308.71 405.61" />
            </svg> */}
        </div>
    );
};

export default Leftbar;