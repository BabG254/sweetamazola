interface MenuCardProps {
  name: string;
  price: string;
  description?: string;
}

const MenuCard = ({ name, price, description }: MenuCardProps) => (
  <div className="flex items-start justify-between gap-4 py-4 border-b border-border/20 last:border-0 group hover:bg-primary/[0.03] px-2 -mx-2 rounded-lg transition-colors">
    <div className="flex-1">
      <div className="flex items-baseline gap-2">
        <h4 className="font-body font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h4>
        <span className="flex-1 border-b border-dotted border-border/30 min-w-[2rem] translate-y-[-4px]" />
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mt-1 italic">{description}</p>
      )}
    </div>
    <span className="text-primary font-display font-semibold whitespace-nowrap text-lg">{price}</span>
  </div>
);

export default MenuCard;
