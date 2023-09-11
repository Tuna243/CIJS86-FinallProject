import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import { GlobalApiContext } from "../contexts/GlobalApiContext";
const GameDetail = () => {
  const { id } = useParams();
  const [currentGame, setCurrentGame] = useState({});
  const { gameList } = useContext(GlobalApiContext);
  useEffect(() => {
    if (gameList) {
      const currentGameId = gameList.filter((Game) => {
        return Game.id == id;
      })[0];
      setCurrentGame(currentGameId);
    }
    console.log(currentGame);
  }, [gameList]);
  
  if (gameList === undefined) {
    return <Loading/>;
  }
  return (
    <div>
      {
        <div className="relative">
          <div className="absolute flex gap-2 top-8 p-5 bg-gradient-to-t from-transparent to-slate-500  w-1/2 h-[85%] m-8 bg-center">
            <img
              src={currentGame.background_image}
              alt=" Loading..."
              className="h-[130px] w-[100px] border-solid-[3px] object-cover bg-relative "
            />
            <div className="relative">
              <h1 className="text-[2rem] text-white font-bold right-3">
                {currentGame.name}
              </h1>
              <p className="text-[0.8em] text-white">
                {" "}
                Released: {currentGame.released}
                {currentGame.name}{" "}
              </p>
            </div>
          </div>
          <img
            src={currentGame.background_image}
            alt=" Loading..."
            className="md:h-[720px] w-full object-cover bg-fixed z-3 "
          />
        </div>
      }
    </div>
  );
};

export default GameDetail;
