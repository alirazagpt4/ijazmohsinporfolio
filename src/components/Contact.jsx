import { CONTACT_INFO } from "../constants";

const Contact = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl mb-6">Contact</h2>
        <div className="mb-8">
          {CONTACT_INFO.map((contact, index) => (
            <div key={index} className="mb-4">
              <p className="text-lg font-medium">
                {contact.type}: 
                <a
                  href={contact.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.value}
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="text-sm mt-6 border-t border-neutral-800 pt-4">
          <p>&copy; {new Date().getFullYear()} &nbsp;  IJAZ MOHSIN KHOKAR.&nbsp; All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
