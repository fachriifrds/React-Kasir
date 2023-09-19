import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Rating,
  } from "@material-tailwind/react";
   
import { dataProduk , dataMcd , dataHokben} from "../data/dataCheckout"; 
  
  export function CardKategori() {
    return (
      <>
      {/* KFC */}
      <Typography className="mb-3 mt-4 ps-10  text-lg uppercase font-bold">
        Kategori KFC
      </Typography>
      <div className="grid grid-cols-5 mb-10">
      {dataProduk.map((dataProduk) => (

      
      <a href="#">
      <Card className="w-56 h-[25rem] mx-auto">
        <CardHeader floated={false} className="h-40">
          <img src={dataProduk.img} className="w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {dataProduk.nama}
          </Typography>
          <Typography color="blue-gray" className="text-[12px]" textGradient>
          {dataProduk.deskripsi}
          </Typography>
          <Typography color="blue-gray" className="text-xs mt-[1rem]" textGradient>
            Rp.{dataProduk.harga}
          </Typography>
        </CardBody>
        <hr className="mx-auto w-44" />
        <CardFooter className="flex justify-center gap-4 pt-3 pb-3 ">
          <Rating value={5} readonly />
        </CardFooter>
      </Card>
      </a>
      ))}
      </div>
      <hr className="w-[70rem] mx-auto"/>
      {/* MCD */}
      <Typography className="mb-3 mt-4 ps-10  text-lg uppercase font-bold">
        Kategori McDonalds
      </Typography>
      <div className="grid grid-cols-5 mb-10">
      {dataMcd.map((dataMcd) => (

      
      <a href="#">
      <Card className="w-56 h-[25rem] mx-auto">
        <CardHeader floated={false} className="h-40">
          <img src={dataMcd.img} className="w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {dataMcd.nama}
          </Typography>
          <Typography color="blue-gray" className="text-[12px]" textGradient>
          {dataMcd.deskripsi}
          </Typography>
          <Typography color="blue-gray" className="text-xs mt-[1rem]" textGradient>
            Rp.{dataMcd.harga}
          </Typography>
        </CardBody>
        <hr className="mx-auto w-44" />
        <CardFooter className="flex justify-center gap-4 pt-3 pb-3 ">
          <Rating value={5} readonly />
        </CardFooter>
      </Card>
      </a>
      ))}
      </div>
<hr className="w-[70rem] mx-auto"/>
      {/* Hokben */}
      <Typography className="mb-3 mt-4 ps-10  text-lg uppercase font-bold">
        Kategori Hokkben
      </Typography>
      <div className="grid grid-cols-5  ">
      {dataHokben.map((dataHokben) => (
      <a href="#">
      <Card className="w-56 h-[25rem] mx-auto">
        <CardHeader floated={false} className="h-40">
          <img src={dataHokben.img} className="w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {dataHokben.nama}
          </Typography>
          <Typography color="blue-gray" className="text-[12px]" textGradient>
          {dataHokben.deskripsi}
          </Typography>
          <Typography color="blue-gray" className="text-xs mt-[1rem]" textGradient>
            Rp.{dataHokben.harga}
          </Typography>
        </CardBody>
        <hr className="mx-auto w-44" />
        <CardFooter className="flex justify-center gap-4 pt-3 pb-3 ">
          <Rating value={5} readonly />
        </CardFooter>
      </Card>
      </a>
      ))}
      </div>
      </>
    );
  }