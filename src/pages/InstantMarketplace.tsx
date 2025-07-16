import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, TrendingUp, Users, ArrowRight, Zap, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InstantMarketplace = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Instant Marketplace
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              List your AI-generated NFTs instantly and connect with collectors worldwide. 
              Join a thriving community of digital artists and enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Instant Listing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  List your NFTs for sale immediately after minting
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Zero Wait Time
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Automated Pricing
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Bulk Operations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Price Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  AI-powered pricing suggestions based on market trends
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-accent" />
                    Smart Pricing
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-accent" />
                    Market Analysis
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-accent" />
                    Trend Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Global Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with collectors and artists from around the world
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    24/7 Trading
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Social Features
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-primary" />
                    Creator Profiles
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/marketplace">
              <Button variant="hero" size="xl" className="group">
                <Rocket className="w-5 h-5 mr-2" />
                Explore Marketplace
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="mt-16 bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Marketplace Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">NFTs Listed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">ETH Traded</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">How to Sell</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-2">Create NFT</h4>
                <p className="text-sm text-muted-foreground">
                  Generate and mint your AI artwork
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-2">Set Price</h4>
                <p className="text-sm text-muted-foreground">
                  Choose your selling price
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-2">List for Sale</h4>
                <p className="text-sm text-muted-foreground">
                  Make it available to buyers
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold mb-2">Earn Royalties</h4>
                <p className="text-sm text-muted-foreground">
                  Get paid automatically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};