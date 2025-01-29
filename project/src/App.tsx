import React, { useMemo } from 'react';
import { Search, Bell, MessageCircle, Menu, ChevronDown, MoreHorizontal, Sparkles } from 'lucide-react';

const pins = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1606103920295-9a091573f160?w=600&h=800&fit=crop",
    title: "2025 vision board",
    user: { name: "", avatar: "" },
    type: "vision-board"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=800&fit=crop",
    title: "",
    user: { name: "ryan", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop" }
  },
  {
    image: "https://images.unsplash.com/photo-1522686131591-5e6b6264ab88?w=600&h=400&fit=crop",
    title: "Miniloc Island Resort",
    user: { name: "Expedia", avatar: "" },
    sponsored: true
  },
  {
    title: "Summer Fridays Lip Butter Balm for Hydration & Shine Brown Sugar",
    user: { name: "Sephora", avatar: "" },
    sponsored: true,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=800&fit=crop"
  },
  {
    title: "Class",
    user: { name: "Expedia", avatar: "" },
    sponsored: true,
    image: "https://images.unsplash.com/photo-1577896851905-dc99e1f6b6e7?w=600&h=800&fit=crop"
  },
  {
    title: "Repair damaged hair in just one use with Pantene's Miracle Rescue",
    user: { name: "Pantene", avatar: "" },
    sponsored: true,
    image: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=600&h=800&fit=crop"
  },
  {
    title: "Gold Luxury Bracelets Set",
    user: { name: "The Feelz", avatar: "" },
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop"
  },
  {
    title: "Maybe You Just Need A SNICKERS",
    user: { name: "SNICKERS", avatar: "" },
    sponsored: true,
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=600&h=800&fit=crop",
    badge: "Pinterest 2025 Trend"
  },
  {
    title: "Rhode toast",
    user: { name: "Scout", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop" },
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&h=800&fit=crop"
  },
  {
    title: "If you want it, work for it",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&h=800&fit=crop",
    user: { name: "", avatar: "" }
  },
  {
    title: "2025 vision board",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=800&fit=crop",
    user: { name: "", avatar: "" },
    type: "vision-board"
  },
  {
    title: "Numéro Neuf Mini - Textured Taupe",
    user: { name: "POLENE", avatar: "" },
    sponsored: true,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop"
  },
  {
    title: "Tylenol Extra Strength",
    user: { name: "Tylenol", avatar: "" },
    sponsored: true,
    badge: "Pinterest 2025 Trend",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&h=800&fit=crop"
  }
];

function App() {
  const feedSummary = useMemo(() => {
    const trendCount = pins.filter(pin => pin.badge?.includes('2025 Trend')).length;
    const sponsoredCount = pins.filter(pin => pin.sponsored).length;
    const categories = ['Vision Boards', 'Beauty', 'Travel', 'Fashion', 'Wellness'];
    
    return {
      trendCount,
      sponsoredCount,
      categories
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-4 py-3 flex items-center gap-2 border-b">
        <div className="flex items-center gap-2 flex-1">
          {/* Pinterest Logo */}
          <svg className="w-6 h-6 text-[#E60023] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.94-.2-2.4.04-3.44l1.4-5.96s-.35-.72-.35-1.78c0-1.67.97-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.39 2.56-5.39 5.2 0 1.03.4 2.13.89 2.73.1.11.11.21.08.32l-.33 1.37c-.06.22-.17.27-.4.16-1.5-.7-2.43-2.89-2.43-4.65 0-3.77 2.74-7.25 7.9-7.25 4.14 0 7.36 2.95 7.36 6.9 0 4.12-2.6 7.43-6.2 7.43-1.21 0-2.35-.63-2.74-1.37l-.75 2.85c-.27 1.04-1 2.35-1.49 3.15A12 12 0 1 0 12 0z"/>
          </svg>
          
          <button className="font-semibold">Home feed</button>
          <Menu className="h-5 w-5" />
        </div>

        {/* Center Navigation */}
        <div className="flex-1 flex justify-center gap-4">
          <button className="font-semibold">For you</button>
          <button className="text-gray-600">Explore</button>
        </div>

        {/* Right Navigation */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <MessageCircle className="h-5 w-5" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=faces"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 px-4">
        {/* AI Summary Card */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-[#e60023]/5 to-[#e60023]/10 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#e60023]" />
              <h2 className="font-semibold text-lg">Feed Insights</h2>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                Your feed features <span className="font-medium">{feedSummary.trendCount} trending Pinterest 2025</span> predictions 
                and content across {feedSummary.categories.join(', ')}.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {feedSummary.categories.map((category, i) => (
                  <span 
                    key={i}
                    className="bg-white/60 text-gray-800 text-xs px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <p className="text-xs text-gray-500">
                Including {feedSummary.sponsoredCount} sponsored recommendations tailored to your interests
              </p>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-5 gap-4 mx-auto">
          {pins.map((pin, i) => (
            <div key={i} className="break-inside-avoid mb-4 rounded-xl overflow-hidden">
              <div className="relative group">
                <img 
                  src={pin.image}
                  alt={pin.title}
                  className="w-full object-cover rounded-xl"
                />
                {pin.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                      {pin.badge}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                  <div className="absolute top-4 right-4">
                    <button className="bg-gray-200/90 hover:bg-gray-200 p-2 rounded-full">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button className="bg-[#E60023] text-white hover:bg-[#ad081b] px-4 py-2 rounded-full font-semibold">
                      Save
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-2">
                {pin.title && (
                  <p className="font-medium line-clamp-2">{pin.title}</p>
                )}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    {pin.user.avatar && (
                      <div className="w-6 h-6 rounded-full overflow-hidden">
                        <img 
                          src={pin.user.avatar}
                          alt={pin.user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <span className="text-sm text-gray-700">{pin.user.name}</span>
                  </div>
                  {pin.sponsored && (
                    <span className="text-xs text-gray-500">Sponsored</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;