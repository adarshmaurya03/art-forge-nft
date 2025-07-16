import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Wand2, Download, Share2, Settings, Zap, Upload, X } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export const CreateAI = () => {
  const [prompt, setPrompt] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() && !uploadedFile) return;
    
    setIsGenerating(true);
    // Simulate AI generation with both text prompt and uploaded file
    setTimeout(() => {
      setGeneratedImage('https://picsum.photos/512/512?random=' + Math.random());
      setIsGenerating(false);
    }, 3000);
  };

  const handleMint = async () => {
    if (!generatedImage) return;
    
    setIsMinting(true);
    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false);
      // Show success message
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const isValidType = file.type.startsWith('image/') || file.type.startsWith('video/');
      if (!isValidType) {
        alert('Please upload an image or video file');
        return;
      }
      
      setUploadedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setFilePreview(null);
  };

  const presetPrompts = [
    "Futuristic cyberpunk city with neon lights",
    "Abstract digital art with vibrant colors",
    "Mystical fantasy landscape with floating islands",
    "Minimalist geometric patterns in gradient",
    "Surreal portrait with dreamlike elements"
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Create AI NFT
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into unique digital art using AI, then mint them as NFTs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wand2 className="w-5 h-5 mr-2" />
                  AI Art Generator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Describe your artwork
                  </label>
                  <Textarea
                    placeholder="Enter a detailed description of the artwork you want to create..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-32 resize-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Quick Prompts
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {presetPrompts.map((preset, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => setPrompt(preset)}
                      >
                        {preset}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Upload Image/Video (Optional)
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <label className="cursor-pointer">
                          <Upload className="w-4 h-4 mr-2" />
                          Upload File
                          <input
                            type="file"
                            accept="image/*,video/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                      </Button>
                    </div>
                    
                    {filePreview && (
                      <div className="relative">
                        <div className="border border-border/50 rounded-lg p-3 bg-muted/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">
                              {uploadedFile?.name}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={removeFile}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="aspect-video bg-muted rounded overflow-hidden">
                            {uploadedFile?.type.startsWith('image/') ? (
                              <img 
                                src={filePreview} 
                                alt="Uploaded file" 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <video 
                                src={filePreview} 
                                className="w-full h-full object-cover"
                                controls
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    variant="hero" 
                    onClick={handleGenerate}
                    disabled={(!prompt.trim() && !uploadedFile) || isGenerating}
                    className="flex-1"
                  >
                    {isGenerating ? (
                      <>
                        <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate Art
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Generated Artwork
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  {generatedImage ? (
                    <img 
                      src={generatedImage} 
                      alt="Generated artwork" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <Sparkles className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        Your AI-generated artwork will appear here
                      </p>
                    </div>
                  )}
                </div>

                {generatedImage && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="NFT Title" />
                      <Input placeholder="Price (ETH)" />
                    </div>
                    <Textarea placeholder="Description (optional)" />
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                    <Button 
                      variant="mint" 
                      onClick={handleMint}
                      disabled={isMinting}
                      className="w-full"
                      size="lg"
                    >
                      {isMinting ? (
                        <>
                          <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                          Minting NFT...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5 mr-2" />
                          Mint as NFT
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};