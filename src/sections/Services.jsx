import ServicesCard from "../components/ServicesCard";
import { services } from "../constants";

export default function Services() {
  return (
    <section className="flex justify-center max-container flex-wrap gap-9">
      {services.map((service) => (
        <ServicesCard key={service.label} {...service} />
      ))}
    </section>
  );
}
