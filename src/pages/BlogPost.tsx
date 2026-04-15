import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, 
  Link as LinkIcon, ArrowRight, Bookmark,
  ChevronRight, Sparkles, TrendingUp
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/sections/FooterSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import blogData from '@/assets/jsons/blog.json';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogData.find(p => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Artículo no encontrado</h1>
          <Button onClick={() => navigate('/blog')} className="rounded-full">
            Volver al Blog
          </Button>
        </div>
      </div>
    );
  }

  const latestPosts = blogData
    .filter(p => p.id !== post.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const relatedPosts = blogData
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar />

      {/* Article Hero - More Cinematic */}
      <header className="relative pt-32 pb-60 bg-zinc-900 rounded-b-[60px] md:rounded-b-[100px] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/80" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Link to="/blog">
            <Button variant="ghost" className="mb-10 text-white hover:text-primary hover:bg-white/5 rounded-full px-6 transition-smooth">
              <ArrowLeft size={18} className="mr-2" />
              Volver al Blog
            </Button>
          </Link>
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary text-white border-0 px-6 py-2 text-xs font-bold rounded-full uppercase tracking-[0.2em] shadow-xl">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-white mb-8 leading-[1.05] tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-300 text-sm md:text-lg">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full border border-primary" />
                <span className="font-semibold text-white">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>{new Date(post.date).toLocaleDateString('es-MX', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area with Sidebar */}
      <div className="container mx-auto px-4 -mt-32 relative z-20 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article Column */}
          <main className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-zinc-50 p-6 md:p-12 lg:p-16">
              
              {/* Highlights Box */}
              {post.highlights && (
                <div className="mb-12 bg-primary/5 rounded-3xl p-8 border border-primary/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="text-primary" size={24} />
                    <h3 className="text-xl font-black text-zinc-900 uppercase tracking-wider">Puntos Relevantes</h3>
                  </div>
                  <ul className="grid md:grid-cols-1 gap-4">
                    {post.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                          <ChevronRight size={14} />
                        </div>
                        <p className="text-zinc-700 font-medium text-lg leading-snug group-hover:text-primary transition-colors">{h}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="prose prose-zinc prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-3xl font-black mt-16 mb-8 text-zinc-900 flex items-center gap-4">
                        <span className="w-1.5 h-8 bg-primary rounded-full" />
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.match(/^\d\./)) {
                    return (
                      <div key={index} className="space-y-6 my-10">
                        {paragraph.split('\n').map((line, lIdx) => (
                          <div key={lIdx} className="bg-zinc-50 p-6 rounded-3xl border border-zinc-100 flex gap-6 items-center hover:bg-white hover:shadow-xl transition-smooth">
                            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-lg">
                              {line.split('.')[0]}
                            </div>
                            <p className="text-zinc-700 text-lg md:text-xl font-medium leading-tight">{line.substring(line.indexOf('.') + 1).trim()}</p>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-10 last:mb-0">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share and Tags */}
              <div className="mt-16 pt-10 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="px-4 py-2 border-zinc-200 text-zinc-500 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-smooth cursor-pointer">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-[#1877F2] hover:text-white transition-smooth border-zinc-200">
                    <Facebook size={18} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-[#1DA1F2] hover:text-white transition-smooth border-zinc-200">
                    <Twitter size={18} />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover:bg-primary hover:text-white transition-smooth border-zinc-200">
                    <LinkIcon size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
            
            {/* Author Sidebar Card */}
            <Card className="rounded-[2.5rem] border-0 shadow-xl bg-white overflow-hidden p-8">
              <div className="text-center">
                <img src={post.author.avatar} alt={post.author.name} className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-zinc-50 shadow-lg" />
                <h3 className="text-xl font-black mb-1">{post.author.name}</h3>
                <p className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-4">{post.author.role}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-1">
                  {post.author.description}
                </p>
              </div>
            </Card>

            {/* Latest Notes Sidebar */}
            <Card className="rounded-[2.5rem] border-0 shadow-xl bg-white overflow-hidden">
              <div className="p-8 pb-0 flex items-center gap-3">
                <TrendingUp className="text-primary shrink-0" size={20} />
                <h3 className="text-lg font-black uppercase tracking-widest text-zinc-900">Últimas Notas</h3>
              </div>
              <CardContent className="p-8 space-y-8">
                {latestPosts.map(lPost => (
                  <Link key={lPost.id} to={`/blog/${lPost.id}`} className="group block">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-zinc-100">
                        <img src={lPost.image} alt={lPost.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <Badge variant="ghost" className="p-0 text-[10px] text-primary font-black uppercase tracking-[0.1em] mb-1 group-hover:underline">
                          {lPost.category}
                        </Badge>
                        <h4 className="text-sm font-black text-zinc-900 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                          {lPost.title}
                        </h4>
                        <p className="text-[10px] text-zinc-400 font-bold mt-2 uppercase tracking-wide">
                          {new Date(lPost.date).toLocaleDateString('es-MX', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
                <Link to="/blog">
                  <Button variant="ghost" className="w-full rounded-2xl bg-zinc-50 text-zinc-500 font-bold hover:text-primary hover:bg-primary/5 transition-smooth mt-4">
                    Ver todo el blog
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Quick Actions Sticky Widget */}
            <div className="flex gap-4">
              <Button className="flex-grow rounded-2xl h-14 bg-zinc-900 text-white font-bold hover:bg-zinc-800 shadow-lg">
                <Bookmark className="mr-2" size={20} />
                Guardar
              </Button>
              <Button variant="outline" className="rounded-2xl h-14 w-14 border-zinc-200 hover:border-primary hover:text-primary transition-smooth">
                <Share2 size={24} />
              </Button>
            </div>

          </aside>

        </div>

        {/* Big Bottom CTA to keep exploring */}
        <section className="mt-32">
          <div className="bg-primary/5 rounded-[4rem] p-12 md:p-20 border border-primary/10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-8 max-w-2xl leading-tight">
              ¿Listo para vivir tu propia historia mágica?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/destinos">
                <Button size="lg" className="rounded-full px-12 py-7 text-lg bg-primary text-white hover:bg-primary/90 shadow-2xl">
                  Explorar Destinos
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="rounded-full px-12 py-7 text-lg border-primary text-primary hover:bg-primary hover:text-white transition-smooth">
                Descargar App
              </Button>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;
