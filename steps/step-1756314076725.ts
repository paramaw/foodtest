/**
 * "Wake up" step logic implementation for RoboHen workflow.
 * Processes submitted form data: reads input from port 'out-data-1756314076725'
 * and sets it as the output for the same port.
 * All IO is handled via RoboHen globals.
 */
async function run() {
  console.log("Wake up step: start processing form submission.");

  try {
    // Get the input data from the workflow input port (from form submission)
    const inputValue = await RoboHen.getInputData("out-data-1756314076725");

    // Set the output at the corresponding output port
    await RoboHen.setOutputData(
      { executionId: "_", itemId: await RoboHen.getInputItemId() ?? "_" },
      "out-data-1756314076725",
      inputValue
    );

    console.log("Wake up step: completed processing form submission.");
  } catch (err) {
    console.error("Wake up step: error processing form submission:", err);
    throw err;
  }
}

await run();