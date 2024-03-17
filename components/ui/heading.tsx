import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const Heading = ({
  className,
  id,
  title,
}: {
  className?: string;
  id?: string;
  title: string;
}) => {
  return (
    <h2 id={id} className={cn(montserrat.className, className)}>
      {title}
    </h2>
  );
};

export default Heading;
