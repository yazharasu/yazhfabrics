import { Typography, Card, CardBody, CardHeader } from "@material-tailwind/react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function CourseCard({ img, img_2, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <Card color="transparent" shadow={false} className="mt-6 w-[50rem] mx-auto">
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2 align-middle justify-center">
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 text-lg font-normal !text-gray-500">
          {desc}
        </Typography>
        {/* <Button color="gray" size="sm">
          {buttonLabel}
        </Button> */}
      </CardBody>
      <CardHeader floated={false} shadow={false} className="mx-0 mt-0 mb-6 h-80 flex items-center justify-between px-10">
        <Image width={300} height={500} src={img} alt={title} className="w-100 rounded-sm" />
        <Image width={300} height={500} src={img_2} alt={title} className="w-100 rounded-sm" />
      </CardHeader>
    </Card>
  );
}

export default CourseCard;