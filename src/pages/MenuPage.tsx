import SectionHeader from "@/components/SectionHeader";
import MenuCard from "@/components/MenuCard";
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

        <div className="space-y-24">
          {menuData.map((section, i) => (
            <RevealSection key={section.section} delay={0.1}>
              {/* Section header */}
              <div className="mb-8 text-center">
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-widest text-foreground">
                  {section.section}
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
              </div>

              <div className="grid md:grid-cols-[1fr_2fr] gap-10 items-start">
                {/* Image — sticky on desktop */}
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="rounded-3xl overflow-hidden shadow-xl group md:sticky md:top-24">
                    <img
                      src={section.img}
                      alt={section.section}
                      className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Subcategory cards grid */}
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {section.subCategories.map((sub) => (
                      <div key={sub.name} className="glass-card p-5">
                        <h3 className="font-display text-base font-bold text-primary mb-3 pb-2 border-b border-primary/20 uppercase tracking-wide">
                          {sub.name}
                        </h3>
                        {sub.items.map((item) => (
                          <MenuCard key={item.name} {...item} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Footer note from menu */}
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
