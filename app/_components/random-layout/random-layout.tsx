import React, { useState } from "react";
import {
  Button,
  Heading,
  Paragraph,
  Card,
  CardBlock,
  Fieldset,
  Field,
  Label,
  Input,
  Alert,
  Radio,
  Checkbox,
  ValidationMessage,
} from "@digdir/designsystemet-react";

const COMPONENTS = ["Button", "Heading", "Paragraph"];
const LAYOUTS = ["row", "column"];
const COLORS = ["primary", "extra1", "extra2"];
const COLOR_SCHEMES = ["dark", "light"];
const INPUT_TYPES = ["text", "checkbox", "radio"];

const randomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const RandomComponent = () => {
  const [key, setKey] = useState(0); // force re-render on button click

  const generateComponent = () => {
    const type = randomItem([...COMPONENTS, "Alert"]); // allow Alert, but not in Cards

    switch (type) {
      case "Button":
        return <Button>Click me</Button>;
      case "Heading":
        return <Heading>Random Heading</Heading>;
      case "Paragraph":
        return <Paragraph>This is a random paragraph.</Paragraph>;
      case "Alert":
        return <Alert>Something happened!</Alert>;
      default:
        return null;
    }
  };

  const generateCardBlockContent = () => {
    const type = randomItem(["Heading", "Paragraph", "Fieldset"]);

    switch (type) {
      case "Heading":
        return <Heading>Card Block Heading</Heading>;
      case "Paragraph":
        return <Paragraph>Card Block Paragraph</Paragraph>;
      case "Fieldset":
        return generateFieldset();
      default:
        return null;
    }
  };

  const generateCard = () => {
    const numBlocks = randomNumber(1, 3); // 1-3 CardBlocks

    return (
      <Card>
        {[...Array(numBlocks)].map((_, index) => (
          <CardBlock key={index}>{generateCardBlockContent()}</CardBlock>
        ))}
      </Card>
    );
  };

  const generateFieldset = () => {
    const numFields = randomNumber(1, 3);
    const inputType = randomItem(INPUT_TYPES);
    const isRadioGroup = inputType === "radio";
    const isCheckboxGroup = inputType === "checkbox";
    const name = `group-${key}-${randomNumber(0, 9999)}`;

    return (
      <Fieldset>
        <Fieldset.Legend>Random Fieldset</Fieldset.Legend>
        <Fieldset.Description>Generated form elements</Fieldset.Description>

        {isRadioGroup ? (
          [...Array(randomNumber(2, 4))].map((_, optionIndex) => (
            <Radio
              key={optionIndex}
              ref={() => {}}
              label={`Option ${optionIndex + 1}`}
              name={name}
              value={`option-${optionIndex}`}
              onChange={() => {}}
            />
          ))
        ) : isCheckboxGroup ? (
          [...Array(randomNumber(2, 4))].map((_, optionIndex) => (
            <Checkbox
              key={optionIndex}
              ref={() => {}}
              label={`Checkbox ${optionIndex + 1}`}
              name={name}
              value={`checkbox-${optionIndex}`}
              onChange={() => {}}
            />
          ))
        ) : (
          [...Array(numFields)].map((_, index) => (
            <Field key={index}>
              <Label htmlFor={`input-${key}-${index}`}>Random Label {index + 1}</Label>
              <Input type="text" id={`input-${key}-${index}`} />
            </Field>
          ))
        )}

        <ValidationMessage hidden id={`validation-${key}`} />
      </Fieldset>
    );
  };

  const generateBlock = () => {
    const layout = randomItem(LAYOUTS);
    const containerStyle = {
      display: "flex",
      flexDirection: layout,
      gap: "var(--ds-size-4)", // fixed spacing
    };

    return (
      <div style={containerStyle}>
        {Math.random() > 0.5 && generateComponent()} {/* Alert possible here */}
        {Math.random() > 0.3 && generateCard()} {/* Alert never inside */}
        {Math.random() > 0.3 && generateFieldset()}
        {Math.random() > 0.5 && generateComponent()} {/* Alert possible here */}
      </div>
    );
  };

  return (
    <div key={key}>
      <Button
        style={{ marginBottom: "var(--ds-size-2)" }}
        onClick={() => setKey(key + 1)}
      >
        Regenerate
      </Button>
      <div className="random" data-color-scheme={randomItem(COLOR_SCHEMES)}>
        <div data-color={randomItem(COLORS)}>{generateBlock()}</div>
      </div>
    </div>
  );
};

export default RandomComponent;
