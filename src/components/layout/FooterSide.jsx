import { Typography } from "@material-tailwind/react";
 
export function FooterSide() {
  return (
    <footer className="flex w-full flex-col flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between mt-14">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-sm hover:text-blue-500 focus:text-blue-500"
          >
            About 
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-sm hover:text-blue-500 focus:text-blue-500"
          >
            Help
          </Typography>
        </li>
        
      </ul>
      <Typography color="blue-gray" className="font-bold text-xs">
        Copy Right Kasir Tokoku 2023
      </Typography>
    </footer>
  );
}