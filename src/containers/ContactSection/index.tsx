import { MessageForm} from "../../components";


const ContactSection = () => {
  return (
    <>
      <div id="contacts" className="flex flex-row gap-7 min-h-96 justify-center items-center md:mt-28 mt-20 md:mb-10">
        <div>
          <MessageForm/>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
