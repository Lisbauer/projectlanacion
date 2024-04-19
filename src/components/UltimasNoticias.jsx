import React from "react";

const UltimasNoticias = () => {
  return (
    <section className="bg-gray-100 flex items-center justify-center flex-wrap">
      <section className="min-h-screen p-10 flex justify-center flex-wrap">
        <div>
          <h1 className="text-center p-10 font-suecaslab1 text-3xl">
            ACTUALIDAD
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <a
              href="https://www.lanacion.com.ar/tema/dengue-tid12301/"
              target="blank"
              className="flex justify-center"
            >
              <article className="h-[320px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
                <img
                  className="h-[180px] w-full object-cover"
                  src="./images/dengue.jpg"
                  alt="Dengue"
                />
                <div className="flex gap-4 p-3">
                  <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                    En medio del brote histórico que vive Argentina y los países
                    de la región, miles de personas pudieron haber cursado la
                    infección sin saberlo.
                  </p>
                </div>
                <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
                <a href="#" class="text-center">
                  <p className="text-sm text-#757575 pt-3">Silvina Torres</p>
                </a>
              </article>
            </a>

            <a
              href="https://www.lanacion.com.ar/"
              target="blank"
              className="flex justify-center"
            >
              <article className="h-[320px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
                <img
                  className="h-[180px] w-full object-cover"
                  src="./images/vice.jpg"
                  alt="Victoria Villarruel"
                />
                <div className="flex gap-4 p-3">
                  <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                    <strong>Victoria Villarruel</strong> contra los senadores:
                    “Es perfectamente legal y no tengo herramienta alguna para
                    frenarlo”.
                  </p>
                </div>
                <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
                <a href="#" class="text-center ">
                  <p className="text-sm text-#757575 pt-3">Alejandro Gomez</p>
                </a>
              </article>
            </a>

            <a
              href="https://www.lanacion.com.ar/politica/estados-unidos-aprobo-la-venta-de-un-avion-basler-bt-67-a-la-argentina-por-us-143000000-nid18042024/"
              target="blank"
              className="flex justify-center"
            >
              <article className="h-[320px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
                <img
                  className="h-[180px] w-full object-cover"
                  src="./images/milei.jpg"
                  alt="Milei"
                />
                <div className="flex gap-4 p-3">
                  <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                    Estados Unidos enviará un subsidio de 40 millones de dólares
                    a la Argentina para reforzar la defensa y el equipamiento
                    militar del país.
                  </p>
                </div>
                <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
                <a href="#" class="text-center ">
                  <p className="text-sm text-#757575 pt-3">Alejandro Gomez</p>
                </a>
              </article>
            </a>

            <a
              href="https://www.lanacion.com.ar/economia/el-gobierno-ya-presento-la-cautelar-contra-las-prepagas-y-propuso-un-sistema-de-devolucion-del-nid17042024/"
              target="blank"
              className="flex justify-center"
            >
              <article className="h-[320px] w-[320px] overflow-hidden rounded-2xl bg-white shadow-sm duration-300 hover:shadow-grey">
                <img
                  className="h-[180px] w-full object-cover"
                  src="./images/prepagas.jpg"
                  alt="prepagas"
                />
                <div className="flex gap-4 p-3">
                  <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                    Duro comunicado del Gobierno nacional argentino a las
                    prepagas: “No vamos a permitir el abuso”
                  </p>
                </div>
                <span className="flex border-t-[1px] border-[#7474746d]  items-center justify-center"></span>
                <a href="#" class="text-center ">
                  <p className="text-sm text-#757575 pt-3">Martina Joshua</p>
                </a>
              </article>
            </a>
          </div>
        </div>
      </section>

      <section className="w-[600px]">
        <div className="py-3 z-10 shadow-xl shadow-white">
          <h2 className="group-date font-suecaslab1">ÚLTIMAS NOTICIAS</h2>
        </div>
        <div className="timeline">
          <div className="relative">
            <div className="dot"></div>
            <a
              href="https://www.lanacion.com.ar/politica/senado-como-se-gesto-el-aumento-de-dietas-con-el-que-casi-todos-estuvieron-de-acuerdo-nid18042024/"
              target="blank"
            >
              {" "}
              <div className="pl-10 ">
                <span className="timeline-date">18 de abril</span>
                <h3 className="timeline-title font-suecaslab1">Senado:</h3>
                <p className="text-grey-500 transition-colors duration-300 hover:text-gray-400">
                  Un aumento de dietas con el que “casi todos” estuvieron de
                  acuerdo.
                </p>
              </div>
            </a>
          </div>

          <div className="relative">
            <div className="dot"></div>
            <a
              href="https://www.lanacion.com.ar/politica/senado-esta-vez-victoria-villarruel-quedo-exceptuada-de-la-furia-de-milei-por-el-aumento-de-las-nid18042024/#:~:text=Quien%20qued%C3%B3%20exenta%20del%20enojo,contra%20de%20la%20postura%20presidencial."
              target="blank"
            >
              {" "}
              <div className="pl-10">
                <span className="timeline-date">18 de abril</span>
                <h3 className="timeline-title font-suecaslab1">Senado:</h3>
                <p className="text-grey-500 transition-colors duration-300 hover:text-gray-400">
                  Esta vez Victoria Villarruel quedó exceptuada de la furia de
                  Milei por el aumento de las dietas.
                </p>
              </div>
            </a>
          </div>

          <div className="relative">
            <div className="dot"></div>
            <a
              href="https://www.lanacion.com.ar/sociedad/empieza-a-peligrar-la-calidad-de-la-ensenanza-otra-universidad-nacional-alerta-sobre-el-impacto-del-nid18042024/"
              target="blank"
            >
              {" "}
              <div className="pl-10">
                <span className="timeline-date">18 de abril</span>
                <h3 className="timeline-title font-suecaslab1">
                  “Empieza a peligrar la calidad de la enseñanza”:
                </h3>
                <p className="text-grey-500 transition-colors duration-300 hover:text-gray-400">
                  Otra universidad nacional alerta sobre el impacto del recorte
                  presupuestario
                </p>
              </div>
            </a>
          </div>

          <div className="relative">
            <div className="dot"></div>
            <a
              href="https://www.lanacion.com.ar/deportes/futbol/manuel-neuer-su-gran-record-en-la-champions-league-y-un-particular-elogio-lo-pondria-a-a-la-altura-nid18042024/#:~:text=%E2%80%9CPondr%C3%ADa%20a%20Manuel%20Neuer%20a,con%20ambos%20pies%20es%20incre%C3%ADble."
              target="blank"
            >
              {" "}
              <div className="pl-10">
                <span className="timeline-date">18 de abril</span>
                <h3 className="timeline-title font-suecaslab1">Manuel Neuer</h3>
                <p className="text-grey-500 transition-colors duration-300 hover:text-gray-400">
                  Su gran récord en la Champions League y un particular elogio:
                  “Lo pondría a la altura de Lionel Messi”
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UltimasNoticias;
