/* eslint-disable react/no-unescaped-entities */
"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { FieldValues } from "react-hook-form";
import { Button, Grid } from "@mui/material";


const defaultValues = {
    name: "",
    auth: "",
    password: "",
    confirmPassword: "",
};

export type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    refetch: any;
};

const UserCreateModal = ({ open, setOpen, refetch }: TProps) => {

    const submitHandler = async (values: FieldValues) => {

    };

    return (
        <MUIForm
            onSubmit={submitHandler}
            defaultValues={defaultValues}
        >
            <Grid container spacing={2} sx={{ my: 2 }}>

                <Grid item xs={12} sm={12} md={4}>
                    <MUIInput
                        name="memeber_fee"

                        label="Membership Fee"
                        fullWidth
                    />
                </Grid>


            </Grid>
            <Button

                type="submit"
                variant="contained"
                color="primary"
            >
                Create Membership Fee
            </Button>
        </MUIForm>
    );
};

export default UserCreateModal;
