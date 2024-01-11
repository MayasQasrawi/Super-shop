const dummyData = [
    {
      id: 1,
      title: 'Dairy & Eggs',
      subsections: [
        {
          id: 101,
          title: 'Cheese',
          items: [
            { id: '11', name: 'Cheddar Cheese', price: 2.99, image: 'https://picsum.photos/200' },
            { id: '12', name: 'Gouda Cheese', price: 3.49, image: 'https://picsum.photos/200' },
          ],
        },
        {
          id: 102,
          title: 'Milk',
          items: [
            { id: '13', name: 'Whole Milk', price: 1.99, image: 'https://picsum.photos/200' },
            { id: '14', name: 'Skim Milk', price: 1.89, image: 'https://picsum.photos/200' },
            // ... more milk items
          ],
        },
        {
          id: 103,
          title: 'Eggs',
          items: [
            { id: '15', name: 'Organic Eggs', price: 3.99, image: 'https://picsum.photos/200' },
            { id: '16', name: 'Free-Range Eggs', price: 4.99, image: 'https://picsum.photos/200' },
            // ... more egg items
          ],
        },
        // ... other subsections with items for Cream, Substitutes, Butter, etc.
      ],
    },
    {
      id: 2,
      title: 'Meats',
      subsections: [
        {
          id: 201,
          title: 'Beef',
          items: [
            { id: '21', name: 'Ground Beef', price: 5.99, image: '/https://picsum.photos/200' },
            { id: '22', name: 'Ribeye Steak', price: 14.99, image: '/images/meats/ribeye.jpg' },
            // ... more beef items
          ],
        },
        {
          id: 202,
          title: 'Poultry',
          items: [
            { id: '23', name: 'Chicken Breasts', price: 6.99, image: '/images/poultry/chicken-breasts.jpg' },
            { id: '24', name: 'Whole Chicken', price: 9.99, image: '/images/poultry/whole-chicken.jpg' },
            // ... more poultry items
          ],
        },
        // ... other subsections with items for Pork, Lamb, Seafood, etc.
      ],
    },
    {
      id: 3,
      title: 'Canned Goods',
      subsections: [
        {
          id: 301,
          title: 'Fruits',
          items: [
            { id: '31', name: 'Canned Peaches', price: 2.49, image: '/images/canned/peaches.jpg' },
            { id: '32', name: 'Canned Pineapple', price: 2.99, image: '/images/canned/pineapple.jpg' },
            // ... more canned fruits
          ],
        },
        {
          id: 302,
          title: 'Vegetables',
          items: [
            { id: '33', name: 'Canned Corn', price: 1.49, image: '/images/canned/corn.jpg' },
            { id: '34', name: 'Canned Peas', price: 1.49, image: '/images/canned/peas.jpg' },
            // ... more canned vegetables
          ],
        },
        // ... other subsections with items for Soups, Meat & Fish, Beans, etc.
      ],
    },
    // ... other sections
  ];


  // add more sections here if you want 
  export default dummyData;
  