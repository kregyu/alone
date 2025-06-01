'use client'
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import Link from "next/link"
import { navigationItems, brandConfig } from "@/data/navigation"
import { useMobileMenu } from "@/hooks/use-mobile-menu"

export function Navigation() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu()
  const pathname = usePathname()

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`w-8 h-8 bg-gradient-to-r ${brandConfig.logo.gradient} rounded-lg flex items-center justify-center`}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold bg-gradient-to-r ${brandConfig.logo.gradient} bg-clip-text text-transparent`}>
              {brandConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              立即学习
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu} className="p-2">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-1 transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 font-medium"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={closeMobileMenu}
                >
                  立即学习
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}