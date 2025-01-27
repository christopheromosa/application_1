import React, { FunctionComponent } from "react";
import { IServices } from "../types";

const ServiceCard: FunctionComponent<{ service: IServices }> = ({
  service: { about, Icon, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex justify-center p-2 gap-2">
      <Icon className="w-16 h-12 text-green-500" />

      <div>
        <h3 className="font-semibold text-sm">{title}</h3>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
