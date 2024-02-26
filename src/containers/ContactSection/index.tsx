import { MessageForm} from "../../components";


const ContactSection = () => {
  return (
    <>
      <div id="contacts" className="flex flex-row gap-7 min-h-96 justify-center items-center mt-28">
        <div>
          <MessageForm/>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
