import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Range } from 'rc-slider';


const Ranges = ({ min = 0, max = 5000, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([700, 3000]);

  useEffect(() => {
    // Update price range if min and max change
    setPriceRange([min, max]);
  }, [min, max]);

  const handleRangeChange = (value) => {
    setPriceRange(value);
    onPriceChange(value);
  };

  return (
    <div className="price-range-slider">
      <h3>Price Range Slider</h3>
      <Range
        min={min}
        max={max}
        value={priceRange}
        onChange={handleRangeChange}
        allowCross={false}
      />
      <div className="price-values">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

// PropTypes for validation
Ranges.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onPriceChange: PropTypes.func.isRequired,
};

export default Ranges;
