import React from "react";
import Container from "@/components/ui/HomePage/Container/Container";
import { Card, CardContent, Typography } from "@mui/material";

export default function TermsConditionsPage() {
  return (
    <>
      <div className="serviceDetailsWrap">
        <div className="aboutContent">
          <Typography variant="h4">Terms & Conditions</Typography>
        </div>
      </div>
      <Container>
        <div className="flex flex-col items-center py-10 ">
          <Card
            className="w-full  p-6 bg-white "
            sx={{
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Typography variant="h4" className="mb-4 font-bold text-gray-900">
                Terms & Conditions
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
                  Welcome to Muissa Consulting. These terms and conditions
                  outline the rules and regulations for the use of our website
                  and services.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  2. Intellectual Property Rights
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  Other than the content you own, under these terms, Muissa
                  Consulting and/or its licensors own all the intellectual
                  property rights and materials contained in this website.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  3. Restrictions
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  You are specifically restricted from all of the following:
                </Typography>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>
                    Publishing any website material in any other media without
                    permission.
                  </li>
                  <li>
                    Selling, sublicensing, and/or otherwise commercializing any
                    website material.
                  </li>
                  <li>
                    Publicly performing and/or showing any website material.
                  </li>
                  <li>
                    Using this website in any way that is or may be damaging to
                    this website.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  4. Your Privacy
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  Please read our Privacy Policy.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  5. Limitation of Liability
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  In no event shall Muissa Consulting, nor any of its officers,
                  directors, and employees, be held liable for anything arising
                  out of or in any way connected with your use of this website.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  6. Changes to Terms
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  Muissa Consulting is permitted to revise these terms at any
                  time as it sees fit, and by using this website you are
                  expected to review these terms on a regular basis.
                </Typography>
              </section>

              <section className="mb-8">
                <Typography
                  variant="h6"
                  className="mb-2 font-semibold text-gray-800"
                >
                  7. Governing Law & Jurisdiction
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  These terms will be governed by and interpreted in accordance
                  with the laws of the State of [State], and you submit to the
                  non-exclusive jurisdiction of the state and federal courts
                  located in [State] for the resolution of any disputes.
                </Typography>
              </section>
            </CardContent>
          </Card>
        </div>
      </Container>
    </>
  );
}
