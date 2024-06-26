import Container from '@/components/ui/HomePage/Container/Container';
import { Divider } from '@mui/material';
import Image from 'next/image';
import './invoice.css';
import logo from '../../../assets/logo/logo.png'
const page = () => {
    const invoiceData = [
        {
            id: 1,
            services: 'Product Service',
            subscription: '2 year',
            tax: '5',
            rate: 500,
            amount: '500'
        },
        {
            id: 1,
            services: 'Investment service',
            subscription: '2 year',
            tax: '5',
            rate: 500,
            amount: '500'

        },
        {
            id: 1,
            services: 'Funding service',
            subscription: '2 year',
            tax: '5',
            rate: 500,
            amount: '500'

        },
    ];
    return (
        <div className="bg-[#ece9e97e] p-10">
            <Container>
                <div className="invoiceWrap flex justify-between flex-col ">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                <h1>INVOICE</h1>
                                <div className="mt-5 flex flex-col space-y-1 text-sm ">
                                    <h3 className='mb-1'>Muissa</h3>
                                    <span><b>Owner Name:</b> Abdu Rakib </span>
                                    <span><b>E-mail:</b> muissa@gmail.com </span>
                                    <span><b>Phone:</b> 34567890</span>
                                    <span><b>Website:</b> www.muissa.com </span>
                                    <span><b>Address:</b> Dahka</span>
                                </div>
                            </div>
                            <Image alt='logo' src={logo} className='w-44 h-44 object-fill ' />
                        </div>
                        <Divider sx={{ background: "#152644", marginTop: '10px' }} />
                        <div className="clientInfo text-sm ">

                            <div className="flex  justify-between">
                                <div className="mt-10 flex flex-col space-y-1 text-sm ">
                                    <h4>Bill To</h4>
                                    <span><b>Client Name :</b> Ahsan </span>
                                    <span><b>E-mail:</b> ahsan@gmail.com </span>
                                    <span><b>Phone :</b> 34567890</span>
                                    <span> <b>Address :</b> Dahka</span>
                                </div>
                                {/* <div className="mt-10 flex flex-col space-y-1 text-sm ">
                                    <h4>Ship to   </h4>
                                    <span><b>SHIPPING ADDRESS :</b> Dhaka </span>
                                    <span><b>TRACKING</b> #7654345 </span>

                                </div> */}
                                <div className="mt-10 flex flex-col space-y-1 text-sm ">
                                    <h4>Invoice No : 5 </h4>
                                    <span><b>Invoice date :</b>20-05-22 </span>
                                    <span><b>Due :</b> 67545</span>
                                </div>


                            </div>
                            <div className="mt-10">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead>
                                        <tr >
                                            <th className="px-2.5 py-2.5 border">Service Name</th>
                                            <th className="px-2.5 py-2.5 border">Year Subscription</th>
                                            <th className="px-2.5 py-2.5 border">Rate</th>
                                            <th className="px-2.5 py-2.5 border">Tax</th>
                                            <th className="px-2.5 py-2.5 border">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center'>
                                        {invoiceData.map((data, i) => (
                                            <tr key={i} className="text-xs">
                                                <td className="px-2.5 py-2.5 border">{data.services}</td>
                                                <td className="px-2.5 py-2.5 border">{data.subscription}</td>
                                                <td className="px-2.5 py-2.5 border">{data.rate}</td>
                                                <td className="px-2.5 py-2.5 border">{data.tax}</td>
                                                <td className="px-2.5 py-2.5 border">{data.amount}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                            <div className="flex justify-end text-sm mt-10 w-full">
                                <div className="w-[350px]">
                                    <div>
                                        <div className="flex justify-between">
                                            <div className='flex flex-col space-y-1'>
                                                <b>Subtotal :</b>
                                                <span>Discount :</span>
                                                <span>Tax :</span>
                                                <b>Total</b>
                                                <span>Amoun paid</span>
                                            </div>
                                            <div className='flex flex-col space-y-1'>
                                                <b>$765434567 </b>
                                                <span>$20</span>
                                                <span>$20</span>
                                                <b>65434</b>
                                                <span>50</span>
                                            </div>

                                        </div>

                                    </div>
                                    <Divider sx={{ background: "#152644", margin: '10px 0px' }} />
                                    <div className="flex justify-between">
                                        <b>Balace Due :</b>
                                        <b>567765</b>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="w-[400px] mx-auto flex justify-between ">
                        <div>
                            <Divider />
                            <b>Client signature</b>
                        </div>
                        <div>
                            <Divider />
                            <b>Business signature</b>
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default page;