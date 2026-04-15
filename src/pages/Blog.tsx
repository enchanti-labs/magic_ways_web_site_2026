import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import blogData from '@/assets/jsons/blog.json';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Todos', ...new Set(blogData.map(post => post.category))];

  const filteredPosts = blogData.filter(post => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden bg-zinc-900 rounded-b-[60px] md:rounded-b-[100px]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=2000" 
            alt="Blog Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-transparent to-zinc-900" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-5 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider">
            Historias y Aventuras
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
            Magic Ways <span className="text-primary italic">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Explora guías, consejos y relatos de los rincones más mágicos de México. 
            Tu próxima gran historia comienza aquí.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-10 relative z-20 pb-20">
        {/* Filters and Search */}
        <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-white/50 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full px-6 transition-smooth whitespace-nowrap ${
                  selectedCategory === category ? 'bg-primary text-white' : 'hover:border-primary hover:text-primary border-zinc-200'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-zinc-50 border border-zinc-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-smooth"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group">
              <Card className="h-full overflow-hidden border-0 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-smooth hover:translate-y-[-8px] bg-white flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <Badge className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-zinc-900 border-0 px-4 py-1.5 rounded-full font-bold text-xs uppercase shadow-lg">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      <span>{new Date(post.date).toLocaleDateString('es-MX', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-500 text-base mb-8 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                    <div className="flex items-center gap-3">
                      <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                      <div>
                        <p className="text-sm font-black text-zinc-900">{post.author.name}</p>
                        <p className="text-[10px] text-zinc-400 uppercase font-black tracking-tighter">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="bg-zinc-50 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-smooth">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] shadow-sm border border-zinc-100 mt-10">
            <h3 className="text-2xl font-black mb-2">No se encontraron artículos</h3>
            <p className="text-zinc-500">Intenta con otros términos de búsqueda o categorías.</p>
            <Button 
              variant="outline" 
              className="mt-6 rounded-full px-8"
              onClick={() => {setSelectedCategory('Todos'); setSearchQuery('');}}
            >
              Ver todos los artículos
            </Button>
          </div>
        )}
      </main>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;
