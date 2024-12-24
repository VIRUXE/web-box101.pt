import { Phone, Mail, MapPin, Facebook, Instagram, Clipboard } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/constants';

const ContactSection = () => (
  <div id="contacto" className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-8">Contactos</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-gray-600 mr-4" />
              <a href={`tel:${CONTACT_INFO.PHONE.replace(/\s/g, '')}`} className="hover:text-gray-600">
                {CONTACT_INFO.PHONE}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-gray-600 mr-4" />
              <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="hover:text-gray-600">
                {CONTACT_INFO.EMAIL}
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-gray-600 mr-4" />
              <a 
                href={`maps:0,0?q=${encodeURIComponent(CONTACT_INFO.ADDRESS)}`}
                onClick={e => {
                  if (!navigator.userAgent.toLowerCase().includes('mobi')) {
                    e.preventDefault();
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.ADDRESS)}`);
                  }
                }}
                className="hover:text-gray-600"
              >
                {CONTACT_INFO.ADDRESS}
              </a>
            </div>
            <div className="flex items-center" title='what3words'>
              <img className="w-6 h-6 text-gray-600 mr-4" src="images/w3w.png"/>
              <a
                href={`w3w://show?threewords=${CONTACT_INFO.W3W}`}
                onClick={e => {
                  if (!navigator.userAgent.toLowerCase().includes('mobi')) {
                    e.preventDefault();
                    window.open(`https://what3words.com/${CONTACT_INFO.W3W}`);
                  }
                }}
                className="hover:text-gray-600"
              >
                {CONTACT_INFO.W3W}
              </a>
              <button 
                onClick={() => navigator.clipboard.writeText(CONTACT_INFO.W3W)}
                className="ml-2 p-1 text-gray-600 hover:text-gray-900 rounded"
                title="Copy to clipboard"
              >
                <Clipboard className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mt-8 flex space-x-4">
            <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-6 h-6" />
            </a>
            <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="h-96 rounded-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.760816870973!2d-8.595080023427183!3d41.41332909438496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd245a38ebb3af89%3A0x923efd10b4e96ad!2sR.%20Sr.%20das%20Penices%20895%2C%20Gondifelos!5e1!3m2!1sen!2spt!4v1734180168583!5m2!1sen!2spt" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
