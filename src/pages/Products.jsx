import React, { useState } from "react";
import { Plus, Search, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import AddProductModal from "../components/products/AddProductModal";

const initialProducts = [
  {
    product_id: 101,
    name: "Small Black Elephant",
    product_description:
      "Handcrafted decorative black elephant symbolizing strength and prosperity.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-1.png",
  },
  {
    product_id: 102,
    name: "Bangles",
    product_description:
      "Traditional ethnic bangles crafted for festive and daily wear.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-2.png",
  },
  {
    product_id: 103,
    name: "Jewellery Set",
    product_description:
      "Elegant jewellery set perfect for weddings and special occasions.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-3.png",
  },
  {
    product_id: 104,
    name: "Perfume Set",
    product_description: "Premium fragrance set with long-lasting aroma.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-4.png",
  },
  {
    product_id: 105,
    name: "Wooden White Elephant",
    price: 79.99,

    product_description:
      "Hand-carved wooden elephant with white finish for home décor.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-5.png",
  },
  {
    product_id: 106,
    name: "Earing1",
    price: 79.99,

    product_description: "Stylish handcrafted earrings with ethnic design.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-6.png",
  },
  {
    product_id: 107,
    name: "Krishna Statue Small",
    price: 79.99,

    product_description: "Small Lord Krishna idol ideal for pooja and gifting.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-7.png",
  },
  {
    product_id: 108,
    name: "Diffuser",
    price: 79.99,

    product_description:
      "Aromatic diffuser to refresh and relax your living space.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-8.png",
  },
  {
    product_id: 109,
    name: "Ethnic Purse",
    price: 79.99,

    product_description: "Handcrafted ethnic purse with traditional patterns.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-9.png",
  },
  {
    product_id: 110,
    name: "Traditional Brass Utensils",
    product_description:
      "Classic brass utensils showcasing Indian craftsmanship.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-10.png",
  },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = (newProduct) =>
    setProducts([newProduct, ...products]);
  const handleDeleteProduct = (id) =>
    setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </div>
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Products ({filteredProducts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Product</th>
                  <th className="text-left py-3 px-4 font-medium">Category</th>
                  <th className="text-left py-3 px-4 font-medium">Price</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-right py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-muted/50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge variant="outline">{product.category}</Badge>
                    </td>
                    <td className="py-4 px-4 font-medium">${product.price}</td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          product.status === "Active" ? "success" : "secondary"
                        }
                      >
                        {product.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Pencil className="w-4 h-4 mr-2" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-destructive"
                          >
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
};

export default Products;
