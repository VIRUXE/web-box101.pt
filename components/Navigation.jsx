import React, { useState } from 'react';
import { Facebook, Instagram, Store, Settings, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_LINKS, SOCIAL_LINKS } from '@/constants';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">BOX101</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#servicos" className="nav-link">Serviços</a>
            <a href="#sobre" className="nav-link">Sobre Nós</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href={SITE_LINKS.STORE} className="text-gray-300 hover:text-white flex items-center gap-2">
              <Store className="h-5 w-5" /><span>Loja</span>
            </a>
            <a href={SITE_LINKS.SERVICES} className="text-gray-300 hover:text-white flex items-center gap-2">
              <Settings className="h-5 w-5" /><span>Serviços</span>
            </a>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden px-2 pt-2 pb-4 space-y-3">
            <a href="#servicos" className="block px-3 py-2 text-base font-medium nav-link">Serviços</a>
            <a href="#sobre" className="block px-3 py-2 text-base font-medium nav-link">Sobre Nós</a>
            <a href="#contacto" className="block px-3 py-2 text-base font-medium nav-link">Contacto</a>

            <div className="border-t border-gray-700 pt-4 mt-4">
              <a href={SITE_LINKS.STORE} className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <Store className="h-5 w-5 mr-2" /><span>Loja</span>
              </a>
              <a href={SITE_LINKS.SERVICES} className="flex items-center px-3 py-2 text-gray-300 hover:text-white">
                <Settings className="h-5 w-5 mr-2" /><span>Serviços</span>
              </a>
            </div>

            <div className="border-t border-gray-700 pt-4 mt-4 flex space-x-4 px-3">
              <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
              <a href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
