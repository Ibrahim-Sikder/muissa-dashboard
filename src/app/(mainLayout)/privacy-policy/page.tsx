import Container from "@/components/ui/HomePage/Container/Container";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="serviceDetailsWrap">
        <div className="aboutContent">
          <Typography variant="h4">Privacy Policy</Typography>
        </div>
      </div>
      <Container>
        <div className="flex flex-col items-center py-10 ">
          <Card
            sx={{
              boxShadow: "none",
            }}
            className="w-full  p-6 bg-white "
          >
            <CardContent>
              <Typography variant="h4" className="mb-4 font-bold text-gray-900">
                Privacy Policy
              </Typography>
              <Typography variant="body1" className="mb-2 text-gray-700">
                Last updated: June 6, 2024
              </Typography>

              <section className="mb-8 mt-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  1. Introduction
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  Welcome to Muissa Consulting. This Privacy Policy outlines how
                  we handle your personal data and protect your privacy when you
                  use our website and services.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  2. Information We Collect
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  We collect various types of information in connection with the
                  services we provide, including:
                </Typography>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>
                    Personal identification information (name, email address,
                    phone number, etc.)
                  </li>
                  <li>Usage data (pages visited, time spent on pages, etc.)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  3. How We Use Your Information
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  We use the information we collect in various ways, including
                  to:
                </Typography>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>
                    Provide, operate, and maintain our website and services
                  </li>
                  <li>
                    Improve, personalize, and expand our website and services
                  </li>
                  <li>
                    Understand and analyze how you use our website and services
                  </li>
                  <li>
                    Develop new products, services, features, and functionality
                  </li>
                  <li>
                    Communicate with you, either directly or through one of our
                    partners
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  4. Information Sharing and Disclosure
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  We do not share your personal information with companies,
                  organizations, or individuals outside of Muissa Consulting
                  except in the following cases:
                </Typography>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>With your consent</li>
                  <li>
                    For external processing (e.g., with trusted service
                    providers)
                  </li>
                  <li>
                    For legal reasons (e.g., compliance with legal obligations)
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  5. Security
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  We prioritize the security of your personal data and implement
                  appropriate technical and organizational measures to protect
                  it.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  6. Your Data Protection Rights
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </Typography>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>The right to access</li>
                  <li>The right to rectification</li>
                  <li>The right to erasure</li>
                  <li>The right to restrict processing</li>
                  <li>The right to object to processing</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  7. Changes to This Privacy Policy
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  8. Contact Us
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  If you have any questions about this Privacy Policy, please
                  contact us at info@muissaconsulting.com.
                </Typography>
              </section>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
}
