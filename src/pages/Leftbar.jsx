import { Messenger, Whatsapp } from "@styled-icons/boxicons-logos";
import { EmailOutline, GithubOutline, LinkedinOutline, TwitterOutline } from "@styled-icons/evaicons-outline";
import SocialIcons from "../sections/SocialIcons";

const Leftbar = () => {
    return (
        <div className="flex flex-col gap-4 justify-end items-center text-white opacity-30 mb-4">
        <SocialIcons/>   
        </div>
    );
};

export default Leftbar;