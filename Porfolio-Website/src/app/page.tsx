"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaRobot, FaCode, FaComments, FaCheckSquare } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { MdInsights } from "react-icons/md";
import FAQs from "@/components/FAQs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import FAQS from "../../public/images/FAQS.svg";
import "./home.css"; 

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-section">
          <div className="hero-text">
            <h3>{`I'm Hamza`}</h3>
            <h1>Data Analyst & Web Developer</h1>
            <p>{`I am a skilled Data Analyst, Web Developer, and Power BI Developer, specializing in transforming data into insights and building user-friendly web solutions to help you achieve your goals.`}</p>
            <div>
              <Link href={"/Portfolio/All"}>
                <Button>View my Projects</Button>
              </Link>
            </div>
          </div>
          <Image className="hero-image" src={"/images/2.png"} height={300} width={300} alt={""} />
        </section>

        

        <section className="why-choose-me-section">
          <div className="why-container">
            <h2>Why Choose Me for Your Projects</h2>
            <p>{`I offer a wide range of services, including data science, data analysis, web development, and Power BI dashboard creation. No matter what your project needs, I have the skills to help you succeed.`}</p>
            <div className="service-cards">
              <div className="service-card">
                <MdInsights className="icon" />
                <h3>Insightful Data Analysis</h3>
                <p>{`With my data analysis expertise, I can uncover valuable insights from your data, helping you understand trends, customer behavior, and operational efficiency for informed decision-making.`}</p>
              </div>
              <div className="service-card">
                <FaCode className="icon" />
                <h3>Machine Learning Expertise</h3>
                <p>{`I specialize in developing machine learning models that predict outcomes and optimize processes, creating tailored solutions for forecasting sales or improving customer experiences.`}</p>
              </div>
              <div className="service-card">
                <FaRobot className="icon" />
                <h3>Engaging Data Visualization</h3>
                <p>{`I create clear and interactive visualizations that make complex data easy to understand, using tools like Power BI to help you track key metrics and tell a compelling data story.`}</p>
              </div>
              <div className="service-card">
                <FaCheckSquare className="icon" />
                <h3>Custom Web Development</h3>
                <p>{`I build websites that are visually appealing, functional, and user-friendly, whether you need a simple site or a complex web application tailored to your needs.`}</p>
              </div>
              <div className="service-card">
                <FaComments className="icon" />
                <h3>Strong Communication</h3>
                <p>{`I prioritize open communication throughout our collaboration, ensuring you are always updated on project progress and available to answer any questions.`}</p>
              </div>
              <div className="service-card">
                <RiDashboard2Line className="icon" />
                <h3>Commitment to Quality</h3>
                <p>{`I am dedicated to delivering high-quality results, putting in the effort needed to ensure your project meets the highest standards.`}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stack-carousel-section">
        </section>

        <section className="plans-section">
          <h1>Choose Your Services Plan</h1>
          <p>{`Select the perfect plan tailored to your needs, whether you're looking for expert data analysis, cutting-edge data science solutions, or innovative web development services.`}</p>
          <div className="plans">
            <Card className="plan-card">
              <CardHeader>
                <CardTitle>Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <h4>Starts from $14.99</h4>
                <ul>
                  <li>Data Cleaning</li>
                  <li>Data Featuring</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Data Modeling</li>
                  <li>Data Visualization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="plan-card featured">
              <CardHeader>
                <CardTitle>Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <h4>Starts from $14.99</h4>
                <ul>
                  <li>Data Cleaning</li>
                  <li>Data Featuring</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Data Modeling</li>
                  <li>Data Visualization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="plan-card">
              <CardHeader>
                <CardTitle>Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <h4>Starts from $14.99</h4>
                <ul>
                  <li>Data Cleaning</li>
                  <li>Data Featuring</li>
                  <li>Exploratory Data Analysis</li>
                  <li>Data Modeling</li>
                  <li>Data Visualization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="faqs-section">
          <FAQs />
          <div className="faqs-image">
            <Image src={FAQS} alt={""} width={500} height={500} />
          </div>
        </section>
      </main>
    </>
  );
}
