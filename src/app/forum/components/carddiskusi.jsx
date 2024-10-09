const CardDiskusi = () => {
  return (
    <main className="py-5 space-y-3">
      <div className="w-full border rounded-md p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <h1 className="font-semibold">Warga RW 01</h1>
        </div>
        <div className="badge bg-blue-500 text-white">Warga RW 01</div>
      </div>
      <div className="w-full border rounded-md p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <h1 className="font-semibold">Warga RW 18</h1>
        </div>
        <div className="badge bg-red-500 text-white">Warga RW 18</div>
      </div>
      <div className="w-full border rounded-md p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          <h1 className="font-semibold">Warga RW 22</h1>
        </div>
        <div className="badge bg-purple-700 text-white">Warga RW 22</div>
      </div>
    </main>
  );
};
export default CardDiskusi;
