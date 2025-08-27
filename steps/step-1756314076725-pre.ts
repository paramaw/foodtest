/**
 * Notifies the specified actor to complete the 'Wake up' form for workflow progress.
 * Retrieves the form URL using RoboHen.getFormURL() and sends a clear, actionable message
 * to the actor with ID 'person-1756314273942', informing them to fill out the form and
 * highlighting its importance for the workflow to proceed.
 * All operations are logged, and errors are caught & rethrown.
 */
async function run() {
  console.log('[Wake up notify] Start');

  try {
    const actorId = 'person-1756314273942';
    const formTitle = 'Wake up';

    // Retrieve the form URL for the current input item
    const url = await RoboHen.getFormURL();

    const subject = `Action Required: Complete the '${formTitle}' Form`;
    const message =
      `Hello,\n\n` +
      `To initiate the next step of the workflow (“${formTitle}”), please complete the following form:\n\n` +
      `${url}\n\n` +
      `Submitting this form is necessary to proceed. Kindly complete it at your earliest convenience.\n\n` +
      `Thank you.`;

    await RoboHen.sendMessageToPersonActor(actorId, subject, message);

    console.log('[Wake up notify] Message sent to actor:', actorId);
  } catch (err) {
    console.log('[Wake up notify] Error:', err);
    throw err;
  }

  console.log('[Wake up notify] Complete');
}

await run();