import { Button } from "@/components/ui/button";
import { PropertySearch } from "@/components/PropertySearch";
import { Play, TrendingUp, Users, Award, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Luxury Real Estate" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/70 via-neutral-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 via-transparent to-transparent" />
      </div>

      {/* CONTEÚDO PRINCIPAL (TÍTULOS E BOTÕES) */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
            Encontre Seu
            <span className="block bg-gradient-luxury bg-clip-text text-transparent">
              Lar Perfeito
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubra as melhores oportunidades do mercado imobiliário com nossa expertise de mais de 15 anos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="luxury" size="xl" className="animate-glow">
              <TrendingUp className="w-5 h-5 mr-2" />
              Explorar Imóveis
            </Button>
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5 mr-2" />
              Assistir Tour Virtual
            </Button>
          </div>
        </div>
      </div>

      {/* COMPONENTE DE BUSCA (POSICIONADO ABAIXO) */}
      <div className="relative z-20 w-full container mx-auto px-4 mt-8">
        <PropertySearch />
      </div>
      
      {/* INDICADORES DE CONFIANÇA E SCROLL (NA BASE) */}
      <div className="relative z-10 container mx-auto px-4 mt-auto pt-12 pb-8 text-center">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-80">
          <div className="flex items-center text-background/70">
            <Users className="w-5 h-5 mr-2" />
            <span className="text-sm">Mais de 10.000 clientes atendidos</span>
          </div>
          <div className="flex items-center text-background/70">
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm">Prêmio Melhor Imobiliária 2023</span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-background/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}