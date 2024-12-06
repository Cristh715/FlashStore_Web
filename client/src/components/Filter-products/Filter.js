import React, { useState, useEffect, useContext } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { ProductContext } from '../../contexts/ProductContext';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const { category, handleFilterChange } = useContext(ProductContext);
  const [filters, setFilters] = useState({
    marca: [],
    precio: [],
    tamano: [],
    ram: [],
    sistema_operativo: [],
    generacion: []
  });
  const [expanded, setExpanded] = useState(null);

  const filterOptionsByCategory = {
    default: [
      { id: 'marca', label: 'Marca', values: ['Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Motorola'] },
      { id: 'precio', label: 'Precio', values: ['S/ 0 - S/ 300', 'S/ 300 - S/ 600', 'S/ 600 - S/ 1000', 'S/ 1000 - S/ 2000', 'S/ 2000 - S/ 3000'] },
      { id: 'tamano', label: 'Tamaño de pantalla', values: ['5.0"', '5.0" - 6.0"', '6.0"'] },
      { id: 'ram', label: 'Memoria Ram', values: ['4GB', '4GB - 8GB', '8GB'] },
      { id: 'sistema_operativo', label: 'Sistema Operativo', values: ['Android', 'iOS'] }
    ],
    2: [ 
      { id: 'marca', label: 'Marca', values: ['Garmin', 'Samsung', 'Apple'] },
      { id: 'precio', label: 'Precio', values: ['S/ 0 - S/ 300', 'S/ 300 - S/ 600', 'S/ 600 - S/ 1000', 'Mayor a S/ 1000'] }
    ],
    3: [
      { id: 'marca', label: 'Marca', values: ['Amazon', 'Samsung', 'Apple'] },
      { id: 'precio', label: 'Precio', values: ['S/ 0 - S/ 300', 'S/ 300 - S/ 600', 'S/ 600 - S/ 1000', 'Mayor a S/ 1000'] }
    ]
  };

  const filterOptions = category ? filterOptionsByCategory[category] || filterOptionsByCategory.default : filterOptionsByCategory.default;

  useEffect(() => {
    handleFilterChange(filters);
  }, [filters, handleFilterChange]);

  const handleFilterChangeLocal = (filterType, value) => {
    setFilters((prevFilters) => {
      const currentFilters = prevFilters[filterType];
      if (currentFilters.includes(value)) {
        return {
          ...prevFilters,
          [filterType]: currentFilters.filter((item) => item !== value)
        };
      } else {
        return {
          ...prevFilters,
          [filterType]: [...currentFilters, value]
        };
      }
    });
  };

  const handleToggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleRemoveFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].filter((item) => item !== value)
    }));
  };

  return (
    <aside className="filter">
      <div className="dropdown">
        <div className="dropdown-title">
          Filtros<span className="filter-count">{Object.values(filters).flat().length}</span>
        </div>
        <div className="selected-filters">
          {Object.entries(filters).flatMap(([filterType, values]) =>
            values.map(value => (
              <div
                key={`${filterType}-${value}`}
                className="selected-filter"
                onClick={() => handleRemoveFilter(filterType, value)}
              >
                {value} <FaTimes className="remove-icon" />
              </div>
            ))
          )}
        </div>
        <ul className="dropdown-content">
          {filterOptions.map(option => (
            <li key={option.id}>
              <button
                className="accordion-header"
                onClick={() => handleToggleExpand(option.id)}
              >
                {option.label}
                <span className={`accordion-icon ${expanded === option.id ? 'expanded' : ''}`}><FaAngleDown /></span>
              </button>
              <div className={`accordion-content ${expanded === option.id ? 'show' : ''}`}>
                {option.values.map(value => (
                  <div key={value} className="filter-option">
                    <input
                      type="checkbox"
                      id={`${option.id}-${value}`}
                      checked={filters[option.id].includes(value)}
                      onClick={(e) => e.stopPropagation()}
                      onChange={() => handleFilterChangeLocal(option.id, value)}
                    />
                    <label htmlFor={`${option.id}-${value}`} className="filter-label">
                      {value}
                    </label>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
