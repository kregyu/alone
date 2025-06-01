import { Button } from "@/components/ui/button"

interface FilterCategoriesSectionProps {
  categories: string[]
  activeCategory?: string
  onCategoryChange?: (category: string) => void
}

export default function FilterCategoriesSection({ 
  categories, 
  activeCategory = "全部", 
  onCategoryChange 
}: FilterCategoriesSectionProps) {
  return (
    <section className="container mx-auto px-4 mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === activeCategory ? "default" : "outline"}
              className={category === activeCategory ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50"}
              onClick={() => onCategoryChange?.(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}