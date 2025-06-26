import Image from 'next/image';

const newsArticles = [
  {
    title: 'Void Announces Upcoming Valorant Team',
    date: '2025-06-01',
    image: '/teams/valorant.png',
    description: 'We are thrilled to announce our new Valorant team, featuring some of the most talented players in the region. Get ready for an exciting season ahead!',
    category: 'Valorant',
  },
  {
    title: 'Void Updates Assets',
    date: '2025-06-01',
    image: '/logo.png',
    description: 'Void Esports has updated its branding assets, including a new logo and team colors. Check out our updated look!',
    category: 'Organization',
  },
  {
    title: 'Void Website Released',
    date: '2025-06-01',
    image: '/logo.png',
    description: 'We are excited to announce the launch of our new website, designed to provide a better experience for our fans and community.',
    category: 'Organization',
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20 min-h-screen bg-[#0F0F0F]">
      <div className="void-container py-12">
        <h1 className="text-4xl font-bold mb-12 gradient-text text-center">Latest News</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div key={article.title} className="void-card group cursor-pointer">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{article.date}</span>
                  <span className="px-2 py-1 bg-[#8A2BE2]/20 rounded-full text-[#8A2BE2]">
                    {article.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold group-hover:text-[#8A2BE2] transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-gray-400 line-clamp-3">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
