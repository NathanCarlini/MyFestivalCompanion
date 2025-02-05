"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Map from "./components/Map";
import MapComponent from "./components/Map";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [Fest, setFest] = useState([]);
  const [Cat, setCat] = useState([]);
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const handleMapInstance = (instance: L.Map) => {
    setMapInstance(instance);
  };
  useEffect(() => {
    const getFestivals = async () => {
      const resStats = await fetch(`/api/getfestivalsmap`, {
        method: "GET",
      });
      let dataFestivals = await resStats.json();
      setFest(dataFestivals);
    };
    const getCategories = async () => {
      const resStats = await fetch(`/api/getcategories`, {
        method: "GET",
      });
      let dataFestivals = await resStats.json();
      setCat(dataFestivals);
      setLoading(false);
    };
    getFestivals(), getCategories();
  }, []);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {/* <Header /> */}
      <main className="bg-white text-black flex flex-col items-center justify-center h-full">
        <div>
          <div className="bg-black">
            <div className="bg-MachineHead h-[70vh] w-screen flex flex-col justify-center items-center bg-no-repeat bg-cover">
              <h1 className="font-black text-[5rem] text-white">
                Find your festival.
              </h1>
              <h1 className="font-black text-[4.5rem] text-white">
                Anywhere, any time.
              </h1>
              {/* <img src="/assets/teenyicons_down-solid.png"/> */}
            </div>
          </div>
          <div>
            <p className="font-medium text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              voluptatibus culpa odit laboriosam quidem, dignissimos dolor ut
              nisi fugit exercitationem voluptate nemo beatae saepe quisquam
              commodi. Quam ad explicabo ex.
            </p>
          </div>
        </div>
        <div className="w-[60vw] text-center flex flex-col gap-5 my-[10vh]">
          <h2 className="font-bold text-3xl text-ThirdColor">
            Accéder aux catégories
          </h2>
          <div className="flex flex-row gap-3 flex-wrap grow w-full max-h-full">
            {Cat != null
              ? Cat.map((element, index) => (
                  <div
                    key={index}
                    className={`basis-1/4 grow rounded-lg flex flex-row justify-center items-center bg-blue-700 bg-cover h-[10vh]`}
                  >
                    {/* <h3 className="font-semibold text-white">{element.name}</h3> */}
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="map h-[80vh] w-full flex flex-col justify-center items-center">
          <nav className="w-[90%] h-10vh flex flex-row justify-between items-start p-4 border border-stone-500">
            <img
              src="/assets/magnifying-glass.png"
              className="h-iconSize aspect-square"
            />
          </nav>
          {/*research zone*/}
          <nav className=""> </nav> {/*filter zone*/}
          <div className="w-[90vw] h-[25vh] border border-blue-500 ">
            <MapComponent onMapInitialized={handleMapInstance} />
            {mapInstance && (
              <p>
                Carte initialisée ! Vous pouvez maintenant interagir avec
                l'instance.
              </p>
            )}
          </div>
          {/*map zone*/}
        </div>
      </main>
    </>
  );
}
