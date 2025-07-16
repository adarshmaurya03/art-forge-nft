import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { User, Settings, Share2, Heart, Eye, TrendingUp, Zap, Plus } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { NFTCard } from '@/components/NFTCard';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const [activeTab, setActiveTab] = useState('created');

  const profileStats = [
    { label: 'Created', value: '24', icon: Zap },
    { label: 'Collected', value: '67', icon: Heart },
    { label: 'Followers', value: '1.2K', icon: User },
    { label: 'Following', value: '456', icon: TrendingUp },
  ];

  const createdNFTs = [
    {
      id: '1',
      title: 'Cyberpunk Dreams',
      creator: 'You',
      price: '0.5',
      image: 'https://picsum.photos/400/400?random=1',
      likes: 234,
      views: 1567,
      category: 'AI Art'
    },
    {
      id: '2',
      title: 'Neon Reflections',
      creator: 'You',
      price: '0.8',
      image: 'https://picsum.photos/400/400?random=2',
      likes: 189,
      views: 2341,
      category: 'Abstract'
    },
    {
      id: '3',
      title: 'Future Metropolis',
      creator: 'You',
      price: '1.2',
      image: 'https://picsum.photos/400/400?random=3',
      likes: 567,
      views: 3456,
      category: 'Cyberpunk'
    }
  ];

  const collectedNFTs = [
    {
      id: '4',
      title: 'Digital Portrait',
      creator: 'AIPortraits',
      price: '0.3',
      image: 'https://picsum.photos/400/400?random=4',
      likes: 123,
      views: 987,
      category: 'Portrait'
    },
    {
      id: '5',
      title: 'Quantum Landscape',
      creator: 'VirtualWorlds',
      price: '0.9',
      image: 'https://picsum.photos/400/400?random=5',
      likes: 345,
      views: 2134,
      category: 'Landscape'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Profile Header */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="relative">
                  <Avatar className="w-32 h-32 border-4 border-primary/20">
                    <AvatarImage src="https://picsum.photos/128/128?random=profile" />
                    <AvatarFallback className="text-2xl">AI</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      AI Creator
                    </span>
                  </h1>
                  <p className="text-muted-foreground mb-4">
                    Digital artist exploring the intersection of AI and creativity
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                    <Badge variant="secondary">AI Artist</Badge>
                    <Badge variant="secondary">NFT Creator</Badge>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    <Link to="/create">
                      <Button variant="hero">
                        <Plus className="w-4 h-4 mr-2" />
                        Create NFT
                      </Button>
                    </Link>
                    <Button variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Link to="/settings">
                      <Button variant="outline" size="icon">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {profileStats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="created">Created</TabsTrigger>
              <TabsTrigger value="collected">Collected</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="created" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Created NFTs</h2>
                <Button variant="outline">
                  Sort by: Recent
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {createdNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collected" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Collected NFTs</h2>
                <Button variant="outline">
                  Sort by: Recent
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collectedNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <h2 className="text-2xl font-bold">Recent Activity</h2>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Minted "Cyberpunk Dreams" NFT</span>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">Purchased "Digital Portrait" NFT</span>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Listed "Neon Reflections" for sale</span>
                      <span className="text-xs text-muted-foreground">3 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};