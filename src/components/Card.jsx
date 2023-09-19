import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  import { data } from "../data/dataCheckout";
  export function Cards() {


    return (
        <div className=" flex-col">
        {data.map((data) => (
      <Card className="w-auto h-[9.5rem] flex-row m-12 " id={data.id}>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 shrink-0 rounded-r-none"
        >
          <img
            src={data.img}
            alt="card-image"
            className="h-auto w-[15rem] object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography  color="gray" className="text-xs mb-4 uppercase">
          {data.tipe}
          </Typography>
          <Typography  color="blue-gray" className="text-sm mb-2">
          {data.pesanan}
          </Typography>
          <Typography color="gray" className="text-xs mb-3 font-normal">
          {data.harga}
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="p-[8px] ml-7 flex items-center gap-2">
              Order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
      ))}
      </div>
    )
  };