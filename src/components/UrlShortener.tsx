import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Link, Lock, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShortenedLink {
  short_url: string;
  original_url: string;
  password_protected: boolean;
}

export const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [password, setPassword] = useState('');
  const [shortenedLink, setShortenedLink] = useState<ShortenedLink | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const shortCode = Math.random().toString(36).substring(2, 8);
      const mockResponse: ShortenedLink = {
        short_url: `https://smartlink.io/${shortCode}`,
        original_url: url,
        password_protected: !!password
      };

      setShortenedLink(mockResponse);
      toast({
        title: "Link shortened successfully!",
        description: password ? "Your link is password protected." : "Your link is ready to share.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to shorten URL. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Link copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleShorten} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="url" className="text-sm font-medium">
            Enter your long URL
          </Label>
          <Input
            id="url"
            type="url"
            placeholder="https://example.com/very/long/url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:shadow-soft"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Password Protection (Optional)
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password to protect your link"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 text-base transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:shadow-soft"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading || !url}
          className="w-full h-12 text-base font-medium bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-[1.02]"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Shortening...
            </div>
          ) : (
            <>
              <Link className="h-4 w-4 mr-2" />
              Shorten URL
            </>
          )}
        </Button>
      </form>

      {shortenedLink && (
        <Card className="border-0 shadow-card bg-gradient-to-br from-background to-muted/50 transition-all duration-500 animate-in slide-in-from-bottom-4">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Check className="h-4 w-4 text-secondary" />
              Link shortened successfully!
              {shortenedLink.password_protected && (
                <div className="flex items-center gap-1 ml-auto">
                  <Lock className="h-4 w-4 text-accent" />
                  <span className="text-accent font-medium">Password Protected</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-background border">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Your shortened link:</p>
                <p className="font-mono text-primary truncate">{shortenedLink.short_url}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(shortenedLink.short_url)}
                className="shrink-0 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <div className="text-xs text-muted-foreground">
              Original: <span className="text-foreground">{shortenedLink.original_url}</span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};