import Image from 'next/image';

const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: 'PKR 525', description: 'Rich and bold single shot' },
      { name: 'Cappuccino', price: 'PKR 795', description: 'Espresso with steamed milk and foam' },
      { name: 'Latte', price: 'PKR 650', description: 'Espresso with lots of steamed milk and light foam' },
      { name: 'Americano', price: 'PKR 675', description: 'Espresso with hot water' },
    ],
  },
  {
    category: 'Tea',
    items: [
      { name: 'Hot Tea, Breakfast', price: 'PKR 675', description: 'Classic black tea with english breakfast' },
      { name: 'Green Tea', price: 'PKR 550', description: 'Light and refreshing' },
      { name: 'Chai Latte', price: 'PKR 925', description: 'Spiced tea with steamed milk' },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Croissant', price: 'PKR 895', description: 'Buttery and flaky' },
      { name: 'Muffin', price: 'PKR 595', description: 'Daily baked selection' },
      { name: 'Cinnamon Roll', price: 'PKR 995', description: 'Fresh baked with cream cheese frosting' },
    ],
  },
];

export default function Menu() {
  return (
    <div className="menu-section">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Carefully crafted drinks and treats for your enjoyment</p>
      </div>

      <div className="menu-grid">
        <div className="menu-left-column">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h2 className="menu-category">{section.category}</h2>
              <div className="menu-items">
                {section.items.map((item) => (
                  <div key={item.name} className="menu-item">
                    <div>
                      <h3 className="menu-item-name">{item.name}</h3>
                      <p className="menu-item-description">{item.description}</p>
                    </div>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-image-container">
          <Image
            src="/menu.png"
            alt="Coffee and pastries"
            layout="fill"
            className="menu-image"
          />
        </div>
      </div>
    </div>
  );
}
