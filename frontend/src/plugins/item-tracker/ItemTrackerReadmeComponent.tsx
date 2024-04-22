import { Box, Header, SpaceBetween } from "@cloudscape-design/components";
export function Readme() {
  return (
    <SpaceBetween size="l">
      <Header variant="h1">Work Item Tracker</Header>
      <Box variant="p">
        A sample application that shows you how to track work items served by a
        REST endpoint.
      </Box>
      <br></br>
    </SpaceBetween>
  );
}
