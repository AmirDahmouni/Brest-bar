

const Sidebar = () => {
  return (
    <div className="custom-scrollbar relative z-10 min-h-full flex-1 origin-left bg-bg text-white shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll lg:w-1/3">
      {/* First Block */}
      <div className="flex w-full justify-end px-4 py-2 lg:hidden">
        <button type="button" aria-label="close" className="bg-gray-secondary p-2 rounded-lg">
          <div className="h-6 w-6 rotate-180">
            <svg width="100%" height="100%" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="p-4 border-b border-grayColor">
        <h1 className="font-semibold mb-4 text-4xl font-bold">
          <span className='text-4xl font-bold'>Trouver le bar qu'il vous faut </span>
          <span className="gradient-text bg-clip-text text-transparent text-4xl font-bold">
            selon votre humeur
          </span>
        </h1>
      </div>
      {/* Divider */}
      <div className="border-b border-grayColor"></div>

      {/* Second Block */}
      <div className="p-4 border-b border-grayColor ">
        <h1 className="text-2xl font-semibold mb-6">Où boire à Brest ?</h1>
        <div className="flex items-center  space-x-6">
          <button type="button" aria-label="Cave" className="flex w-[30%] flex-col items-center gap-2 font-medium">
            <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#2c2c2c] text-4xl">🍷</div>
            <p className="transition-colors">Cave</p>
          </button>
          <button type="button" aria-label="Brasserie" className="flex w-[30%] flex-col items-center gap-2 font-medium">
            <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#2c2c2c] text-4xl">🍺</div>
            <p className="transition-colors">Brasserie</p>
          </button>
          <button type="button" aria-label="Bar" className="flex w-[30%] flex-col items-center gap-2 font-medium">
            <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#2c2c2c] text-4xl">🍹</div>
            <p className="transition-colors">Bar</p>
          </button>
        </div>

      </div>
      {/* Divider */}
      <div className="border-b border-grayColor"></div>

      {/* Third Block */}
      <div className="p-4">

        <div className="flex w-full flex-col gap-6 p-4 text-white">
          <div className=" flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Explorer</h2>
            <button type="button" className="gradient rounded-lg px-4 py-2 font-semibold">Filtrer ✍️</button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl bg-gray-secondary p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex w-4/5 flex-col">
                  <p className="font-bold uppercase text-violet">Bar </p>
                  <h2 className="text-2xl font-bold">La Javanaise Bar Brest</h2>
                  <p className="relative truncate text-violet">🏃‍♂️ <strong className="uppercase">a  km</strong> - 40 Quai de la Douane, 29200 Brest, France </p></div><button type="button" aria-label="show on map" className="aspect-square rounded-full bg-violet p-4">👁️ </button></div><div className="flex items-center gap-3"><div className="rounded-full px-4 font-semibold bg-sportif/30 text-sportif">Au chaud</div><div className="rounded-full px-4 font-semibold bg-sportif/30 text-sportif">✈️ Exotique</div></div></div><div className="flex flex-col gap-4 rounded-2xl bg-gray-secondary p-6 text-white"><div className="flex items-center justify-between"><div className="flex w-4/5 flex-col"><p className="font-bold uppercase text-violet">pas définie </p><h2 className="text-2xl font-bold">The Dubliners</h2><p className="relative truncate text-violet">🏃‍♂️ <strong className="uppercase">a  km</strong> - 28 Rue Mathieu Donnart, 29200 Brest, France </p></div><button type="button" aria-label="show on map" className="aspect-square rounded-full bg-violet p-4">👁️ </button></div><div className="flex items-center gap-3"></div></div><div className="flex flex-col gap-4 rounded-2xl bg-gray-secondary p-6 text-white"><div className="flex items-center justify-between"><div className="flex w-4/5 flex-col"><p className="font-bold uppercase text-violet">pas définie </p><h2 className="text-2xl font-bold">Pub Hamilton</h2><p className="relative truncate text-violet">🏃‍♂️ <strong className="uppercase">a  km</strong> - 2 Rue de la 2ème Db, 29200 Brest, France </p></div><button type="button" aria-label="show on map" className="aspect-square rounded-full bg-violet p-4">👁️ </button></div><div className="flex items-center gap-3"></div></div><div className="flex flex-col gap-4 rounded-2xl bg-gray-secondary p-6 text-white"><div className="flex items-center justify-between"><div className="flex w-4/5 flex-col"><p className="font-bold uppercase text-violet">pas définie </p><h2 className="text-2xl font-bold">L'Oustal à Brest, Bar à vins et tartines</h2><p className="relative truncate text-violet">🏃‍♂️ <strong className="uppercase">a  km</strong> - 29 Rue d'Aiguillon, 29200 Brest, France </p></div><button type="button" aria-label="show on map" className="aspect-square rounded-full bg-violet p-4">👁️ </button></div><div className="flex items-center gap-3"></div></div><div className="flex flex-col gap-4 rounded-2xl bg-gray-secondary p-6 text-white"><div className="flex items-center justify-between"><div className="flex w-4/5 flex-col"><p className="font-bold uppercase text-violet">Bar </p><h2 className="text-2xl font-bold">Oyster bar</h2><p className="relative truncate text-violet">🏃‍♂️ <strong className="uppercase">a  km</strong> - 2 Quai de la Douane, 29200 Brest, France </p></div><button type="button" aria-label="show on map" className="aspect-square rounded-full bg-violet p-4">👁️ </button></div><div className="flex items-center gap-3"></div></div></div><div className="flex w-full items-center justify-center">
            <button type="button" className="mx-auto w-fit rounded-lg bg-gray-secondary px-6 py-2">Plus</button></div></div>
      </div>
    </div >
  );
};

export default Sidebar