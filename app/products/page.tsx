import { Product } from "@/types";

const products: Product[] = [
  {
    id: "cloud-platform",
    name: "云平台",
    description: "一站式云服务平台，提供计算、存储、网络等全方位云资源。",
    price: 99,
  },
  {
    id: "data-analytics",
    name: "数据分析平台",
    description: "强大的数据分析工具，帮助企业洞察业务数据，发现增长机会。",
    price: 199,
  },
  {
    id: "security-suite",
    name: "安全服务套件",
    description: "全面的安全解决方案，保护企业数据和应用安全。",
    price: 299,
  },
];

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">我们的产品</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="text-2xl font-bold text-blue-600">
              ¥{product.price}/月
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
