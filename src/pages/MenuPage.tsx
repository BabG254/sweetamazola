import SectionHeader from "@/components/SectionHeader";
import RevealSection from "@/components/RevealSection";
import breakfastImg from "@/assets/breakfast.jpg";
import africanDishImg from "@/assets/african-dish.jpg";

type MenuItem = { name: string; price: string; description?: string };
type SubCategory = { name: string; items: MenuItem[] };
type MenuSection = { section: string; img: string; subCategories: SubCategory[] };

const menuData: MenuSection[] = [
  {
    section: "Breakfast",
    img: breakfastImg,
    subCategories: [
      {
        name: "African & Classic Teas",
        items: [
          { name: "Amazola Tea", price: "KES 30/40" },
          { name: "Plain Black Tea", price: "KES 30/40" },
          { name: "Vanilla Tea", price: "KES 50" },
          { name: "Sweet Tea", price: "KES 50" },
          { name: "Milk Tea", price: "KES 70" },
        ],
      },
      {
        name: "Herbal Black Teas",
        items: [
          { name: "Black (Nature Infusions)", price: "KES 90" },
          { name: "With Milk", price: "KES 60" },
        ],
      },
      {
        name: "Coffee Selection",
        items: [
          { name: "House Coffee", price: "KES 50" },
          { name: "White Coffee", price: "KES 60" },
          { name: "Lemon Coffee", price: "KES 60" },
          { name: "Sweet Coffee", price: "KES 60" },
          { name: "Coffee Milk", price: "KES 70" },
          { name: "Arabica Coffee", price: "KES 80" },
          { name: "Arabica with Milk", price: "KES 100" },
        ],
      },
      {
        name: "Milkshakes & Fresh Blends",
        items: [
          { name: "Milkshake", price: "KES 150" },
          { name: "Milkshake with Ice Cream", price: "KES 250" },
          { name: "Smoothie", price: "KES 150" },
          { name: "Cocktail", price: "KES 100" },
        ],
      },
      {
        name: "Porridge Bowl",
        items: [
          { name: "Bowl of Porridge", price: "KES 50" },
          { name: "Lemon Water", price: "KES 50" },
          { name: "Plain Milk", price: "KES 100" },
          { name: "Dawa", price: "KES 70" },
        ],
      },
      {
        name: "Rolex & Hot Dogs",
        items: [
          { name: "Smocha (Chapati & Smokie)", price: "KES 70" },
          { name: "Chapati Egg Rolex (Plain)", price: "KES 100" },
          { name: "Spanish Egg Rolex", price: "KES 150" },
          { name: "Hot Dog (Plain)", price: "KES 100" },
          { name: "Hot Dog (Stuffed)", price: "KES 120" },
        ],
      },
      {
        name: "Bites & Snacks",
        items: [
          { name: "Chapati", price: "KES 20" },
          { name: "Pancake", price: "KES 20" },
          { name: "Andazi", price: "KES 20" },
          { name: "Waffles", price: "KES 30" },
          { name: "Smoky", price: "KES 50" },
          { name: "Samosa", price: "KES 40" },
          { name: "Sausage", price: "KES 50" },
          { name: "Boiled Egg", price: "KES 30" },
          { name: "Macho, Fried Egg", price: "KES 40" },
          { name: "Scrambled Egg", price: "KES 100" },
        ],
      },
    ],
  },
  {
    section: "Main Food Menu",
    img: africanDishImg,
    subCategories: [
      {
        name: "Meat Dishes",
        items: [
          { name: "Plain Beef", price: "KES 150" },
          { name: "Wet Beef Curry", price: "KES 200" },
          { name: "Plain Chicken", price: "KES 200" },
          { name: "Wet Chicken Curry", price: "KES 250" },
        ],
      },
      {
        name: "Accompaniments",
        items: [
          { name: "Rice", price: "KES 50" },
          { name: "Ugali", price: "KES 50" },
          { name: "Chapati", price: "KES 50" },
          { name: "Mukimo", price: "KES 50" },
          { name: "Matoke", price: "KES 50" },
        ],
      },
      {
        name: "Cereals",
        items: [
          { name: "Yellow/Green Beans", price: "KES 70" },
          { name: "Green Grams (Ndengu)", price: "KES 70" },
          { name: "Lentils (Kamande)", price: "KES 100" },
          { name: "Black Beans (Njahi)", price: "KES 100" },
        ],
      },
      {
        name: "Githeri",
        items: [
          { name: "Plain Githeri", price: "KES 100" },
          { name: "Special Githeri", price: "KES 150" },
        ],
      },
      {
        name: "Mukimo",
        items: [
          { name: "Plain Mukimo", price: "KES 100" },
          { name: "Mukimo with Veggies", price: "KES 120" },
          { name: "Mukimo with Beef", price: "KES 200" },
          { name: "Mukimo with Chicken", price: "KES 250" },
        ],
      },
      {
        name: "Matoke",
        items: [
          { name: "Plain Matoke", price: "KES 100" },
          { name: "Matoke with Veggies", price: "KES 120" },
          { name: "Matoke with Beef", price: "KES 200" },
          { name: "Matoke with Chicken", price: "KES 250" },
        ],
      },
      {
        name: "Rice",
        items: [
          { name: "Rice with Veggies", price: "KES 120" },
          { name: "Rice with Beef", price: "KES 200" },
          { name: "Rice with Chicken", price: "KES 250" },
        ],
      },
      {
        name: "Ugali",
        items: [
          { name: "Ugali with Veggies", price: "KES 100" },
          { name: "Ugali Kienyeji", price: "KES 150" },
          { name: "Ugali with Beef", price: "KES 200" },
          { name: "Ugali with Chicken", price: "KES 250" },
        ],
      },
      {
        name: "Chips",
        items: [
          { name: "Plain Chips", price: "KES 100" },
          { name: "Special Chips", price: "KES 150" },
          { name: "Masala Chips", price: "KES 200" },
        ],
      },
    ],
  },
];

const MenuPage = () => (
  <div className="pt-20">
    <section className="section-padding leaf-pattern">
      <div className="container-max">
        <RevealSection>
          <SectionHeader
            subtitle="Our Menu"
            title="Taste the Forest"
            description="Explore our curated selection of authentic African dishes, fresh beverages, and delightful snacks."
          />
        </RevealSection>

        <div className="space-y-20">
          {menuData.map((section) => (
            <RevealSection key={section.section} delay={0.05}>
              {/* Cinematic section banner */}
              <div className="relative rounded-3xl overflow-hidden h-44 sm:h-56 mb-10 shadow-2xl">
                <img
                  src={section.img}
                  alt={section.section}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
                <div className="absolute inset-0 flex items-center px-8 sm:px-14">
                  <div>
                    <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-2">Amazola Sweet Lounge</p>
                    <h2 className="font-display text-3xl sm:text-5xl font-bold text-white uppercase tracking-widest">
                      {section.section}
                    </h2>
                    <div className="w-16 h-0.5 bg-primary mt-3 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Subcategory grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.subCategories.map((sub) => (
                  <div key={sub.name} className="glass-card p-5 flex flex-col">
                    {/* Subcategory header */}
                    <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-primary/20">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                      <h3 className="font-display text-xs font-bold text-primary uppercase tracking-[0.2em] leading-tight">
                        {sub.name}
                      </h3>
                    </div>
                    {/* Item rows */}
                    <ul className="flex-1 space-y-2">
                      {sub.items.map((item) => (
                        <li key={item.name} className="flex items-center gap-3 group py-0.5">
                          <span className="flex-1 text-sm text-foreground/75 group-hover:text-foreground transition-colors leading-snug">
                            {item.name}
                          </span>
                          <span className="text-xs font-bold text-primary whitespace-nowrap shrink-0 bg-primary/10 px-2.5 py-0.5 rounded-full">
                            {item.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Footer note */}
        <RevealSection delay={0.2}>
          <div className="mt-20 glass-card p-8 max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground italic text-lg mb-4">
              "Kindly allow us a short wait as all meals are freshly prepared on order."
            </p>
            <p className="text-foreground font-medium">
              Send to POCHI: <span className="text-primary font-bold">0757053405</span>
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Thank you for dining with us, have a blessed time. 🙏
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  </div>
);

export default MenuPage;
