import Serve from "./services_top/components/ServicesTop";
import ServicesMid from "./services_mid/components/ServicesMid";
import ServicesBottom from "./services_bottom/components/ServicesBottom";
import "../../styles/Collapse.scss";

function Services() {
  return (
    <>
      <Serve />
      <ServicesMid />
      <ServicesBottom />
    </>
  );
}

export default Services;
