import React from "react";

const Cards = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex gap-3 justify-center items-center flex-wrap">
      <a href="https://www.ole.com.ar/futbol-internacional/mls/atento-messi-nuevas-reglas-estrena-mls-fin-semana_0_KKWEK2VUJk.html">
        <article className="md:h-[680px] md:w-[600px] rounded-2xl bg-white shadow-sm p-8 duration-300 hover:shadow-grey">
          <h2 className="text-xl font-suecaslab1 font-bold">
            Atento Messi: las nuevas reglas que estrena la MLS este fin de
            semana
          </h2>
          <p className="pt-7 text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
            La{" "}
            <a href="#">
              {" "}
              <strong>Major League Soccer</strong>
            </a>{" "}
            (MLS) apunta a convertirse en una liga cada vez más atractiva tanto
            para los futbolistas como para los espectadores. Por eso, a partir
            de este fin de semana, los partidos adoptarán nuevas reglas de
            juego, con el objetivo de hacer más dinámicos los encuentros y
            reducir al máximo los tiempos muertos.¿Cuáles serán los cambios?
          </p>
          <a href="#">
            <p className="my-3 text-lg font-suecaslab1">Enterate aca</p>
          </a>
          <a href="#" target="blank">
            <p className="text-xs text-#757575 pb-2">Carolina Porretti</p>
          </a>
          <img src="./images/messi.jpg" alt="Lionel Messi" />
        </article>
      </a>

      <div className="flex flex-col gap-3">
        <a
          href="https://www.marca.com/futbol/conference-league/2024/04/18/66217af4268e3ee17e8b456d.html"
          target="blank"
          className="flex justify-center"
        >
          <article className="md:h-[340px] md:w-[400px] rounded-2xl bg-white shadow-sm flex flex-col justify-center items-center p-6 duration-300 hover:shadow-grey">
            <img src="./images/dibu.jpg" alt="dibu martinez" />
            <div className="p-2">
              <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                El show del <strong>Dibu</strong> en los penaltis: para dos, ve
                la (segunda) amarilla, clasifica al Villa y se pega un
                bailecito.
              </p>
            </div>
            <a href="#" target="blank">
              <p className="text-xs text-#757575 pt-2">Carolina Porretti</p>
            </a>
          </article>
        </a>

        <a
          href="https://elpais.com/deportes/futbol/2024-04-18/por-que-lunin-no-se-tiro-en-el-penalti-de-bernardo-silva-y-cambio-la-tanda-el-gol-de-rdt-que-le-convencio-de-aguantar.html"
          target="blank"
          className="flex justify-center"
        >
          <article className="md:h-[340px] md:w-[400px] rounded-2xl bg-white shadow-sm flex flex-col justify-center items-center p-6 duration-300 hover:shadow-grey">
            <img src="./images/lunin.png" alt="Lunin" />
            <div className="p-2">
              <p className="text-#757575 text-xs sm:text-sm md:text-sm lg:text-sm">
                Por qué <strong>Lunin</strong> no se tiró en el penalti de
                Bernardo Silva y cambió la tanda: el gol de RDT que le convenció
                de aguantar
              </p>
            </div>
            <a href="#" target="blank">
              <p className="text-xs text-#757575 pt-2">Carolina Porretti</p>
            </a>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Cards;
