import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function Total() {
  return (
    <Card color="white" variant="gradient" className="w-full max-w-[50rem] mx-auto ps-12 pe-20 p-8 mt-4">
      <Typography
          variant="small"
          color="black"
          className="mb-2 text-sm font-bold uppercase"
        >
          Produk
        </Typography>
      <CardBody className="p-0">
        <div className="flex gap-12">
        <ul className="flex flex-col gap-4 ">
          <li className="flex items-center mb-[-1.5rem] gap-4">
            <Typography className=" text-sm">Makanan</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className=" text-sm"></Typography>
          </li>
          <li className="flex items-center gap-4 ">
            <Typography className="font-bold uppercase text-xs">Burger Cheese</Typography>
          </li>
          <li className="flex items-center mb-[-0.5rem] gap-4">
            <Typography className=" text-sm ">Minuman</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className="font-bold uppercase text-xs">Coca Cola</Typography>
          </li>
          <li className="flex items-center  gap-4">
            <Typography className=" text-sm ">Makanan</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className="font-bold uppercase text-xs">Fried Chicken</Typography>
          </li>
        </ul>
{/* jumlah */}
        <ul className="flex flex-col gap-4 px-56">
        <li className="flex items-center pt-7 gap-4 ">
            <Typography className="font-bold uppercase text-xs text-center">2x</Typography>
          </li>
          <li className="flex items-center pt-3 gap-4 mt-4">
            <Typography className="font-bold uppercase text-xs">3x</Typography>
          </li>
          <li className="flex items-center pt-5 gap-4 mt-4">
            <Typography className="font-bold uppercase text-xs">1x</Typography>
          </li>
        </ul>
        {/* harga */}
        <ul className="flex flex-col gap-4">          
          <li className="flex items-center pt-7 gap-4 ">
            <Typography className="font-bold uppercase text-xs">Rp.40.000,00</Typography>
          </li>
          <li className="flex items-center pt-4 gap-4 ">
            <Typography className="font-bold uppercase text-xs mt-3">Rp.21.000,00</Typography>
          </li>
          <li className="flex items-center pt-6 gap-4 ">
            <Typography className="font-bold uppercase text-xs mt-3">Rp.21.000,00</Typography>
          </li>
          
        </ul>
        </div>
        <hr className="mt-4 "/>
      </CardBody>
      <CardFooter className="mt-4 p-0">
      <div className="flex gap-[30rem]">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center mb-[-1rem] gap-4">
            <Typography className=" text-sm">Jasa Pengiriman</Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className=" text-sm"></Typography>
          </li>
          <li className="flex items-center gap-4 mb-4">
            <Typography className="font-bold uppercase text-xs">GrabFood</Typography>
          </li>
          
        </ul>
       
        {/* harga */}
        <ul className="flex flex-col ">          
          <li className="flex items-center pt-10 ">
            <Typography className="font-bold uppercase text-xs">Rp.10.000,00</Typography>
          </li>
          
        </ul>
        </div>
        <hr className="mt-3 "/>

        <div className="flex mt-4 gap-[30rem]">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center mb-[-1rem] gap-4">
            <Typography className=" text-sm"></Typography>
          </li>
          <li className="flex items-center gap-4">
            <Typography className=" text-sm"></Typography>
          </li>
          <li className="flex items-center gap-4 mb-4">
            <Typography className="font-bold uppercase text-xs">Total Pembayaran</Typography>
          </li>
          
        </ul>
       
        {/* harga */}
        <ul className="flex flex-col  ">          
          <li className="flex items-center pt-8">
            <Typography className="font-bold uppercase text-xs">Rp.92.000,00</Typography>
          </li>
          
        </ul>
        </div>
      </CardFooter>
    </Card>
  );
}
