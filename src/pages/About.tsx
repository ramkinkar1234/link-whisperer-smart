import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Github, 
  Linkedin, 
  FileText, 
  Code2, 
  Database, 
  Server,
  Zap,
  Shield,
  Globe
} from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'AWS Lambda', icon: Zap, description: 'Serverless compute functions' },
    { name: 'API Gateway', icon: Globe, description: 'RESTful API management' },
    { name: 'DynamoDB', icon: Database, description: 'NoSQL database storage' },
    { name: 'Python', icon: Code2, description: 'Backend logic & processing' },
    { name: 'Terraform', icon: Cloud, description: 'Infrastructure as Code' },
    { name: 'GitHub Actions', icon: Github, description: 'CI/CD automation' },
    { name: 'Lovable UI', icon: Shield, description: 'Modern React frontend' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/2 to-transparent"></div>
        
        <div className="container relative px-4 max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border">
                <Cloud className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Cloud & DevOps Engineer</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">SmartLink</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A modern link shortening service built as a portfolio project to showcase
                cloud architecture and full-stack development skills.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                <Github className="h-5 w-5 mr-2" />
                View GitHub Repo
              </Button>
              <Button variant="outline" size="lg" className="transition-all duration-300 transform hover:scale-105">
                <FileText className="h-5 w-5 mr-2" />
                View Resume
              </Button>
              <Button variant="outline" size="lg" className="transition-all duration-300 transform hover:scale-105">
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Project Overview
            </h2>
            <p className="text-lg text-muted-foreground">
              SmartLink demonstrates modern cloud architecture and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-card bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-glow hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Architecture</h3>
                  <p className="text-muted-foreground">
                    Built on AWS serverless architecture with Lambda functions, 
                    API Gateway, and DynamoDB for scalable, cost-effective operation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-glow hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Security</h3>
                  <p className="text-muted-foreground">
                    Implements optional password protection, secure URL validation,
                    and follows AWS security best practices for data protection.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern tools and services for cloud-native development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <Card 
                key={tech.name} 
                className="border-0 shadow-card bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-glow hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto flex items-center justify-center">
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interested in discussing cloud architecture, DevOps practices, or potential collaborations? 
                I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                <Github className="h-5 w-5 mr-2" />
                View More Projects
              </Button>
              <Button variant="outline" size="lg" className="transition-all duration-300 transform hover:scale-105">
                <Linkedin className="h-5 w-5 mr-2" />
                Professional Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;