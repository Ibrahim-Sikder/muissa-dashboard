import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const termsAndConditions = `
## Terms & Conditions
Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [Your Company Name]'s relationship with you in relation to this website.

### Use of the Website
- The content of the pages of this website is for your general information and use only. It is subject to change without notice.
- This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, personal information may be stored by us for use by third parties.

### License and Site Access
- We grant you a limited license to access and make personal use of this site and not to download (other than page caching) or modify it, or any portion of it, except with express written consent of [Your Company Name].

### Governing Law
- Any claim relating to [Your Company Name]'s website shall be governed by the laws of the country without regard to its conflict of law provisions.

### Changes to Terms
- [Your Company Name] reserves the right to modify these terms at any time. We will do our best to notify users of any changes.

If you have any questions about our terms and conditions, please contact us at [Your Contact Information].
`;

const privacyPolicy = `
## Privacy Policy
This privacy policy sets out how [Your Company Name] uses and protects any information that you give [Your Company Name] when you use this website.

### Information Collection
- We may collect the following information: name and job title, contact information including email address, demographic information such as postcode, preferences and interests, other information relevant to customer surveys and/or offers.

### Use of Information
- We require this information to understand your needs and provide you with a better service, and in particular for the following reasons: Internal record keeping, to improve our products and services, to periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.

### Security
- We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.

### Cookies
- A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site.

### Changes to Privacy Policy
- [Your Company Name] may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.

If you have any questions about our privacy policy, please contact us at [Your Contact Information].
`;

export default function Page() {
  return (
    <>
      <Box
        mb={4}
        sx={{
          boxShadow: "none",
        }}
      >
        {/* button for add new */}
        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{
            mb: 2,
          }}
        >
          <Link href="/dashboard/policies/edit">
            <Button
              color="primary"
              size="small"
              variant="contained"
              startIcon={<FaEdit />}
            >
              Edit
            </Button>
          </Link>
        </Stack>

        <Card
          sx={{
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Terms & Conditions
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" component="div">
              <div
                dangerouslySetInnerHTML={{
                  __html: termsAndConditions.replace(/\n/g, "<br/>"),
                }}
              />
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card
          sx={{
            boxShadow: "none",
          }}
        >
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Privacy Policy
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" component="div">
              <div
                dangerouslySetInnerHTML={{
                  __html: privacyPolicy.replace(/\n/g, "<br/>"),
                }}
              />
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
