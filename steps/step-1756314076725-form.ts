/**
 * Generates form schema, ui schema, and initial values for the "Wake up" step.
 * Exposes these as a JSON object via RoboHen.setReturnValue.
 * The form includes fields based on the merged input and output ports of the step.
 */
async function run() {
  try {
    console.log("Generating form schema for 'Wake up' step...");

    const formSchema = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Wake up",
      description: "Wake up now",
      type: "object",
      required: ["out-data-1756314076725"],
      properties: {
        "out-data-1756314076725": {
          type: "string",
          title: "Data"
        }
      }
    };

    const uiSchema = {
      "out-data-1756314076725": {}
    };

    const initialValue = {};

    await RoboHen.setReturnValue({
      formSchema,
      uiSchema,
      initialValue
    });

    console.log("Form schema generation completed.");
  } catch (err) {
    console.error("Error generating form schema:", err);
    throw err;
  }
}

await run();