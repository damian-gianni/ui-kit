import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Button, Provider, Typography, Grid, Container, Modal } from "../src";

storiesOf("Button", module)
  .addDecorator(withInfo) // At your stories directly.
  .add("Contained Buttons", () => (
    <Provider>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="contained"
      >
        Default
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="contained"
        color="primary"
      >
        Primary
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="contained"
        color="secondary"
      >
        Secondary
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="contained"
        color="secondary"
        disabled
      >
        Disabled
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="contained"
        href="#contained-buttons"
      >
        Link
      </Button>
    </Provider>
  ))
  .add("Text Buttons", () => (
    <Provider>
      <Button>Default</Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        color="primary"
      >
        Primary
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        color="secondary"
      >
        Secondary
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        disabled
      >
        Disabled
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        href="#text-buttons"
      >
        Link
      </Button>
    </Provider>
  ))
  .add("Outlined Buttons", () => (
    <Provider>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="outlined"
      >
        Default
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="outlined"
        color="primary"
      >
        Primary
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="outlined"
        color="secondary"
      >
        Secondary
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="outlined"
        disabled
      >
        Disabled
      </Button>
      <Button
        onClick={action("Button clicked")}
        onMouseOver={action("Hovered")}
        variant="outlined"
        href="#outlined-buttons"
      >
        Link
      </Button>
    </Provider>
  ))
  .add("Button  Size", () => (
    <Provider>
      <div>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          size="small"
        >
          Small
        </Button>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          size="medium"
        >
          Medium
        </Button>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          size="large"
        >
          Large
        </Button>
      </div>
      <div>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          variant="outlined"
          size="small"
          color="primary"
        >
          Small
        </Button>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          variant="outlined"
          size="medium"
          color="primary"
        >
          Medium
        </Button>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          variant="outlined"
          size="large"
          color="primary"
        >
          Large
        </Button>
      </div>
      <div>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          variant="contained"
          size="small"
          color="primary"
        >
          Small
        </Button>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          variant="contained"
          size="medium"
          color="primary"
        >
          Medium
        </Button>
        <Button
          onClick={action("Button clicked")}
          onMouseOver={action("Hovered")}
          variant="contained"
          size="large"
          color="primary"
        >
          Large
        </Button>
      </div>
    </Provider>
  ));
storiesOf("Typography", module)
  .addDecorator(withInfo) // At your stories directly.
  .add("Regular font", () => (
    <Provider>
      <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Provider>
  ))
  .add("Bold font", () => (
    <Provider>
      <Typography variant="h1" component="h2" className={"bold"} gutterBottom>
        h1. Heading
      </Typography>
      <Typography variant="h2" className={"bold"} gutterBottom>
        h2. Heading
      </Typography>
      <Typography variant="h3" className={"bold"} gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" className={"bold"} gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" className={"bold"} gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" className={"bold"} gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" className={"bold"} gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" className={"bold"} gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" className={"bold"} gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" className={"bold"} gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        variant="button"
        display="block"
        className={"bold"}
        gutterBottom
      >
        button text
      </Typography>
      <Typography
        variant="caption"
        display="block"
        className={"bold"}
        gutterBottom
      >
        caption text
      </Typography>
      <Typography
        variant="overline"
        display="block"
        className={"bold"}
        gutterBottom
      >
        overline text
      </Typography>
    </Provider>
  ));

storiesOf("Grid", module)
  .addDecorator(withInfo) // At your stories directly.
  .add("Basic Grid", () => (
    <Provider>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <span>xs=12</span>
        </Grid>
        <Grid item xs={6}>
          <span>xs=6</span>
        </Grid>
        <Grid item xs={6}>
          <span>xs=6</span>
        </Grid>
        <Grid item xs={3}>
          <span>xs=3</span>
        </Grid>
        <Grid item xs={3}>
          <span>xs=3</span>
        </Grid>
        <Grid item xs={3}>
          <span>xs=3</span>
        </Grid>
        <Grid item xs={3}>
          <span>xs=3</span>
        </Grid>
      </Grid>
    </Provider>
  ));

storiesOf("Container", module)
  .addDecorator(withInfo) // At your stories directly.
  .add("Fluid", () => (
    <Provider>
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </Provider>
  ))
  .add("Fixed", () => (
    <Provider>
      <Container fixed>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
    </Provider>
  ));

storiesOf("Modal", module)
  .addDecorator(withInfo) // At your stories directly.
  .add("Open Modal", () => (
    <Provider>
      <Modal open={true} onClose={action("Close modal")}>
        <Typography component="div">Custom Content modal</Typography>
      </Modal>
    </Provider>
  ));
