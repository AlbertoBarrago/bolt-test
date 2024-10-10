"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { YogaPosition } from '../types/YogaPosition';

interface YogaPositionListProps {
  positions: YogaPosition[];
}

export default function YogaPositionList({ positions }: YogaPositionListProps) {
  const [selectedPosition, setSelectedPosition] = useState<YogaPosition | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {positions.map((position) => (
        <motion.div
          key={position.id}
          className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSelectedPosition(position)}
        >
          <img src={position.imageUrl} alt={position.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{position.name}</h2>
            <p className="text-gray-600 line-clamp-3">{position.description}</p>
          </div>
        </motion.div>
      ))}
      {selectedPosition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPosition(null)}
        >
          <motion.div
            className="bg-white rounded-lg p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedPosition.name}</h2>
            <img src={selectedPosition.imageUrl} alt={selectedPosition.name} className="w-full h-64 object-cover mb-4 rounded" />
            <p className="text-gray-700 mb-4">{selectedPosition.description}</p>
            <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedPosition.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">{benefit}</li>
              ))}
            </ul>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedPosition(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}