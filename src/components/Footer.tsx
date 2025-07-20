import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-neutral-dark text-background">
      {/* As classes principais que resolvem o alinhamento estão aqui */}
      <div className="container mx-auto px-4 py-16 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Coluna 1: Sobre a Empresa */}
          <div className="space-y-4">
            {/* O 'justify-center md:justify-start' alinha o logo */}
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <div className="bg-gradient-hero p-2 rounded-lg shadow-medium">
                <Home className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold">
                  Premium<span className="text-luxury">Imóveis</span>
                </h2>
                <p className="text-xs text-background/70">Sua casa dos sonhos</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Há mais de 15 anos no mercado imobiliário, conectando pessoas aos seus lares ideais com excelência e confiança.
            </p>
            {/* O 'justify-center md:justify-start' alinha os ícones sociais */}
            <div className="flex space-x-3 justify-center md:justify-start">
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button size="icon" variant="ghost" className="text-background/70 hover:text-luxury hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          {/* Coluna 2: Serviços */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Compra</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Venda</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Aluguel</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Avaliação Gratuita</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Consultoria</a></li>
              <li><a href="#" className="text-background/80 hover:text-luxury transition-colors">Financiamento</a></li>
            </ul>
          </div>
          
          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-background/80 justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-3 text-luxury flex-shrink-0" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
              <div className="flex items-center text-background/80 justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-3 text-luxury flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center text-background/80 justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-3 text-luxury flex-shrink-0" />
                <span>contato@premiumimoveis.com</span>
              </div>
            </div>
          </div>
          
          {/* Coluna 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-background">Newsletter</h3>
            <p className="text-sm text-background/80">
              Receba as melhores oportunidades diretamente no seu e-mail.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Seu e-mail" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:bg-background/20 text-center md:text-left"
              />
              <Button variant="luxury" size="sm" className="w-full">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-background/20 mt-16 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2025 Premium Imóveis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}