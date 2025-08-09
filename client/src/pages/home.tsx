import { useState } from "react";

interface GameCard {
  id: string;
  name: string;
  description: string;
  prizePool: string;
  prizeColor: string;
  imageUrl: string;
  formUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function Home() {
  const [gameCards] = useState<GameCard[]>([
    {
      id: 'fc25',
      name: 'FC25',
      description: 'Football Championship',
      prizePool: '$10,000 Pool',
      prizeColor: 'text-tournament-accent',
      imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
      formUrl: import.meta.env.VITE_FC25_FORM_URL || 'https://forms.google.com/fc25-registration',
      gradientFrom: 'from-blue-500/20',
      gradientTo: 'to-green-500/20'
    },
    {
      id: 'efootball',
      name: 'eFootball',
      description: 'Pro Evolution Soccer',
      prizePool: '$8,000 Pool',
      prizeColor: 'text-tournament-success',
      imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
      formUrl: import.meta.env.VITE_EFOOTBALL_FORM_URL || 'https://forms.google.com/efootball-registration',
      gradientFrom: 'from-green-500/20',
      gradientTo: 'to-blue-500/20'
    },
    {
      id: 'clash-royale',
      name: 'Clash Royale',
      description: 'Strategy Card Battle',
      prizePool: '$12,000 Pool',
      prizeColor: 'text-tournament-purple',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
      formUrl: import.meta.env.VITE_CLASH_ROYALE_FORM_URL || 'https://forms.google.com/clash-royale-registration',
      gradientFrom: 'from-purple-500/20',
      gradientTo: 'to-pink-500/20'
    },
    {
      id: 'pubg',
      name: 'PUBG',
      description: 'Battle Royale',
      prizePool: '$15,000 Pool',
      prizeColor: 'text-orange-400',
      imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
      formUrl: import.meta.env.VITE_PUBG_FORM_URL || 'https://forms.google.com/pubg-registration',
      gradientFrom: 'from-orange-500/20',
      gradientTo: 'to-red-500/20'
    },
    {
      id: 'free-fire',
      name: 'Free Fire',
      description: 'Survival Shooter',
      prizePool: '$5,000 Pool',
      prizeColor: 'text-red-400',
      imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400',
      formUrl: import.meta.env.VITE_FREE_FIRE_FORM_URL || 'https://forms.google.com/free-fire-registration',
      gradientFrom: 'from-red-500/20',
      gradientTo: 'to-yellow-500/20'
    }
  ]);

  const handleGameClick = (formUrl: string) => {
    window.open(formUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-inter bg-tournament-dark text-white overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&h=1380" 
          alt="Esports tournament arena background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-tournament-dark/90 via-tournament-dark/70 to-purple-900/20"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        
        {/* Header */}
        <header className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-tournament-accent to-tournament-success rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-black">EG</span>
                </div>
                <span className="text-xl font-bold">Elite Gaming</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('tournaments')} 
                  className="text-gray-300 hover:text-tournament-accent transition-colors"
                >
                  Tournaments
                </button>
                <button 
                  onClick={() => scrollToSection('rules')} 
                  className="text-gray-300 hover:text-tournament-accent transition-colors"
                >
                  Rules
                </button>
                <button 
                  onClick={() => scrollToSection('prizes')} 
                  className="text-gray-300 hover:text-tournament-accent transition-colors"
                >
                  Prizes
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-tournament-accent transition-colors"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tournament-accent via-white to-tournament-success bg-clip-text text-transparent animate-pulse-slow">
                ELITE GAMING
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                TOURNAMENT 2024
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Join the ultimate esports competition featuring your favorite games. 
                Compete for glory, prizes, and the chance to become a champion.
              </p>
            </div>

            {/* Tournament Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div className="bg-tournament-card/50 backdrop-blur-sm rounded-lg p-4 border border-tournament-accent/20">
                <div className="text-2xl font-bold text-tournament-accent">$50,000</div>
                <div className="text-sm text-gray-400">Total Prize Pool</div>
              </div>
              <div className="bg-tournament-card/50 backdrop-blur-sm rounded-lg p-4 border border-tournament-success/20">
                <div className="text-2xl font-bold text-tournament-success">1,200+</div>
                <div className="text-sm text-gray-400">Participants</div>
              </div>
              <div className="bg-tournament-card/50 backdrop-blur-sm rounded-lg p-4 border border-tournament-purple/20">
                <div className="text-2xl font-bold text-tournament-purple">5</div>
                <div className="text-sm text-gray-400">Games</div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Selection */}
        <section id="tournaments" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Choose Your Battle
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Select your game and register now. Each tournament has its own prize pool and competition format.
              </p>
            </div>

            {/* Game Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {gameCards.map((game) => (
                <div 
                  key={game.id}
                  className="game-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  onClick={() => handleGameClick(game.formUrl)}
                >
                  <div className="bg-tournament-card rounded-xl p-6 border border-tournament-accent/20 hover:border-tournament-accent/60 transition-all duration-300 hover:shadow-2xl hover:shadow-tournament-accent/20">
                    <div className={`aspect-square mb-4 rounded-lg overflow-hidden bg-gradient-to-br ${game.gradientFrom} ${game.gradientTo}`}>
                      <img 
                        src={game.imageUrl}
                        alt={`${game.name} Game`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-center mb-2">{game.name}</h4>
                    <p className="text-sm text-gray-400 text-center mb-4">{game.description}</p>
                    <div className="text-center">
                      <span className={`inline-block bg-tournament-accent/20 ${game.prizeColor} px-3 py-1 rounded-full text-xs font-medium`}>
                        {game.prizePool}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Registration CTA */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-300 mb-6">
                Registration closes in <span className="text-tournament-accent font-semibold">7 days</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => scrollToSection('rules')}
                  className="bg-gradient-to-r from-tournament-accent to-tournament-success hover:from-tournament-success hover:to-tournament-accent px-8 py-3 rounded-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-tournament-accent/30"
                >
                  View Tournament Rules
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border border-tournament-accent text-tournament-accent hover:bg-tournament-accent hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-tournament-card">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-tournament-accent to-tournament-success rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-black">EG</span>
                  </div>
                  <span className="text-lg font-bold">Elite Gaming Tournament</span>
                </div>
                <p className="text-gray-400 max-w-md">
                  The premier esports tournament platform bringing together the best players from around the world.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={() => scrollToSection('rules')} className="hover:text-tournament-accent transition-colors">Tournament Rules</button></li>
                  <li><button onClick={() => scrollToSection('prizes')} className="hover:text-tournament-accent transition-colors">Prize Distribution</button></li>
                  <li><button onClick={() => scrollToSection('tournaments')} className="hover:text-tournament-accent transition-colors">Schedule</button></li>
                  <li><button className="hover:text-tournament-accent transition-colors">Live Stream</button></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Support</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><button className="hover:text-tournament-accent transition-colors">Help Center</button></li>
                  <li><button className="hover:text-tournament-accent transition-colors">Contact Us</button></li>
                  <li><button className="hover:text-tournament-accent transition-colors">Discord</button></li>
                  <li><button className="hover:text-tournament-accent transition-colors">Terms of Service</button></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-tournament-card mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Elite Gaming Tournament. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
