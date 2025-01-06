import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('productData');
        if (storedData) {
          setData(JSON.parse(storedData));
        } else {
          setData([
            {
              categoryId: '1',
              categoryName: 'Hot Beverages',
              items: [
                {
                  productId: '1',
                  categoryId: '1',
                  productName: 'Classic Tea',
                  imageUrl: 'https://via.placeholder.com/200',
                  count: 10,
                  price: 15
                },
                {
                  productId: '2',
                  categoryId: '1',
                  productName: 'Elachi Tea',
                  imageUrl: 'https://via.placeholder.com/200//FF0000',
                  count: 10,
                  price: 15
                },
                {
                  productId: '3',
                  categoryId: '1',
                  productName: 'Ginger Tea',
                  imageUrl: 'https://via.placeholder.com/200',
                  count: 10,
                  price: 20
                },
                {
                  productId: '4',
                  categoryId: '1',
                  productName: 'Honey Tea',
                  imageUrl: 'https://via.placeholder.com/200//FF0000',
                  count: 10,
                  price: 15
                }
          
              ]
            },
            {
              categoryId: '2',
              categoryName: 'Cold Beverages',
              items: [
                {
                  productId: '5',
                  categoryId: '2',
                  productName: 'Cold Boost',
                  imageUrl: 'https://via.placeholder.com/200',
                  price: 50
                },
                {
                  productId: '6',
                  categoryId: '2',
                  productName: 'Cold Coffee',
                  imageUrl: 'https://via.placeholder.com/200//FF0000',
                  price: 50
                },
                {
                  productId: '7',
                  categoryId: '2',
                  productName: 'Cold Bourn',
                  imageUrl: 'https://via.placeholder.com/200',
                  price: 50
                },
                {
                  productId: '8',
                  categoryId: '2',
                  productName: 'Cold Horlicks',
                  imageUrl: 'https://via.placeholder.com/200//FF0000',
                  price: 50
                }
          
              ]
            }
            // {
            //   categoryId: '3',
            //   categoryName: 'Snacks',
            //   items: [
            //     {
            //       productId: '9',
            //       productName: 'Puffs',
            //       imageUrl: 'https://via.placeholder.com/200',
            //       price: 50
            //     },
            //     {
            //       productId: '10',
            //       productName: 'Biscuit',
            //       imageUrl: 'https://via.placeholder.com/200//FF0000',
            //       price: 50
            //     },
            //     {
            //       productId: '11',
            //       productName: 'Samosa',
            //       imageUrl: 'https://via.placeholder.com/200',
            //       price: 50
            //     }
          
            //   ]
            // }
          ]);
        }
      } catch (error) {
        console.error('Failed to load data from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  // Save data to AsyncStorage whenever it changes
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem('productData', JSON.stringify(data));
      } catch (error) {
        console.error('Failed to save data to AsyncStorage:', error);
      }
    };

    if (data.length > 0) saveData();
  }, [data]); // Trigger save when data changes

  const updateData = (categoryId, productId, newCount) => {
    setData((prevData) =>
      prevData.map((category) =>
        category.categoryId === categoryId
          ? {
              ...category,
              items: category.items.map((item) =>
                item.productId === productId
                  ? { ...item, count: newCount }
                  : item
              ),
            }
          : category
      )
    );
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
