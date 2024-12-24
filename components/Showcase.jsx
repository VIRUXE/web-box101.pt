import React from "react";

const Images = [
  { filename: "crxed9", caption: "CRX 16i16 - Swap B16", url: "https://www.instagram.com/p/CrxEd9" },
  { filename: "delsol", caption: "CRX Del Sol - Restauro Completo", url: "https://www.instagram.com/p/DelSol" },
  { filename: "eg6", caption: "Civic VTi - Aumento de Potência", url: "https://www.instagram.com/p/Eg6Vti" },
  { filename: "ej2matte", caption: "Civic Coupe\nPintura do Cofre de Motor, Aumento de Potência e mais...", url: "https://www.instagram.com/p/Ej2Mat" },
  { filename: "ekk20", caption: "Civic EK - Swap K20", url: "https://www.instagram.com/p/EkK20" },
  { filename: "ibizapd130", caption: "Ibiza 6L PD130 - Upgrade de Turbo", url: "https://www.instagram.com/p/IbizaPd" },
];

const Showcase = () => (
  <div id="showcase" className="bg-white py-12">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">Trabalhos Realizados</h2>
      <p className="text-center text-gray-600 mb-8">Siga-nos nas Redes Sociais!</p>
      <div className="showcase-grid w-full">
        {Images.map((image, index) => {
          const alt = image.caption.split("-")[0].trim();
          return (
            <a href={image.url} target="_blank" rel="noopener noreferrer" key={index}>
              <figure>
                <img src={`images/${image.filename}.heic`} alt={alt} loading="lazy" />
                <figcaption>
                  {image.caption.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </figcaption>
              </figure>
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default Showcase;