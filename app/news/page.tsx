"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsArticles } from '../../data/newsArticles';

export default function NewsPage() {
  const [filter, setFilter] = useState('');

  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(filter.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Yoga News</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search news..."
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
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <p className="text-sm text-gray-500">Published on: {article.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}