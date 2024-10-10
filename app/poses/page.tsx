"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { yogaPositions } from '../../data/yogaPositions';
import YogaPositionList from '../../components/YogaPositionList';

export default function PosesPage() {
  const [filter, setFilter] = useState('');

  const filteredPositions = yogaPositions.filter(position =>
    position.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Yoga Poses</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search poses..."
          className="w-full p-2 border border-gray-300 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <YogaPositionList positions={filteredPositions} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}