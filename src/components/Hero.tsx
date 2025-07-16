import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI MINT
            </span>
            <br />
            <span className="text-foreground">
              AI GENERATED
            </span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              NFT MARKETPLACE
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Democratize digital art creation with AI-powered NFT generation. 
            Create, mint, and trade unique digital assets in seconds.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="animate-fade-in mb-16" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/create">
              <Button variant="hero" size="xl" className="group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Create AI NFT
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="outline" size="xl" className="group">
                Explore Marketplace
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.6s' }}>
          <Link to="/ai-generation">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Creation</h3>
              <p className="text-muted-foreground">
                Generate unique digital art using advanced AI algorithms
              </p>
            </div>
          </Link>

          <Link to="/secure-blockchain">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Blockchain</h3>
              <p className="text-muted-foreground">
                Mint and trade NFTs with verified ownership on the blockchain
              </p>
            </div>
          </Link>

          <Link to="/instant-marketplace">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Marketplace</h3>
              <p className="text-muted-foreground">
                List and sell your creations instantly to a global audience
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};