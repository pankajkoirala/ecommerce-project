import React, { useState } from "react";
import { Button, Collapse, CardBody, Card } from "reactstrap";

let FeedbackComp = (props) => {
  let feedback = props.response;
  console.log(feedback);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = (ID) => {
    if (feedback.map((arg) => arg._id === ID)) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      {feedback.map((arg, index) => {
        return (
          <div key={index}>
            <Button
              color="primary"
              onClick={() => {
                toggle(arg._id);
              }}
              style={{ marginBottom: "1rem" }}
            >
              {(arg.firstName, arg.lastName)}
            </Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      })}
    </div>
  );
};
export default FeedbackComp;
