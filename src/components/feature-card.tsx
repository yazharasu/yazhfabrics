import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid place-items-start px-0">
      <span className="flex">
        <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900 pr-5">
          <Icon className="h-6 w-6" />
        </div>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
      </span>
        <Typography className="text-gray-500 text-lg font-normal">
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default FeatureCard;
