import { Children } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const Template = (props) => {
  return (
    <div>
      <h3 className="steps">{props.step}</h3>
      <Card className="card">
        <CardHeader className="title">{props.title}</CardHeader>
        <CardBody className="templateBody">{props.children}</CardBody>
      </Card>
    </div>
  );
};

export default Template;
