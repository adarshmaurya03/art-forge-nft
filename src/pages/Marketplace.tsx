import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, TrendingUp, Zap, Grid3X3, List } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { NFTCard } from '@/components/NFTCard';

export const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All', count: 1234 },
    { id: 'ai-art', name: 'AI Art', count: 567 },
    { id: 'abstract', name: 'Abstract', count: 234 },
    { id: 'portrait', name: 'Portrait', count: 156 },
    { id: 'landscape', name: 'Landscape', count: 189 },
    { id: 'cyberpunk', name: 'Cyberpunk', count: 88 },
  ];

  const mockNFTs = [
    {
      id: '1',
      title: 'Cyberpunk Dreams',
      creator: 'AIArtist_X',
      price: '0.5',
      image: 'https://picsum.photos/400/400?random=1',
      likes: 234,
      views: 1567,
      category: 'AI Art'
    },
    {
      id: '2',
      title: 'Neon Reflections',
      creator: 'DigitalVision',
      price: '0.8',
      image: 'https://picsum.photos/400/400?random=2',
      likes: 189,
      views: 2341,
      category: 'Abstract'
    },
    {
      id: '3',
      title: 'Future Metropolis',
      creator: 'TechnoCreator',
      price: '1.2',
      image: 'https://picsum.photos/400/400?random=3',
      likes: 567,
      views: 3456,
      category: 'Cyberpunk'
    },
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
    },
    {
      id: '6',
      title: 'Ethereal Beings',
      creator: 'MysticAI',
      price: '0.7',
      image: 'https://picsum.photos/400/400?random=6',
      likes: 456,
      views: 1876,
      category: 'AI Art'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                NFT Marketplace
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover, collect, and trade unique AI-generated NFTs
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Search
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search NFTs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Categories
                    </label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                            selectedCategory === category.id
                              ? 'bg-primary/20 text-primary'
                              : 'hover:bg-accent text-muted-foreground'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{category.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {category.count}
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Price Range
                    </label>
                    <div className="flex space-x-2">
                      <Input placeholder="Min" />
                      <Input placeholder="Max" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    Showing {mockNFTs.length} of 1,234 NFTs
                  </span>
                  <Badge variant="secondary" className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* NFT Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {mockNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More NFTs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};