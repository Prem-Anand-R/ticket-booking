import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Online Ticket Booking",
    excerpt: "From paper tickets to mobile QR codes, how ticket booking has transformed over the years.",
    date: "April 15, 2023",
    author: "Jane Smith",
    category: "Industry Insights",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Top 10 Tips for Securing the Best Seats",
    excerpt: "Expert strategies to ensure you get the perfect seats for your next event.",
    date: "May 3, 2023",
    author: "Michael Johnson",
    category: "Tips & Tricks",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Psychology of Seat Selection",
    excerpt: "Understanding why people choose certain seats and what it says about their preferences.",
    date: "June 12, 2023",
    author: "Dr. Robert Chen",
    category: "Research",
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "How Event Venues Are Adapting to Digital Ticketing",
    excerpt: "The technological changes happening behind the scenes at major event venues.",
    date: "July 22, 2023",
    author: "Sarah Williams",
    category: "Technology",
    readTime: "6 min read"
  },
  {
    id: 5,
    title: "The Rise of Contactless Check-ins",
    excerpt: "How COVID-19 accelerated the adoption of touchless ticket verification methods.",
    date: "August 9, 2023",
    author: "Tom Davis",
    category: "Industry Trends",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Behind the Scenes: How Ticket Pricing Works",
    excerpt: "A deep dive into the factors that determine ticket prices for different events.",
    date: "September 17, 2023",
    author: "Elena Rodriguez",
    category: "Industry Insights",
    readTime: "9 min read"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Blog</h1>
        <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Insights, tips, and the latest news from the world of ticket booking.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">
                  {post.category} • {post.readTime}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="mt-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0">
                  Read more →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">Load More Articles</Button>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-center">Subscribe to Our Newsletter</CardTitle>
              <CardDescription className="text-center">
                Get the latest articles, tips, and industry insights delivered directly to your inbox.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-grow"
                />
                <Button>Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
