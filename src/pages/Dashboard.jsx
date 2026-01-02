import React, { useState } from "react";
import {
  Package,
  TrendingUp,
  ShoppingCart,
  Plus,
  CheckCircle,
} from "lucide-react";
import { Button } from "../components/ui/button";
import StatCard from "../components/dashboard/StatCard";
import RecentProducts from "../components/dashboard/RecentProducts";
import AddProductModal from "../components/products/AddProductModal";

const initialProducts = [
  {
    product_id: 101,
    name: "Small Black Elephant",
    price: 22.99,

    product_description:
      "Handcrafted decorative black elephant symbolizing strength and prosperity.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-1.png",
  },
  {
    product_id: 102,
    name: "Bangles",
    price: 36.99,

    product_description:
      "Traditional ethnic bangles crafted for festive and daily wear.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-2.png",
  },
  {
    product_id: 103,
    name: "Jewellery Set",
    price: 99.99,

    product_description:
      "Elegant jewellery set perfect for weddings and special occasions.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-3.png",
  },
  {
    product_id: 104,
    name: "Perfume Set",
    price: 79.99,

    product_description: "Premium fragrance set with long-lasting aroma.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-4.png",
  },
  {
    product_id: 105,
    name: "Wooden White Elephant",
    price: 81.99,

    product_description:
      "Hand-carved wooden elephant with white finish for home décor.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-5.png",
  },
  {
    product_id: 106,
    name: "Earing1",
    price: 42.99,

    product_description: "Stylish handcrafted earrings with ethnic design.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-6.png",
  },
  {
    product_id: 107,
    name: "Krishna Statue Small",
    price: 67.99,
    product_description: "Small Lord Krishna idol ideal for pooja and gifting.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-7.png",
  },
  {
    product_id: 108,
    name: "Diffuser",
    price: 31.99,
    product_description:
      "Aromatic diffuser to refresh and relax your living space.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-8.png",
  },
  {
    product_id: 109,
    name: "Ethnic Purse",
    price: 12.99,
    product_description: "Handcrafted ethnic purse with traditional patterns.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-9.png",
  },
  {
    product_id: 110,
    name: "Traditional Brass Utensils",
    price: 55.99,
    product_description:
      "Classic brass utensils showcasing Indian craftsmanship.",
    product_url:
      "https://indiansoulsstore01.blob.core.windows.net/products/GIFT-10.png",
  },
];

const Dashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "Active").length;
  const inactiveProducts = products.filter(
    (p) => p.status === "Inactive"
  ).length;

  const handleAddProduct = (newProduct) => {
    setProducts([newProduct, ...products]);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Indian Souls</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's your store overview.
          </p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Products"
          value={totalProducts}
          icon={Package}
          change="12"
          changeType="increase"
          iconColor="blue"
        />
        <StatCard
          title="Active Products"
          value={activeProducts}
          icon={CheckCircle}
          change="8"
          changeType="increase"
          iconColor="green"
        />
        <StatCard
          title="Inactive Products"
          value={inactiveProducts}
          icon={ShoppingCart}
          iconColor="orange"
        />
        <StatCard
          title="Categories"
          value="5"
          icon={TrendingUp}
          change="2"
          changeType="increase"
          iconColor="blue"
        />
      </div>
      <RecentProducts products={products.slice(0, 5)} />
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
};

export default Dashboard;
