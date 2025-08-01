import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export function PropertySearch() {
  return (
    // A classe 'backdrop-blur-md' foi removida daqui
    <Card className="w-full max-w-4xl mx-auto p-6 bg-card/95 shadow-strong border-0 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Localização */}
        <div className="space-y-2">
          <label htmlFor="localizacao" className="text-sm font-medium text-muted-foreground">Localização</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              id="localizacao"
              placeholder="Cidade, bairro ou região" 
              className="pl-10 bg-background/50 border-border/50 focus:bg-background"
            />
          </div>
        </div>
        
        {/* Tipo */}
        <div className="space-y-2">
          <label htmlFor="tipo-imovel" className="text-sm font-medium text-muted-foreground">Tipo</label>
          <Select>
            <SelectTrigger id="tipo-imovel" className="bg-background/50 border-border/50 focus:bg-background">
              <Home className="w-4 h-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Tipo de imóvel" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border/50">
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
              <SelectItem value="comercial">Comercial</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Preço */}
        <div className="space-y-2">
          <label htmlFor="faixa-preco" className="text-sm font-medium text-muted-foreground">Preço</label>
          <Select>
            <SelectTrigger id="faixa-preco" className="bg-background/50 border-border/50 focus:bg-background">
              <DollarSign className="w-4 h-4 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Faixa de preço" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border/50">
              <SelectItem value="0-300000">Até R$ 300.000</SelectItem>
              <SelectItem value="300000-500000">R$ 300.000 - R$ 500.000</SelectItem>
              <SelectItem value="500000-800000">R$ 500.000 - R$ 800.000</SelectItem>
              <SelectItem value="800000-1200000">R$ 800.000 - R$ 1.200.000</SelectItem>
              <SelectItem value="1200000+">Acima de R$ 1.200.000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Quartos */}
        <div className="space-y-2">
          <label htmlFor="num-quartos" className="text-sm font-medium text-muted-foreground">Quartos</label>
          <Select>
            <SelectTrigger id="num-quartos" className="bg-background/50 border-border/50 focus:bg-background">
              <SelectValue placeholder="Nº quartos" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border/50">
              <SelectItem value="1">1 quarto</SelectItem>
              <SelectItem value="2">2 quartos</SelectItem>
              <SelectItem value="3">3 quartos</SelectItem>
              <SelectItem value="4">4+ quartos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="premium" size="lg" className="w-full flex-1 py-3">
          <Search className="w-5 h-5 mr-2" />
          Buscar Imóveis
        </Button>
        <Button variant="outline" size="lg" className="w-full py-3">
          Filtros Avançados
        </Button>
      </div>
    </Card>
  );
}