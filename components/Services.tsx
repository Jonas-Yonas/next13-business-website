import { Card, Title } from ".";
import { serviceData } from "./data/data";

const Services = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="container px-5 py-10 md:py-24 mx-auto">
        <Title
          title="Our Services"
          subTitle="Embrace technology to drive productivity and achieve operational excellence with our innovative software offerings."
          titleStyles="text-white"
          subTitleStyles="text-gray-400"
        />

        <div className="w-full flex flex-wrap">
          {serviceData.map(({ id, title, text, icon }) => (
            <div className="xl:w-1/3 md:w-1/2 p-4" key={id}>
              <Card title={title} icon={icon} text={text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
