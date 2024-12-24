import { SITE_LINKS } from '@/constants';

const Footer = () => (
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:justify-between">
                <div>
                    <h3 className="text-2xl font-bold">BOX101</h3>
                    <p className="mt-2 text-gray-400">A Sua Oficina de Confiança</p>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex flex-col space-y-2">
                        <a href={SITE_LINKS.STORE} className="text-gray-400 hover:text-white">
                            Loja Online (Em Construção)
                        </a>
                        <a href={SITE_LINKS.SERVICES} className="text-gray-400 hover:text-white">
                            Portal de Serviço (Em Construção)
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} BOX101. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
