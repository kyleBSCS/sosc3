interface AboutModalProps {
  onBackToMenu: () => void;
}

export default function AboutModal({ onBackToMenu }: AboutModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-40">
      <div className="glassmorphism p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">About the Developers</h2>
        <p className="text-lg mb-4">
          This is a project by the following developers:
        </p>
        <ul className="list-disc pl-5">
          <li>John Doe</li>
          <li>Jane Smith</li>
          <li>Jim Beam</li>
        </ul>
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
