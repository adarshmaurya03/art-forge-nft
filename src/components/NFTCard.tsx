import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Zap, User } from 'lucide-react';

interface NFTCardProps {
  id: string;
  title: string;
  creator: string;
  price: string;
  image: string;
  likes: number;
  views: number;
  isLiked?: boolean;
  category?: string;
}

export const NFTCard = ({ 
  id, 
  title, 
  creator, 
  price, 
  image, 
  likes, 
  views, 
  isLiked = false, 
  category = "AI Art" 
}: NFTCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-nft transition-all duration-300 hover:scale-105 group overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            <Zap className="w-3 h-3 mr-1" />
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="bg-background/80 backdrop-blur-sm hover:bg-background/90 h-8 w-8 p-0"
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <User className="w-4 h-4 mr-2 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{creator}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {likes}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {views}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-muted-foreground">Price</span>
            <p className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
              {price} ETH
            </p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex space-x-2 w-full">
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
          <Button variant="nft" className="flex-1">
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};