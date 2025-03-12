"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function HelpCenter() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>How do I add a new restaurant?</li>
            <li>How can I process refunds?</li>
            <li>What do I do if a delivery is late?</li>
          </ul>
          <Button className="mt-4">View All FAQs</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{`If you can't find the answer you're looking for, our support team is here to help.`}</p>
          <Button className="mt-4">Contact Support</Button>
        </CardContent>
      </Card>
    </div>
  );
}
