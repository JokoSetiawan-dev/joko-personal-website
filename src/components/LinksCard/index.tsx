import github from "../../assets/images/github-logo.png"
import gmail from "../../assets/images/gmail.svg"
import linkedin from "../../assets/images/linkedin.svg"
import whatsapp from "../../assets/images/whatsapp.svg"
import jslogo from "../../assets/images/js-logo-black.svg"

const LinksCard  = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col justify-center items-center font-bold text-white text-[25px] pb-8">
                    <h1>Reach out to me</h1>
                </div>
                <div className="flex items-center justify-center w-[60%] h-10 bg-white rounded-[25px]">
                    <a className="flex flex-row h-10 items-center justify-start gap-10 w-[70%]" href="https://jokosetiawan-dev.netlify.app/">
                        <img className="h-6 w-auto" src={jslogo} alt="" />
                        <h1 className="font-bold">Joko's Site</h1>
                    </a>
                </div>
                <div className="flex items-center justify-center w-[60%] h-10 bg-white rounded-[25px]">
                    <a className="flex flex-row h-10 items-center justify-start gap-10 w-[70%]" href="https://github.com/JokoSetiawan-dev">
                        <img className="h-6 w-auto" src={github} alt="" />
                        <h1 className="font-bold">GitHub</h1>
                    </a>
                </div>
                <div className="flex items-center justify-center w-[60%] h-10 bg-white rounded-[25px]">
                    <a className="flex flex-row h-10 items-center justify-start gap-10 w-[70%]" href="https://linkedin.com/in/jstwan">
                        <img className="h-6 w-auto" src={linkedin} alt="" />
                        <h1 className="font-bold">Linkedin</h1>
                    </a>
                </div>
                <div className="flex items-center justify-center w-[60%] h-10 bg-white rounded-[25px]">
                    <a className="flex flex-row h-10 items-center justify-start gap-10 w-[70%]" href="https://mail.google.com/mail/u/0/?fs=1&to=jokosetiawan.career@gmail.com&su=Subject&body=Message+here&tf=cm">
                        <img className="h-6 w-auto" src={gmail} alt="" />
                        <h1 className="font-bold">Email</h1>
                    </a>
                </div>
                <div className="flex items-center justify-center w-[60%] h-10 bg-white rounded-[25px]">
                    <a className="flex flex-row h-10 items-center justify-start gap-10 w-[70%]" href="https://wa.me/+6281276131433">
                        <img className="h-6 w-auto" src={whatsapp} alt="" />
                        <h1 className="font-bold">WhatsApp</h1>
                    </a>
                </div>
            </div>
        </>
    )
}

export default LinksCard