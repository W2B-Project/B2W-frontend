
function Model({ onClose, children }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-xl w-1/3 relative h-fit overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute text-lg top-7 right-7 text-gray-500 transition-all hover:text-gray-600"
                    onClick={onClose}
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
}

export default Model;
