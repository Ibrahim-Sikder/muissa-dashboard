'use client'

import MUIForm from '@/components/Forms/Form';
import MUITextArea from '@/components/Forms/TextArea';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';



const validationSchema = z.object({
    comment: z.string(),
});
const CommentForm = () => {
    const handleSubmit = (data: FieldValues) => {
        console.log(data);
    };
    return (
        <div className="mt-10">
            <h4 className="mb-8 text-[#1591A3]">Give Your Feedback </h4>
            <MUIForm
                onSubmit={handleSubmit}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                    comment: "",
                }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={12} sx={{ marginRight: "0px" }}>
                        <MUITextArea
                            name="comment"
                            placeholder="Comment"
                            minRows={3}
                            sx={{
                                border: "1px solid #ddd",
                                padding: "10px",
                            }}
                        />
                    </Grid>
                    <Grid item lg={12} sx={{ marginRight: "0px" }}>
                        <Button>Submit</Button>
                    </Grid>
                </Grid>
            </MUIForm>
        </div>
    );
};

export default CommentForm;