import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Notícia Principal */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6">
          <div className="relative h-[400px]">
            <Image
              src="/globe.svg"
              alt="Notícia em destaque"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="space-y-4">
            <div className="text-sm text-blue-600 font-medium">
              Opinião Pública
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Governo Lula segue mais rejeitado por evangélicos e sulistas, diz pesquisa
            </h1>
            <p className="text-gray-600">
              Desaprovação do governo Lula passa de 66% no Paraná; aponta pesquisa
            </p>
          </div>
        </div>
      </div>

      {/* Grade de Notícias */}
      <div className="grid md:grid-cols-4 gap-6">
        {/* Notícia 1 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/globe.svg"
              alt="Frio chegou"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-blue-600 font-medium mb-2">
              Frio chegou
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Mais de 10 cidades do Paraná registram menor temperatura do ano; veja lista
            </h2>
          </div>
        </div>

        {/* Notícia 2 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/globe.svg"
              alt="Pouso de Emergência"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-blue-600 font-medium mb-2">
              Pouso de Emergência
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              VÍDEO: Avião faz pouso forçado na BR-101 e quase atinge caminhão
            </h2>
          </div>
        </div>

        {/* Notícia 3 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/globe.svg"
              alt="Exclusivo!"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-blue-600 font-medium mb-2">
              Exclusivo!
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Bolsonaro diz ter apoio para aprovar PL da anistia e afirma que seu vice será do nordeste para concorrer em 2026
            </h2>
          </div>
        </div>

        {/* Notícia 4 */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-48">
            <Image
              src="/globe.svg"
              alt="Vai começar!"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-blue-600 font-medium mb-2">
              Vai começar!
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              AO VIVO: Coritiba x Vila Nova pela 1ª rodada da Série B
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
