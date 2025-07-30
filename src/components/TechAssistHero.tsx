export const TechAssistHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20"></div>
      <div className="relative container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-glow">
          Welcome to TechAssist
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          Your Personal Tech Desk
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-80">
          Facing technical issues? Select a problem below to get a detailed guide with solutions.
        </p>
      </div>
    </div>
  );
};