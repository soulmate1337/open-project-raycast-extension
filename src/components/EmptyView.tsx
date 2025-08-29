import { ActionPanel, Action, List } from "@raycast/api";

interface EmptyViewProps {
  title: string;
  description: string;
  icon?: string;
}

export function EmptyView({ title, description, icon = "📋" }: EmptyViewProps) {
  return (
    <List.EmptyView
      icon={icon}
      title={title}
      description={description}
      actions={
        <ActionPanel>
          <Action.OpenInBrowser title="Visit OpenProject Website" url="https://www.openproject.org" />
          <Action.OpenInBrowser title="OpenProject Documentation" url="https://www.openproject.org/docs/" />
        </ActionPanel>
      }
    />
  );
}
