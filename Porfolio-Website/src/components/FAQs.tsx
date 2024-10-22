import React from 'react';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqs } from '@/app/data';
import './componentsStyles/faqs.css'; 

const FAQs = () => {
  return (
    <div className="container">
      <Card className="card">
        <CardContent className="card-content">
          <h2 className="title">Frequently Asked Questions</h2>
          <Accordion className="accordion" type="multiple">
            {
              faqs.map((ele: { id: number, question: string, answer: string }, index: number) => (
                <AccordionItem value={`item ${index}`} key={ele.id}>
                  <AccordionTrigger className="accordion-trigger">
                    {ele.question}
                  </AccordionTrigger>
                  <AccordionContent>{ele.answer}</AccordionContent>
                </AccordionItem>
              ))
            }
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

export default FAQs;
