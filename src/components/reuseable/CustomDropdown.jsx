import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const CustomDropdown = React.memo(({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option",
  className = "",
  required = false 
}) => {
  const isDarker = className.includes('membership-dropdown');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [menuStyle, setMenuStyle] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        dropdownRef.current && !dropdownRef.current.contains(target) &&
        menuRef.current && !menuRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // position menu
      const rect = dropdownRef.current.getBoundingClientRect();
      setMenuStyle({ left: rect.left, top: rect.bottom + window.scrollY, width: rect.width });
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleWindowChange);
      window.addEventListener('scroll', handleWindowChange, true);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('resize', handleWindowChange);
        window.removeEventListener('scroll', handleWindowChange, true);
      };
    }
  }, [isOpen]);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  function handleWindowChange() {
    if (dropdownRef.current && isOpen) {
      const rect = dropdownRef.current.getBoundingClientRect();
      setMenuStyle({ left: rect.left, top: rect.bottom + window.scrollY, width: rect.width });
    }
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`font-body w-full px-4 py-3 border-2 border-white/30 rounded-xl focus:border-purple-500 focus:outline-none text-left flex justify-between items-center ${
          isDarker ? 'bg-white/20 text-gray-900' : 'bg-white/20 text-white'
        }`}
      >
        <span className={value ? (isDarker ? 'text-gray-900' : 'text-white') : 'text-gray-300'}>
          {value || placeholder}
        </span>
        <svg 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && menuStyle && createPortal(
        <div
          ref={menuRef}
          style={{ position: 'absolute', left: menuStyle.left, top: menuStyle.top, width: menuStyle.width, zIndex: 2147483647 }}
        >
          <div className={`backdrop-blur-lg border border-white/20 rounded-xl shadow-xl max-h-60 overflow-y-auto ${isDarker ? 'bg-black/90' : 'bg-black/70'}`}>
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full px-4 py-3 text-left transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl ${isDarker ? 'text-white hover:bg-white/20' : 'text-white hover:bg-white/20'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
});

export default CustomDropdown;