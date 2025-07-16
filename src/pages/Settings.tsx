import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useWallet } from '@/context/WalletContext';
import { LogOut, User, Shield, Bell, Globe, Palette } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const Settings = () => {
  const { disconnectWallet, isConnected } = useWallet();
  const { toast } = useToast();
  const [publicProfile, setPublicProfile] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [autoMint, setAutoMint] = useState(false);
  const [displayName, setDisplayName] = useState('AI Creator');

  const handleLogout = () => {
    disconnectWallet();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile settings have been saved",
    });
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-hero pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Settings
              </span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your account and platform preferences
            </p>
          </div>

          <div className="space-y-6">
            {/* Profile Settings */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input
                      id="displayName"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Enter your display name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="publicProfile"
                    checked={publicProfile}
                    onCheckedChange={setPublicProfile}
                  />
                  <Label htmlFor="publicProfile">Make profile public</Label>
                </div>
                <Button onClick={handleSaveProfile} variant="hero">
                  Save Profile
                </Button>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Connected Wallet</Label>
                    <p className="text-sm text-muted-foreground">
                      {isConnected ? 'Wallet connected' : 'No wallet connected'}
                    </p>
                  </div>
                  <Button variant="outline" disabled={!isConnected}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="notifications"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                  <Label htmlFor="notifications">Email notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="autoMint"
                    checked={autoMint}
                    onCheckedChange={setAutoMint}
                  />
                  <Label htmlFor="autoMint">Auto-mint successful generations</Label>
                </div>
              </CardContent>
            </Card>

            {/* Appearance */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Theme</Label>
                    <p className="text-sm text-muted-foreground">
                      Currently using dark theme
                    </p>
                  </div>
                  <Button variant="outline">Change Theme</Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Account Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleLogout}
                  variant="destructive"
                  className="w-full"
                  disabled={!isConnected}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};