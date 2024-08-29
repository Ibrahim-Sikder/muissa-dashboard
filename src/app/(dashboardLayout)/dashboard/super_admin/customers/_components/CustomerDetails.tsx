"use client";
import * as React from "react";
import {
    Container,
    Typography,
    Box,
    Avatar,
    Grid,
    Paper,
    Button,
    Stack,
    Card,
    CardContent,
    Divider,
    Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { getCookie } from "@/helpers/Cookies";
// import { useGetSingleMemberQuery } from "@/redux/api/baseApi";
import { ErrorMessage } from "@/components/error-message";
import { useGetSingleMemberQuery } from "@/redux/api/memeberApi";
import Loader from "@/components/Loader";
import { AccessTimeFilled, AddRoad, Approval, Business, CardTravel, Handshake, Language, LocalConvenienceStore, NextWeek, Paid, TimerOff } from "@mui/icons-material";
import moment from "moment";
import { UserRole } from "@/types";
import { getUserInfo } from "@/services/action";




export default function CustomerDetails() {
    const [userRole, setUserRole] = React.useState<UserRole | null>(null);

    React.useEffect(() => {
        const fetchUserInfo = async () => {
            const userInfo = await getUserInfo();

            setUserRole(userInfo?.role || null);
        };

        fetchUserInfo();
    }, []);



    const [errorMessage, setErrorMessage] = React.useState<string[]>([]);
    const { id } = useParams();
    const token = getCookie("mui-token");

    const { data, error, isLoading } = useGetSingleMemberQuery({
        token,
        id,
    });

    React.useEffect(() => {
        if (error) {
            const { status, data } = error as any as { status: number; data: any };
            if ([400, 404, 401, 409, 500].includes(status)) {
                setErrorMessage(data?.message);
            } else {
                setErrorMessage(["An unexpected error occurred."]);
            }
        }
    }, [error]);

    if (isLoading) {
        return <Loader />;
    }

    const formatDate = (dateString: string) => {
        if (!dateString) {
            return "Invalid Date";
        }

        const date = moment(dateString);
        if (!date.isValid()) {
            return "Invalid Date";
        }

        return date.format("DD-MM-YYYY");
    };



    return (
        <>
            <Link href={`/dashboard/${userRole}/customers`} passHref>
                <Button
                    startIcon={<ArrowBackIcon />}
                    variant="contained"
                    color="primary"
                    sx={{ mb: 2 }}
                >
                    Back to Customers
                </Button>
            </Link>
            {errorMessage?.length > 0 ? (
                <ErrorMessage message={errorMessage} />
            ) : (
                <Box className="bg-white shadow rounded-lg p-6">
                    <Stack direction="row" spacing={3} alignItems="center" mb={4}>
                        <Avatar
                            alt={data?.user?.name}
                            src={data?.user?.profile_pic}
                            sx={{ width: 120, height: 120 }}
                        />
                        <Box>
                            <Typography variant="h4" fontWeight="bold">
                                {data?.user?.name}
                            </Typography>
                            <Chip
                                label={`Customer ID: ${data?.user?.userId}`}
                                color="secondary"
                            />
                        </Box>
                    </Stack>
                    <Card
                        sx={{
                            boxShadow: "none",
                            border: "1px solid #e0e0e0",
                            mb: 4,
                        }}
                    >
                        <CardContent>
                            <Typography fontWeight='bold' variant="h6" gutterBottom>
                                Contact Information
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <div className="flex  flex-col gap-3">
                                        <div className="flex gap-2 items-center">
                                            <EmailIcon color="action" />
                                            <b className="mr-5">Email </b>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <PhoneIcon color="action" />
                                            <b className="mr-5">Phone </b>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Language color="action" />
                                            <b className="mr-5">Contry</b>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <Approval color="action" />
                                            <b className="mr-5">Postal Code</b>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <HomeIcon color="action" />
                                            <b className="mr-5">State</b>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <AddRoad color="action" />
                                            <b className="mr-5">Street Address</b>
                                        </div>
                                    </div>


                                    <div className="flex flex-col gap-3">
                                        <Typography>:  {data?.user?.email || data?.user?.auth}</Typography>
                                        <Typography>:   {data?.user?.phone || data?.user?.auth}</Typography>
                                        <Typography>:  {data?.user?.country}  </Typography>
                                        <Typography>:   {data?.user?.postal_code}  </Typography>
                                        <Typography>:   {data?.user?.state}  </Typography>
                                        <Typography>:   {data?.user?.street_address}  </Typography>
                                    </div>



                                </Stack>
                            </Stack>
                        </CardContent>
                        <CardContent>
                            <Typography variant="h6" fontWeight='bold' gutterBottom>
                                Business Information
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            {
                                data?.member_type === 'business_owner' ? (
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <div className="flex  flex-col gap-3">

                                                <div className="flex gap-2 items-center">
                                                    <LocalConvenienceStore color="action" />
                                                    <b className="mr-5">Business Name </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <NextWeek color="action" />
                                                    <b className="mr-5">Business Type </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <Business color="action" />
                                                    <b className="mr-5">Business Address </b>
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <CardTravel color="action" />
                                                    <b className="mr-5">Membership Type </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <AccessTimeFilled color="action" />
                                                    <b className="mr-5">Membership Year </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <Handshake color="action" />
                                                    <b className="mr-5">Services </b>
                                                </div>
                                            </div>


                                            <div className="flex flex-col gap-3">
                                                <Typography>:  {data?.business_name}  </Typography>
                                                <Typography>:  {data?.business_type}  </Typography>
                                                <Typography>:   {data?.business_address}  </Typography>
                                                <Typography>:{data?.member_type === 'business_owner' ? 'Business Owner' : ''}   </Typography>
                                                <Typography>:   {formatDate(data?.createdAt)} - {formatDate(data?.membership_year)} </Typography>

                                                <Typography className="flex gap-3 "> :
                                                    {data?.need_of_service.map((service: string, index: number) => (
                                                        <div key={index} >
                                                            <span >{service}
                                                                {index < data.need_of_service.length - 1 && ','}</span>
                                                        </div>
                                                    ))}
                                                </Typography>
                                            </div>
                                        </Stack>
                                    </Stack>
                                ) : (
                                    <Stack spacing={2}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            <div className="flex  flex-col gap-3">

                                                <div className="flex gap-2 items-center">
                                                    <Paid color="action" />
                                                    <b className="mr-5">Investment Amount </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <NextWeek color="action" />
                                                    <b className="mr-5">Investment Goal </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <TimerOff color="action" />
                                                    <b className="mr-5">Investment Period </b>
                                                </div>

                                                <div className="flex gap-2 items-center">
                                                    <CardTravel color="action" />
                                                    <b className="mr-5">Investment Type </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <AccessTimeFilled color="action" />
                                                    <b className="mr-5">Membership Year </b>
                                                </div>
                                                <div className="flex gap-2 items-center">
                                                    <Handshake color="action" />
                                                    <b className="mr-5">Member Type </b>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Typography>:  {data?.investment_amount}  </Typography>
                                                <Typography>:  {data?.investment_goal}  </Typography>
                                                <Typography>:   {data?.investment_period}  </Typography>
                                                <Typography>:  {data?.investment_type}  </Typography>
                                                <Typography>:    {formatDate(data?.createdAt)} - {formatDate(data?.membership_year)} </Typography>
                                                <Typography>: <span className="capitalize"> {data?.member_type}</span>  </Typography>
                                            </div>
                                        </Stack>
                                    </Stack>
                                )
                            }

                        </CardContent>
                    </Card>
                    <Typography variant="body2" color="textSecondary">
                        Member since: {dayjs(data?.createdAt).format("MMMM D, YYYY")}
                    </Typography>
                </Box>
            )}
        </>
    );
}
