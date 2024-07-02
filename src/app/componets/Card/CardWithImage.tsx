/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
export function CardWithImage(props: any) {
  return (
    <Card className="w-full md:w-[350px] ">
      <CardHeader>
        {/* <CardTitle>Create project</CardTitle>
         */}
        <img src={props && props?.value?.image} alt="" />
      </CardHeader>
      <CardContent>
        <CardTitle>{props && props?.value?.title}</CardTitle>
        <CardDescription className="pt-2">
          {props && props?.value?.description}
        </CardDescription>
      </CardContent>
      {/* <CardFooter className="flex justify-between"></CardFooter> */}
    </Card>
  );
}
