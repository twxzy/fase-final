import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Phone, Mail, User, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu ao clicar em um link (opcional, mas recomendado)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg shadow-medium">
              <Home className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Premium<span className="text-primary">Imóveis</span>
              </h1>
              <p className="text-xs text-muted-foreground">Sua casa dos sonhos</p>
            </div>
          </div>
          
          {/* NAVEGAÇÃO DESKTOP */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" onClick={handleLinkClick} className="text-foreground hover:text-primary transition-colors font-medium">Início</a>
            <a href="#comprar" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Comprar</a>
            <a href="#alugar" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Alugar</a>
            <a href="#sobre" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" onClick={handleLinkClick} className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
          
          {/* BOTÕES DE AÇÃO DESKTOP */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2" />
                (11) 99999-9999
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                contato@premiumimoveis.com
              </div>
            </div>
            <Button variant="outline" size="sm">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="premium" size="sm">
              Anunciar
            </Button>
          </div>

          {/* BOTÃO HAMBÚRGUER */}
          <div className="md:hidden flex items-center">
            <Button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              variant="ghost" 
              size="icon"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>
        </div>

        {/* MENU DROPDOWN PARA MOBILE */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 animate-fade-in-down text-center">
            <a href="#inicio" onClick={handleLinkClick} className="block py-2 text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#comprar" onClick={handleLinkClick} className="block py-2 text-muted-foreground hover:text-primary transition-colors">Comprar</a>
            <a href="#alugar" onClick={handleLinkClick} className="block py-2 text-muted-foreground hover:text-primary transition-colors">Alugar</a>
            <a href="#sobre" onClick={handleLinkClick} className="block py-2 text-muted-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#contato" onClick={handleLinkClick} className="block py-2 text-muted-foreground hover:text-primary transition-colors">Contato</a>
            <div className="border-t border-border/50 my-4"></div>
            <div className="flex flex-col space-y-4">
              <Button variant="outline">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="premium">
                Anunciar Imóvel
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}