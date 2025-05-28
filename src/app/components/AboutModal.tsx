interface AboutModalProps {
  onBackToMenu: () => void;
}

export default function AboutModal({ onBackToMenu }: AboutModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-40">
      <div className="glassmorphism p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">About the Developers</h2>
        <p className="text-lg mb-4">
          This project was made with love for the partial completion of SOSC 3
          by the following developers:
        </p>
        <div className="flex gap-6 justify-center mb-4">
          {/* Kyle Vinuya */}
          <div className="relative w-72 h-128 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/kyle.jpg"
              alt="Kyle Vinuya"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent p-4">
              <span className="text-white font-semibold text-xl drop-shadow-md">
                Kyle Vinuya
              </span>
            </div>
          </div>
          {/* John Russel Ilagan */}
          <div className="relative w-72 h-128 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/john.jpg"
              alt="Russel Ilagan"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent p-4">
              <span className="text-white font-semibold text-xl drop-shadow-md">
                John Russel Ilagan
              </span>
            </div>
          </div>
          {/* Heather Bedonia */}
          <div className="relative w-72 h-128 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/heather.jpg"
              alt="Heather Bedonia"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/40 to-transparent p-4">
              <span className="text-white font-semibold text-xl drop-shadow-md">
                Heather Bedonia
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onBackToMenu}
          className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md"
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
