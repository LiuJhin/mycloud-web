import { Service } from "@/types";

const services: Service[] = [
  {
    id: "cloud-computing",
    title: "云计算服务",
    description: "提供弹性、可扩展的云计算资源，帮助企业灵活应对业务需求变化。",
  },
  {
    id: "data-storage",
    title: "数据存储解决方案",
    description: "安全、高效的数据存储服务，支持大数据分析和备份恢复。",
  },
  {
    id: "ai-solutions",
    title: "AI 智能解决方案",
    description: "基于人工智能的技术，为企业提供智能分析、自动化处理等服务。",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">我们的服务</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
