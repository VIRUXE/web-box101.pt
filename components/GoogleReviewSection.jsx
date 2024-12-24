import { Button } from '@/components/ui/button';

const GoogleReviewSection = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">A sua opinião é importante</h2>
          <p className="text-gray-600 mb-8">Deixe-nos uma avaliação no Google</p>
          <Button variant="default" className="transition-all hover:brightness-110" asChild>
            <a href="https://g.page/r/Cen3Frh-ojOqEBM/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 11.5a9 9 0 11-9-9 9 0 019 9zm-4 0h-5v5h-2v-5H8v-2h5V4h2v5h5z" />
              </svg>
              Avaliar no Google
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewSection;
