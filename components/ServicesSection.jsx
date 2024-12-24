import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ServiceCard = ({ title, description, features }) => (
    <Card className="h-full flex flex-col bg-white/50 backdrop-blur transition-all duration-300 hover:shadow-lg">
        <CardHeader className="pb-4">
            <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 pt-0">
            <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
            <div className="flex-1 flex flex-col justify-between space-y-2">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="text-sm text-gray-600 border-b border-gray-200 pb-2 pl-2 last:border-b-0"
                    >
                        {feature}
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

const ServicesSection = () => (
    <div id="servicos" className="bg-gray-50 py-12 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Os Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    title="Performance Honda"
                    description="Melhorias e modificações personalizadas para o seu Honda"
                    features={['Programação', 'Escapes', 'Kits Turbos e Compressores', 'Preparação para Track Days', 'Geometria de Suspensão', 'Swaps']}
                />
                <ServiceCard
                    title="Performance Gasóleo"
                    description="Especialistas em optimização de motores diesel"
                    features={['Reprogramação', 'Soluções para Filtros de Particulas', 'Aplicação de Turbos', 'Aplicação de Injetores']}
                />
                <ServiceCard
                    title="Reparação Geral"
                    description="Manutenção e reparação multimarca"
                    features={['Revisão Completa', 'Diagnóstico Eletrónico', 'Suspensão e Direção', 'Travões e Embraiagens', 'Ar Condicionado']}
                />
            </div>
        </div>
    </div>
);

export default ServicesSection;
