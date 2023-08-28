import React from "react";
import { Text } from "../../atoms";

export const ItemDes = ({className}) =>{
    return(
        <div className={className} > 
        <div> 
        <Text type="bigText" className="flex descmargin  flexJustify2" > Item Description</Text>
        <div className="desc">
            <Text type="colText"  > The second secret to a limitless life is your motivation. Jim outlines three
key elements to motivation. First, your purpose. The reason why matters. I
want to age well and am committed to lifting weights and getting stronger
even though it is not my favorite thing to do. The purpose supersedes the
discomfort.
The second key is the ability to do what you want. This requires energy,
and energy requires something called energy management. The science of
human performance is critical to achieving your purpose—eating whole
unprocessed food, exercise, stress management, quality sleep, and skills at
communication and building healthy relationships (and eliminating toxic
ones). And lastly the tasks must be bite-size, small steps that lead to
success. Floss one tooth, read one page of a book, do one push-up, meditat </Text>
              </div>
              </div>
        

        </div>
    );
};