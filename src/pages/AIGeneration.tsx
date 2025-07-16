import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Sparkles, ArrowRight, Cpu, Palette, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AIGeneration = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI-Powered Creation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Harness the power of artificial intelligence to create unique digital art. 
              Our advanced AI algorithms transform your ideas into stunning NFTs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Advanced AI Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Powered by state-of-the-art neural networks trained on millions of artistic works
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    DALL-E Integration
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Stable Diffusion
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Custom Models
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Multiple Art Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Choose from various artistic styles or create your own unique aesthetic
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-accent" />
                    Photorealistic
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-accent" />
                    Abstract Art
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-accent" />
                    Digital Painting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Wand2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Instant Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Generate high-quality artwork in seconds, not hours
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Fast Processing
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    High Resolution
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Multiple Variations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/create">
              <Button variant="hero" size="xl" className="group">
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                Start Creating AI Art
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="mt-16 bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-2">Enter Prompt</h4>
                <p className="text-sm text-muted-foreground">
                  Describe your vision in words
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-2">AI Generation</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI creates unique artwork
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-2">Review & Edit</h4>
                <p className="text-sm text-muted-foreground">
                  Refine your creation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold mb-2">Mint NFT</h4>
                <p className="text-sm text-muted-foreground">
                  Create your blockchain asset
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};