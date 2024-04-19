import React from "react";

const Cards = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-10 flex justify-center flex-wrap">
      <div>
        <h1 className="text-center p-10 font-suecaslab1 text-xl">
          NOTICIAS DEL ESPECTACULO
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <a
            href="https://www.lanacion.com.ar/"
            target="blank"
            className="flex justify-center"
          >
            <article className="h-[370px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
              <img
                className="h-[180px] w-full object-cover"
                src="./images/lali.png"
                alt="Lali"
              />
              <div className="flex gap-4 p-3">
                <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                  Siempre que se trata de moda y looks,{" "}
                  <strong>Lali Espósito</strong> es primicia. La actriz devenida
                  en cantante reapareció en sus redes sociales y volvió a
                  sorprender a sus poco más de 12 millones de seguidores de
                  Instagram con un look de alto impacto.
                </p>
              </div>
              <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
              <a href="#" class="text-center ">
                <p className="text-sm text-#757575 pt-2">Silvina Torres</p>
              </a>
            </article>
          </a>

          <a
            href="https://www.lanacion.com.ar/"
            target="blank"
            className="flex justify-center"
          >
            <article className="h-[370px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
              <img
                className="h-[180px] w-full object-cover"
                src="./images/emilia.jpg"
                alt="Emilia Mernes"
              />
              <div className="flex gap-4 p-3">
                <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                  El homenaje de <strong>Emilia Mernes</strong> a{" "}
                  <strong>Rihanna</strong>: desde el maquillaje hasta una
                  canción. <br />
                  La cantante argentina se inspiró en la superestrella del pop y
                  hasta le dedicó una canción. Su maquilladora, Juicy Make up,
                  mostró un look que Rihanna usó en 2017.
                </p>
              </div>
              <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
              <a href="#" class="text-center ">
                <p className="text-sm text-#757575 pt-2">Alejandro Gomez</p>
              </a>
            </article>
          </a>

          <a
            href="https://www.lanacion.com.ar/"
            target="blank"
            className="flex justify-center"
          >
            <article className="h-[370px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
              <img
                className="h-[180px] w-full object-cover"
                src="./images/depaul.png"
                alt="Rodrigo De Paul"
              />
              <div className="flex gap-4 p-3">
                <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                  Rodrigo De Paul salió a bancar a Tini Stoessel. Unas horas
                  después del lanzamiento, el futbolista, se refirió al
                  lanzamiento de la artista y utilizó su cuenta oficial de
                  Instagram para compartir un sentido descargo que no cayó nada
                  bien a la familia de Camila Homs.
                </p>
              </div>
              <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
              <a href="#" class="text-center ">
                <p className="text-sm text-#757575 pt-2">Alejandro Gomez</p>
              </a>
            </article>
          </a>

          <a
            href="https://www.lanacion.com.ar/"
            target="blank"
            className="flex justify-center"
          >
            <article className="h-[370px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
              <img
                className="h-[180px] w-full object-cover"
                src="./images/trueno.png"
                alt="cantante y rapero trueno"
              />
              <div className="flex gap-4 p-3">
                <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                  <strong>
                    Trueno: "No sé si me puse más nervioso con el Gardel de Oro
                    o cuando saludé a Riquelme"
                  </strong>
                  . <br />
                  Este fin de semana Boca ganó 2-0 contra Belgrano y hubo una
                  foto que copó las redes sociales más allá del plano
                  futbolístico.
                </p>
              </div>
              <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
              <a href="#" class="text-center ">
                <p className="text-sm text-#757575 pt-2">Martina Joshua</p>
              </a>
            </article>
          </a>

          <a
            href="https://www.lanacion.com.ar/"
            target="blank"
            className="flex justify-center"
          >
            <article className="h-[370px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
              <img
                className="h-[180px] w-full object-cover"
                src="./images/tini.jpg"
                alt="Tini Stoessel"
              />
              <div className="flex gap-4 p-3">
                <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                  <strong>Tini Stoessel</strong> anunció la presentación en vivo
                  de su nuevo álbum en Buenos Aires: “Va a ser íntima, compleja,
                  muy introspectiva".
                  <br />
                  La cantante dará tres shows en torno a Un mechón de pelo, su
                  quinto disco de estudio, que publicó el pasado 11 de abril.”
                </p>
              </div>
              <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
              <a href="#" class="text-center ">
                <p className="text-sm text-#757575 pt-2">Carolina Porretti</p>
              </a>
            </article>
          </a>

          <a
            href="https://www.lanacion.com.ar/"
            target="blank"
            className="flex justify-center"
          >
            <article className="h-[370px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
              <img
                className="h-[180px] w-full object-cover"
                src="./images/nicki.png"
                alt="Nicki Nicole"
              />
              <div className="flex gap-4 p-3">
                <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                  El contundente mensaje de <strong>Nicki Nicole</strong> tras
                  su escandalosa separación de <strong>Peso Pluma</strong>: “El
                  día que me fui”.
                  <br />
                  La cantante argentina reapareció en Instagram con un posteo
                  que muchos consideran un “palito” a su exnovio.
                </p>
              </div>
              <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
              <a href="#" class="text-center ">
                <p className="text-sm text-#757575 pt-2">Carolina Porretti</p>
              </a>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cards;
