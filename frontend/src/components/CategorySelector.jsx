// src/components/CategorySelector.jsx
import React from 'react';
import './CategorySelector.css';

const categories = [
  { name: 'History', icon: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
  { name: 'General', icon: 'https://cdn-icons-png.flaticon.com/512/2645/2645897.png' },
  { name: 'Aptitude', icon: 'https://cdn-icons-png.flaticon.com/512/992/992700.png' },
  { name: 'Technology', icon: 'https://cdn-icons-png.flaticon.com/512/681/681494.png' }
];

export default function CategorySelector({ onSelect }) {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="category-card"
          onClick={() => onSelect(cat.name)}
        >
          <img src={cat.icon} alt={cat.name} className="category-icon" />
          <span>{cat.name}</span>
        </div>
      ))}
    </div>
  );
}
