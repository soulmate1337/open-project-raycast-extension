// src/create-ticket.tsx - Vereinfachte Version für Windows Testing
import {
  Action,
  ActionPanel,
  Form,
  showToast,
  Toast,
  useNavigation,
} from "@raycast/api";
import { useState } from "react";

interface FormValues {
  subject: string;
  description: string;
}

export default function CreateTicket() {
  const { pop } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(values: FormValues) {
    try {
      setIsLoading(true);
      
      // Erstmal nur ein Test-Toast zeigen
      await showToast({
        style: Toast.Style.Success,
        title: "Test erfolgreich!",
        message: `Ticket: ${values.subject}`,
      });

      // Später hier die echte API Integration
      console.log("Would create ticket:", values);
      
      pop();
    } catch (err) {
      showToast({
        style: Toast.Style.Failure,
        title: "Error",
        message: err instanceof Error ? err.message : "Unknown error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form
      isLoading={isLoading}
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} title="Create Ticket" />
        </ActionPanel>
      }
    >
      <Form.TextField
        id="subject"
        title="Subject"
        placeholder="Enter ticket subject"
      />

      <Form.TextArea
        id="description"
        title="Description"
        placeholder="Enter ticket description (optional)"
      />
    </Form>
  );
}