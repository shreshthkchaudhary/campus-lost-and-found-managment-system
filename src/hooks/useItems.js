import { useState, useEffect } from 'react';
import { demoItems as initialMockItems } from '../data/items';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost/Campus_Lost_And_Found_Managment_System/api';

const isMixedContent = () => {
  if (typeof window === 'undefined') return false;
  return window.location.protocol === 'https:' && API_BASE_URL.startsWith('http:');
};

const getStoredMockItems = () => {
  try {
    const stored = localStorage.getItem('krmu_items');
    return stored ? JSON.parse(stored) : initialMockItems;
  } catch {
    return initialMockItems;
  }
};

export function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use a fallback mechanism: try API first, if it fails or mixed content, load mock
  const fetchItems = async () => {
    if (isMixedContent()) {
      setItems(getStoredMockItems());
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/items/read.php`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      
      // The API returns an empty array if no items found in DB
      if (Array.isArray(data) && data.length > 0) {
        setItems(data);
      } else {
        setItems(getStoredMockItems());
      }
    } catch (err) {
      console.warn("API not reachable, falling back to mock data.", err);
      setItems(getStoredMockItems());
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (newItemData) => {
    if (!isMixedContent()) {
      try {
        const response = await fetch(`${API_BASE_URL}/items/create.php`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newItemData)
        });
        
        if (response.ok) {
          await fetchItems();
          return { success: true };
        }
      } catch (err) {
        console.warn("API write failed, updating mock state for demo purposes.", err);
      }
    }
    
    // Simulate backend creation locally and persist to localStorage
    const simulatedItem = {
      ...newItemData,
      id: Date.now(),
      contactName: newItemData.contactName || 'Student / Staff',
      date: newItemData.date || new Date().toISOString()
    };
    setItems(prev => {
      const updated = [simulatedItem, ...prev];
      try {
        localStorage.setItem('krmu_items', JSON.stringify(updated));
      } catch (e) {
        console.warn("Could not save to localStorage", e);
      }
      return updated;
    });
    return { success: true, simulated: true };
  };

  return { items, loading, error, addItem, refreshItems: fetchItems };
}
