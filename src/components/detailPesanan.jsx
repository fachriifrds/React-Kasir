import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Radio,
  List,
  ListItem,
  ListItemPrefix,
  Textarea,
  } from "@material-tailwind/react";
   
  export function CardOrder() {
    return (
      <Card className="mt-10  w-80 h-[29rem]">
        <CardBody >
        <h1 className='bg-white border-solid border-2 w-1/2 text-center  rounded-xl pt-1 pb-1 text-black border-black text-sm'>Detail Pesanan</h1>
            <hr className="mt-4 p-[1px] mb-4" />
          <div>
            <div className="">
            <Card className="mb-4">
            <h1 className="pt-4 ml-4 text-black">Opsi pengiriman</h1>
                
      <List >
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-vue"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="vertical-list"
                id="vertical-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <div className="flex ">
            <Typography color="blue-gray" className="font-bold text-xs">
                COD
            </Typography>
            <Typography color="blue-gray" className="mx-[5.3rem] font-bold text-xs">
            Rp.95.000,00
            </Typography>
            </div>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="vertical-list-svelte"
            className="flex w-full cursor-pointer items-center px-3 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Radio
                name="vertical-list"
                id="vertical-list-svelte"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <div className="flex gap-12">
            <Typography color="blue-gray" className="font-bold text-xs">
              E - Wallet
            </Typography>
            <Typography color="blue-gray" className=" font-bold text-xs">
              Rp.92.000,00
            </Typography>
            </div>
          </label>
        </ListItem>
      </List>
    </Card>
      
    </div>
          </div>
          <div className="w-64 text-black mx-auto">
      <Textarea label="Pesan" />
    </div>
        </CardBody>
        <hr className=" p-[1px] mb-2 w-[16.1rem] mx-auto" />
        <CardFooter className="pt-0 mx-auto">
          <div className="flex gap-32 my-1">
          <Typography className="text- text-black">
            Total :
          </Typography>
          <Typography className="text-xs font-bold text-black">
            Rp.92.000,00
          </Typography>
          </div>
          <a href="#" className="inline-block ">
            <Button size="sm" variant="text" className="flex items-center ml-10 mt-1 gap-2">
              Buat Pesanan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
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
        </CardFooter>
      </Card>
    );
  }